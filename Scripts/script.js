const pantalla = document.getElementById("Resultado");
const botones = document.querySelectorAll("button");

let operacion = "";

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (valor === "C") {
            operacion = "";
            pantalla.textContent = "0";
            return;
        }

        if (valor === "←") {
            operacion = operacion.slice(0, -1);
            pantalla.textContent = operacion || "0";
            return;
        }

        if (valor === "=") {
            try {
                operacion = eval(operacion).toString();
                pantalla.textContent = operacion;
            } catch {
                pantalla.textContent = "Error";
                operacion = "";
            }
            return;
        }

        // Agregar número u operador
        operacion += valor;
        pantalla.textContent = operacion;
    });
});