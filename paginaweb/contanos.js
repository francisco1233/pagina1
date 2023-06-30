
        function enviarFormulario() {
            var nombre = document.getElementById("nombre").value;
            var telefono = document.getElementById("telefono").value;
            var correo = document.getElementById("correo").value;
            var problema = document.getElementById("problema").value;
             // Aquí puedes agregar la lógica para enviar la información a tu correo electrónico
            // Puedes usar una librería de envío de correo o una API para realizar esta tarea
             // Ejemplo de impresión de los valores en la consola
            console.log("Nombre: " + nombre);
            console.log("Teléfono: " + telefono);
            console.log("Correo Electrónico: " + correo);
            console.log("Problema: " + problema);
             // Puedes agregar más lógica aquí, como mostrar un mensaje de éxito o redirigir a otra página
        }


    <form>
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" required><br><br>
        <label for="telefono">Teléfono:</label><br>
        <input type="tel" id="telefono" required><br><br>
        <label for="correo">Correo Electrónico:</label><br>
        <input type="email" id="correo" required><br><br>
        <label for="problema">Problema:</label><br>
        <textarea id="problema" rows="4" required></textarea><br><br>
        <input type="button" value="Enviar" onclick="enviarFormulario()">
    </form>
</body>
</html>