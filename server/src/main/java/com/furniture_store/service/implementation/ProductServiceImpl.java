package com.furniture_store.service.implementation;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.furniture_store.dto.ProductDTO;
import com.furniture_store.entity.Product;
import com.furniture_store.errorHandling.NotFoundException;
import com.furniture_store.repository.ProductRepository;
import com.furniture_store.service.ProductService;
import com.mongodb.MongoException;

@Component
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<ProductDTO> getAllProducts() {

        try {
            List<Product> products = productRepository.findAll();
            List<ProductDTO> productDTOs = products
                    .stream()
                    .map(product -> convertToDTO(product))
                    .collect(Collectors.toList());
            return productDTOs;

        } catch (RuntimeException exception) {
            throw new NotFoundException(exception.getMessage());
        }
    }

    @Override
    public ProductDTO getOneProduct(String id) {

        try {
            Product product = productRepository.findById(id).orElse(null);
            ProductDTO productDTO = convertToDTO(product);
            return productDTO;

        } catch (NullPointerException exception) {
            throw new NotFoundException("Product with id '" + id + "' not found");
        }
    }

    @Override
    public void saveNewProduct(ProductDTO productDTO) {
        productRepository.save(convertToEntity(productDTO));
    }

    @Override
    public ProductDTO updateProduct(String id, ProductDTO productDTO) {
        try {
            Product product = productRepository.findById(id).orElse(null);
            Product updatedProduct = setNewProductFields(product, productDTO);
            return convertToDTO(productRepository.save(updatedProduct));

        } catch (NullPointerException exception) {
            throw new NotFoundException("Product with id '" + id + "' not found");
        }

    }

    @Override
    public void deleteProduct(String id) {
        try {
            productRepository.deleteById(id);
        } catch (MongoException exception) {
            throw new NotFoundException(exception.getMessage());
        }

    }

    // converts a product found in the database to a productDTO to return to the
    // user
    private ProductDTO convertToDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();

        productDTO.setId(product.getId());
        productDTO.setType(product.getType());
        productDTO.setSubType(product.getSubType());
        productDTO.setPrice(product.getPrice());
        productDTO.setImgRef(product.getImgRef());
        productDTO.setDimensions(product.getDimensions());
        productDTO.setName(product.getName());
        productDTO.setDescription(product.getDescription());
        productDTO.setColor(product.getColor());
        productDTO.setStyle(product.getStyle());
        productDTO.setRoom(product.getRoom());
        productDTO.setMaterial(product.getMaterial());
        productDTO.setStock(product.getStock());
        productDTO.setNumOfDrawers(product.getNumOfDrawers());
        productDTO.setSize(product.getSize());
        productDTO.setHasStorage(product.isHasStorage());
        productDTO.setNumInSet(product.getNumInSet());
        productDTO.setNumOfPieces(product.getNumOfPieces());
        productDTO.setDiscountPrice(product.getDiscountPrice());

        return productDTO;
    }

    // converts an incoming productDTO from the user into a product that can be
    // saved into the database
    private Product convertToEntity(ProductDTO productDTO) {
        Product product = new Product();

        product.setId(productDTO.getId());
        product.setType(productDTO.getType());
        product.setSubType(productDTO.getSubType());
        product.setPrice(productDTO.getPrice());
        product.setImgRef(productDTO.getImgRef());
        product.setDimensions(productDTO.getDimensions());
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setColor(productDTO.getColor());
        product.setStyle(productDTO.getStyle());
        product.setRoom(productDTO.getRoom());
        product.setMaterial(productDTO.getMaterial());
        product.setStock(productDTO.getStock());
        product.setNumOfDrawers(productDTO.getNumOfDrawers());
        product.setSize(productDTO.getSize());
        product.setHasStorage(productDTO.isHasStorage());
        product.setNumInSet(productDTO.getNumInSet());
        product.setNumOfPieces(productDTO.getNumOfPieces());
        product.setDiscountPrice(productDTO.getDiscountPrice());

        return product;
    }

    // checkes each property of an incoming productDTO, if that property exists then
    // it updates the product based on the user's dto input
    private Product setNewProductFields(Product product, ProductDTO productDTO) {

        if (Optional.ofNullable(productDTO.getType()).isPresent()) {
            product.setType(productDTO.getType());
        }
        if (Optional.ofNullable(productDTO.getSubType()).isPresent()) {
            product.setSubType(productDTO.getSubType());
        }
        if (Optional.ofNullable(productDTO.getPrice()) != null) {
            product.setPrice(productDTO.getPrice());
        }
        if (Optional.ofNullable(productDTO.getImgRef()).isPresent()) {
            product.setImgRef(productDTO.getImgRef());
        }
        if (Optional.ofNullable(productDTO.getDimensions()).isPresent()) {
            product.setDimensions(productDTO.getDimensions());
        }
        if (Optional.ofNullable(productDTO.getName()).isPresent()) {
            product.setName(productDTO.getName());
        }
        if (Optional.ofNullable(productDTO.getDescription()).isPresent()) {
            product.setDescription(productDTO.getDescription());
        }
        if (Optional.ofNullable(productDTO.getColor()).isPresent()) {
            product.setColor(productDTO.getColor());
        }
        if (Optional.ofNullable(productDTO.getStyle()).isPresent()) {
            product.setStyle(productDTO.getStyle());
        }
        if (Optional.ofNullable(productDTO.getRoom()).isPresent()) {
            product.setRoom(productDTO.getRoom());
        }
        if (Optional.ofNullable(productDTO.getMaterial()).isPresent()) {
            product.setMaterial(productDTO.getMaterial());
        }
        if (Optional.ofNullable(productDTO.getStock()) != null) {
            product.setStock(productDTO.getStock());
        }
        if (Optional.ofNullable(productDTO.getNumOfDrawers()) != null) {
            product.setNumOfDrawers(productDTO.getNumOfDrawers());
        }
        if (Optional.ofNullable(productDTO.getSize()).isPresent()) {
            product.setSize(productDTO.getSize());
        }
        if (Optional.ofNullable(productDTO.isHasStorage()).isPresent()) {
            product.setHasStorage(productDTO.isHasStorage());
        }
        if (Optional.ofNullable(productDTO.getNumInSet()) != null) {
            product.setNumInSet(productDTO.getNumInSet());
        }
        if (Optional.ofNullable(productDTO.getNumOfPieces()) != null) {
            product.setNumOfPieces(productDTO.getNumOfPieces());
        }
        if (Optional.ofNullable(productDTO.getDiscountPrice()) != null) {
            product.setDiscountPrice(productDTO.getDiscountPrice());
        }
        return product;
    }
}
