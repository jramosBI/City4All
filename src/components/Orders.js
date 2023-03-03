import React from 'react';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function Orders() {
    return (
        <div>
            <Card className='m-5 bg-white text-dark'>
                <CardHeader className='bg-info text-white'>
                    <Card.Body>Add new order</Card.Body>
                </CardHeader>
                <Card.Body><Button variant="primary">Add order</Button>{' '}</Card.Body>
            </Card>
            <Card className='m-5 bg-white text-dark'>
                <CardHeader className='bg-info text-white'>
                    <Card.Body>List all orders</Card.Body>
                </CardHeader>
                <Card.Body> <Table striped>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Name</th>
                            <th>Delivery Company</th>
                            <th>Entry Code</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td>Jhonnathan</td>
                            <td>Nike</td>
                            <td>#123</td>
                            <td>Delivery from NY</td>
                        </tr>
                    </tbody>
                </Table></Card.Body>
            </Card>
        </div>
    );
}

export default Orders;