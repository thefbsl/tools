package com.arman.build.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "items")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    @Id
    private String id;
    private String name;
    private int cost;
    private String service;
    private String category;
    private String description;
    private ItemLocation location;
    private String imageUrl;

}
