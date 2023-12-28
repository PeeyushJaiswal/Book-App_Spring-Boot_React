package com.ex.user;

import java.io.IOException;
import java.io.PrintWriter;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
// @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
// @RequestMapping(value = "/x")
public class Test {

    // @GetMapping("/")
    // public String test(Authentication authentication){
    // System.out.println(authentication);
    // return "Just testing123";
    // }

    @GetMapping("/un")
    public String Unauthenticated() {
        return "Unauthenticated Endpoint";
    }

    @GetMapping("/au2")
    public String Authenticated(Authentication au) {
        return "Authenticated Endpoint:    "+au.getPrincipal();
    }

    @GetMapping("/au")
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    out.println("<html><body>");
    out.println("<h2>Hello, Servlet!</h2>");
    out.println("</body></html>");
}

}
