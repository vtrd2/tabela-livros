import React from 'react'

const TabelaHead = (props) => (
    <thead>
        <tr>
            <th colSpan={4}>Tabela Livros</th>
        </tr>
        <tr>
            <th>ISBN</th>
            <th>Título
                <div className="container-setinhas">
                    <div onClick={() => props.OrdenarCrescente()}>&#129093;</div>
                    <div onClick={() => props.OrdenarDecrescente()}>&#129095;</div>
                </div>
            </th>
            <th>Autor</th>
            <th></th>
        </tr>
    </thead>
);

export default TabelaHead
