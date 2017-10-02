package br.com.interage.quickstart.business.service;

import javax.ejb.Stateless;

import br.com.interage.quickstart.business.model.Pessoa;
import br.com.interage.quickstart.integration.persistence.PessoaDao;
import br.gov.pa.prodepa.business.AbstractBusinessCrud;

@Stateless
public class PessoaBusinessBean extends AbstractBusinessCrud<Pessoa, PessoaDao> implements PessoaBusiness{

	private static final long serialVersionUID = 5904760153311246684L;

}
