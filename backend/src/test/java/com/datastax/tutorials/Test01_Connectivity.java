package com.datastax.tutorials;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.datastax.oss.driver.api.core.CqlSession;

@SpringBootTest
class Test01_Connectivity {

    
    @Autowired
    private CqlSession cqlSession;
    
    @Test
    void should_display_astraClient() {
        System.out.println("List Databases available in your Organization (AstraClient)");
        System.out.println("+ Your OrganizationID: " + cqlSession.getMetadata());
        System.out.println("+ Your Databases: ");
    }
    
    @Test
    void should_display_cqlSession() {
        System.out.println("Execute some Cql (CqlSession)");
        System.out.println("+ Your Keyspace: " + cqlSession.getKeyspace().get());
        System.out.println("+ Product Categories: ");
        cqlSession.execute("SELECT name FROM category WHERE parent_id = ffdac25a-0244-4894-bb31-a0884bc82aa9")
                .all().stream()
                .map(r -> r.getString("name"))
                .forEach(System.out::println);
    }
    
}
