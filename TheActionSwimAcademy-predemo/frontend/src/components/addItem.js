// components/AddItem.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'; // Ensure your custom styles are imported

const AddItem = () => {
    // Form state with description and stock status
    const [form, setForm] = useState({
        title: '',
        itemNumber: '',
        price: '',
        size: '',
        quantity: '',
        description: '', // New description field
        stockStatus: 'inStock' // New field for stock status
    });

    const [image, setImage] = useState(null); // State for uploaded image

    // Update form fields
    const updateForm = (field, value) => {
        setForm((prevForm) => ({
            ...prevForm,
            [field]: value
        }));
    };

    // Handle image upload
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    // Handle form submission
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", form);
        console.log("Uploaded Image:", image);

        // Reset form fields and image after submission
        setForm({
            title: '',
            itemNumber: '',
            price: '',
            size: '',
            quantity: '',
            description: '',
            stockStatus: 'inStock' // Reset stock status
        });
        setImage(null);
    };

    return (
        <div className="form-container container mt-5">
            <h3 className="text-center">Add New Item</h3>
            <form onSubmit={onSubmit}>
                {/* Title input */}
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

                {/* Item Number input */}
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

                {/* Description input */}
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

                {/* Size, Price, Quantity in a row */}
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

                {/* Stock Status Dropdown */}
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

                {/* Image Upload */}
                <div className="form-group mb-4">
                    <label htmlFor="imageUpload">Upload Image</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="imageUpload"
                        onChange={onImageChange}
                    />
                </div>

                {/* Submission Button */}
                <div className="form-group text-center">
                    <button 
                        type="submit" 
                        className="btn" 
                        style={{ backgroundColor: 'gold', color: 'white', border: 'none' }}
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;
