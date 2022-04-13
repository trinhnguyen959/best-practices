package org.java.item_02;

public final class BankAccount {
	private String name;
	private String accountNumber;
	private String address;
	private String email;
	private boolean newsLetter;
	private boolean mobileBanking;

	private BankAccount() {
	}

	public static class Builder {
		private BankAccount bankAccount;

		Builder() {
			bankAccount = new BankAccount();
		}

		BankAccount build() {
			BankAccount builtAccount = this.bankAccount;
			this.bankAccount = new BankAccount();
			return builtAccount;
		}

		public Builder withName(String name) {
			this.bankAccount.name = name;
			return this;
		}

		public Builder withAccountNumber(String accountNumber) {
			this.bankAccount.accountNumber = accountNumber;
			return this;
		}

		public Builder withAddress(String address) {
			this.bankAccount.address = address;
			return this;
		}

		public Builder withEmail(String email) {
			this.bankAccount.email = email;
			return this;
		}

		public Builder isNewsLetter(boolean isNewsLetter) {
			this.bankAccount.newsLetter = isNewsLetter;
			return this;
		}

		public Builder isMobileBanking(boolean isMobileBanking) {
			this.bankAccount.mobileBanking = isMobileBanking;
			return this;
		}
	}

	public String getName() {
		return name;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public String getAddress() {
		return address;
	}

	public String getEmail() {
		return email;
	}

	public boolean isNewsLetter() {
		return newsLetter;
	}

	public boolean isMobileBanking() {
		return mobileBanking;
	}

	@Override
	public String toString() {
		return "BankAccount{" +
				"name='" + name + '\'' +
				", accountNumber='" + accountNumber + '\'' +
				", address='" + address + '\'' +
				", email='" + email + '\'' +
				", newsLetter=" + newsLetter +
				", mobileBanking=" + mobileBanking +
				'}';
	}
}