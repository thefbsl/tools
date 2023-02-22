package com.arman.build.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User{
    @Id
    private String id;
    private String name;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String password;




}
