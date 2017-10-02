package br.com.interage.quickstart.business.service;

import javax.ejb.Local;

import br.com.interage.quickstart.business.model.Pessoa;
import br.gov.pa.prodepa.business.BusinessCrud;

@Local
public interface PessoaBusiness extends BusinessCrud<Pessoa>{

}
