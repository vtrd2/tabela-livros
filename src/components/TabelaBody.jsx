import React from 'react'

function TabelaBody(props) {
    return (<tbody>
        { props.livros.map((livro, index) => (
            <tr key={livro.id}>
            <td>{livro.id}2</td>
            <td>{livro.titulo}</td>
            <td>{livro.autor}</td>
            <td>
                <button className="botao remover">Remover</button>
            </td>
        </tr>
        ))}
    </tbody>)
};

export default TabelaBody