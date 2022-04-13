package org.java.item_03;

//Enforce the singleton property with a private constructor or an enum type
public class BestSingleton {

	private BestSingleton() {
	}

	public static BestSingleton getInstance() {
		return BestSingletonHelper.INSTANCE;
	}

	private static class BestSingletonHelper {
		private static final BestSingleton INSTANCE = new BestSingleton();
	}
}
