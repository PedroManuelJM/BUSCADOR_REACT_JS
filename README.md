# BUSCADOR REACT JS 

En este ejemplo se muestra 2 maneras para realizar la búsqueda , una búsqueda de un solo campo (titulo) y la otra búsqueda de dos campos (titulo y subtitulo).

Un campo para buscar 

<input class="form-control"  value={this.state.text} onChange={(text) => this.filter(text)}/>

REACT / REACT NATIVE
React js : Buscador de un objeto o un array
3 junio, 2019 - por Artyom - 2 comentarios.

El contenido nos explica como hacer de buscar datos o filtrar el array o un objeto.


####  INPUT para buscar

<input class="form-control"  value={this.state.text} onChange={(text) => this.filter(text)}/>

#### Para buscar un solo campo

filter(event){

      var text = event.target.value
      
      const data = this.state.productoBackup
      
      const newData = data.filter(function(item){
      
          const itemData = item.titulo.toUpperCase()
          
          const textData = text.toUpperCase()
          
          return itemData.indexOf(textData) > -1
          
      })
      
      this.setState({
      
          producto: newData,
          
          text: text,
      })
      
   }
   
   #### Para buscar mas de un campo

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
