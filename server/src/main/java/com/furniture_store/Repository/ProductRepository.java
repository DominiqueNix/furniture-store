package com.furniture_store.Repository;

import com.furniture_store.Model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
//    @Query("{type: '?0'}")
//    List<Product> findByType(String type);
//
//    @Query("{subType: '?0'}")
//    List<Product>findBySubType(String subType);

}
