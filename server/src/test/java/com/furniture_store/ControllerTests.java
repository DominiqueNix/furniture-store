package com.furniture_store;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.furniture_store.dto.ProductDTO;
import com.furniture_store.enums.FurnitureEnum.Color;
import com.furniture_store.service.ProductService;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
public class ControllerTests {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    ProductService productService;

    @Test
    public void getAllProducts_shouldReturnAllProducts() throws Exception{
        ProductDTO product1 = new ProductDTO();
        ProductDTO product2 = new ProductDTO();
        product1.setName("product 1");
        product2.setName("product 2");
        List<ProductDTO> productDTOs = List.of(product1, product2);

        when(productService.getAllProducts()).thenReturn(productDTOs);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/products")).andExpect(status().isOk()).andReturn();

        String response = result.getResponse().getContentAsString();

        assertThat(response).contains("product 1");
        assertThat(response).contains("product 2");
    }

    @Test
    public void getOneProduct_returnsOneProduct() throws Exception{
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId("1");
        productDTO.setName("test product");

        when(productService.getOneProduct("1")).thenReturn(productDTO);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/products/1")).andExpect(status().isOk()).andReturn();

        String response = result.getResponse().getContentAsString();

        assertThat(response).contains("test product");
        assertThat(response).contains("1");
    }

    // @Test 
    // public void addNewProduct_isSuccessful() throws Exception {

    //     ProductDTO productDTO = new ProductDTO();

    //     MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/products/admin").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(productDTO))).andExpect(status().isOk()).andReturn();

    //     int status = result.getResponse().getStatus();

    //     assertThat(status).isEqualTo(200);

    // }

    // @Test
    // public void updatedProduct_returnsUpdatedProduct() throws Exception {
    //     ProductDTO userInput = new ProductDTO();
    //     userInput.setColor(Color.BLUE);
    //     ProductDTO product = new ProductDTO();
    //     product.setId("1");
    //     product.setColor(Color.BLUE);

    //     when(productService.updateProduct("1", userInput)).thenReturn(product);



    //     MvcResult result = mockMvc.perform(MockMvcRequestBuilders.put("/products/admin/1").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(userInput))).andExpect(status().isOk()).andReturn();

    //     String response = result.getResponse().getContentAsString();

    //     assertThat(response).contains("BLUE");
    //     assertThat(response).contains("1");

    // }

    // @Test
    // public void deleteProduct_isSuccessful() throws Exception {

    //     MvcResult result = mockMvc.perform(MockMvcRequestBuilders.delete("/products/admin/1")).andExpect(status().isOk()).andReturn();

    //     int status = result.getResponse().getStatus();

    //     assertThat(status).isEqualTo(200);
    // }

}