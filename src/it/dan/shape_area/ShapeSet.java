package it.dan.shape_area;

import java.beans.XMLEncoder;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

class ShapeSet <T extends Shape> {
    private List<T> list;

    public ShapeSet() {
        list = new ArrayList<>();
    }

    public void addShapes(T ... a){
        for(T shape:a){
            list.add(shape);
        }
    }

    public void writeToFile(String filePath){
        try{
            XMLEncoder encoder = new XMLEncoder(new BufferedOutputStream(
                    new FileOutputStream(filePath)));
            for(T shape: this.list){
                encoder.writeObject(shape);
                //encoder.writeObject(shape.area());
            }
            encoder.close();
        }
        catch (IOException e){
            e.printStackTrace();
        }
    }

}
