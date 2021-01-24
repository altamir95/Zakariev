using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zakariev.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string PhoneNum { get; set; }

        public List<OrderProduct> OrderProducts { get; set; }
        public Order()
        {
            OrderProducts = new List<OrderProduct>();
        }
    }
}
