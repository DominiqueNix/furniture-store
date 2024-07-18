package com.furniture_store.entity;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.furniture_store.enums.FurnitureEnum.BedSize;
import com.furniture_store.enums.FurnitureEnum.Color;
import com.furniture_store.enums.FurnitureEnum.FurnitureStyle;
import com.furniture_store.enums.FurnitureEnum.FurnitureSubType;
import com.furniture_store.enums.FurnitureEnum.FurnitureType;
import com.furniture_store.enums.FurnitureEnum.Material;
import com.furniture_store.enums.FurnitureEnum.Room;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("products")
public class Product {
    // Id generated bt mongoDb
    @Id
    private String Id;
    // The type of furniture (ex. sofa, bed frame, dresser)
    private FurnitureType type;
    // An optional subtype of furniture(ex. love seat, side table)
    private FurnitureSubType subType;
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
    private Color color;
    // The style of the furniture (ex. modern, minimal, rustic)
    private FurnitureStyle style;
    // Optional. The room this item might best suit (ex. if type="bed frame", room = "bedroom")
    private Room room;
    // The predominant material this item is made of
    private Material material;
    // The number of this item in stock
    private int stock;
    // // Optional. Additional properties that are specific to certain items.
    // private Properties properties;
    // Optional. For items with drawers
    private int numOfDrawers;
    // Optional. For dining room tables
    private int numOfLeaves;
    // Optional. For bed frames (ex. 'queen', 'king')
    private BedSize size;
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
