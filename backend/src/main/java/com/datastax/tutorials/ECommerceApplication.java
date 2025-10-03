package com.datastax.tutorials;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;

/**
 * Main class.
 *
 * @author Cedrick LUNVEN
 * @author Aaron PLOETZ 
 */
@SpringBootApplication
public class ECommerceApplication {

	/**
	 * Main method.
	 * 
	 * @param args
	 *         no arguments provided here
	 */
	public static void main(String[] args) {
		SpringApplication.run(ECommerceApplication.class, args);
	}
	
    // Old Config keeping for reference Now.
//    protected void configure(HttpSecurity http) throws Exception {
//		// @formatter:off
//		http
//					.cors(withDefaults())
//					.csrf(csrf -> csrf.disable())
//					.authorizeHttpRequests(a -> a
//											.requestMatchers("/api/v1/products/**", "/api/v1/categories/**", "/api/v1/prices/**", "/api/v1/featured/**", "/api/v1/carts/**", "/api/v1/users/**", "/api/v1/order/**", "/api/v1/orderprocessor/**", "/swagger-ui/**", "/static/**", "/index.html", "/images/**", "/favicon.ico", "/manifest.json", "/v3/api-docs/**", "/configuration/**", "/swagger-resources/**", "/swagger-ui.html"
//											).permitAll()
//											.anyRequest().authenticated()
//					//.anyRequest().permitAll()
//				)
//					.formLogin(fl -> fl
//											.loginPage("/login").permitAll()
//					)
//					.logout(l -> l
//											.logoutUrl("/logout")
//											.invalidateHttpSession(true)
//											.deleteCookies("JSESSIONID")
//											.logoutSuccessUrl("/")
//											.permitAll()
//					)
//					.exceptionHandling(e -> e
//											.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
//					)
//					.oauth2Login(login -> login
//								.defaultSuccessUrl("/", true));
//    }
    
}
