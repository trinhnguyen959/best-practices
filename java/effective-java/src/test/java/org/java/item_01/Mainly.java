package org.java.item_01;

import org.java.item_01.Point.Angle;
import org.junit.jupiter.api.Test;

// Consider static factory methods instead of constructors
public class Mainly {
	@Test
	public void staticFactoryMethod() {
/*		Point pointOne = new Point(3.0, 4.0);
		System.out.println("pointOne = " + pointOne);

		Point pointTwo = new Point(5.0, 50.0 * Math.PI / 180.0, 8);
		System.out.println("pointOne = " + pointTwo);

		Point pointThree = new Point(5.0, Math.atan2(4.0, 3.0), Angle.RAD);
		System.out.println("pointThree = " + pointThree);*/

		Point pointOne = Point.fromCartesian(3.0, 4.0);
		System.out.println("pointOne = " + pointOne);

		// best practice
		Point pointThree = Point.fromPolar(5.0, Math.atan2(4.0, 3.0), Angle.RAD);
		System.out.println("pointThree = " + pointThree);

		Point pointFourth = Point.fromPolar(5.0, 52.13, Angle.DEG);
		System.out.println("pointFourth = " + pointFourth);
	}
}
