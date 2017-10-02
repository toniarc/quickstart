package br.com.interage.quickstart.presentation;

import javax.ws.rs.Path;

import br.com.interage.quickstart.business.model.Pessoa;
import br.com.interage.quickstart.business.service.PessoaBusiness;
import br.com.interage.quickstart.security.OperacoesCA;
import br.gov.pa.prodepa.rest.AbstractRestCrud;
import br.gov.pa.prodepa.security.anotations.AuthorizationsRestCrud;
import br.gov.pa.prodepa.security.anotations.LoggedIn;

@Path("/pessoa")
@LoggedIn
@AuthorizationsRestCrud(
	search = OperacoesCA.PESSOA_PESQUISAR,
	insert = OperacoesCA.PESSOA_CADASTRAR,
	update = OperacoesCA.PESSOA_ALTERAR,
	remove = OperacoesCA.PESSOA_EXCLUIR,
	enable = OperacoesCA.PESSOA_ATIVAR_DESATIVAR,
	disable = OperacoesCA.PESSOA_ATIVAR_DESATIVAR,
	load = OperacoesCA.PESSOA_ALTERAR
)
public class PessoaRest extends AbstractRestCrud<Pessoa, PessoaBusiness> {

	private static final long serialVersionUID = 3289306692721241244L;

	public PessoaRest() {
	}

}
