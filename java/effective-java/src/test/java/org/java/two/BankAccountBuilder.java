package org.java.two;

public class BankAccountBuilder {
	private final String name;
	private final String accountNumber;
	private String address;
	private String email;
	private boolean isReceivedNews;
	private boolean isMobileBanking;

	public BankAccountBuilder(String name, String accountNumber) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	public BankAccountBuilder withAddress(String address) {
		this.address = address;
		return this;
	}

	public BankAccountBuilder withEmail(String email) {
		this.email = email;
		return this;
	}

	public BankAccountBuilder isReceivedNews(boolean isReceivedNews) {
		this.isReceivedNews = isReceivedNews;
		return this;
	}

	public BankAccountBuilder isMobileBanking(boolean isMobileBanking) {
		this.isMobileBanking = isMobileBanking;
		return this;
	}

	public BankAccount build() {
		return new BankAccount(this.name, this.accountNumber, this.address,
				this.email, this.isReceivedNews, this.isMobileBanking);
	}
}
