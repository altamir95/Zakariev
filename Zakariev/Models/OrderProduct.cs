using Zakariev.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zakariev.Models
{
    public class OrderProduct
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }

        public static implicit operator OrderProduct(OrdersPageModel v)
        {
            throw new NotImplementedException();
        }
    }
}
