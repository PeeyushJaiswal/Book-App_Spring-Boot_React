// package com.ex.config;

// import com.ex.user.User;
// import com.ex.user.UserRepository;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.AuthenticationProvider;
// import org.springframework.security.authentication.BadCredentialsException;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.AuthenticationException;
// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Component;

// import java.util.ArrayList;
// import java.util.List;

// @Component
// public class EazyBankUsernamePwdAuthenticationProvider implements AuthenticationProvider {

//     @Autowired
//     private UserRepository customerRepository;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

//     @Override
//     public Authentication authenticate(Authentication authentication) throws AuthenticationException {
//         String username = authentication.getName();
//         String pwd = authentication.getCredentials().toString();
//         List<User> customer = customerRepository.findByEmail(username);
//         if (customer.size() > 0) {
//             if (passwordEncoder.matches(pwd, customer.get(0).getPassword())) {
//                 List<GrantedAuthority> authorities = new ArrayList<>();
//                 authorities.add(new SimpleGrantedAuthority(customer.get(0).getAuthority()));
//                 return new UsernamePasswordAuthenticationToken(username, pwd, authorities);
//             } else {
//                 throw new BadCredentialsException("Invalid password!");
//             }
//         }else {
//             throw new BadCredentialsException("No user registered with this details!");
//         }
//     }

//     @Override
//     public boolean supports(Class<?> authentication) {
//         return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
//     }

// }
