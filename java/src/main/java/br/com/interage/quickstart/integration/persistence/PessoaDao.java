package br.com.interage.quickstart.integration.persistence;

import java.util.List;

import javax.persistence.TypedQuery;

import br.com.interage.quickstart.business.model.Pessoa;
import br.gov.pa.prodepa.persistence.AbstractDaoCrud;

public class PessoaDao extends AbstractDaoCrud<Pessoa>{

	private static final long serialVersionUID = 7793874041753895354L;

	@Override
	public List<Pessoa> search(Pessoa bean, Integer page, Integer maxResults) {
		StringBuilder hql = new StringBuilder();
		hql.append(" select p from Pessoa p");
		
		if(bean != null){
			if(bean.getNome() != null && bean.getNome().trim().length() > 0){
				hql.append(" where lower(p.nome) like lower(:nome) ");
			}
		}
		
		TypedQuery<Pessoa> q = getEntityManager().createQuery(hql.toString(), Pessoa.class);
		
		if(page != null && maxResults != null){
			
			int firstIndex = (page - 1) * maxResults;
			
			q.setFirstResult(firstIndex);
			q.setMaxResults(maxResults);
		}
		
		if(bean != null){
			if(bean.getNome() != null && bean.getNome().trim().length() > 0){
				q.setParameter("nome", bean.getNome() + "%");
			}
		}
		
		return q.getResultList();
	}

	@Override
	public Integer count(Pessoa bean) {
		StringBuilder hql = new StringBuilder();
		hql.append(" select count(p) from Pessoa p");
		
		TypedQuery<Long> q = getEntityManager().createQuery(hql.toString(), Long.class);
		
		return q.getSingleResult().intValue();
	}

}
