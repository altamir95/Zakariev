using Zakariev.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Zakariev.ViewModels
{
    public class ProductsPageModel
    {
        public List<Product> Products { get; set; }
        public int CountProducts { get; set; }
    }
}
