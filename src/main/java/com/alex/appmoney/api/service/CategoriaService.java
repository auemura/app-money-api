package com.alex.appmoney.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.alex.appmoney.api.model.Categoria;
import com.alex.appmoney.api.repository.CategoriaRepository;

@Service
public class CategoriaService {
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	public Categoria atualizar (Long codigo, Categoria categoria) {
		Categoria categoriaSalva = categoriaRepository.findById(codigo).orElse(null);
		if (categoriaSalva == null ) {
			throw new EmptyResultDataAccessException(1);
		}
		BeanUtils.copyProperties(categoria, categoriaSalva, "codigo");
		categoriaRepository.save(categoriaSalva);
		return categoriaSalva;
	}

}
