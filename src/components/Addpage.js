import React, { useState } from 'react';
import axios from 'axios';
import { useParams ,useNavigate} from 'react-router-dom';
const AddProduct = ({ fetchData }) => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rating: 0,
    price: 0,
    "type": "fruit","height": 600,
    "width": 401, "trend": ""
    ,id:500,
    "filename": "48.jpg",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming your API expects the image to be uploaded separately
    

      const productData = {
        title: formData.title,
        description: formData.description,
        rating: formData.rating,
        price: formData.price, "type": "fruit","height": 600,
        "width": 401, "trend": ""
        ,
        "filename": "48.jpg",
        
      };

      await axios.post('http://localhost:3001/books', productData);

      alert('Product added successfully');
      navigate('/dashboard')
      // Fetch updated data
      fetchData();
    } catch (error) {
      console.error('Error adding product:');
    }
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          
        </div>
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
