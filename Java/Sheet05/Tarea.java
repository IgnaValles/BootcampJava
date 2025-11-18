public class Tarea {
    private String descripcion;
    private int prioridad;

    public Tarea(String descripcion, int prioridad) {
        this.descripcion = descripcion;
        this.prioridad = prioridad;
    }

    @Override
    public String toString() {
        return "[Descripción: " + descripcion + ", Prioridad: " + prioridad + "]";
    }
}
