import React from 'react';

const Table = (props: any) => {    
    return (
        <>
            <div>
                <h1>Table</h1>
            </div>
            <table className="table table-hover border" style={{ 'width': '500px', 'marginLeft': '400px' }}>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>X-axis</th>
                        <th>Y-axis</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.list.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.x}</td>
                                    <td>{item.y}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;