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
    @Builder.Default
    private double price = -1;
    // An image url for the item. This points to an external cloud storage
    private String imgRef;
    // the height of the item
    @Builder.Default
    private int height = -1;
    // The width of the item
    @Builder.Default
    private int width = -1;
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
    @Builder.Default
    private int stock = -1;
    // Optional. Additional properties that are specific to certain items.
    // private PropertiesDTO properties;
    // Optional. For items with drawers
    @Builder.Default
    private int numOfDrawers = -1;
    // Optional. For dining room tables
    @Builder.Default
    private int numOfLeaves = -1;
    // Optional. For bed frames (ex. 'queen', 'king')
    private String size;
    // Optional. For bed frame with storage
    private boolean hasStorage;
    // Optional. For adjustable beds
    private boolean adjustable;
    // Optional. For items that come in a set (ex.  chairs, end tables)
    @Builder.Default
    private int numInSet = -1;
    // Optional. For modular couches
    @Builder.Default
    private int numOfPieces = -1;
    // Optional. If set the item will show as discounted with the set price.
    @Builder.Default
    private int discountPrice = -1;
}
