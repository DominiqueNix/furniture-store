package com.furniture_store.controller;

import com.furniture_store.entity.Product;
import com.furniture_store.repository.ProductRepository;
import com.furniture_store.service.ProductService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
   private final ProductService productService;

//    ProductController(ProductRepository repository){
//        this.repository = repository;
//    }
   ProductController(ProductService productService){
    this.productService = productService;
}

   // @GetMapping("/products")
   //  List<Product> getAllProducts(){
   //     return productService.getAllProducts();
   // }

   // @PostMapping("/products")
   //  Product addNewProduct(@RequestBody Product product){
   //     return productService.saveNewProduct(product);
   // }
}
