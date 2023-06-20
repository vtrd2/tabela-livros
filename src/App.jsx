import React, {Component} from 'react'
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBody"

class App extends Component {
  state = {
    livros: []
  };
  componentDidMount() {
    fetch('/api/livros.json')
    .then(response => response.json())
    .then(livros => this.setState({ livros }))
    .catch(function(error) {
      console.log("Erro na requisição")
    })
    .finally(function() {
      console.log("Sempre retorna")
    })
  };
  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({livros});
  };
  handleOrdenarCrescente = () => {
    const livros = [...this.state.livros]; // Faz uma cópia do array original para evitar mutações diretas
    livros.sort((a, b) => a.titulo.localeCompare(b.titulo)); // Ordena em ordem crescente
    this.setState({ livros });
  };
  handleOrdenarDecrescente = () => {
    const livros = [...this.state.livros]; // Faz uma cópia do array original para evitar mutações diretas
    livros.sort((a, b) => b.titulo.localeCompare(a.titulo)); // Ordena em ordem decrescente
    this.setState({ livros });
  };
  render() {
  return (
    <table className="tabela">
      <TabelaHead
        OrdenarCrescente = {this.handleOrdenarCrescente}
        OrdenarDecrescente = {this.handleOrdenarDecrescente}
      />
      <TabelaFoot qdeLivros = { this.state.livros.length }/>
      <TabelaBody livros={ this.state.livros } removerLinha={this.handleRemoverLinha}/>
    </table>
  )
}
}

export default App