import React, { memo, useState, useEffect } from 'react'
import { Header } from '@buffetjs/custom'
import { Table } from '@buffetjs/core'

import axios from "axios"

import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 18px 30px;
`


const HomePage = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    axios.get("https://examples.wenzhixin.net.cn/examples/bootstrap_table/data")
      .then((res) => setRows(res.data.rows))

  }, [])

  const headers = [
    {
      name: 'Id',
      value: 'id',
    },

    {
      name: 'Name',
      value: 'name',
    },

    {
      name: 'Price',
      value: 'price',
    }
  ];
  
  return (
    <Wrapper>
      <Header 
        title = {{ label: 'Repositories' }}
        content = "A list of repositories"
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
    
  );
};

export default memo(HomePage);
