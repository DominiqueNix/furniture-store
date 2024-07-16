package com.furniture_store.service;

import java.util.List;
import com.furniture_store.dto.ProductDTO;

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
    ProductDTO updateProduct(ProductDTO productDTO);

    // Delete Product
        // Auth Protected
    void deleteProduct(String id);
}
