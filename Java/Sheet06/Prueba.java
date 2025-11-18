import java.util.List;
import java.util.stream.Collectors;

public class Prueba {

    public static void main(String[] args) {
        
        //Ejercicio 01 --------------------------------------------------

        List<String> nombres = List.of("Ana Ruiz", "Juan Pérez", "María Torres", "Sol", "Pedro López");
        List<String> res = nombres.stream()
            .filter(nombre -> nombre.length() > 9)
            .map(String::toUpperCase)
            .collect(Collectors.toList());

        System.out.println(res);

        //Ejercicio 02 ------------------------------------------------

        List<Integer> numeros = List.of(5, 12, 47, 105, 89, 2, 100, 34);
        int resu = numeros.stream()
            .filter(numero -> numero >10 && numero<100)
            .mapToInt(Integer::intValue)
            .sum();

        System.out.println("Suma = " + resu);
    }
}
