package com.furniture_store.enums;

public class FurnitureEnum {

    public enum FurnitureType {
        CHAIR, SOFA, BED_FRAME, DRESSER, TABLE, NIGHTSTAND, BOOKCASE, DESK
    }

    public enum FurnitureSubType {
        ACCENT_CHAR, DINING_CHAIR, OFFICE_CHAIR, LOVESEAT, SECTIONAL, MODULAR, COFFEE_TABLE, CONSOLE_TABLE, SIDE_TABLE, DINING_TABLE, END_TABLE,  PLATFORM_BED, UNSPECIFIED
    }

    public enum BedSize {
        TWIN, QUEEN, FULL, KING, CALIFORNIA_KING
    }

    public enum FurnitureStyle {
        MODERN, MINIMAL, RUSTIC, CONTEMPORARY, INDUSTRIAL, MID_CENTURY_MODERN, TRADITIONAL, SCANDINAVIAN, BOHEMIAN
    }

    public enum Room {
        LIVING_ROOM, BEDROOM, DINING_ROOM, KITCHEN, HOME_OFFICE, ENTRYWAY, BATHROOM, PATIO
    }

    public enum Material {
        WOOD, FABRIC, METAL, LEATHER, GLASS, PLASTIC, UPHOLSTERY
    }

    public enum Color {
        WHITE, BLACK, TAN, BROWN, BLUE, NAVY, RED, YELLOW, ORANGE, PINK, GREEN, PURPLE
    }
    
}
