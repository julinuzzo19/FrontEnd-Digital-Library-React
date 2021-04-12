import Global from "../models/Global";

export function Bienvenidacliente(cliente) {
  const place = document.getElementById("h3title");
  const element = document.createElement("h3");
  element.innerHTML = `<p class="titlecliente"> ${cliente.nombre}!</p>`;
  place.appendChild(element);
}
/* Cliente creado y seleccionado por defecto */
export async function getCliente(id) {
  return await fetch(Global.url_clientes + id).
  then((response) =>response.json());
}
