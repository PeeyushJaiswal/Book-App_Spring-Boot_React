package com.ex.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value="/book")
public class BookController {
    @Autowired
    private BookService bs;
    @GetMapping("/listBooks")
    public List<Book> getAllBooks(){
        return bs.select();
    }
}
