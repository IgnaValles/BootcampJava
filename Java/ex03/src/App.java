public class App {
    public static void main(String[] args) throws Exception {
        Alumno a = new Alumno(); //Falla porque el constructor por defecto deja de estar vacio, y ese constructor ya no está
        //El constructor por defecto existe cuando no hay puesto ninguno, en el momento que colocas uno, deja de existir
    }
}
