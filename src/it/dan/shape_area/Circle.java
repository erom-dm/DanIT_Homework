package it.dan.shape_area;

public class Circle extends Shape {
    private int r;

    public int getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }

    public Circle(){}

    Circle(int r) {
        this.r = r;
    }

    float area() {
        double pi = 3.14;
        float area = (float) pi * r * r;
        return area;
    }
}
