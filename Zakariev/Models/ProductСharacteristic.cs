using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zakariev.Models
{
    public class ProductСharacteristic
    {
        public int Id { get; set; }
        public string Main { get; set; }
        public string Minor { get; set; }


        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
