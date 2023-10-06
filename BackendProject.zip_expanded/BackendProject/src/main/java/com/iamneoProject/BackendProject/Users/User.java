package com.iamneoProject.BackendProject.Users;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="adminlogin")
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;  

  private String email;
  
  private String password;
  
  
  


//  public User(Integer id, String username, String email, String password) {
////	super();
//	this.id = id;
//	this.username = username;
//	this.email = email;
//	this.password = password;


public Integer getId() {
    return id;
  }

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}



public void setId(Integer id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
}
