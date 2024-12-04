import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'; // Ensure custom styles are defined

const ManageOrders = () => {
    const [orders, setOrders] = useState([
        {
            orderNumber: 1,
            customerName: 'John Doe',
            item: 'Product 1',
            quantity: 2,
            totalPrice: 20.00,
        },
        {
            orderNumber: 2,
            customerName: 'Jane Smith',
            item: 'Product 2',
            quantity: 1,
            totalPrice: 15.00,
        },
        {
            orderNumber: 3,
            customerName: 'Alice Johnson',
            item: 'Product 3',
            quantity: 3,
            totalPrice: 60.00,
        },
    ]);

    return (
        <div className="container mt-5">
            <div className="row">
                {orders.map(order => (
                    <div className="col-12 mb-3" key={order.orderNumber}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'gold' }}>
                                    Customer Name: {order.customerName}
                                </h5>
                                <p className="card-text">
                                    Order Number: {order.orderNumber}
                                </p>
                                <p className="card-text">Item: {order.item}</p>
                                <p className="card-text">Quantity: {order.quantity}</p>
                                <p className="card-text">Total Price: ${order.totalPrice.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageOrders;
