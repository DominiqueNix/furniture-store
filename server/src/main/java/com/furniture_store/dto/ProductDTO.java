package com.furniture_store.dto;

import com.furniture_store.enums.FurnitureEnum.BedSize;
import com.furniture_store.enums.FurnitureEnum.Color;
import com.furniture_store.enums.FurnitureEnum.FurnitureStyle;
import com.furniture_store.enums.FurnitureEnum.FurnitureSubType;
import com.furniture_store.enums.FurnitureEnum.FurnitureType;
import com.furniture_store.enums.FurnitureEnum.Material;
import com.furniture_store.enums.FurnitureEnum.Room;
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
    // The type of furniture (ex. sofa, bed frame, dresser)
    private FurnitureType type;
    // An optional subtype of furniture(ex. love seat, side table)
    private FurnitureSubType subType;
    // The price of the item
    private double price;
    // An image url for the item. This points to an external cloud storage
    private String imgRef;
    // the height of the item
    // The dimensions of the product (ex. 48"W x 60"H x 34"D)
    private String dimensions;
    // The name of the item
    private String name;
    // A description of the item
    private String description;
    // The main color of the item
    private Color color;
    // The style of the furniture (ex. modern, minimal, rustic)
    private FurnitureStyle style;
    // Optional. The room this item might best suit (ex. if type="bed frame", room =
    // "bedroom")
    private Room room;
    // The predominant material this item is made of
    private Material material;
    // The number of this item in stock
    private int stock;
    // Optional. For items with drawers
    private int numOfDrawers;
    // Optional. For bed frames (ex. 'queen', 'king')
    private BedSize size;
    // Optional. For bed frame with storage
    private boolean hasStorage;
    // Optional. For items that come in a set (ex. chairs, end tables)
    private int numInSet;
    // Optional. For modular couches
    private int numOfPieces;
    // Optional. If set the item will show as discounted with the set price.
    private int discountPrice;
}
