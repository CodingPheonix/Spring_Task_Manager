package com.example.spring_task_manager_backend.repository;

import com.example.spring_task_manager_backend.entitiy.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
