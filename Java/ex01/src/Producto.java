public class Producto {
    String nombre;
    double precio;
    int stock;

    void mostrarDatos(){
       System.out.println("Nombre: "+ this.nombre + ", precio: "+ this.precio + ", stock: "+ this.stock);
    }
}