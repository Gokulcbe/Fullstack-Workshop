package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Bankaccount")
public class Bank {
	@Id
	@Column(name="accountId")
	private int accid;
	
	@Column(name="Name")
	private String clientname;
	
	@Column(name="bankName")
	private String bankname;
	
	@Column(name="Branch")
	private String branch;
	
	@Column(name="Mobile")
	private long mobile;
	
	@Column(name="mailId")
	private String mailid;
	
	@Column(name="Balance")
	private int balance;
	
	public int getId() {
		return accid;
	}
	
	public void setId(int Id) {
		this.accid = Id;
	}
	
	public String getClientName() {
		return clientname;
	}
	
	public void setClientName(String name) {
		this.clientname = name;
	}
	
	public String getBankName() {
		return bankname;
	}
	
	public void setBankName(String bname) {
		this.bankname = bname;
	}
	
	public String getBranch() {
		return branch;
	}
	
	public void setBranch(String branch) {
		this.branch = branch;
	}
	
	public long getMobile() {
		return mobile;
	}
	
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	
	public String getmail() {
		return mailid;
	}
	
	public void setmail(String mail) {
		this.mailid = mail;
	}
	
	public int getBalance() {
		return balance;
	}
	
	public void setBalance(int balance) {
		this.balance = balance;
	}
	
	public Bank(int Id, String name, String bname, String branch, long mobile, String mail, int balance) {
		super();
		this.accid = Id;
		this.clientname = name;
		this.bankname = bname;
		this.branch = branch;
		this.mobile = mobile;
		this.mailid = mail;
		this.balance = balance;
	}
	
	public Bank() {
		
	}


}
