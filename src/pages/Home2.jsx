import React, { useEffect, useState } from 'react'
import axios from 'axios';

import TableView2 from '../components/TableView2/TableView2';
import { URL_ENDPOINT } from '../config/config';
import Pagination from '../components/Pagination/Pagination';

//Alternate way of making table reusable
/**
 * 
 * alternate way to render table data dynamically and make table component reusable
 * Advantage 
 * 
 *By this way we can limit the columm to be display in the table and also specify the order also .i.e. arrangement of column
 *
 * Here I am assuming that we know prior which data is to be displayed in the table and which key should be extracted for table from api
 * so we make a column data constant here for that particular page to reder column and rows data accordingly
 */

 const COLUMN_DATA = [{field:'id', header:"ID"}, {field:'userId',header:"User Id"},{field:'title',header:"Title"}, {field:'body',header:"Body"}]


const Home2 = () => {

   const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1)
    const [tableData, setTableData] =  useState([])
    const apiCall = async ()=>{
        try {
        const {data} = await axios.get(`${URL_ENDPOINT}?_limit=${limit}&_page=${page}`);
        setTableData(data);
        
        } catch (error) {
            console.log("Error", error)
        }
    }

    useEffect(()=>{
        apiCall()
    },[limit,page])

  return (
    <div>
    <TableView2 tableData={tableData} column={COLUMN_DATA}/>
    <Pagination setPage={setPage} page={page} tableData={tableData}/>
    </div>
  )
}

export default Home2