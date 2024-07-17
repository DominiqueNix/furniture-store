package com.furniture_store.entity;

import lombok.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Properties {
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
