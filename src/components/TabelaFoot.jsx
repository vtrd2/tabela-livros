import React from 'react'

function TabelaFoot(props) {
    return (
        <tfoot>
            <tr>
                <td colSpan={4}>Quantidade de livros na tabela: {props.qdeLivros}</td>
            </tr>
        </tfoot>
    )
};

export default TabelaFoot
