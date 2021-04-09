import React, { Component } from 'react'
import Alquiler from '../../models/Alquiler.js'
import Global from '../../models/Global.js'

export default class ListarLibros extends Component {
   
    postAlquiler(alquilerjson){
        fetch(Global.url_alquileres, {
            method: "POST",
            body: alquilerjson,
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            })
            .catch((err) => console.log(err));
    }
    
    reservar=(libro,isbn)=>{

        var fechareserva = new Date();

        fechareserva =
          fechareserva.getDate() +
          "/" +
          (fechareserva.getMonth() + 1) +
          "/" +
          fechareserva.getFullYear();
      
        var fecha = String(fechareserva);
      
        var reserva = new Alquiler(1, isbn, fecha, "");
        var reservajson = JSON.stringify(reserva);

       this.postAlquiler(reservajson);

    }

     alquilar=(libro,isbn)=>{
        var fechaalquiler = new Date();
        fechaalquiler =
        fechaalquiler.getDate() +
        "/" +
        (fechaalquiler.getMonth() + 1) +
        "/" +
        fechaalquiler.getFullYear();
    
        var fecha = String(fechaalquiler);
    
        var alquiler = new Alquiler(1, isbn, "", fecha);
        var alquilerjson = JSON.stringify(alquiler);
        console.log(alquilerjson)
        this.postAlquiler(alquilerjson);
    }
    
    
    render() {
        
        var libro=this.props.libros;
        
        
        return (
            <div>
                <article className="article-item">
                        <div className="image-space"><img className="image-libro" src={libro.imagen} alt={libro.titulo}></img>
                        </div>
                        <h2>{libro.titulo}</h2>
                        <h4>{libro.autor}</h4>
                        <h5>{libro.editorial}</h5>
                        <input type="button"  onClick={() => this.alquilar(libro,libro.isbn)} className="btn" value="Alquilar"></input>
                        <br></br>
                        <input type="button" onClick={() => this.reservar(libro,libro.isbn)}  className="btn btnreserva"  value="Reservar"></input> 
                </article>
            </div>
        )
    }
}
