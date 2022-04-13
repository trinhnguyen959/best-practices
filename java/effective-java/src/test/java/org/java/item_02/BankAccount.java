package org.java.item_02;

public record BankAccount(String name, String accountNumber,
                          String address, String email,
                          boolean newsletter, boolean mobileBanking) {
}