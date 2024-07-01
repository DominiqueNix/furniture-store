package com.furniture_store;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@EnableMongoRepositories
public class FurnitureStoreApplication {
	public static void main(String[] args) {SpringApplication.run(FurnitureStoreApplication.class, args);}
}
