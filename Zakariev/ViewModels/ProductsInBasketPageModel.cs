using Zakariev.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zakariev.ViewModels
{
    public class ProductsInBasketPageModel
    {
        public List<ProductsWithQuantity> ProductsWithQuantities { get; set; }
        public int AmountToPay { get; set; }
    }
    public class ProductsWithQuantity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ImagesUrl { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
    }
}
