package com.furniture_store.errorHandling;

public class NotFoundException extends RuntimeException{
    public NotFoundException(String message){
        super(message);
    }
}
