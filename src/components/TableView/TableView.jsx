import React, { useEffect, useState } from 'react'




const TableView = ({tableData}) => {
    const [column,setColumn] = useState([]);

    useEffect(()=>{
        if(tableData.length){
           let columnData =  Object.keys(tableData[0]);
           setColumn(columnData)
        }
    },[tableData])

  
  return (
    
    <section>
    {tableData.length>0 ?(<table>
        <thead>
        <tr>
            {column.map(data=>(<th key={data}>{data}</th>))}
            </tr>
        </thead>
        {tableData.length >0 && (
            <>
                <tbody>
                    {tableData.map((data,index)=>(
                        <tr key={data.id}>
                            {column.map((keysVal)=>(<td>{data[keysVal]}</td>))}
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

export default TableView