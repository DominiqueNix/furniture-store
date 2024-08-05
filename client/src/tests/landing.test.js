// import renderer from "react-test-renderer";
import TestRenderer from "react-test-renderer";
import { Landing } from "../components/Landing";

const items = [
    {
        "id": "66a3d1616328aa59a6b37875",
        "type": "CHAIR",
        "subType": "ACCENT_CHAIR",
        "price": 399.99,
        "imgRef": "https://res.cloudinary.com/ds8hwvtsv/image/upload/v1722035840/furniture-store/xoo8kqk1a2k6dejbxe7x.jpg",
        "dimensions": "32\"W x 30\"D x 34\"H",
        "name": "Bold Yellow Accent Chair",
        "description": "A bold yellow fabric accent chair with black legs and a cushion",
        "color": "YELLOW",
        "style": "MODERN",
        "room": "LIVING_ROOM",
        "material": "FABRIC",
        "stock": 15,
        "numOfDrawers": 0,
        "size": null,
        "hasStorage": false,
        "numInSet": 0,
        "numOfPieces": 0,
        "discountPrice": 0
    },
    {
        "id": "66a3d1616328aa59a6b37876",
        "type": "BEDFRAME",
        "subType": "PLATFORM_BED",
        "price": 899.99,
        "imgRef": "https://storage.googleapis.com/product_pictures_bucket-1/10.jpg",
        "dimensions": "60\"W x 80\"L x 12\"H",
        "name": "Modern Gray Fabric Bedframe",
        "description": "A modern gray fabric bedframe",
        "color": "GRAY",
        "style": "MODERN",
        "room": "BEDROOM",
        "material": "FABRIC",
        "stock": 8,
        "numOfDrawers": 0,
        "size": "QUEEN",
        "hasStorage": false,
        "numInSet": 0,
        "numOfPieces": 0,
        "discountPrice": 0
    }
]

const testRenderer = TestRenderer.create(
    <Landing items={items}/>
)

// console.log(testRenderer.toJSON())