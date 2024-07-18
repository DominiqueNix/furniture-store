package com.furniture_store.controller;

import com.furniture_store.dto.ProductDTO;
import com.furniture_store.service.ProductService;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/products")
public class ProductController {
   private final ProductService productService;

   ProductController(ProductService productService){
    this.productService = productService;
}

   @GetMapping("")
    List<ProductDTO> getAllProducts(){
       return productService.getAllProducts();
   }

   @GetMapping("/{id}")
   public ProductDTO getOneProduct(@PathVariable String id) {
       return productService.getOneProduct(id);
   }
   
   /* Auth Protected Route */
   @PostMapping("")
    void addNewProduct(@RequestBody ProductDTO product){
       productService.saveNewProduct(product);
   }

   /* Auth Protected Route */
   @PutMapping("/{id}")
   public ProductDTO updateProduct(@PathVariable String id, @RequestBody ProductDTO productDTO) {
       return productService.updateProduct(id, productDTO);
   }

   /* Auth Protected Route */
   @DeleteMapping("/{id}")
   public void deleteProduct(@PathVariable String id){
    productService.deleteProduct(id);
   }

}
