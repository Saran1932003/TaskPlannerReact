package com.iamneoProject.BackendProject.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = "http://localhost:3000") //5173
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add")
    public ResponseEntity<String> addNewUser(@RequestBody User user) {
        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with this email already exists");
        } else {
            User n = new User();
//            n.setUsername(user.getUsername());
            n.setEmail(user.getEmail());
            n.setPassword(user.getPassword());
            n.setId(user.getId());
            userRepository.save(n);
            return ResponseEntity.status(HttpStatus.OK).body("User saved successfully");
        }
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@RequestBody User user) {
        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser != null) {
            if (existingUser.getPassword().equals(user.getPassword())) {
                // Authentication successful, you can generate a token here if needed
                // For simplicity, let's just return a success message
                return ResponseEntity.status(HttpStatus.OK).body("Authentication successful");
            } else {
                // Password doesn't match
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed (password mismatch)");
            }
        } else {
            // User not found
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }
    }

    
}
