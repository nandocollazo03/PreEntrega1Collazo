function envio(montoPedido) {
    if (montoPedido > 5000) {
        document.write("<br>");
        document.write("El envío de tu compra es gratuito");
    } else {
        document.write("<br>");
        document.write("El costo del envío es $250");
    }
}


function RealizarPedido() {
    let comprar = prompt("¿Quieres llevarte algo de nuestra venta de garage? - 1-Sí / 2-No")

    if (comprar == '1') {
        let totalPedido = 0;
        let pedido = "";

        while (comprar == '1') {
            let producto = prompt("Ingresa el nombre del producto");
            let precio = parseInt(prompt("Ingresa el precio del producto"));
            let cantidad = parseInt(prompt("Ingresa la cantidad"));

            pedido += `${cantidad} - ${producto}, `;

            totalPedido += precio * cantidad;

            comprar = prompt("¿Quieres seguir comprando - 1-Sí / 2-No")
        }

        document.write("¡Gracias por tu compra!");
        document.write("<br>");
        document.write(`Compraste: ${pedido}`);
        document.write("<br>");
        document.write("<br>");
        document.write(`El monto total del tu pedido es: ${totalPedido}`);

        envio(totalPedido);
    } else {
        document.write("Es una lástima que no hayas encontrado nada, te esperamos en la próxima venta.")
    }


}

RealizarPedido();