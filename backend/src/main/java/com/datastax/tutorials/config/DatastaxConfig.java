package com.datastax.tutorials.config;

import java.io.File;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.cassandra.CqlSessionBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatastaxConfig {
    
    @Value("${datastax.astra.secure-connect-bundle}")
    private File cloudSecureBundle;
    
    @Bean
    CqlSessionBuilderCustomizer sessionBuilderCustomizer() {
        return builder -> builder.withCloudSecureConnectBundle(cloudSecureBundle.toPath());
    }
    
}