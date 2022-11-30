import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css'

import Helmet from "../components/Helmet/Helmet";


const Admin = () => {

    const [Data, setData] = useState([]);
    const [Opt, setOpt] = useState("");

    useEffect(() => {

      async function fetchData(){
          console.log("dbdb");
          return await axios.get('http://localhost:5000/kitchen').then(res=>{
            console.log(res.data);
            setData(res.data)
          }).catch(err=>{
            console.log(err);
        })

      }
      fetchData();

    }, [])

    const onChangeOpt = async (e,id) =>{
        const body = {
            status: e.target.value
        }
        await axios.patch(`http://localhost:5000/kitchen/${id}`, body).then(() => {
          setOpt(e.target.value)
        });
        window.location.reload(false);
    }

    const orders = Data.map((data,id)=>{
        return <tr key={id}>
          <td>{data.name}</td>
          <td>{data.phone}</td>
          <td>{data.address}</td>
          <td>{data.postalCode}</td>
          <td>
            {data.pizza.map((d,i) => {
            return <ul key={i}>
                    <li>{d.pizzaName} qty: {d.quantity}</li>
                </ul>
            })
        }
          </td>
          <td>
          <Form.Select aria-label="Default select example" value={data.status} onChange={(event) => onChangeOpt(event, data._id)}>
            <option value="placed">placed</option>
            <option value="confirmed">confirmed</option>
            <option value="delivered">delivered</option>
          </Form.Select>
          </td>
        </tr>
      })

    return (
      <div>
        <Helmet title="All-Foods"></Helmet>
        <br></br>
        <br></br>
        <br></br>
        <h2>Orders</h2>
        <br></br>
        <Table table table-bordered>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Postal Code</th>
                    <th scope="col">Orders</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
          <tbody>{ orders }</tbody>
        </Table>
        </div>
    )
}


export default Admin;
