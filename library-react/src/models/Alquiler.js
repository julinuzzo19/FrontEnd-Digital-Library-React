export default class Alquiler {
    constructor(clienteId, isbn, fechareserva, fechaalquiler) {
      this.clienteId = clienteId;
      this.isbn = isbn;
      this.fechaReserva = fechareserva;
      this.fechaAlquiler = fechaalquiler;
    }
  }