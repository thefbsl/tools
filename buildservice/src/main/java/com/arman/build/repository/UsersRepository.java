package com.arman.build.repository;

import com.arman.build.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UsersRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}
