import React, {Component} from 'react'
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBody"

class App extends Component {
  state = {
    livros: [
      {
        id: "978-85-7522-632-2",
        titulo: "CSS Grid Layout",
        autor: "Maurício Samy Silva"
      },
      {
        id: "978-86-7522-636-2",
        titulo: "Node Essencial",
        autor: "Maurício Samy Silva"
      },
      {
        id: "978-87-7522-634-2",
        titulo: "Material Design",
        autor: "Maurício Samy Silva"
      }
    ]
  };
  render() {
  return (
    <table className="tabela">
      <TabelaHead />
      <TabelaFoot />
      <TabelaBody livros={ this.state.livros } />
    </table>
  )
}
}

export default App