using Zakariev.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zakariev.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductСharacteristicController : ControllerBase
    {
        ProductsContext db;

        public ProductСharacteristicController(ProductsContext context)
        {
            db = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductСharacteristic>>> Get()
        {
            return await db.ProductСharacteristics.ToListAsync();
        }

        // GET api/users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductСharacteristic>> Get(int id)
        {
            ProductСharacteristic сharacteristic = await db.ProductСharacteristics.FirstOrDefaultAsync(x => x.Id == id);
            if (сharacteristic == null)
                return NotFound();
            return new ObjectResult(сharacteristic);
        }

        // POST api/users
        [HttpPost]
        public async Task<ActionResult<ProductСharacteristic>> Post(ProductСharacteristic сharacteristic)
        {
            if (сharacteristic == null)
            {
                return BadRequest();
            }

            db.ProductСharacteristics.Add(сharacteristic);
            await db.SaveChangesAsync();
            return Ok(сharacteristic);
        }

        // PUT api/users/
        [HttpPut]
        public async Task<ActionResult<ProductСharacteristic>> Put(ProductСharacteristic сharacteristic)
        {
            if (сharacteristic == null)
            {
                return BadRequest();
            }
            if (!db.ProductСharacteristics.Any(x => x.Id == сharacteristic.Id))
            {
                return NotFound();
            }

            db.Update(сharacteristic);
            await db.SaveChangesAsync();
            return Ok(сharacteristic);
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProductСharacteristic>> Delete(int id)
        {
            ProductСharacteristic сharacteristic = db.ProductСharacteristics.FirstOrDefault(x => x.Id == id);
            if (сharacteristic == null)
            {
                return NotFound();
            }
            db.ProductСharacteristics.Remove(сharacteristic);
            await db.SaveChangesAsync();
            return Ok(сharacteristic);
        }
    }
}
