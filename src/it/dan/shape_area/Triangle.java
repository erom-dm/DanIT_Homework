package it.dan.shape_area;

public class Triangle extends Shape{
    // This implementation does not check if user provided input will constitute a valid triangle.
    private float a;
    private float b;
    private float c;

    public float getA() {
        return a;
    }

    public void setA(float a) {
        this.a = a;
    }

    public float getB() {
        return b;
    }

    public void setB(float b) {
        this.b = b;
    }

    public float getC() {
        return c;
    }

    public void setC(float c) {
        this.c = c;
    }

    public Triangle(){}

    Triangle(int a, int b, int c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    float area(){
        float s = (a + b + c) / 2;  // semiperimeter
        float result = (float) Math.sqrt(s*(s - a)*(s - b)*(s - c));
        return result;
    }

}
