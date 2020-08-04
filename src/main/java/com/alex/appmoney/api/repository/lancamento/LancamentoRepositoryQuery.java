package com.alex.appmoney.api.repository.lancamento;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.alex.appmoney.api.model.Lancamento;
import com.alex.appmoney.api.repository.Filter.LancamentoFilter; 

public interface LancamentoRepositoryQuery {

	public Page<Lancamento> filtrar(LancamentoFilter lancamentoFilter, Pageable pageable);
	
}