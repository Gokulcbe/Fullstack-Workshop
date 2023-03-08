package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Bank;
import com.example.demo.service.BankService;
@CrossOrigin
@RestController
public class ApiController {

	@Autowired
	private BankService ser;
	
	@GetMapping("/get")
	public List<Bank> getDetails()
	{
		return ser.getAllDetails();
	}
	
	@GetMapping("/get/{id}")
	public Optional<Bank> getDetailsById(@PathVariable int id)
	{
		return ser.getDetailsId(id);
	}
	
	@PostMapping("/add")
	public String postDetails(@RequestBody Bank e)
	{
		ser.saveDetails(e);
		return "Bank Details Added Successfully";
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteDetails(@PathVariable int id) {
		ser.deleteClientById(id);
		return "Id Deleted"; 
	}
	
	@PutMapping("/update/{id}")
	public Bank update(@PathVariable int id, @RequestBody Bank e) {
		return ser.update(id, e);
	}
	
}
