package com.furniture_store.Service;

import java.util.List;

import com.furniture_store.Model.Product;

public interface ProductService {
    // Get all products
    List<Product> getAllProducts();

    // Get one product
    Product getProduct();

    // Add new product
    Product saveNewProduct();

    // update product
        // Auth protected
    Product updateProduct();

    // Delete Product
        // Auth Protected
    void deleteProduct();
}
