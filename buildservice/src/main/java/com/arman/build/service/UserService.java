package com.arman.build.service;

import com.arman.build.exception.InvalidPasswordException;
import com.arman.build.exception.UserExistException;
import com.arman.build.exception.UserNotFoundException;
import com.arman.build.models.User;
import com.arman.build.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UsersRepository repository;

    public User addUser(User user){
        if(repository.findByEmail(user.getEmail()) != null) {
            throw new UserExistException("User already exists");
        }
        user.setId(UUID.randomUUID().toString());
        //user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return repository.save(user);
    }

//    public User login(String email, String password) {
//        User user = repository.findByEmail(email);
//
//
//        if (user == null) {
//            throw new UserNotFoundException("User Not Found");
//        }
//
//        if (!new BCryptPasswordEncoder().matches(password, user.getPassword())) {
//            throw new InvalidPasswordException("Password is not correct");
//        }
//
//        return user;
//    }

    public List<User> index(){
        return repository.findAll();
    }

    public User getById(String id){
        return repository.findById(id).get();
    }

    public User update(User newUser){
        User currentUser = repository.findById(newUser.getId()).get();
        currentUser.setName(newUser.getName());
        currentUser.setLastName(newUser.getLastName());
        currentUser.setEmail(newUser.getEmail());
        currentUser.setPhoneNumber(newUser.getPhoneNumber());
        currentUser.setPassword(newUser.getPassword());
        return repository.save(currentUser);
    }

    public String delete(String id){
        repository.deleteById(id);
        return "user with id " + id + " was deleted";
    }
}
