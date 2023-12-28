package com.ex.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.ex.filter.CsrfCookieFilter;

import jakarta.servlet.http.HttpServletRequest;

import static org.springframework.security.config.Customizer.withDefaults;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Configuration
public class ProjectSecurityConfig {
    @Bean
    // @Order(SecurityProperties.BASIC_AUTH_ORDER)
    SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
        CsrfTokenRequestAttributeHandler requestHandler = new CsrfTokenRequestAttributeHandler();
        requestHandler.setCsrfRequestAttributeName("_csrf");

        http
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers("/un", "/user/addUser", "/user/signIn", "/login").permitAll()
                        .requestMatchers("/au", "/au2", "/user/listUsers", "/user/getUserDetails", "/book/listBooks", "/user/gHome")
                        .authenticated())

                .formLogin(login -> login
                        .loginPage("http://localhost:5173/login") // Specify a custom login page

                        .usernameParameter("email") // Specify a custom username parameter
                        .passwordParameter("password")
                        // .loginProcessingUrl("/perform_login")
                        // .passwordParameter("custom_password") // Specify a custom password parameter
                        .defaultSuccessUrl("/au2") // Specify a custom success page
                // .failureUrl("/custom-failure-page") // Specify a custom failure page
                )
                // .formLogin(Customizer.withDefaults())
                // .httpBasic(Customizer.withDefaults())

                .securityContext((context) -> context
                        .requireExplicitSave(false))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.ALWAYS))

                .csrf(csrf -> csrf.disable())

                // .csrf((csrf) -> csrf.csrfTokenRequestHandler(requestHandler)
                //         .ignoringRequestMatchers("/au", "/login")   //, "user/addUser"
                //         .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()))
                // .addFilterAfter(new CsrfCookieFilter(), BasicAuthenticationFilter.class)

                .cors(corsCustomizer -> corsCustomizer.configurationSource(new CorsConfigurationSource() {
                    @Override
                    public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
                        CorsConfiguration config = new CorsConfiguration();
                        config.setAllowedOrigins(List.of("http://localhost:5173"));
                        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                        config.setAllowCredentials(true);
                        config.setAllowedHeaders(List.of("Content-Type", "Accept", "X-Requested-With", "remember-me",
                                "x-xsrf-token"));
                        config.setMaxAge(3600L);
                        return config;
                    }
                }));
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        // return NoOpPasswordEncoder.getInstance();
        return new BCryptPasswordEncoder();
    }
}