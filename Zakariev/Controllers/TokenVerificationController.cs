using Zakariev.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace Zakariev.Controllers
{
        [ApiController]
        [Route("api/[controller]")]
        public class TokenVerificationController : ControllerBase
        {
            ProductsContext db;
            public TokenVerificationController(ProductsContext context)
            {
                db = context;
            }
        // GET api/TokenVerification
        [Authorize]
        [HttpGet]
            public  string Get()
            {
            return "token is not expired";
            }
            
        }
    
}
