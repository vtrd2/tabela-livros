import React from 'react'

function TabelaBody(props) {
    return (<tbody>
        { props.livros.map((livro, index) => (
            <tr key={livro.id}>
            <td>{livro.id}2</td>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>
                <button className="botao remover" onClick={() => props.removerLinha(livro.id)} id={livro.id}>Remover</button>
            </td>
        </tr>
        ))}
    </tbody>)
};

export default TabelaBody