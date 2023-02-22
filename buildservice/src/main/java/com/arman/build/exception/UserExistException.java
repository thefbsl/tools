package com.arman.build.exception;

public class UserExistException extends RuntimeException{
    public UserExistException(String message) {
        super(message);
    }
}
