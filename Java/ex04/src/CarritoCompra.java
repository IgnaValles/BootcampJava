import java.util.ArrayList;
import java.util.List;

public class CarritoCompra {
    private List<LineaCarrito> lineas = new ArrayList<>();

    private class LineaCarrito{
        Producto producto;
        int unidades;
        // private static int contador=0;
        public LineaCarrito(Producto producto, int unidades) {
            this.producto = producto;
            this.unidades = unidades;
        }

        double subtotal(){
            return producto.precio * unidades;
        }   
    }

    public void agregarProducto(Producto p,int unidades) {
        if (p == null) {
            throw new IllegalArgumentException("Producto no válido");
        }
        if (unidades <= 0) {
            throw new IllegalArgumentException("Producto no válido");
        }
        if (p.precio <= 0) {
            throw new IllegalArgumentException("Producto no válido");
        }
        LineaCarrito linea = new LineaCarrito(p, unidades);
        if(lineas.contains(linea)){
            linea.unidades=linea.unidades+unidades;
        }
        lineas.add(linea);

    }

    public void eliminarProducto(String nombre){
        
    }

    
}
