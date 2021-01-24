using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zakariev.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagesUrl { get; set; }
        public string ShortInfo { get; set; }
        public int Price { get; set; }

        public List<ProductСharacteristic> ProductСharacteristics { get; set; }
        public Product()
        {
            ProductСharacteristics = new List<ProductСharacteristic>();
        }
    }
}
