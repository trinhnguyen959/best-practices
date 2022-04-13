package org.java.item_01;

// khong the ke thua
public class Point {
	private double x;
	private double y;

	public enum Angle {
		RAD,
		DEG,
	}

	private Point(double x, double y) {
		this.x = x;
		this.y = y;
	}

	// avoid duplicate constructor -> khong nen dung
	private Point(double rho, double phi, int dummy) {
		this.x = rho * Math.cos(phi);
		this.y = rho * Math.sin(phi);
	}

	// enum
	private Point(double rho, double phi, Angle angle) {
		switch (angle) {
			case RAD -> {
				this.x = rho * Math.cos(phi);
				this.y = rho * Math.sin(phi);
			}
			case DEG -> {
				double secondPhi = phi * Math.PI / 180.0;
				this.x = rho * Math.cos(secondPhi);
				this.y = rho * Math.sin(secondPhi);
			}
		}
	}

	// static factory method
	public static Point fromCartesian(double x, double y) {
		return new Point(x, y);
	}

	public static Point fromPolar(double rho, double phi, Angle angle) {
		return new Point(rho, phi, angle);
	}

	public static Point fromPolarRadian(double rho, double phi) {
		return new Point(rho, phi, Angle.RAD);
	}

	public static Point fromPolarDegree(double rho, double phi) {
		return new Point(rho, phi, Angle.DEG);
	}

	public static Point newCartesian(double x, double y) {
		return new Point(x, y);
	}

	@Override
	public String toString() {
		return "Point{" +
				"x=" + x +
				", y=" + y +
				'}';
	}
}
