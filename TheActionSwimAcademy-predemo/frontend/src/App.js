// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './components/CartContext';

// Import components
import Navbar from "./components/navbar";
import Register from "./components/register";
import Login from "./components/login";
import About from "./components/aboutUs";
import News from "./components/news";
import Gallery from "./components/gallery";
import Shop from "./components/shop";
import Admin from "./components/admin";
import AdminLogin from "./components/adminLogin";
import Achievements from "./components/Achievements";
import AdminEditMenu from "./components/adminEditMenu";
import ContactUs from "./components/contactus";
import EditAchievements from './components/EditAchievements';
import EditGallery from './components/EditGallery';
import EditNews from './components/EditNews';
import AddItem from './components/addItem';
import ProductDetails from './components/ProductDetails';
import Cart from './components/cart';
import Home from './components/Home';

// Mock Products (if needed for ProductDetails)
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

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/adminlogin" element={<AdminLogin />} />
                    <Route path="/adminEditMenu" element={<AdminEditMenu />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/editachievements" element={<EditAchievements />} />
                    <Route path="/editgallery" element={<EditGallery />} />
                    <Route path="/editnews" element={<EditNews />} />
                    <Route path="/additem" element={<AddItem />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<ProductDetails products={products} />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
