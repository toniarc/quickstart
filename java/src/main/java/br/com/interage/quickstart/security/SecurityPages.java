package br.com.interage.quickstart.security;

import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import br.gov.pa.prodepa.security.model.AbstractPageSecurity;
import br.gov.pa.prodepa.security.model.Page;

@ApplicationScoped
public class SecurityPages extends AbstractPageSecurity {
	
	List<Page> securityPages = new ArrayList<>();
	
	public SecurityPages() {
		add(new Page("/main/pessoa-form", new String[]{OperacoesCA.PESSOA_CADASTRAR, OperacoesCA.PESSOA_ALTERAR}));
		add(new Page("/main/pessoa-list", new String[]{OperacoesCA.PESSOA_PESQUISAR}));
	}
	
	
}
