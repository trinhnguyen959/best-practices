package org.java.two;

public record BankAccount(String name, String accountNumber,
                          String address, String email,
                          boolean newsletter, boolean mobileBanking) {
}