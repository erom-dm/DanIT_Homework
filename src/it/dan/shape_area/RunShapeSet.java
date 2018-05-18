package it.dan.shape_area;

public class RunShapeSet {
    public static void main(String[] args) {
        String sep = System.getProperty("file.separator");
        String appDir = "C:" + sep + "F4";

        String filePath = appDir + sep + "test.xml";

        /*Rectangle square = new Rectangle(5,5);
        Rectangle second = new Rectangle(10, 15);
        Rectangle third = new Rectangle(999, 555);
        Rectangle narrow = new Rectangle(1, 100);*/

        /*Triangle square = new Triangle(5,5,5);
        Triangle second = new Triangle(10, 15, 11);
        Triangle third = new Triangle(999, 555, 777);
        Triangle narrow = new Triangle(1, 100, 100);*/

        Circle square = new Circle(5);
        Circle second = new Circle(10);
        Circle third = new Circle(999);
        Circle narrow = new Circle(1);

        ShapeSet shapeSet = new ShapeSet();
        shapeSet.addShapes(square, second, third, narrow);
        shapeSet.writeToFile(filePath);
    }
}
