package com.furniture_store.Controller;

import com.furniture_store.Model.Product;
import com.furniture_store.Repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
   private final ProductRepository repository;

   ProductController(ProductRepository repository){
       this.repository = repository;
   }

   @GetMapping("/products")
    List<Product> getAllProducts(){
       return repository.findAll();
   }

   @PostMapping("/products")
    Product addNewProduct(@RequestBody Product product){
       return repository.save(product);
   }
}
