package com.ex.user;

import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
// @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
// @CrossOrigin(origins = "http://localhost:5173")

@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private UserRepository ur;
    @Autowired
    private UserService us;
    @Autowired
    private PasswordEncoder pe;

    @GetMapping("/listUsers")
    public List<User> listUsers() {
        return ur.findAll();
    }

    @PostMapping("/addUser")
    public String addUser(@RequestBody User user) {
        user.setPassword(pe.encode(user.getPassword()));
        ur.save(user);
        return "success";
    }

    @PostMapping("/signIn")
    public String signIn(@RequestBody User user, HttpSession session) {
        System.out.println("here...");
        User res = us.validateUser(user);
        if (Objects.isNull(res)) {
            return "failed";
        } else {
            session.setAttribute("sid", res.getId());
            System.out.println("Session Variable Set = " + session.getAttribute("sid"));
            return "success";
        }
    }

    @GetMapping("/getUserDetails")
    public User getUserDetailsBySessionId(Authentication au) {
        String email = au.getName();
        return ur.findByEmail(email).get(0);
    }
    @PostMapping("/gHome")
    public String gUser(){
        return "redirect:http://localhost:5173/home";
    }
}
