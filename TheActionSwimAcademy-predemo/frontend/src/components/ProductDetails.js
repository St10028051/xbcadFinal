// components/ProductDetails.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext'; // Import the cart context

const ProductDetails = ({ products }) => {
    const { id } = useParams(); // Get the product ID from the URL
    const product = products.find(product => product.id === parseInt(id)); // Find the product by ID
    const { addToCart } = useCart(); // Get the addToCart function from the context

    // State to store selected size
    const [selectedSize, setSelectedSize] = useState(''); 

    // Handle case when product is not found
    if (!product) {
        return (
            <div className="container mt-5">
                <h2>Product not found!</h2>
            </div>
        );
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size before adding to the cart.'); // Alert if size not selected
            return;
        }
        const productWithSize = { ...product, selectedSize }; // Include selected size in product details
        addToCart(productWithSize); // Call the addToCart function
        alert(`${product.name} (${selectedSize}) has been added to your cart!`); // Alert the user
    };

    return (
        <div className="container mt-5">
            <div className="card" style={{ fontSize: '1.2rem', borderRadius: '15px' }}>
                <div className="row g-0">
                    <div className="col-md-6">
                        <img 
                            src={product.imageUrl} 
                            className="img-fluid rounded-start" 
                            alt={product.name} 
                            style={{ height: '100%', objectFit: 'cover' }} 
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h1 className="card-title" style={{ fontSize: '2rem' }}>{product.name}</h1>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">
                                <strong style={{ fontSize: '1.5rem' }}>Price: R{product.price.toFixed(2)}</strong>
                            </p>
                            
                            {/* Size Selection Dropdown */}
                            <div className="form-group">
                                <label htmlFor="sizeSelect" className="form-label">Select Size:</label>
                                <select 
                                    id="sizeSelect" 
                                    className="form-select" 
                                    value={selectedSize} 
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                >
                                    <option value="">Choose a size</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </div>

                            <button 
                                type="button" 
                                className="btn" 
                                style={{ width: '100%', backgroundColor: 'gold', border: 'none', color: "white" }}
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
