import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import request from '../../services';

export default function OrderTable() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  const getOrders = () => {
    request({ endpoint: 'order' })
      .then(response => {
        setOrders(response.data.orders);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const seeOrderOnMap = (orderId) => {
    history.push('/deliveries');
  }

  useEffect(() => getOrders(), []);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <th scope="row">{order.id}</th>
            <td>{order.description}</td>
            <td>{order.delivery.address}</td>
            <td>
              <Button color="primary" size="sm" onClick={() => seeOrderOnMap(order.id)}>Mapa</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
