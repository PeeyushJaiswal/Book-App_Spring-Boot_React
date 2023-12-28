// package com.ex.config;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class CorsConfig implements WebMvcConfigurer {

//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/login")  // Specify the endpoint for which CORS is configured
//                 .allowedOrigins("http://localhost:5173")  // Specify the allowed origin
//                 .allowCredentials(true)  // Allow credentials (cookies)
//                 .allowedMethods("POST")  // Specify the allowed HTTP methods (e.g., POST)
//                 .allowedHeaders("Content-Type", "x-xsrf-token","X-CSRF-TOKEN", "X-SRF-TOKEN");
//     }
// }
