package com.datastax.tutorials.config;

import static org.springframework.security.config.Customizer.withDefaults;

import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class SecurityConfig {
	
	@Bean
	UrlBasedCorsConfigurationSource corsConfigurationSource() {
	    CorsConfiguration configuration = new CorsConfiguration();
	    configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000")); // must be explicit, no "*"
	    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
	    configuration.setAllowedHeaders(Arrays.asList("*")); // allow all headers, or list explicitly
	    configuration.setAllowCredentials(true); // <-- REQUIRED for cookies/auth headers

	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", configuration);
	    return source;
	}

	
	@Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors(withDefaults())
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/api/v1/products/**",
                    "/api/v1/categories/**",
                    "/api/v1/prices/**",
                    "/api/v1/featured/**",
                    "/api/v1/carts/**",
                    "/api/v1/users/**",
                    "/api/v1/order/**",
                    "/api/v1/orderprocessor/**",
                    "/swagger-ui/**",
                    "/static/**",
                    "/index.html",
                    "/images/**",
                    "/favicon.ico",
                    "/manifest.json",
                    "/v3/api-docs/**",
                    "/configuration/**",
                    "/swagger-resources/**",
                    "/swagger-ui.html"
                ).permitAll()
                .anyRequest().permitAll()
                // If you wanted all requests open:
                // .anyRequest().permitAll()
            )
            .formLogin(form -> form
                .loginPage("/login").permitAll()
            )
            .logout(logout -> logout
                .logoutUrl("/logout")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .logoutSuccessUrl("/")
                .permitAll()
            )
            .exceptionHandling(ex -> ex
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
            )
            .oauth2Login(oauth -> oauth
                .defaultSuccessUrl("/", true)
            );

        return http.build();
    }

}
