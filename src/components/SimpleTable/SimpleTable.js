//SimpleTable
import React from 'react';
import {useTable} from 'react-table';
import {columns, data} from '../../data/data';

const SimpleTable = () =>{
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns,data});
    
    return(
        <div>
            <table {...getTableProps()} style={{border : "1px solid black"}}>
                <thead>
                    {headerGroups.map(headerGroup => {
                        return (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(col => {
                                    return (
                                        <th {...col.getHeaderProps()}>
                                            {col.render("Header")}
                                        </th>
                                    )
                                })}
                            </tr>
                        )})}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        console.log(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return(
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SimpleTable;