import React from 'react';

function TableRow(props) {
    return (
    <tr>
        <td>{props.name}</td>
        <td>{props.email}</td>
    </tr>
    
    )
}


export default TableRow;