import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_ENDPOINT } from '../config/config';
import TableView from '../components/TableView/TableView';
import Pagination from '../components/Pagination/Pagination';

const Home = () => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1)
    const [tableData, setTableData] =  useState([]);
    const [nextData,setNextData] = useState([])
    const apiCall = async ()=>{
        try {
        const {data} = await axios.get(`${URL_ENDPOINT}?_limit=${limit}&_page=${page}`)
        const nextData = await axios.get(`${URL_ENDPOINT}?_limit=${limit}&_page=${page+1}`)
        setTableData(data);
        setNextData(nextData.data)
        } catch (error) {
            console.log("Error", error)
        }
    }

    useEffect(()=>{
        apiCall()
    },[limit,page])

  return (
    <div>Home
    <TableView tableData={tableData} />
    <Pagination setPage={setPage} page={page} tableData={tableData} nextData={nextData}/>
    </div>
  )
}

export default Home