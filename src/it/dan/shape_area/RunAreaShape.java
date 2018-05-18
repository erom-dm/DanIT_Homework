// Given shape dimensions, calculate its area.

package it.dan.shape_area;
import java.beans.XMLEncoder;
import java.beans.XMLDecoder;
import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

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
