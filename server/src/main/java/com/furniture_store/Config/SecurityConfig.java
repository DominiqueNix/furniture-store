package com.furniture_store.Config;

import static org.springframework.security.config.Customizer.withDefaults;
import static org.springframework.security.oauth2.jwt.NimbusJwtDecoder.withJwkSetUri;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;
import org.springframework.security.oauth2.jwt.JwtValidators;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    // @Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")
    // private String issuer;

    // @Value("${spring.security.oauth2.resourceserver.jwt.jwk-set-uri}")
    // private String jwk;

    // @Bean
    // JwtDecoder jwtDecoder(){
    //         NimbusJwtDecoder jwtDecoder = (NimbusJwtDecoder) JwtDecoders.fromOidcIssuerLocation(issuer);

    //         OAuth2TokenValidator<Jwt> withIssuer = JwtValidators.createDefaultWithIssuer(issuer);
    //         OAuth2TokenValidator<Jwt> withAudience = new DelegatingOAuth2TokenValidator<>(withIssuer);

    //         jwtDecoder.setJwtValidator(withAudience);

    //         System.out.println(issuer);
    //         System.out.println(jwk);

    //         return jwtDecoder;    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
            return http.authorizeHttpRequests((authz) -> authz
                    .requestMatchers("/admin/public").permitAll()
                    .requestMatchers("/admin/private").authenticated()
                    .anyRequest().permitAll()
                )
                .cors(withDefaults())
                .oauth2ResourceServer(oauth2 -> 
                    oauth2
                    .jwt(withDefaults())
                ).build();

        // } catch(Exception e){
        //     System.out.println(e.getMessage());
        // }
        // return null;
    }
    
}