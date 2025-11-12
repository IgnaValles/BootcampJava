public class Producto {
    String nombre;
    double precio;
    int stock;

    public Producto(String nombre, double precio, int stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }

    public Producto(String nombre, double precio){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=500;
    }

    void mostrarDatos(){
       System.out.println("Nombre: "+ this.nombre + ", precio: "+ this.precio + ", stock: "+ this.stock);
    }
}
