package com.furniture_store.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/admin")
public class AuthTestController {

    @GetMapping("/public")
    public String publicEndpoint(){
        return "This is a public string that everyone can see";
    }

    @GetMapping("/private")
    public String privateEndpoint(){
        return "This is a private string only admins can see";
    }
}
