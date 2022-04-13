package org.java.item_02;

import org.junit.jupiter.api.Test;

// Consider a builder when faced with many constructor parameters
public class Mainly {
	@Test
	public void builderConstructor() {
		BankAccount account = new BankAccountBuilder("Trinh Nguyen", "0827127127127")
				.withAddress("Namek")
				.withEmail("trinhnguyen959@gmail.com")
				.isReceivedNews(true)
				.isMobileBanking(true)
				.build();
		System.out.println("account = " + account);
	}
}
