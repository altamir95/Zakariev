using Zakariev.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zakariev.ViewModels
{
    public class OrdersPageModel
    {
        public int CountProducts { get; set; }
        public List<OrderInfo> OrderInfos { get; set; }
        public OrdersPageModel()
        {
            OrderInfos = new List<OrderInfo>();
        }

        public class OrderInfo
        {
            public int Id { get; set; }
            public string PhoneNum { get; set; }
            public List<ProductInfo> ProductInfos { get; set; }
            public OrderInfo()
            {
                ProductInfos = new List<ProductInfo>();
            }
        }
        public class ProductInfo
        {
            public int ProductId { get; set; }
            public string NameProduct { get; set; }
        }
    }
}
