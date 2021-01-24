using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zakariev.Models
{
    public class ProductsContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<ProductСharacteristic> ProductСharacteristics { get; set; }
        public DbSet<OrderProduct> OrderProducts { get; set; }
        public ProductsContext(DbContextOptions<ProductsContext> options)
            : base(options)
        {
            // пересоздадим базу данных
            //Database.EnsureDeleted();
            Database.EnsureCreated();
        }
    }
}
