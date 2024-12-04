import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const AddItem = ({ onAddProduct, products = [], onEditProduct }) => {
    const [form, setForm] = useState({
        title: '',
        itemNumber: '',
        price: '',
        size: '',
        quantity: '',
        description: '',
        stockStatus: 'inStock',
    });

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');
    const navigate = useNavigate();

    // Update form fields
    const updateForm = (field, value) => {
        setForm((prevForm) => ({ ...prevForm, [field]: value }));
    };

    // Handle image change
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // Handle selection of product to edit
    const handleProductSelect = (e) => {
        const productId = e.target.value;
        setSelectedProduct(productId);

        const selectedProduct = products.find((product) => product.id === parseInt(productId));
        if (selectedProduct) {
            setForm({
                title: selectedProduct.title,
                itemNumber: selectedProduct.itemNumber,
                price: selectedProduct.price,
                size: selectedProduct.size,
                quantity: selectedProduct.quantity,
                description: selectedProduct.description,
                stockStatus: selectedProduct.stockStatus,
            });
            setImageUrl(selectedProduct.imageUrl);
        }
    };

    // Submit handler
    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const productData = {
            ...form,
            imageUrl: imageUrl || 'https://via.placeholder.com/150', // Default image URL if not provided
        };

        // If editing, call the edit function, else add new product
        if (selectedProduct) {
            if (onEditProduct) {
                onEditProduct(productData, selectedProduct);
            }
        } else if (onAddProduct) {
            onAddProduct(productData);
        } else {
            console.error("onAddProduct or onEditProduct is not defined.");
        }

        // Reset form after submission
        setForm({
            title: '',
            itemNumber: '',
            price: '',
            size: '',
            quantity: '',
            description: '',
            stockStatus: 'inStock',
        });
        setImage(null);
        setImageUrl('');
        setIsLoading(false);

        // Redirect to shop page
        navigate('/shop');
    };

    return (
        <div className="form-container container mt-5">
            <h3 className="text-center">{selectedProduct ? 'Edit Product' : 'Add New Item'}</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group mb-4">
                    <label htmlFor="productSelect">Select Product to Edit</label>
                    <select
                        className="form-control"
                        id="productSelect"
                        value={selectedProduct || ''}
                        onChange={handleProductSelect}
                    >
                        <option value="">-- Select a Product --</option>
                        {/* Loop through products and show numbers 1 to 6 */}
                        {[...Array(6)].map((_, index) => {
                            const productId = index + 1; // Numbering from 1 to 6
                            return (
                                <option key={productId} value={productId}>
                                    Product {productId}
                                </option>
                            );
                        })}
                    </select>
                </div>

                {/* Form fields for title, itemNumber, description, etc. */}
                <div className="form-group mb-4">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={form.title}
                        onChange={(e) => updateForm('title', e.target.value)}
                        required
                    />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="itemNumber">Item Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="itemNumber"
                        value={form.itemNumber}
                        onChange={(e) => updateForm('itemNumber', e.target.value)}
                        required
                    />
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="4"
                        value={form.description}
                        onChange={(e) => updateForm('description', e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="form-row mb-4">
                    <div className="col-md-4">
                        <label htmlFor="size">Size</label>
                        <input
                            type="text"
                            className="form-control"
                            id="size"
                            value={form.size}
                            onChange={(e) => updateForm('size', e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            value={form.price}
                            onChange={(e) => updateForm('price', e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            className="form-control"
                            id="quantity"
                            value={form.quantity}
                            onChange={(e) => updateForm('quantity', e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="stockStatus">Stock Status</label>
                    <select
                        className="form-control"
                        id="stockStatus"
                        value={form.stockStatus}
                        onChange={(e) => updateForm('stockStatus', e.target.value)}
                        required
                    >
                        <option value="inStock">In Stock</option>
                        <option value="outOfStock">Out of Stock</option>
                    </select>
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="imageUpload">Upload Image</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="imageUpload"
                        onChange={onImageChange}
                    />
                    {imageUrl && (
                        <div className="mt-3">
                            <img
                                src={imageUrl}
                                alt="Image Preview"
                                style={{ width: '200px', height: '150px', objectFit: 'cover' }}
                            />
                        </div>
                    )}
                </div>

                <div className="form-group text-center">
                    <button
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: 'gold', color: 'white', border: 'none' }}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Saving Item...' : selectedProduct ? 'Update Item' : 'Add Item'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;
