package org.java.item_02;

import org.junit.jupiter.api.Test;

// Consider a builder when faced with many constructor parameters
public class Mainly {
	@Test
	public void builderConstructor() {
		BankAccount account = new BankAccount.Builder()
				.withName("Trinh Nguyen")
				.withAccountNumber("09281823471719")
				.withAddress("Earth")
				.withEmail("trinhnguyen959@gmail.com")
				.isNewsLetter(true)
				.isMobileBanking(true)
				.build();
		System.out.println("account = " + account);
	}
}
