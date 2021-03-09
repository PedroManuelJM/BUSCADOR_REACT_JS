import React, { Component } from 'react';
import { AvisosData } from './dataLocal1';
import { AvisosData2 } from './dataLocal2';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt,faSearch } from '@fortawesome/free-solid-svg-icons'
import github from './assets/img/github.png';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listaAviso: [], // arreglo para guardar la lista
      listaBackup: [], // lista donde se realiza para la busqueda
      textBuscar: '',  // campo donde se introduce que desea buscar

      // atributos para la busqueda avanzada
      listaAviso2:[],
      listaBackup2:[], // lista donde se realiza para la busqueda
      textBuscar2:'',
    }
  }

  componentDidMount() {
    this.setState({
      listaAviso: AvisosData, // lista == dataLocal
      listaBackup: AvisosData,  // asignando a listabackup los datos del dataLocal
      
      listaAviso2: AvisosData2,
      listaBackup2: AvisosData2,
    })
    console.log(AvisosData) // mostrando por consola la dataLocal
  }

  // Para buscar un campo 
  filter(event) {
    var text = event.target.value
    console.log(text)
    const data = this.state.listaBackup
    const newData = data.filter(function (item) {
      const itemData = item.titulo.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      listaAviso: newData,
      textBuscar: text,
    })
  }

  dibujarAviso(datosAviso) {
    return (
      <div className="container">
        <br></br>
        <h5 style={{ fontfamily: "Saira Condensed", color: "#888888" }}> BUSCAR POR SOLO UN CAMPO  </h5>
        <input className="form-control" placeholder="Ingrese el tema que desea buscar " value={this.state.text} onChange={(text) => this.filter(text)} />
        {datosAviso.map(itemAviso =>
          <div className="row" key={itemAviso.id}>

            <div className="col-sm-7 " style={{ padding: "10px" }}>
              <img src={'./img/' + itemAviso.foto} className="img-fluid rounded" style={{ border: "2px solid black" }} width="100%" />
            </div>

            <div className="col-sm-5" style={{ padding: "10px" }}>
              <span className=
                {` 
                         ${itemAviso.curso === "React" ? 'badge badge-pill badge-info' : ''}
                         ${itemAviso.curso === "Angular" ? 'badge badge-pill badge-danger' : ''}
                         ${itemAviso.curso === "MySQL" ? 'badge badge-pill badge-warning' : ''}
               `}
              >&nbsp;&nbsp;&nbsp;{itemAviso.curso}&nbsp;&nbsp;&nbsp;</span>
              <span className="text-muted">&nbsp;&nbsp;<b><FontAwesomeIcon className="fa-icon" icon={faCalendarAlt} />&nbsp;&nbsp;{itemAviso.fecha}</b></span>
              <h5>
                <b>{itemAviso.titulo}</b>
              </h5>
              <p>
                <b>{itemAviso.subtitulo}</b>
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
  
  // Para buscar mas de un campo

  filteravanzado(event) {
    var text = event.target.value
    console.log(text)
    const data = this.state.listaBackup2
    const newData = data.filter(function (item) {

      const itemDataTitle = item.titulo.toUpperCase()
      const itemDataSubt = item.subtitulo.toUpperCase()
      const campo = itemDataTitle+" "+itemDataSubt
      const textData = text.toUpperCase()
      return campo.indexOf(textData) > -1
    })
    this.setState({
      listaAviso2: newData,
      textBuscar2: text,
    })
  }


  dibujarAviso2(datosAviso2) {
    return (
      <div className="container">
        <br></br>
        <h5 style={{ fontfamily: "Saira Condensed", color: "#888888" }}> BUSCAR MAS DE UN CAMPO  </h5>
        <input className="form-control" placeholder="Ingrese el tema que desea buscar " value={this.state.text1} onChange={(text1) => this.filteravanzado(text1)} />
        {datosAviso2.map(itemAviso =>
          <div className="row" key={itemAviso.id}>

            <div className="col-sm-7 " style={{ padding: "10px" }}>
              <img src={'./img/' + itemAviso.foto} className="img-fluid rounded" style={{ border: "2px solid black" }} width="100%" />
            </div>

            <div className="col-sm-5" style={{ padding: "10px" }}>
              <span className=
                {` 
                         ${itemAviso.curso === "React" ? 'badge badge-pill badge-info' : ''}
                         ${itemAviso.curso === "Angular" ? 'badge badge-pill badge-danger' : ''}
                         ${itemAviso.curso === "Hosting" ? 'badge badge-pill badge-warning' : ''}
               `}
              >&nbsp;&nbsp;&nbsp;{itemAviso.curso}&nbsp;&nbsp;&nbsp;</span>
              <span className="text-muted">&nbsp;&nbsp;<b><FontAwesomeIcon className="fa-icon" icon={faCalendarAlt} />&nbsp;&nbsp;{itemAviso.fecha}</b></span>
              <h5>
                <b>{itemAviso.titulo}</b>
              </h5>
              <p>
                <b>{itemAviso.subtitulo}</b>
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }



  
  render() {
    let contenidoAviso = this.dibujarAviso(this.state.listaAviso);
    let contenidoAviso2 = this.dibujarAviso2(this.state.listaAviso2);
    return (
      <>
        <div className="row">
          <div className="col-12 col-md-12">
             <h3 id="titulo" className="text-center"style={{ fontfamily: "Saira Condensed", color: "#888888" }}>&nbsp; <FontAwesomeIcon className="fa-icon" icon={faSearch} /> BUSCADOR EN REACT  </h3>
             <a href="https://github.com/PedroManuelJM" target="_blank">
               <h6 className="float-right"> <img src={github} width="12%" /> PedroManuelJM</h6>
             </a>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-sm-6 col-md-6">
              {contenidoAviso}
          </div>
          <div className="col-6 col-sm-6 col-md-6">
              {contenidoAviso2}
          </div>
       </div>
      </>
    );
  }
}

