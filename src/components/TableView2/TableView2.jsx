import React from 'react'

const TableView2 = ({tableData, column}) => {
    return (
    
        <section>
        {tableData.length>0 ?(<table>
            <thead>
            <tr>
                {column.map(data=>(<th key={data.field}>{data.header}</th>))}
                </tr>
            </thead>
            {tableData.length >0 && (
                <>
                    <tbody>
                        {tableData.map((data,index)=>(
                            <tr key={data.id}>
                                {column.map((keysVal)=>(<td>{data[keysVal.field]}</td>))}
                            </tr>
                        )
                        )}
                    </tbody>
                </>
            )}
            <tbody>
            </tbody>
            </table>) :(<div> No Records to Display</div>)}
            
        </section>
      )
}

export default TableView2