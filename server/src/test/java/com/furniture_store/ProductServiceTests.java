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
import com.furniture_store.enums.FurnitureEnum.Color;
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
        Product product1 = new Product();
        product1.setId("123");
        product1.setName("Modern couch");

        Product product2 = new Product();
        product2.setId("456");
        product2.setName("Cool bed frame");

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
        Product product1 = new Product();
        product1.setId("123");
        product1.setName("Modern couch");
        // Mocking repository layer
        given(productRepository.findById("123"))
        .willReturn(Optional.of(product1));

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

    @Test
    void updateProduct_shouldReturnProductUpdated(){
       // Test product
       Product product1 = new Product();
        product1.setId("123");
        product1.setName("Modern couch");
       ProductDTO userInput = new ProductDTO();
       userInput.setColor(Color.RED);
       userInput.setName("new product name");
       Product updateProduct = new Product();
       updateProduct.setId("123");
       updateProduct.setColor(Color.RED);
       updateProduct.setName("new product name");

       // Mock repository
       given(productRepository.findById("123")).willReturn(Optional.of(product1));
       given(productRepository.save(updateProduct)).willReturn(updateProduct);

       ProductDTO results = productService.updateProduct("123", userInput);

       assertThat(results.getName()).isEqualTo("new product name");
       assertThat(results.getColor()).isEqualTo(Color.RED);
    }

    @Test
    void updateProduct_shouldThrowIfProductNotFound(){
        given(productRepository.findById("123")).willReturn(null);

        assertThrows(NotFoundException.class, () ->  productService.getOneProduct("123"));
    }

    @Test
    void deleteProduct_shouldThrowExceptionIfProductNotFound(){
        given(productRepository.findById("123")).willReturn(null);

        assertThrows(NotFoundException.class, () ->  productService.getOneProduct("123"));
    }

    
}
