using Zakariev.Models;
using Zakariev.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace Zakariev.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        ProductsContext db;
        public ProductsController(ProductsContext context)
        {
            db = context;
            if (!db.Products.Any())
            {
                db.Products.AddAsync(new Product
                {
                    Name = "Элексир памяти",
                    ShortInfo = "Антисептическое, антимикробное, антипаразитарное, антигрибковое, детоксикационное",
                    Price = 1250,
                    ProductСharacteristics = new List<ProductСharacteristic>() { new ProductСharacteristic() { Main = "Характиристики",Minor = "ВЕС: 460г.;ОБЪЕМ: 64х64;СРОК ГОДНОСТИ: 6 месяцев"}, new ProductСharacteristic() { Main = "Состав",Minor = "имбирь;черный тмин;ладан;изюм;грецкий орех;финики аджва;корица;мёд"}, new ProductСharacteristic() { Main = "Действие",Minor = "Антисептическое, антимикробное, антипаразитарное, антигрибковое, детоксикационное.;Повышает работоспособность, умственную деятельность, предупреждает депрессии, снимает напряжение нервной системы,улучшает память, повышает выносливость при умственной и физической нагрузке, улучшает иммунитет, работу ЖКТ, зрение, состояние кожи, волос, костей"}, new ProductСharacteristic() { Main = "Противопоказание",Minor = "Беременность,детский возраст до 3-х лет, людям с трансплантированными органами и индивидуальная непереносимость."}, new ProductСharacteristic() { Main = "Способ применения",Minor = "По одной чайной ложке утром и вечером за 30 мин до приёма пищи.;Детям половину чайной ложки один раз в день"}, new ProductСharacteristic() { Main = "Условия хранения",Minor = " хранить в сухом прохладном месте при температуре от 2°С до 15°С"}
        }
                });
                db.Products.AddAsync(new Product
                {
                    Name = "Мужское зелье",
                    ImagesUrl = "",
                    ShortInfo = "Улучшает и восстанавливает мочеполовую систему у мужчин",
                    Price = 1100,
                    ProductСharacteristics = new List<ProductСharacteristic>() { new ProductСharacteristic() { Main= "Характиристики", Minor= "ВЕС: 460г.;ОБЪЕМ: 64х64;СРОК ГОДНОСТИ: 6 месяцев" }, new ProductСharacteristic() { Main = "Состав", Minor = "корень ятрыщника мужского;мед;семена редиски;семена тыквы;черный тмин;грецкий орех;корица;имбирь"}, new ProductСharacteristic() { Main = "Действие",Minor = "Улучшает и восстанавливает мочеполовую систему у мужчин ( при простатите, аденоме предстательной железы, усиливает либидо, повышает потенцию ,тестостерон и многое другое ).;Является природным энергетиком, повышает физическую и умственную работоспособность . Иммуномодулятор, адаптаген ."}, new ProductСharacteristic() { Main = "Противопоказание",Minor = "С осторожностью гипертоникам , индивидуальная непереносимость , Полный курс составляет три банки"}, new ProductСharacteristic() { Main = "Способ применения",Minor = "По 1 чай ложки 2-3 раза в день , за 30 мин до приема пищи.;Во время приема  данного средства желательно употреблять молоко и курдюк,  при отсутствии их противопоказаний."}, new ProductСharacteristic() { Main = "Условия хранения",Minor = "хранить в сухом прохладном месте при температуре от 2°С до 15°С"}
        }
                });
                db.SaveChanges();
            }
        }
        // GET api/products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            return await db.Products.Include(x => x.ProductСharacteristics).ToListAsync();
        }
        // GET /api/products/basketproducts?array=❤&array=❤&.....
        [HttpGet("basketproducts")]
        public async Task<ActionResult<ProductsInBasketPageModel>> Get([FromQuery] int[] array)
        {
            ProductsInBasketPageModel productsInBasketPageModel = new ProductsInBasketPageModel() { ProductsWithQuantities = new List<ProductsWithQuantity>(), AmountToPay = 0 };
            foreach (int index in array)
            {
                if (productsInBasketPageModel.ProductsWithQuantities.FirstOrDefault(u => u.Id == index) == null)
                {
                    Product product = await db.Products.FirstOrDefaultAsync(u => u.Id == index);
                    productsInBasketPageModel.ProductsWithQuantities.Add(new ProductsWithQuantity() { Id = product.Id, ImagesUrl = product.ImagesUrl, Name = product.Name, Price = product.Price, Quantity = 1 });
                }
                else
                {
                    productsInBasketPageModel.ProductsWithQuantities.ForEach(u => { if (u.Id == index) { u.Quantity = u.Quantity + 1; } });
                }
                productsInBasketPageModel.ProductsWithQuantities.ForEach(u => { productsInBasketPageModel.AmountToPay = productsInBasketPageModel.AmountToPay + (u.Price * u.Quantity); });
            }

            return productsInBasketPageModel;
        }
        // GET api/products/page=❤&count=❤
        [HttpGet("page={page=1}&count={count=5}")]
        public async Task<ActionResult<ProductsPageModel>> Get(int page, int count)
        {
            List<Product> listProducts = await db.Products.ToListAsync();

            int objectFromWhichPageStarts = (page - 1) * count;
            int objectFromWhichPageEnds = objectFromWhichPageStarts + count;

            ProductsPageModel productsPageModel = new ProductsPageModel()
            {
                Products = listProducts.Where((item, index) => index >= objectFromWhichPageStarts && index < objectFromWhichPageEnds).ToList(),
                CountProducts = listProducts.Count
            };
            return new ObjectResult(productsPageModel);
        }
        // GET api/users/❤
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> Get(int id)
        {
            Product product = await db.Products.Include(x => x.ProductСharacteristics).FirstOrDefaultAsync(x => x.Id == id);
            if (product == null)
                return NotFound();
            return new ObjectResult(product);
        }
        // POST api/users
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Product>> Post(Product product)
        {
            if (product == null)
            {
                return BadRequest();
            }

            db.Products.Add(product);
            await db.SaveChangesAsync();
            return Ok(product);
        }

        // PUT api/users/
        [Authorize]
        [HttpPut]
        public async Task<ActionResult<Product>> Put(Product product)
        {
            if (product == null)
            {
                return BadRequest();
            }
            if (!db.Products.Any(x => x.Id == product.Id))
            {
                return NotFound();
            }

            db.Update(product);
            await db.SaveChangesAsync();
            return Ok(product);
        }

        // DELETE api/users/❤
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> Delete(int id)
        {
            Product product = db.Products.FirstOrDefault(x => x.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            db.Products.Remove(product);
            await db.SaveChangesAsync();
            return Ok(product);
        }
    }
}
