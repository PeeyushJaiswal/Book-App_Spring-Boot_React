package com.ex.user;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{ //Or CrudRepository
    List<User> findByEmail(String email);
}
