package com.arman.build.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String userNotFound) {
        super(userNotFound);
    }
}
