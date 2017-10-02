package br.com.interage.quickstart.security;

import java.util.Arrays;
import java.util.List;

import br.gov.pa.prodepa.security.User;

public class UserInterage implements User{

	private String login;
	private List<String> roles;
	
	public UserInterage(String login, String[] roles) {
		this.login = login;
		this.roles = Arrays.asList(roles);
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
