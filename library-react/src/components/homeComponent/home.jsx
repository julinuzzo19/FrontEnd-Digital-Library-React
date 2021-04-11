import React from "react";
import "./home.css";
import logo from "../../assets/images/searchbookimg.png";
import ListarLibros from "../listarLibrosComponent/listarLibros";
import Global from '../../models/Global';

class HomeComponent extends React.Component {
  state = {
    listado: [],
    busqueda:"",
    check:"titulo"

  };

  async getLibros() {
    await fetch("https://localhost:44366/api/Libros")
      .then((res) => res.json())
      .then((lista) => {
        this.setState({ listado: lista });
      });
  }

  async getLibroByForm(busqueda, check){
    let regex = /\w[busqueda]+/;
  let libros = [];

  var URL_GET = Global.url_libros;

  if (check === "titulo") {
    URL_GET = URL_GET + `?titulo=${busqueda}`;
  } else {
    URL_GET = URL_GET + `?autor=${busqueda}`;
  }

  await fetch(URL_GET)
    .then((response) => response.json())
    .then((lista) => {
      for (let i of lista) {
        if (regex.test(i.titulo) || regex.test(i.autor)) {
          libros.push(i);
        }
      }
    });
    this.setState({ listado: libros });
    
  }

  submitForm=(event)=>{
    event.preventDefault();

    this.getLibroByForm(this.state.busqueda,this.state.check)
   
  }

  submitText=(event)=>{ 
    this.setState({
    busqueda:event.target.value
  });

}
  submitRadio=(checkValue)=>{
    this.setState({
      check:checkValue
    });
  };



  componentDidMount() {
    this.getLibros();
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="infopagina">Catálogo de libros</h2>

        <div className="container-fluid">
          <div className="row">
      
        <div className="col-4 d-inline-block text-center">
          <img id="imgsearchbook" src={logo} alt="searchimg"></img>
          <div className="container">
          <form id="formsearchbook" onSubmit={this.submitForm}>
              <div className="form-group">
               
                <label id="titleform" className="label display-1" >Ingrese Titulo o Autor del libro:</label>
                <input id="tituloautor"  type="text" className="form-control"  placeholder="Titulo o Autor" onChange={this.submitText}/>       
                <div className="form-check-inline">
                <label className="form-check-label"> Buscar por:</label>
                <input type="radio" className="form-check-input" id="inputtitulo" name="optradio"  onChange={()=>this.submitRadio("titulo")} defaultChecked/>Titulo
                <label className="form-check-label"></label>
                <input type="radio" className="form-check-input" id="inputautor" name="optradio"  onChange={()=>this.submitRadio("autor")}/>Autor
         
              </div>
              
              <input className="btn btn-primary" id="btnsearch" type="submit" value="Buscar"/>
              </div>        
          </form>
          </div>
      

        
        </div>

       
            <div className="col-8">
              <div className="articles" id="articles">
                {this.state.listado.map((libro) => {if (libro.stock!==0) {
                  return (<ListarLibros 
                  libros={libro} 
                  key={libro.isbn}               
                   />);
                }
                  
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
