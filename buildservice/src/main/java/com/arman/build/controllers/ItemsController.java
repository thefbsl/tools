package com.arman.build.controllers;

import com.arman.build.models.Item;
import com.arman.build.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/items")
public class ItemsController {
    @Autowired
    private ItemService service;

    @PostMapping
    public Item createItem(@RequestBody Item item){
        return service.addItem(item);
    }

    @GetMapping("/get")
    public List<Item> index(){
        return service.index();
    }

    @GetMapping("/{id}")
    public Item getItemById(@PathVariable String id){
        return service.getItemById(id);
    }

    @PutMapping
    public Item updateItem(@RequestBody Item item){
        return service.updateItem(item);
    }

    @DeleteMapping("/{id}")
    public String deleteItem(@PathVariable String id){
        return service.deleteItem(id);
    }

    @GetMapping("/sort")
    public List<Item> sortBy(){
        return service.sortByPrice();
    }

    @GetMapping("/sortdesc")
    public List<Item> sortByDesc(){
        return service.sortByPriceDesc();
    }

}
