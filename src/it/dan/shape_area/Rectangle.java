package it.dan.shape_area;

public class Rectangle extends Shape{
    private int w;
    private int l;
    private float area = this.area();

    public float getArea() {
        return area;
    }

    public void setArea(float area) {
        this.area = area;
    }

    public int getW() {
        return w;
    }

    public void setW(int w) {
        this.w = w;
    }

    public int getL() {
        return l;
    }

    public void setL(int l) {
        this.l = l;
    }

    public Rectangle(){
    }

    Rectangle(int length, int width){
        w = width;
        l = length;
    }

    float area(){
        return (float) w * l;
    }

}
