package com.furniture_store;

import static org.mockito.BDDMockito.given;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.furniture_store.dto.ProductDTO;
import com.furniture_store.entity.Product;
import com.furniture_store.errorHandling.NotFoundException;
import com.furniture_store.repository.ProductRepository;
import com.furniture_store.service.implementation.ProductServiceImpl;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTests {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductServiceImpl productService;


    @Test
    void getAllProducts_shouldReturnAllProducts(){
        // Test products 
        Product product1 = new Product("123", "sofa", "modular", 1000, "test.com", 100, 400, "Modern couch", "green", "modern", "living room", "polyester", 10, 0, 0, "", false, false, 0, 5, 0);
        Product product2 = new Product("456", "bedframe", "storage bed", 500, "test.com", 100, 400, "Cool bed frame", "brown", "modern", "bed room", "wood", 60, 0, 0, "queen", true, false, 0, 0, 0);

        // Mocking repository layer
        given(productRepository.findAll())
        .willReturn(List.of(product1, product2));

        // Calling service layer
        List<ProductDTO> productList = productService.getAllProducts();

        assertThat(productList).isNotNull();
        assertThat(productList.size()).isEqualTo(2);
        assertThat(productList.get(0).getName()).isEqualTo("Modern couch");
        assertThat(productList.get(1).getName()).isEqualTo("Cool bed frame");
    }

    @Test
    void getAllProductsWithError_shouldThrowException(){

        given(productRepository.findAll()).willThrow(new RuntimeException());

        assertThrows(NotFoundException.class, () ->  productService.getAllProducts());
    }

    @Test
    void getOneProduct_shouldReturnOneProduct(){
        // Test product
        Product product = new Product("123", "sofa", "modular", 1000, "test.com", 100, 400, "Modern couch", "green", "modern", "living room", "polyester", 10, 0, 0, null, false, false, 0, 5, 0);
        Optional<Product> optionalProduct = Optional.of(product);

        // Mocking repository layer
        given(productRepository.findById("123"))
        .willReturn(optionalProduct);

        // Calling service layer
        ProductDTO returnedProduct = productService.getOneProduct("123");

        assertThat(returnedProduct).isNotNull();
        assertThat(returnedProduct.getName()).isEqualTo("Modern couch");
    }

    @Test
    void getOneProductNotFound_ShouldThrowException(){
        given(productRepository.findById("123")).willReturn(null);

        assertThrows(NotFoundException.class, () ->  productService.getOneProduct("123"));
    }

    
}
