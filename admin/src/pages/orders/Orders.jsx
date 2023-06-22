import React, { useEffect, useState } from 'react'
import "./orders.css";
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material';
import { userRequest } from '../../requestMethod';
import { Link } from 'react-router-dom';

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch { }
    };
    getOrders();
  }, []);
  const columns = [
    { field: "orderId", headerName: "ORDER ID", width: 220 },
    { field: "userId", headerName: "USER ID", width: 240 },
    {
      field: "amount",
      headerName: "Price",
      width: 220,
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 220,
      renderCell: (params) => {
        return (
          <>
            <Button>{params.row.status}</Button>
          </>
        );
      },
    },
    {
      field: "details",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/orders/" + params.row.orderId}>
              <Button>Details</Button>
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}

export default Orders
