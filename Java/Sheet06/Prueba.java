import java.util.List;
import java.util.stream.Collectors;

public class Prueba {

    public static void main(String[] args) {
        
        List<String> nombres = List.of("Ana Ruiz", "Juan Pérez", "María Torres", "Sol", "Pedro López");
        List<String> resultado = nombres.stream()
            .filter(nombre -> nombre.length() > 9)
            .map(String::toUpperCase)
            .collect(Collectors.toList());

        System.out.println(resultado);
    }
}
