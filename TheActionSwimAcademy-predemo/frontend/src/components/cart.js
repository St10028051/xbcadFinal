import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Cart = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    // State to store quantities for each item
    const [quantities, setQuantities] = useState(cart.map(() => 1));
    
    // Calculate total items and total price
    const totalItems = quantities.reduce((total, qty) => total + qty, 0);
    const totalPrice = quantities.reduce((total, qty, index) => total + qty * cart[index].price, 0).toFixed(2);

    const handleQuantityChange = (index, newQuantity) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = Number(newQuantity);
        setQuantities(updatedQuantities);
    };

    useEffect(() => {
        // Ensure quantities match cart length on load or if the cart updates
        if (quantities.length !== cart.length) {
            setQuantities(cart.map(() => 1));
        }
    }, [cart]);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Your Cart</h2>

            {/* Message Card */}
            <div className="form-container" style={{ margin: "20px auto", maxWidth: "100%" }}>
                <div className="card mb-3">
                    <div className="card-body text-center">
                        <h5 className="card-title">Shipped from Action Swim Academy Warehouse</h5>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    {cart.length === 0 ? (
                        <div className="text-center">
                            <p>Your cart is empty.</p>
                        </div>
                    ) : (
                        <div className="row">
                            {cart.map((product, index) => (
                                <div className="col-md-12 mb-3" key={product.id}>
                                    <div className="card h-100 d-flex flex-row">
                                        <img src={product.imageUrl} className="card-img-left" alt={product.name} style={{ width: '190px', height: '190px', objectFit: 'cover' }} />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text"><strong>R{product.price.toFixed(2)}</strong></p>
                                            
                                            {/* Display selected size */}
                                            {product.selectedSize && (
                                                <p className="card-text"><strong>Size: {product.selectedSize}</strong></p>
                                            )}
                                            
                                            {/* Quantity Dropdown */}
                                            <div className="form-group mt-auto"> {/* mt-auto ensures it pushes to the bottom */}
                                                <label htmlFor={`quantity-${index}`} className="form-label">Quantity:</label>
                                                <select
                                                    id={`quantity-${index}`}
                                                    className="form-select"
                                                    value={quantities[index]}
                                                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                                                >
                                                    {[1, 2, 3, 4, 5].map((num) => (
                                                        <option key={num} value={num}>{num}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Cart Summary Container */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cart Summary</h5>
                            <p>
                                <strong>Total Items:</strong> <span style={{ color: 'gold' }}>{totalItems}</span>
                            </p>
                            <p>
                                <strong>Total Price:</strong> <span style={{ color: 'gold' }}>R{totalPrice}</span>
                            </p>
                            <button
                                className="btn"
                                style={{ backgroundColor: 'gold', color: 'white', border: 'none' }}
                                onClick={() => navigate('/checkout')}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
