package br.com.interage.quickstart.security;

import java.util.Arrays;
import java.util.List;

import br.gov.pa.prodepa.security.User;

public class UserInterage implements User{

	private Long id;
	private String login;
	private List<String> roles;
	
	public UserInterage(Long id, String login, String[] roles) {
		this.id = id;
		this.login = login;
		this.roles = Arrays.asList(roles);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String getLogin() {
		return this.login;
	}

	@Override
	public List<String> getRoles() {
		return this.roles;
	}

}
