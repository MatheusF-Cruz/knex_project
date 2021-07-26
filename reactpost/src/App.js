import React , { Component }from 'react'

//import axios from 'axios'
import axios from './httpUtilRequest'


class App extends Component {

componentDidMount() {
  
  const form = document.getElementsByTagName('form')[0]
  
  form.addEventListener('submit',function(event){
      event.preventDefault()
      let data = {
        "razao_social":this.razao_social.value,
        "cnpj":this.cnpj.value,
        "nome":this.nome.value,
        "cpf":this.cpf.value,
        "salario":this.salario.value
      }
        
       
    axios.post('http://localhost:3333/funcionario', data , {} ).then({})
      
      
  })
  
  }
render() {
    return (
        <form >
          <label >Razão Social :</label>
          <input type = "text" name="razao_social" id="razao_social" />
          <label >CNPJ :</label>
          <input type = "text" name="cnpj" id="cnjp" />
          <label >Nome :</label>
          <input type = "text" name="nome" id="nome" />
          <label >CPF :</label>
          <input type = "text" name="cpf" id="cpf"/>
          <label >Salario :</label>
          <input type = "number" name="salario" id="salario" />

          <button type="submit">Enviar</button>

        </form>
    );
  
    }
}

export default App;
