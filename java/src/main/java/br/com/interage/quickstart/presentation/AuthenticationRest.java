package br.com.interage.quickstart.presentation;

import java.util.Map;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import br.gov.pa.prodepa.exceptions.ApplicationException;
import br.gov.pa.prodepa.exceptions.BusinessException;
import br.gov.pa.prodepa.exceptions.SecurityException;
import br.gov.pa.prodepa.security.SecurityContext;
import br.gov.pa.prodepa.security.anotations.LoggedIn;

@Path("auth")
public class AuthenticationRest {

	@Inject
	private SecurityContext securityContext; 
	
	@POST
	@Path("autorizar")
	@Consumes("application/json")
	@Produces("application/json")
	public Response autorizar(@HeaderParam("Authorization") String authHeader) {
		try {
			securityContext.login();
			Map<String, Object> exportedSecurityContext = securityContext.exportSecurityContext();
			return Response.ok(exportedSecurityContext).build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.serverError().entity(e).build();
		}
	}
	
	@LoggedIn
	@POST
	@Path("autorizar-pagina")
	@Consumes("application/json")
	@Produces("application/json")
	public Response autorizarPagina(String page) {
		try {
			boolean result = securityContext.checkPageAcess(page);
			return Response.ok(result).build();
		} catch (Exception e) {
			return Response.serverError().entity(e).build();
		}
	}
	
	@LoggedIn
	@POST
	@Path("logout")
	public void logout() throws SecurityException, BusinessException, ApplicationException {
		securityContext.logout();
	}
}
