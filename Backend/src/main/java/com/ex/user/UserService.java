package com.ex.user;

import java.util.ArrayList;
import java.util.List;

//import com.ex.user.User;
//import com.ex.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired; //Not there in Infosys
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service; //Not there in Infosys

@Service
public class UserService implements UserDetailsService{
	@Autowired
	private UserRepository ur;

	@Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        String userName, password;
        List<GrantedAuthority> authorities;
        List<User> user = ur.findByEmail(email);
        if (user.size() == 0) {
            throw new UsernameNotFoundException("User details not found for the user : " + email);
        } else{
            userName = user.get(0).getEmail();
            password = user.get(0).getPassword();
            authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority(user.get(0).getAuthority()));
        }
        return new org.springframework.security.core.userdetails.User(userName,password,authorities);
    }

	public User saveUser(User user) {
		return ur.save(user);
	}

	public User validateUser(User iu) {
		List<User> users = ur.findAll();
		return users.stream()
				.filter(user -> user.getEmail().equals(iu.getEmail()) && user.getPassword().equals(iu.getPassword()))
				.findFirst()
				.orElse(null);
	}
}
