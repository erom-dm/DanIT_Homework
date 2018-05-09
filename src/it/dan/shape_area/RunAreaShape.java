// Given shape dimensions, calculate its area.

package it.dan.shape_area;
import java.util.Scanner;

abstract class Shape{
    float area(){
        return -1;
    }
}

class Rectangle extends Shape{
    private int w;
    private int l;

    Rectangle(int length, int width){
        w = width;
        l = length;
    }

    float area(){
        return (float) w * l;
    }
}

class Triangle extends Shape{
    // This implementation does not check if user provided input will constitute a valid triangle.
    private float a;
    private float b;
    private float c;

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

class Circle extends Shape{
    private int r;

    Circle(int r){
        this.r = r;
    }

    float area(){
        double pi = 3.14;
        float area = (float) pi * r * r;
        return area;

    }
}

public class RunAreaShape {
    public static void main(String[] args) {
        Shape shape;
        Scanner in = new Scanner(System.in);
        System.out.println("Type in the desired shape: Circle = 1; Rectangle = 2; Triangle = 3");
        int input = in.nextInt();

        if (input == 1){
            System.out.println("Provide a radius for a circle: ");
            Circle circle = new Circle(in.nextInt());
            shape = circle;
            System.out.println("Area of your circle is : " + shape.area());
        }
        else if (input == 2){
            System.out.println("Provide 2 sides for a rectangle: ");
            Rectangle rectangle = new Rectangle (in.nextInt(), in.nextInt());
            shape = rectangle;
            System.out.println("Area of your rectangle is : " + shape.area());
        }
        else if (input == 3){
            System.out.println("Provide 3 sides for a triangle: ");
            Triangle triangle = new Triangle (in.nextInt(), in.nextInt(), in.nextInt());
            shape = triangle;
            System.out.println("Area of your triangle is : " + shape.area());
        }
        else{
            System.out.println("Wrong input");
        }
    }
}
