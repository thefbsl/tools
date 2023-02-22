package com.arman.build.repository;

import com.arman.build.models.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemsRepository extends MongoRepository<Item, String> {
}
