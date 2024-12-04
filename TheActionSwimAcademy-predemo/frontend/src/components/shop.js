import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import 'bootstrap/dist/css/bootstrap.css';


const products = [
    {
        id: 1,
        name: "Product 1",
        description: "This is the description for Product 1.",
        price: 10.00,
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        name: "Product 2",
        description: "This is the description for Product 2.",
        price: 15.00,
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        name: "Product 3",
        description: "This is the description for Product 3.",
        price: 20.00,
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        name: "Product 4",
        description: "This is the description for Product 4.",
        price: 25.00,
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 5,
        name: "Product 5",
        description: "This is the description for Product 5.",
        price: 30.00,
        imageUrl: "https://via.placeholder.com/150"
    },
];

const Shop = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('popular');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = filteredProducts.sort((a, b) => {
        switch (sortOption) {
            case 'popular':
                return 0; // No sorting
            case 'max':
                return b.price - a.price; // Sort by max price
            case 'min':
                return a.price - b.price; // Sort by min price
            default:
                return 0; // Default case
        }
    });

    const handleViewCart = () => {
        navigate('/cart'); // Navigate to the cart page
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to the product details page
    };

    return (
        <div>
            {/* Grey bar with search functionality and gold button */}
            <div className="grey-bar" style={{ height: "70px", backgroundColor: "grey", display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px', paddingTop: '10px' }}>
                <div style={{ display: 'flex', width: '90%', maxWidth: '600px' }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{ flex: 1 }}
                    />
                    <button
                        className="btn"
                        style={{ marginLeft: '10px', backgroundColor: 'gold', color: 'white', border: 'none' }}
                    >
                        Search
                    </button>
                    <button 
                        type="button" 
                        className="btn" 
                        style={{ marginLeft: '10px', backgroundColor: 'gold', color: 'white', border: 'none' }}
                        onClick={handleViewCart}
                    >
                        View Cart
                    </button>
                </div>
            </div>

            {/* Sort By Dropdown */}
            <div className="container mt-2">
                <div className="d-flex justify-content-end align-items-center">
                    <div className="d-flex align-items-center">
                        <label htmlFor="sortOptions" className="mr-2">Sort By:</label>
                        <select 
                            id="sortOptions" 
                            className="form-control w-auto"
                            value={sortOption}
                            onChange={handleSortChange}
                            style={{ 
                                backgroundImage: 'url(data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="black" d="M4.5 7l4 4 4-4H4.5z"/></svg>)', 
                                backgroundRepeat: 'no-repeat', 
                                backgroundPosition: 'right 10px center', 
                                paddingRight: '30px' 
                            }}
                        >
                            <option value="popular">Most Popular</option>
                            <option value="max">Max Price</option>
                            <option value="min">Min Price</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Product Listing */}
            <div className="container mt-5">
                <div className="row">
                    {sortedProducts.length > 0 ? (
                        sortedProducts.map(product => (
                            <div className="col-md-3 mb-4" key={product.id}>
                                <div className="card h-100" onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer' }}>
                                    <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text"><strong>R{product.price.toFixed(2)}</strong></p> {/* Change to R symbol */}
                                        <button 
                                            type="button" 
                                            className="btn" 
                                            style={{ width: '100%', backgroundColor: 'gold', border: 'none', color: "white" }}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <p>No products found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
