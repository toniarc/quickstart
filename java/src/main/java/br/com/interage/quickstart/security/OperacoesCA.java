package br.com.interage.quickstart.security;

import javax.enterprise.context.ApplicationScoped;

import br.gov.pa.prodepa.security.model.AbstractOperacoesControleAcesso;

@ApplicationScoped
public class OperacoesCA extends AbstractOperacoesControleAcesso {

	public static final String PESSOA_ALTERAR = "146.975.3549";	
	public static final String PESSOA_ATIVAR_DESATIVAR = "146.975.3552";
	public static final String PESSOA_CADASTRAR = "146.975.3548";
	public static final String PESSOA_EXCLUIR = "146.975.3551";
	public static final String PESSOA_PESQUISAR = "146.975.3550";
	
}
