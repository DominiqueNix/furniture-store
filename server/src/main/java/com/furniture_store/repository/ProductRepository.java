package com.furniture_store.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.furniture_store.entity.Product;

public interface ProductRepository extends MongoRepository<Product, String> {}
