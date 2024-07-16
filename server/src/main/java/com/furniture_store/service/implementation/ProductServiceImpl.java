package com.furniture_store.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.furniture_store.dto.ProductDTO;
import com.furniture_store.entity.Product;
import com.furniture_store.errorHandling.NotFoundException;
import com.furniture_store.repository.ProductRepository;
import com.furniture_store.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<ProductDTO> getAllProducts() {

        try{
            List<Product> products = productRepository.findAll();
            List<ProductDTO> productDTOs = products
                .stream()
                .map(product -> convertToDTO(product))
                .collect(Collectors.toList());
            return productDTOs;  

        } catch(RuntimeException exception){
            throw new NotFoundException(exception.getMessage());
        }
    }

    @Override
    public ProductDTO getOneProduct(String id) {
        
        try{
            Product product = productRepository.findById(id).orElse(null);
            ProductDTO productDTO = convertToDTO(product);
            return productDTO;  

        } catch(NullPointerException exception){
            throw new NotFoundException("Product with id '" + id + "' not found");
        }
    }

    @Override
    public void saveNewProduct(ProductDTO productDTO) {
        productRepository.save(convertToEntity(productDTO)); 
    }

    @Override
    public ProductDTO updateProduct(ProductDTO product) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateProduct'");
        // return productRepository.
    }

    @Override
    public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }
    

    private ProductDTO convertToDTO(Product product){
       ProductDTO productDTO = new ProductDTO();

        productDTO.setId(product.getId());
        productDTO.setType(product.getType());
        productDTO.setSubType(product.getSubType());
        productDTO.setPrice(product.getPrice());
        productDTO.setImgRef(product.getImgRef());
        productDTO.setHeight(product.getHeight());
        productDTO.setWidth(product.getWidth());
        productDTO.setName(product.getName());
        productDTO.setColor(product.getColor());
        productDTO.setStyle(product.getStyle());
        productDTO.setRoom(product.getRoom());
        productDTO.setMaterial(product.getMaterial());
        productDTO.setStock(product.getStock());
        productDTO.setNumOfDrawers(product.getNumOfDrawers());
        productDTO.setNumOfLeaves(product.getNumOfLeaves());
        productDTO.setSize(product.getSize());
        productDTO.setHasStorage(product.isHasStorage());
        productDTO.setAdjustable(product.isAdjustable());
        productDTO.setNumInSet(product.getNumInSet());
        productDTO.setNumOfPieces(product.getNumOfPieces());
        productDTO.setDiscountPrice(product.getDiscountPrice());

        return productDTO;
    }

    private Product convertToEntity(ProductDTO productDTO){
        Product product = new Product();
 
        product.setId(productDTO.getId());
        product.setType(productDTO.getType());
        product.setSubType(productDTO.getSubType());
        product.setPrice(productDTO.getPrice());
        product.setImgRef(productDTO.getImgRef());
        product.setHeight(productDTO.getHeight());
        product.setWidth(productDTO.getWidth());
        product.setName(productDTO.getName());
        product.setColor(productDTO.getColor());
        product.setStyle(productDTO.getStyle());
        product.setRoom(productDTO.getRoom());
        product.setMaterial(productDTO.getMaterial());
        product.setStock(productDTO.getStock());
        product.setNumOfDrawers(productDTO.getNumOfDrawers());
        product.setNumOfLeaves(productDTO.getNumOfLeaves());
        product.setSize(productDTO.getSize());
        product.setHasStorage(productDTO.isHasStorage());
        product.setAdjustable(productDTO.isAdjustable());
        product.setNumInSet(productDTO.getNumInSet());
        product.setNumOfPieces(productDTO.getNumOfPieces());
        product.setDiscountPrice(productDTO.getDiscountPrice());
 
        return product;
     }
}
