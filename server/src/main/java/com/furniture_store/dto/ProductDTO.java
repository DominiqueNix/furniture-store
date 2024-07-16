package com.furniture_store.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDTO {
    private String id;
    // The type of the furniture (ex. sofa, bed frame, table)
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
    // private PropertiesDTO properties;
    // Optional. For items with drawers
    private int numOfDrawers;
    // Optional. For dining room tables
    private int numOfLeaves;
    // Optional. For bed frames (ex. 'queen', 'king')
    private String size;
    // Optional. For bed frame with storage
    private boolean hasStorage;
    // Optional. For adjustable beds
    private boolean adjustable;
    // Optional. For items that come in a set (ex.  chairs, end tables)
    private int numInSet;
    // Optional. For modular couches
    private int numOfPieces;
    // Optional. If set the item will show as discounted with the set price.
    private int discountPrice;
}
