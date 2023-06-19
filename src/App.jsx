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
    });
  }
  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({livros});
  }
  render() {
  return (
    <table className="tabela">
      <TabelaHead />
      <TabelaFoot qdeLivros = { this.state.livros.length }/>
      <TabelaBody livros={ this.state.livros } removerLinha={this.handleRemoverLinha}/>
    </table>
  )
}
}

export default App