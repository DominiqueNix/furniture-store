package com.furniture_store.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.furniture_store.dto.ProductDTO;

@Service
public interface ProductService {
    // Get all products
    List<ProductDTO> getAllProducts();

    // Get one product
    ProductDTO getOneProduct(String id);

    // Add new product
    // Auth Protected
    void saveNewProduct(ProductDTO productDTO);

    // update product
    // Auth protected
    ProductDTO updateProduct(String id, ProductDTO productDTO);

    // Delete Product
    // Auth Protected
    void deleteProduct(String id);
}
