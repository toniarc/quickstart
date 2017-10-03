package br.com.interage.quickstart.security;

import javax.enterprise.context.SessionScoped;

import br.gov.pa.prodepa.exceptions.ApplicationException;
import br.gov.pa.prodepa.exceptions.BusinessException;
import br.gov.pa.prodepa.exceptions.SecurityException;
import br.gov.pa.prodepa.security.SecurityContext;

@SessionScoped
public class SecurityContextInterageImpl extends SecurityContext {
	
	private static final long serialVersionUID = -6848727513353129273L;

	public boolean login() throws ApplicationException, BusinessException {
		this.authenticatedUser = new UserInterage(1L, "antonio.junior", new String[]{"146.975.3549", "146.975.3552", "146.975.3548", "146.975.3551", "146.975.3550"});
		
		this.isLoggedIn = true;
		return this.isLoggedIn;
	}
	
	public void updateSession() throws SecurityException, ApplicationException {
		
	}
	
	public void logout() throws SecurityException, BusinessException, ApplicationException{
		this.isLoggedIn = false;
		this.authenticatedUser = null;
	}

}
