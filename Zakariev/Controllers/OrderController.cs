using Zakariev.Models;
using Zakariev.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Zakariev.ViewModels.OrdersPageModel;

namespace Zakariev.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        ProductsContext db;
        public OrderController(ProductsContext context)
        {
            db = context;
        }
        // GET api/order
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<OrdersPageModel>> Get()
        {

            List<OrderInfo> orderInfos = new List<OrderInfo>();

            List<Order> orders = await db.Orders.Include(x => x.OrderProducts).ToListAsync();
            orders.ForEach(u => { u.OrderProducts.ForEach(o => { o.Product = db.Products.FirstOrDefault(x => x.Id == o.ProductId); }); });

            orders.ForEach(u => { OrderInfo orderInfo = new OrderInfo() { PhoneNum = u.PhoneNum, Id = u.Id }; orderInfos.Add(orderInfo); u.OrderProducts.ForEach(o => { orderInfo.ProductInfos.Add(new ProductInfo() { ProductId = o.ProductId, NameProduct = o.Product.Name }); }); });

            OrdersPageModel orderPageModel = new OrdersPageModel() { OrderInfos = orderInfos, CountProducts = orders.Count };

            return orderPageModel;
        }
        // GET api/order/page=❤&count=❤
        [Authorize]
        [HttpGet("page={page=1}&count={count=5}")]
        public async Task<ActionResult<Order>> Get(int page, int count)
        {
            List<Order> listOrders = await db.Orders.Include(x => x.OrderProducts).ToListAsync();

            int objectFromWhichPageStarts = (page - 1) * count;
            int objectFromWhichPageEnds = objectFromWhichPageStarts + count;

            List<OrderInfo> orderInfos = new List<OrderInfo>();

            List<Order> orders = listOrders.Where((item, index) => index >= objectFromWhichPageStarts && index < objectFromWhichPageEnds).ToList();
            orders.ForEach(u => { u.OrderProducts.ForEach(o => { o.Product = db.Products.FirstOrDefault(x => x.Id == o.ProductId); }); });

            orders.ForEach(u => { OrderInfo orderInfo = new OrderInfo() { PhoneNum = u.PhoneNum, Id = u.Id }; orderInfos.Add(orderInfo); u.OrderProducts.ForEach(o => { orderInfo.ProductInfos.Add(new ProductInfo() { ProductId = o.ProductId, NameProduct = o.Product.Name }); }); });

            OrdersPageModel orderPageModel = new OrdersPageModel() { OrderInfos = orderInfos, CountProducts = listOrders.Count };


            return new ObjectResult(orderPageModel);
        }
        // POST api/order
        [HttpPost]
        public async Task<ActionResult<Order>> Post(Order order)
        {
            if (order == null)
            {
                return BadRequest();
            }

            db.Orders.Add(order);
            await db.SaveChangesAsync();
            return Ok(order);
        }
    }
}
