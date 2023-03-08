package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.model.Bank;
import com.example.demo.repositories.BankRepo;

@Service
public class BankService {

	@Autowired
	private BankRepo emp;
	
	public Bank saveDetails(Bank e) 
	{
		return emp.save(e);
	}
	
	public Optional<Bank> getDetailsId(int id)
	{
		return emp.findById(id);
	}
	
	public List<Bank> getAllDetails()
	{
		return emp.findAll();
	}
	public void deleteClientById(int id) 
	{
		emp.deleteById(id);
	}
	
	public Bank update(int id, Bank e)
	{
		return emp.saveAndFlush(e);
	}
}
