// package com.furniture_store;

// import static org.springframework.security.config.Customizer.withDefaults;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.Profile;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// @EnableWebSecurity
// @Profile("test")
// public class mockSecurity {

//     @Bean
//     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//         System.out.println("HI");
//         return http.authorizeHttpRequests((authz) -> authz
//         .anyRequest().permitAll()
//         ).build();
//     }
// }
