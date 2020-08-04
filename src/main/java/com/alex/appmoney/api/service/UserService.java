package com.alex.appmoney.api.service;

import com.alex.appmoney.api.model.User;
import com.alex.appmoney.api.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service(value = "userService")
public class UserService implements UserDetailsService {
	
	@Autowired
	private UserRepository repository;

	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
		User user = repository.findByUsername(userId);
		if(user == null){
			throw new UsernameNotFoundException("Usuário ou senha invalida.");
		}
		List<SimpleGrantedAuthority> listGrant = new ArrayList<SimpleGrantedAuthority>();
		user.getRoles().forEach(r -> listGrant.add(new SimpleGrantedAuthority(r.getName())));
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), listGrant);
	}

	public List<User> findAll() {
		List<User> list = new ArrayList<>();
		repository.findAll().iterator().forEachRemaining(list::add);
		return list;
	}


}
