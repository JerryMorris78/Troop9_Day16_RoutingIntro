using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyApp.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyApp.API
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        // This is the place where you write code that connects to the database (or services that connects to the database)
        static List<Product> _products = new List<Product>
        {
            new Product { Id = 1, Name = "Milk", Price = 2.33m },
            new Product { Id = 2, Name = "Cheese", Price = 5.44m },
            new Product { Id = 3, Name = "Apples", Price = 2.50m}
        };


        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            // returns all products
            // Ok()
            // NotFound()
            // Created()
            // BadRequest()
            return Ok(_products);
        }

        // GET api/values/5  // $resource("/api/values/:id");
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var productToSendBack = _products.Find(p => p.Id == id);

            if(productToSendBack == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(productToSendBack);
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            if(product.Id == 0)
            {
                product.Id = _products.Count() + 1;
                _products.Add(product);
            }
            else
            {
                var productToEdit = _products.Find(p => p.Id == product.Id);
                productToEdit.Name = product.Name;
                productToEdit.Price = product.Price;
            }

            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
