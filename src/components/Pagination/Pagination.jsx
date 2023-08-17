import React from 'react'
import "./Pagination.css"
const Pagination = ({setPage , page, tableData, nextData}) => {
  return (
    <section className='paginationContainer'>
        <div>
            <button onClick={()=>setPage(prev =>prev-1)} disabled={page===1 ? true:false}>Previous</button>
        </div>
        <div>
            <h4 className='pageNumber'>{page}</h4>
        </div>
        <div>
            <button onClick={()=>setPage(prev =>prev+1)} disabled={nextData.length?false:true}>Next</button>
        </div>
       
    </section>
  )
}

export default Pagination