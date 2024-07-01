package com.furniture_store.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Optional;

@Data
@NoArgsConstructor
@Document("products")
public class Product {
    // Id generated bt mongoDb
    @Id
    private String Id;
    // The type of furniture (ex. sofa, bed frame, dresser)
    private String type;
    // An optional subtype of furniture(ex. love seat, side table)
    private String subType;
    // The price of the item
    private double price;
    // An image url for the item. This points to an external cloud storage
    private String imgRef;
    // the height of the item
    private int height;
    // The width of the item
    private int width;
    //The name of the item
    private String name;
    // The main color of the item
    private String color;
    // The style of the furniture (ex. modern, minimal, rustic)
    private String style;
    // Optional. The room this item might best suit (ex. if type="bed frame", room = "bedroom")
    private String room;
    // The predominant material this item is made of
    private String material;
    // The number of this item in stock
    private int stock;
    // Optional. Additional properties that are specific to certain items.
    private Properties properties;
}
