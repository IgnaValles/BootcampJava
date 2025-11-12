public class App {

    public static void main(String[] args){
        Producto p1=new Producto();
        p1.nombre="Leche";
        p1.precio=0.75;
        p1.stock=4000;
        Producto p2=new Producto();
        p2.nombre="Carne";
        p2.precio=3.45;
        p2.stock=2500;
        p1.mostrarDatos();
        p2.mostrarDatos();
    }
}

