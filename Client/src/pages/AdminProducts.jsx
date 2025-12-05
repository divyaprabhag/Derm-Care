// // src/components/AdminProducts.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//     image: '',
//   });
//   const [editingId, setEditingId] = useState(null);

//   // Fetch all products
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Add or update product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         // Update product
//         await axios.put(`http://localhost:5000/api/products/${editingId}`, formData);
//       } else {
//         // Add new product
//         await axios.post('http://localhost:5000/api/products', formData);
//       }
//       setFormData({ name: '', description: '', price: '', category: '', image: '' });
//       setEditingId(null);
//       fetchProducts();
//     } catch (error) {
//       console.error('Error saving product:', error);
//     }
//   };

//   // Delete product
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`);
//       fetchProducts();
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   // Edit product
//   const handleEdit = (product) => {
//     setFormData({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//       image: product.image,
//     });
//     setEditingId(product.id);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Admin Product Management</h1>

//       <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {['name', 'description', 'price', 'category', 'image'].map(field => (
//             <input
//               key={field}
//               type="text"
//               name={field}
//               placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//               value={formData[field]}
//               onChange={handleChange}
//               className="border p-2 rounded w-full"
//             />
//           ))}
//         </div>
//         <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//           {editingId ? 'Update Product' : 'Add Product'}
//         </button>
//       </form>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map(product => (
//           <div key={product.id} className="bg-white shadow p-4 rounded-lg">
//             <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="font-bold mt-1">{product.price}</p>
//             <p className="text-sm mt-1 text-gray-500">Category: {product.category}</p>
//             <div className="mt-2 flex space-x-2">
//               <button
//                 onClick={() => handleEdit(product)}
//                 className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(product.id)}
//                 className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;











// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AdminProducts = () => {
//   const { isAdmin } = useContext(AuthContext);
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     image: '',
//     price: '',
//     category: '',
//     quantity: 1,
//   });
//   const [loading, setLoading] = useState(true);

//   const fetchProducts = () => {
//     setLoading(true);
//     axios
//       .get('http://localhost:5000/api/products')
//       .then((res) => setProducts(res.data || []))
//       .catch((err) => console.error('Fetch products error:', err))
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: name === 'price' || name === 'quantity' ? Number(value) : value }));
//   };

//   const handleAdd = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         name: form.name.trim(),
//         description: form.description.trim(),
//         image: form.image.trim(),
//         price: Number(form.price || 0),
//         category: form.category.trim(),
//         quantity: Number(form.quantity || 1),
//       };
//       const { data } = await axios.post('http://localhost:5000/api/products', payload, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       setForm({ name: '', description: '', image: '', price: '', category: '', quantity: 1 });
//       setProducts((p) => [data, ...p]);
//       alert('Product added!');
//     } catch (err) {
//       console.error('Add product error:', err);
//       alert(err?.response?.data?.message || 'Failed to add product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       setProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   if (!isAdmin) {
//     return <div className="p-6 text-center">You are not authorized to view this page.</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Admin — Manage Products</h1>

//       {/* Add Product Form */}
//       <form onSubmit={handleAdd} className="bg-white rounded-xl shadow p-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//         <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2 rounded" />
//         <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="border p-2 rounded" />
//         <input name="price" type="number" min="0" step="0.01" placeholder="Price" value={form.price} onChange={handleChange} className="border p-2 rounded" />
//         <input name="quantity" type="number" min="1" step="1" placeholder="Quantity" value={form.quantity} onChange={handleChange} className="border p-2 rounded" />
//         <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//         <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded md:col-span-2 hover:bg-blue-700">
//           Add Product
//         </button>
//       </form>

//       {/* Products List */}
//       {loading ? (
//         <p>Loading…</p>
//       ) : products.length === 0 ? (
//         <p>No products yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {products.map((p) => (
//             <div key={p._id} className="bg-white rounded-xl shadow p-4">
//               {p.image ? (
//                 <img src={p.image} alt={p.name} className="w-full h-56 object-cover rounded-lg mb-3" />
//               ) : (
//                 <div className="w-full h-56 bg-gray-200 rounded-lg mb-3 grid place-items-center">
//                   <span className="text-gray-500">No image</span>
//                 </div>
//               )}
//               <div className="flex items-center justify-between">
//                 <h3 className="text-xl font-semibold">{p.name}</h3>
//                 <span className="font-bold">
//                   {Number(p.price || 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
//                 </span>
//               </div>
//               <p className="text-sm text-gray-600 mt-1">{p.category}</p>
//               <p className="text-gray-700 mt-2 line-clamp-3">{p.description}</p>
//               <div className="mt-4 flex gap-3">
//                 {/* Extend with edit later */}
//                 <button
//                   onClick={() => handleDelete(p._id)}
//                   className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProducts;















// // pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     image: '',
//     price: '',
//     category: '',
//     quantity: 1,
//   });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   // Fetch all products
//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({
//       ...f,
//       [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
//     }));
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         // Edit product
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         // Add new product
//         const { data } = await axios.post('http://localhost:5000/api/products', form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }
//       setForm({ name: '', description: '', image: '', price: '', category: '', quantity: 1 });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       image: product.image,
//       price: product.price,
//       category: product.category,
//       quantity: product.quantity,
//     });
//   };

//   const filteredProducts = products.filter(
//     (p) => selectedCategory === 'All' || p.category === selectedCategory
//   );
//   const uniqueCategories = ['All', ...Array.from(new Set(products.map((p) => p.category).filter(Boolean)))];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return <div className="p-6 text-center">You are not authorized to view this page.</div>;
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Admin Shop Dashboard</h1>

//         {/* Add/Edit Product Form */}
//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input
//             name="name"
//             placeholder="Product Name"
//             value={form.name}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="category"
//             placeholder="Category"
//             value={form.category}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="price"
//             type="number"
//             min="0"
//             step="0.01"
//             placeholder="Price"
//             value={form.price}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="quantity"
//             type="number"
//             min="1"
//             placeholder="Quantity"
//             value={form.quantity}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />
//           <input
//             name="image"
//             placeholder="Image URL"
//             value={form.image}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={form.description}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded md:col-span-2 hover:bg-blue-700"
//           >
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         {/* Categories Filter */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((p) => (
//               <div key={p._id} className="bg-gray-100 rounded-lg shadow-lg p-6">
//                 {p.image ? (
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-64 object-cover rounded-md mb-4"
//                   />
//                 ) : (
//                   <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                     <span className="text-gray-500">No image</span>
//                   </div>
//                 )}
//                 <h2 className="text-2xl font-semibold text-gray-800">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-gray-800 mt-4">
//                   {Number(p.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>
//                 <p className="text-sm text-gray-600 mt-1">Qty: {p.quantity}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button
//                     onClick={() => handleEditClick(p)}
//                     className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;














// // pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     image: '',
//     price: '',
//     category: '',
//     quantity: 1,
//   });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({
//       ...f,
//       [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
//     }));
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }
//       setForm({ name: '', description: '', image: '', price: '', category: '', quantity: 1 });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       image: product.image,
//       price: product.price,
//       category: product.category,
//       quantity: product.quantity,
//     });
//   };

//   const filteredProducts = products.filter(
//     (p) => selectedCategory === 'All' || p.category === selectedCategory
//   );
//   const uniqueCategories = ['All', ...Array.from(new Set(products.map((p) => p.category).filter(Boolean)))];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return <div className="p-6 text-center text-pink-400 font-semibold">You are not authorized to view this page.</div>;
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">Admin Shop Dashboard</h1>

//         {/* Add/Edit Product Form */}
//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input
//             name="name"
//             placeholder="Product Name"
//             value={form.name}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="category"
//             placeholder="Category"
//             value={form.category}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="price"
//             type="number"
//             min="0"
//             step="0.01"
//             placeholder="Price"
//             value={form.price}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="quantity"
//             type="number"
//             min="1"
//             placeholder="Quantity"
//             value={form.quantity}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />
//           <input
//             name="image"
//             placeholder="Image URL"
//             value={form.image}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={form.description}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           <button
//             type="submit"
//             className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500"
//           >
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         {/* Categories Filter */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-pink-400 text-white' : 'bg-gray-200 text-gray-800'
//               } hover:bg-pink-300`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? (
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-64 object-cover rounded-md mb-4"
//                   />
//                 ) : (
//                   <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                     <span className="text-gray-500">No image</span>
//                   </div>
//                 )}
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-4">
//                   {Number(p.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>
//                 <p className="text-sm text-gray-600 mt-1">Qty: {p.quantity}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button
//                     onClick={() => handleEditClick(p)}
//                     className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="bg-pink-600 text-white px-3 py-2 rounded hover:bg-pink-700"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;














// // pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//   });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({
//       ...f,
//       [name]: name === 'price' ? Number(value) : value,
//     }));
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }
//       setForm({ name: '', description: '', price: '', category: '' });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//     });
//   };

//   const filteredProducts = products.filter(
//     (p) => selectedCategory === 'All' || p.category === selectedCategory
//   );
//   const uniqueCategories = ['All', ...Array.from(new Set(products.map((p) => p.category).filter(Boolean)))];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return <div className="p-6 text-center text-pink-400 font-semibold">You are not authorized to view this page.</div>;
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">Admin Shop Dashboard</h1>

//         {/* Add/Edit Product Form */}
//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input
//             name="name"
//             placeholder="Product Name"
//             value={form.name}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="category"
//             placeholder="Category"
//             value={form.category}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="price"
//             type="number"
//             min="0"
//             step="0.01"
//             placeholder="Price"
//             value={form.price}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={form.description}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           <button
//             type="submit"
//             className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500"
//           >
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         {/* Categories Filter */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-pink-400 text-white' : 'bg-gray-200 text-gray-800'
//               } hover:bg-pink-300`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? (
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-64 object-cover rounded-md mb-4"
//                   />
//                 ) : (
//                   <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                     <span className="text-gray-500">No image</span>
//                   </div>
//                 )}
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-4">
//                   {Number(p.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button
//                     onClick={() => handleEditClick(p)}
//                     className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="bg-pink-600 text-white px-3 py-2 rounded hover:bg-pink-700"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;













// // pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//   });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({
//       ...f,
//       [name]: name === 'price' ? Number(value) : value,
//     }));
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }
//       setForm({ name: '', description: '', price: '', category: '' });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//     });
//   };

//   const filteredProducts = products.filter(
//     (p) => selectedCategory === 'All' || p.category === selectedCategory
//   );

//   const uniqueCategories = [
//     'All',
//     ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
//   ];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return (
//       <div className="p-6 text-center text-pink-400 font-semibold">
//         You are not authorized to view this page.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
//           Admin Shop Dashboard
//         </h1>

//         {/* Add/Edit Product Form */}
//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input
//             name="name"
//             placeholder="Product Name"
//             value={form.name}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="category"
//             placeholder="Category"
//             value={form.category}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="price"
//             type="number"
//             min="0"
//             step="0.01"
//             placeholder="Price"
//             value={form.price}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={form.description}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           <button
//             type="submit"
//             className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500"
//           >
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         {/* Categories Filter */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//               } hover:bg-blue-400`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? (
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-64 object-cover rounded-md mb-4"
//                   />
//                 ) : (
//                   <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                     <span className="text-gray-500">No image</span>
//                   </div>
//                 )}
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-4">
//                   {Number(p.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button
//                     onClick={() => handleEditClick(p)}
//                     className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;
















// // pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//   });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({
//       ...f,
//       [name]: name === 'price' ? Number(value) : value,
//     }));
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }
//       setForm({ name: '', description: '', price: '', category: '' });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//     });
//   };

//   const filteredProducts = products.filter((p) => {
//     const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
//     const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const uniqueCategories = [
//     'All',
//     ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
//   ];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return (
//       <div className="p-6 text-center text-pink-400 font-semibold">
//         You are not authorized to view this page.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
//           Admin Shop Dashboard
//         </h1>

//         {/* Search Input */}
//         <div className="mb-6 text-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 rounded w-full md:w-1/3"
//           />
//         </div>

//         {/* Add/Edit Product Form */}
//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input
//             name="name"
//             placeholder="Product Name"
//             value={form.name}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="category"
//             placeholder="Category"
//             value={form.category}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="price"
//             type="number"
//             min="0"
//             step="0.01"
//             placeholder="Price"
//             value={form.price}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={form.description}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           <button
//             type="submit"
//             className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500"
//           >
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         {/* Categories Filter */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//               } hover:bg-blue-400`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? (
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-64 object-cover rounded-md mb-4"
//                   />
//                 ) : (
//                   <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                     <span className="text-gray-500">No image</span>
//                   </div>
//                 )}
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-4">
//                   {Number(p.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button
//                     onClick={() => handleEditClick(p)}
//                     className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;









// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [form, setForm] = useState({ name: '', description: '', price: '', category: '' });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async (search = '', category = 'All') => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//         params: { search, category },
//       });
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts(searchTerm, selectedCategory);
//   }, [isAuthenticated, user, searchTerm, selectedCategory]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: name === 'price' ? Number(value) : value }));
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }
//       setForm({ name: '', description: '', price: '', category: '' });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//     });
//   };

//   const uniqueCategories = [
//     'All',
//     ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
//   ];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return (
//       <div className="p-6 text-center text-pink-400 font-semibold">
//         You are not authorized to view this page.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
//           Admin Shop Dashboard
//         </h1>

//         {/* Search Input */}
//         <div className="mb-6 text-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 rounded w-full md:w-1/3"
//           />
//         </div>

//         {/* Add/Edit Product Form */}
//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input
//             name="name"
//             placeholder="Product Name"
//             value={form.name}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="category"
//             placeholder="Category"
//             value={form.category}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="price"
//             type="number"
//             min="0"
//             step="0.01"
//             placeholder="Price"
//             value={form.price}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={form.description}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           <button
//             type="submit"
//             className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500"
//           >
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         {/* Categories Filter */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//               } hover:bg-blue-400`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? (
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-64 object-cover rounded-md mb-4"
//                   />
//                 ) : (
//                   <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                     <span className="text-gray-500">No image</span>
//                   </div>
//                 )}
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-4">
//                   {Number(p.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button
//                     onClick={() => handleEditClick(p)}
//                     className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;













// // src/pages/AdminProducts.jsx

// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [form, setForm] = useState({ name: '', description: '', price: '', category: '', image: '' });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async (search = '', category = 'All') => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//         params: { search, category },
//       });
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts(searchTerm, selectedCategory);
//   }, [isAuthenticated, user, searchTerm, selectedCategory]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: name === 'price' ? Number(value) : value }));
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }
//       setForm({ name: '', description: '', price: '', category: '', image: '' });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//       image: product.image || '',
//     });
//   };

//   const uniqueCategories = [
//     'All',
//     ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
//   ];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return (
//       <div className="p-6 text-center text-pink-400 font-semibold">
//         You are not authorized to view this page.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
//           Admin Shop Dashboard
//         </h1>

//         {/* Search Input */}
//         <div className="mb-6 text-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 rounded w-full md:w-1/3"
//           />
//         </div>

//         {/* Add/Edit Product Form */}
//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input
//             name="name"
//             placeholder="Product Name"
//             value={form.name}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="category"
//             placeholder="Category"
//             value={form.category}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="price"
//             type="number"
//             min="0"
//             step="0.01"
//             placeholder="Price"
//             value={form.price}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={form.description}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           {/* Image URL Input */}
//           <input
//             name="image"
//             type="text"
//             placeholder="Image URL"
//             value={form.image || ''}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           <button
//             type="submit"
//             className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500"
//           >
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         {/* Categories Filter */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//               } hover:bg-blue-400`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? (
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-64 object-cover rounded-md mb-4"
//                   />
//                 ) : (
//                   <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                     <span className="text-gray-500">No image</span>
//                   </div>
//                 )}
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-4">
//                   {Number(p.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button
//                     onClick={() => handleEditClick(p)}
//                     className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;












// // src/pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [allProducts, setAllProducts] = useState([]); // store all products
//   const [products, setProducts] = useState([]); // filtered products
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [form, setForm] = useState({ name: '', description: '', price: '', category: '', image: '' });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts(res.data || []);
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   // Filter products based on searchTerm and selectedCategory
//   useEffect(() => {
//     let filtered = allProducts;

//     if (selectedCategory !== 'All') {
//       filtered = filtered.filter((p) => p.category === selectedCategory);
//     }

//     if (searchTerm.trim() !== '') {
//       filtered = filtered.filter((p) =>
//         p.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     setProducts(filtered);
//   }, [allProducts, searchTerm, selectedCategory]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: name === 'price' ? Number(value) : value }));
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setAllProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAllProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }
//       setForm({ name: '', description: '', price: '', category: '', image: '' });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//       image: product.image || '',
//     });
//   };

//   const uniqueCategories = [
//     'All',
//     ...Array.from(new Set(allProducts.map((p) => p.category).filter(Boolean))),
//   ];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return (
//       <div className="p-6 text-center text-pink-400 font-semibold">
//         You are not authorized to view this page.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
//           Admin Shop Dashboard
//         </h1>

//         {/* Search Input */}
//         <div className="mb-6 text-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 rounded w-full md:w-1/3"
//           />
//         </div>

//         {/* Add/Edit Product Form */}
//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input
//             name="name"
//             placeholder="Product Name"
//             value={form.name}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="category"
//             placeholder="Category"
//             value={form.category}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <input
//             name="price"
//             type="number"
//             min="0"
//             step="0.01"
//             placeholder="Price"
//             value={form.price}
//             onChange={handleChange}
//             className="border p-2 rounded"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={form.description}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           {/* Image URL Input */}
//           <input
//             name="image"
//             type="text"
//             placeholder="Image URL"
//             value={form.image || ''}
//             onChange={handleChange}
//             className="border p-2 rounded md:col-span-2"
//           />
//           <button
//             type="submit"
//             className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500"
//           >
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         {/* Categories Filter */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
//               } hover:bg-blue-400`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? (
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-full h-64 object-cover rounded-md mb-4"
//                   />
//                 ) : (
//                   <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                     <span className="text-gray-500">No image</span>
//                   </div>
//                 )}
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-4">
//                   {Number(p.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button
//                     onClick={() => handleEditClick(p)}
//                     className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;
















// // src/pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [allProducts, setAllProducts] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [form, setForm] = useState({ name: '', description: '', price: '', category: '', image: '', quantity: 1 });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts(res.data || []);
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   useEffect(() => {
//     let filtered = allProducts;
//     if (selectedCategory !== 'All') filtered = filtered.filter((p) => p.category === selectedCategory);
//     if (searchTerm.trim() !== '') filtered = filtered.filter((p) =>
//       p.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setProducts(filtered);
//   }, [allProducts, searchTerm, selectedCategory]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: name === 'price' || name === 'quantity' ? Number(value) : value }));
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setAllProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAllProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }
//       setForm({ name: '', description: '', price: '', category: '', image: '', quantity: 1 });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//       image: product.image || '',
//       quantity: product.quantity || 1,
//     });
//   };

//   const uniqueCategories = ['All', ...Array.from(new Set(allProducts.map((p) => p.category).filter(Boolean)))];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return (
//       <div className="p-6 text-center text-pink-400 font-semibold">
//         You are not authorized to view this page.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
//           Admin Shop Dashboard
//         </h1>

//         <div className="mb-6 text-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 rounded w-full md:w-1/3"
//           />
//         </div>

//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="border p-2 rounded" required />
//           <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="border p-2 rounded" required />
//           <input name="price" type="number" min="0" step="0.01" placeholder="Price" value={form.price} onChange={handleChange} className="border p-2 rounded" required />
//           <input name="quantity" type="number" min="1" step="1" placeholder="Quantity (ml)" value={form.quantity} onChange={handleChange} className="border p-2 rounded" required />
//           <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//           <input name="image" type="text" placeholder="Image URL" value={form.image || ''} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//           <button type="submit" className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500">
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button key={cat} onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-400`}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? <img src={p.image} alt={p.name} className="w-full h-64 object-cover rounded-md mb-4" />
//                   : <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center"><span className="text-gray-500">No image</span></div>
//                 }
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-2">{p.price} INR</p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>
//                 <p className="text-sm text-gray-600 mt-1">Quantity: {p.quantity} ml</p>

//                 <div className="mt-4 flex gap-3">
//                   <button onClick={() => handleEditClick(p)} className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500">Edit</button>
//                   <button onClick={() => handleDelete(p._id)} className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500">Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;










// //pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [allProducts, setAllProducts] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//     image: '',
//     quantity: 1,
//     unit: 'pcs',
//     stock: 0,
//   });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts(res.data || []);
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   useEffect(() => {
//     let filtered = allProducts;
//     if (selectedCategory !== 'All') filtered = filtered.filter((p) => p.category === selectedCategory);
//     if (searchTerm.trim() !== '') filtered = filtered.filter((p) =>
//       p.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setProducts(filtered);
//   }, [allProducts, searchTerm, selectedCategory]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({
//       ...f,
//       [name]: ['price', 'quantity', 'stock'].includes(name) ? Number(value) : value,
//     }));
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setAllProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAllProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }
//       setForm({ name: '', description: '', price: '', category: '', image: '', quantity: 1, unit: 'pcs', stock: 0 });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//       image: product.image || '',
//       quantity: product.quantity || 1,
//       unit: product.unit || 'pcs',
//       stock: product.stock || 0,
//     });
//   };

//   const uniqueCategories = ['All', ...Array.from(new Set(allProducts.map((p) => p.category).filter(Boolean)))];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return (
//       <div className="p-6 text-center text-pink-400 font-semibold">
//         You are not authorized to view this page.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
//           Admin Shop Dashboard
//         </h1>

//         <div className="mb-6 text-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 rounded w-full md:w-1/3"
//           />
//         </div>

//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="border p-2 rounded" required />
//           <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="border p-2 rounded" required />
//           <input name="price" type="number" min="0" step="0.01" placeholder="Price" value={form.price} onChange={handleChange} className="border p-2 rounded" required />
//           <div className="flex gap-2">
//             <input name="quantity" type="number" min="1" step="1" placeholder="Quantity" value={form.quantity} onChange={handleChange} className="border p-2 rounded w-2/3" required />
//             <select name="unit" value={form.unit} onChange={handleChange} className="border p-2 rounded w-1/3">
//               <option value="ml">ml</option>
//               <option value="g">g</option>
//               <option value="kg">kg</option>
//               <option value="pcs">pcs</option>
//             </select>
//           </div>
//           <input name="stock" type="number" min="0" step="1" placeholder="Stock" value={form.stock} onChange={handleChange} className="border p-2 rounded" required />
//           <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//           <input name="image" type="text" placeholder="Image URL" value={form.image || ''} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//           <button type="submit" className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500">
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button key={cat} onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-400`}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? <img src={p.image} alt={p.name} className="w-full h-64 object-cover rounded-md mb-4" />
//                   : <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center"><span className="text-gray-500">No image</span></div>
//                 }
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-2">{p.price} INR</p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>
//                 <p className="text-sm text-gray-600 mt-1">Quantity: {p.quantity} {p.unit}</p>
//                 <p className="text-sm text-gray-600 mt-1">Stock: {p.stock}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button onClick={() => handleEditClick(p)} className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500">Edit</button>
//                   <button onClick={() => handleDelete(p._id)} className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500">Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;




















// //pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// // category → unit mapping
// const categoryUnits = {
//   serum: "ml",
//   moisturizer: "g",
//   facewash: "ml",
//   soap: "pcs",
//   sunscreen: "ml",
//   shampoo: "ml",
//   conditioner: "ml",
//   toner: "ml",
//   cleanser: "ml",
//   lotion: "ml",
//   gel: "ml",
//   oil: "ml",
//   scrub: "g",
//   mask: "g",
//   cream: "g",
//   balm: "g",
//   powder: "g",
//   mist: "ml",
//   pack: "pcs",
//   capsule: "pcs",
//   drops: "ml",
//   exfoliator: "g",
//   peel: "ml",
//   essence: "ml",
//   ampoule: "ml",
//   sheetmask: "pcs",
//   lipcare: "g",
//   bodybutter: "g",
//   bodywash: "ml",
//   handwash: "ml",
//   deodorant: "ml",
//   perfume: "ml"
// };

// // helper → case-insensitive
// const getUnitForCategory = (category) => {
//   if (!category) return "pcs";
//   return categoryUnits[category.toLowerCase()] || "pcs";
// };

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [allProducts, setAllProducts] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//     image: '',
//     quantity: 1,
//     unit: 'pcs',
//     stock: 0,
//   });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts(res.data || []);
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   useEffect(() => {
//     let filtered = allProducts;
//     if (selectedCategory !== 'All') {
//       filtered = filtered.filter(
//         (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }
//     if (searchTerm.trim() !== '') {
//       filtered = filtered.filter((p) =>
//         p.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     setProducts(filtered);
//   }, [allProducts, searchTerm, selectedCategory]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // auto set unit when category changes
//     if (name === "category") {
//       const unit = getUnitForCategory(value);
//       setForm((f) => ({
//         ...f,
//         category: value,
//         unit
//       }));
//     } else {
//       setForm((f) => ({
//         ...f,
//         [name]: ['price', 'quantity', 'stock'].includes(name) ? Number(value) : value,
//       }));
//     }
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           form,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setAllProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAllProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }
//       setForm({ name: '', description: '', price: '', category: '', image: '', quantity: 1, unit: 'pcs', stock: 0 });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//       image: product.image || '',
//       quantity: product.quantity || 1,
//       unit: getUnitForCategory(product.category), // reset unit based on category
//       stock: product.stock || 0,
//     });
//   };

//   const uniqueCategories = ['All', ...Array.from(new Set(allProducts.map((p) => p.category).filter(Boolean)))];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return (
//       <div className="p-6 text-center text-pink-400 font-semibold">
//         You are not authorized to view this page.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
//           Admin Shop Dashboard
//         </h1>

//         <div className="mb-6 text-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 rounded w-full md:w-1/3"
//           />
//         </div>

//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="border p-2 rounded" required />
//           <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="border p-2 rounded" required />
//           <input name="price" type="number" min="0" step="0.01" placeholder="Price" value={form.price} onChange={handleChange} className="border p-2 rounded" required />
//           <div className="flex gap-2">
//             <input name="quantity" type="number" min="1" step="1" placeholder="Quantity" value={form.quantity} onChange={handleChange} className="border p-2 rounded w-2/3" required />
//             <input name="unit" value={form.unit} readOnly className="border p-2 rounded w-1/3 bg-gray-100" />
//           </div>
//           <input name="stock" type="number" min="0" step="1" placeholder="Stock" value={form.stock} onChange={handleChange} className="border p-2 rounded" required />
//           <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//           <input name="image" type="text" placeholder="Image URL" value={form.image || ''} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//           <button type="submit" className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500">
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button key={cat} onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-400`}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? <img src={p.image} alt={p.name} className="w-full h-64 object-cover rounded-md mb-4" />
//                   : <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center"><span className="text-gray-500">No image</span></div>
//                 }
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-2">{p.price} INR</p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>
//                 <p className="text-sm text-gray-600 mt-1">Quantity: {p.quantity} {p.unit}</p>
//                 <p className="text-sm text-gray-600 mt-1">Stock: {p.stock}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button onClick={() => handleEditClick(p)} className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500">Edit</button>
//                   <button onClick={() => handleDelete(p._id)} className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500">Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;
























// // pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// // category → unit mapping
// const categoryUnits = {
//   serum: "ml",
//   moisturizer: "g",
//   facewash: "ml",
//   soap: "pcs",
//   sunscreen: "ml",
//   shampoo: "ml",
//   conditioner: "ml",
//   toner: "ml",
//   cleanser: "ml",
//   lotion: "ml",
//   gel: "ml",
//   oil: "ml",
//   scrub: "g",
//   mask: "g",
//   cream: "g",
//   balm: "g",
//   powder: "g",
//   mist: "ml",
//   pack: "pcs",
//   capsule: "pcs",
//   drops: "ml",
//   exfoliator: "g",
//   peel: "ml",
//   essence: "ml",
//   ampoule: "ml",
//   sheetmask: "pcs",
//   lipcare: "g",
//   bodybutter: "g",
//   bodywash: "ml",
//   bodylotion: "ml",
//   handwash: "ml",
//   deodorant: "ml",
//   perfume: "ml"
// };

// // helper → case-insensitive
// const getUnitForCategory = (category) => {
//   if (!category) return "pcs";
//   return categoryUnits[category.toLowerCase()] || "pcs";
// };

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [allProducts, setAllProducts] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//     newCategory: '',
//     image: '',
//     quantity: 1,
//     unit: 'pcs',
//     stock: 0,
//   });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts(res.data || []);
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   useEffect(() => {
//     let filtered = allProducts;
//     if (selectedCategory !== 'All') {
//       filtered = filtered.filter(
//         (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }
//     if (searchTerm.trim() !== '') {
//       filtered = filtered.filter((p) =>
//         p.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     setProducts(filtered);
//   }, [allProducts, searchTerm, selectedCategory]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'category') {
//       // reset newCategory if changing main dropdown
//       setForm(f => ({ ...f, category: value, newCategory: '' }));

//       // auto set unit for selected category
//       const unit = value && value !== '__new__' ? getUnitForCategory(value) : 'pcs';
//       setForm(f => ({ ...f, unit }));
//     } else if (name === 'newCategory') {
//       // auto set unit for new category
//       const unit = getUnitForCategory(value);
//       setForm(f => ({ ...f, newCategory: value, unit }));
//     } else {
//       setForm(f => ({
//         ...f,
//         [name]: ['price', 'quantity', 'stock'].includes(name) ? Number(value) : value,
//       }));
//     }
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();
//     try {
//       const finalCategory = form.category === '__new__' ? form.newCategory.toLowerCase() : form.category.toLowerCase();
//       const payload = { ...form, category: finalCategory };

//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           payload,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setAllProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', payload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAllProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }

//       setForm({ name: '', description: '', price: '', category: '', newCategory: '', image: '', quantity: 1, unit: 'pcs', stock: 0 });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category.toLowerCase(),
//       newCategory: '',
//       image: product.image || '',
//       quantity: product.quantity || 1,
//       unit: getUnitForCategory(product.category),
//       stock: product.stock || 0,
//     });
//   };

//   const uniqueCategories = ['All', ...Array.from(new Set(allProducts.map((p) => p.category.toLowerCase()).filter(Boolean)))];

//   if (!isAuthenticated || user.role !== 'admin') {
//     return (
//       <div className="p-6 text-center text-pink-400 font-semibold">
//         You are not authorized to view this page.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
//           Admin Shop Dashboard
//         </h1>

//         <div className="mb-6 text-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 rounded w-full md:w-1/3"
//           />
//         </div>

//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="border p-2 rounded" required />

//           {/* Category dropdown */}
//           <select name="category" value={form.category} onChange={handleChange} className="border p-2 rounded" required>
//             <option value="">Select Category</option>
//             {uniqueCategories.filter(c => c !== 'All').map((cat) => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//             <option value="__new__">Add new category</option>
//           </select>

//           {/* New category input */}
//           {form.category === '__new__' && (
//             <input
//               type="text"
//               name="newCategory"
//               placeholder="Enter new category"
//               value={form.newCategory || ''}
//               onChange={handleChange}
//               className="border p-2 rounded"
//               required
//             />
//           )}

//           <input name="price" type="number" min="0" step="0.01" placeholder="Price" value={form.price} onChange={handleChange} className="border p-2 rounded" required />
//           <div className="flex gap-2">
//             <input name="quantity" type="number" min="1" step="1" placeholder="Quantity" value={form.quantity} onChange={handleChange} className="border p-2 rounded w-2/3" required />
//             <input name="unit" value={form.unit} readOnly className="border p-2 rounded w-1/3 bg-gray-100" />
//           </div>
//           <input name="stock" type="number" min="0" step="1" placeholder="Stock" value={form.stock} onChange={handleChange} className="border p-2 rounded" required />
//           <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//           <input name="image" type="text" placeholder="Image URL" value={form.image || ''} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//           <button type="submit" className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500">
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button key={cat} onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-400`}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? <img src={p.image} alt={p.name} className="w-full h-64 object-cover rounded-md mb-4" />
//                   : <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center"><span className="text-gray-500">No image</span></div>
//                 }
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-2">{p.price} INR</p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>
//                 <p className="text-sm text-gray-600 mt-1">Quantity: {p.quantity} {p.unit}</p>
//                 <p className="text-sm text-gray-600 mt-1">Stock: {p.stock}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button onClick={() => handleEditClick(p)} className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500">Edit</button>
//                   <button onClick={() => handleDelete(p._id)} className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500">Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;

















// // pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// // category → default unit mapping
// const categoryUnits = {
//   Serum: "ml",
//   Moisturizer: "g",
//   Facewash: "ml",
//   Soap: "pcs",
//   Sunscreen: "ml",
//   Shampoo: "ml",
//   Conditioner: "ml",
//   Toner: "ml",
//   Cleanser: "ml",
//   Lotion: "ml",
//   Gel: "ml",
//   Oil: "ml",
//   Scrub: "g",
//   Mask: "g",
//   Cream: "g",
//   Balm: "g",
//   Powder: "g",
//   Mist: "ml",
//   Pack: "pcs",
//   Capsule: "pcs",
//   Drops: "ml",
//   Exfoliator: "g",
//   Peel: "ml",
//   Essence: "ml",
//   Ampoule: "ml",
//   Sheetmask: "pcs",
//   Lipcare: "g",
//   Bodybutter: "g",
//   Bodywash: "ml",
//   Bodylotion: "ml",
//   Handwash: "ml",
//   Deodorant: "ml",
//   Perfume: "ml"
// };

// // helper → get unit for category
// const getUnitForCategory = (category) => {
//   if (!category) return "pcs";
//   return categoryUnits[category] || "pcs";
// };

// // all possible units
// const allUnits = Array.from(new Set(Object.values(categoryUnits))).sort();

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [allProducts, setAllProducts] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//     newCategory: '',
//     image: '',
//     quantity: 1,
//     unit: 'pcs',
//     newUnit: '',
//     stock: 0,
//   });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts(res.data || []);
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   useEffect(() => {
//     let filtered = allProducts;
//     if (selectedCategory !== 'All') {
//       filtered = filtered.filter(
//         (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }
//     if (searchTerm.trim() !== '') {
//       filtered = filtered.filter((p) =>
//         p.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     setProducts(filtered);
//   }, [allProducts, searchTerm, selectedCategory]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'category') {
//       setForm(f => ({ ...f, category: value, newCategory: '' }));
//       const unit = value && value !== '__new__' ? getUnitForCategory(value) : 'pcs';
//       setForm(f => ({ ...f, unit }));
//     } else if (name === 'newCategory') {
//       setForm(f => ({ ...f, newCategory: value }));
//       if (value) setForm(f => ({ ...f, unit: 'pcs' })); // default unit for new category
//     } else if (name === 'unit') {
//       if (value === '__new__') {
//         setForm(f => ({ ...f, unit: value, newUnit: '' }));
//       } else {
//         setForm(f => ({ ...f, unit: value, newUnit: '' }));
//       }
//     } else if (name === 'newUnit') {
//       setForm(f => ({ ...f, newUnit: value }));
//     } else {
//       setForm(f => ({
//         ...f,
//         [name]: ['price', 'quantity', 'stock'].includes(name) ? Number(value) : value,
//       }));
//     }
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();

//     let finalCategory = form.category === '__new__' ? form.newCategory : form.category;
//     if (!finalCategory) return alert('Enter category');
//     finalCategory = finalCategory.charAt(0).toUpperCase() + finalCategory.slice(1);

//     let finalUnit = form.unit === '__new__' ? form.newUnit : form.unit;
//     if (!finalUnit) return alert('Enter unit');

//     const payload = {
//       ...form,
//       category: finalCategory,
//       unit: finalUnit
//     };

//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           payload,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setAllProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', payload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAllProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }

//       setForm({ name: '', description: '', price: '', category: '', newCategory: '', image: '', quantity: 1, unit: 'pcs', newUnit: '', stock: 0 });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: categoryUnits[product.category] ? product.category : '__new__',
//       newCategory: categoryUnits[product.category] ? '' : product.category,
//       image: product.image || '',
//       quantity: product.quantity || 1,
//       unit: getUnitForCategory(product.category),
//       newUnit: categoryUnits[product.category] ? '' : product.unit,
//       stock: product.stock || 0,
//     });
//   };

//   const uniqueCategories = ['All', ...Array.from(new Set(allProducts.map((p) => p.category).filter(Boolean)))];
//   const uniqueUnits = allUnits;

//   if (!isAuthenticated || user.role !== 'admin') {
//     return (
//       <div className="p-6 text-center text-pink-400 font-semibold">
//         You are not authorized to view this page.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
//           Admin Shop Dashboard
//         </h1>

//         <div className="mb-6 text-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 rounded w-full md:w-1/3"
//           />
//         </div>

//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="border p-2 rounded" required />

//           {/* Category dropdown */}
//           <select name="category" value={form.category} onChange={handleChange} className="border p-2 rounded" required>
//             <option value="">Select Category</option>
//             {uniqueCategories.filter(c => c !== 'All').map((cat) => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//             <option value="__new__">Add new category</option>
//           </select>

//           {/* New category input */}
//           {form.category === '__new__' && (
//             <input
//               type="text"
//               name="newCategory"
//               placeholder="Enter new category"
//               value={form.newCategory || ''}
//               onChange={handleChange}
//               className="border p-2 rounded"
//               required
//             />
//           )}

//           <input name="price" type="number" min="0" step="0.01" placeholder="Price" value={form.price} onChange={handleChange} className="border p-2 rounded" required />

//           {/* Quantity + Unit */}
//           <div className="flex gap-2">
//             <input name="quantity" type="number" min="1" step="1" placeholder="Quantity" value={form.quantity} onChange={handleChange} className="border p-2 rounded w-2/3" required />

//             <select name="unit" value={form.unit} onChange={handleChange} className="border p-2 rounded w-1/3" required>
//               {uniqueUnits.map(u => <option key={u} value={u}>{u}</option>)}
//               <option value="__new__">Add new unit</option>
//             </select>
//           </div>

//           {/* New unit input */}
//           {form.unit === '__new__' && (
//             <input
//               type="text"
//               name="newUnit"
//               placeholder="Enter new unit"
//               value={form.newUnit || ''}
//               onChange={handleChange}
//               className="border p-2 rounded w-1/3 mt-2"
//               required
//             />
//           )}

//           <input name="stock" type="number" min="0" step="1" placeholder="Stock" value={form.stock} onChange={handleChange} className="border p-2 rounded" required />
//           <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//           <input name="image" type="text" placeholder="Image URL" value={form.image || ''} onChange={handleChange} className="border p-2 rounded md:col-span-2" />

//           <button type="submit" className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500">
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         {/* Category Filter */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button key={cat} onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-400`}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? <img src={p.image} alt={p.name} className="w-full h-64 object-cover rounded-md mb-4" />
//                   : <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center"><span className="text-gray-500">No image</span></div>
//                 }
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-2">{p.price} INR</p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>
//                 <p className="text-sm text-gray-600 mt-1">Quantity: {p.quantity} {p.unit}</p>
//                 <p className="text-sm text-gray-600 mt-1">Stock: {p.stock}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button onClick={() => handleEditClick(p)} className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500">Edit</button>
//                   <button onClick={() => handleDelete(p._id)} className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500">Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;
















// // pages/AdminProducts.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// // category → default unit mapping
// const categoryUnits = {
//   Serum: "ml",
//   Moisturizer: "g",
//   Facewash: "ml",
//   Soap: "pcs",
//   Sunscreen: "ml",
//   Shampoo: "ml",
//   Conditioner: "ml",
//   Toner: "ml",
//   Cleanser: "ml",
//   Lotion: "ml",
//   Gel: "ml",
//   Oil: "ml",
//   Scrub: "g",
//   Mask: "g",
//   Cream: "g",
//   Balm: "g",
//   Powder: "g",
//   Mist: "ml",
//   Pack: "pcs",
//   Capsule: "pcs",
//   Drops: "ml",
//   Exfoliator: "g",
//   Peel: "ml",
//   Essence: "ml",
//   Ampoule: "ml",
//   Sheetmask: "pcs",
//   Lipcare: "g",
//   Bodybutter: "g",
//   Bodywash: "ml",
//   Bodylotion: "ml",
//   Handwash: "ml",
//   Deodorant: "ml",
//   Perfume: "ml"
// };

// // helper → get unit for category
// const getUnitForCategory = (category) => {
//   if (!category) return "pcs";
//   return categoryUnits[category] || "pcs";
// };

// // all possible units
// const allUnits = Array.from(new Set(Object.values(categoryUnits))).sort();

// const AdminProducts = () => {
//   const { isAuthenticated, user } = useContext(AuthContext);
//   const [allProducts, setAllProducts] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     price: '',
//     category: '',
//     newCategory: '',
//     image: '',
//     quantity: 1,
//     unit: 'pcs',
//     newUnit: '',
//     stock: 0,
//   });
//   const [editingProduct, setEditingProduct] = useState(null);

//   const token = localStorage.getItem('token');

//   const fetchProducts = async () => {
//     setLoadingProducts(true);
//     try {
//       const res = await axios.get('http://localhost:5000/api/products', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts(res.data || []);
//       setProducts(res.data || []);
//     } catch (err) {
//       console.error('Fetch products error:', err);
//     } finally {
//       setLoadingProducts(false);
//     }
//   };

//   useEffect(() => {
//     if (!isAuthenticated || user.role !== 'admin') return;
//     fetchProducts();
//   }, [isAuthenticated, user]);

//   useEffect(() => {
//     let filtered = allProducts;
//     if (selectedCategory !== 'All') {
//       filtered = filtered.filter(
//         (p) => (p.category?.charAt(0).toUpperCase() + p.category?.slice(1).toLowerCase()) === selectedCategory
//       );
//     }
//     if (searchTerm.trim() !== '') {
//       filtered = filtered.filter((p) =>
//         p.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     setProducts(filtered);
//   }, [allProducts, searchTerm, selectedCategory]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'category') {
//       setForm(f => ({ ...f, category: value, newCategory: '' }));
//       const unit = value && value !== '__new__' ? getUnitForCategory(value) : 'pcs';
//       setForm(f => ({ ...f, unit }));
//     } else if (name === 'newCategory') {
//       setForm(f => ({ ...f, newCategory: value }));
//       if (value) setForm(f => ({ ...f, unit: 'pcs' }));
//     } else if (name === 'unit') {
//       if (value === '__new__') {
//         setForm(f => ({ ...f, unit: value, newUnit: '' }));
//       } else {
//         setForm(f => ({ ...f, unit: value, newUnit: '' }));
//       }
//     } else if (name === 'newUnit') {
//       setForm(f => ({ ...f, newUnit: value }));
//     } else {
//       setForm(f => ({
//         ...f,
//         [name]: ['price', 'quantity', 'stock'].includes(name) ? Number(value) : value,
//       }));
//     }
//   };

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddOrEdit = async (e) => {
//     e.preventDefault();

//     let finalCategory = form.category === '__new__' ? form.newCategory : form.category;
//     if (!finalCategory) return alert('Enter category');
//     finalCategory = finalCategory.charAt(0).toUpperCase() + finalCategory.slice(1).toLowerCase();

//     let finalUnit = form.unit === '__new__' ? form.newUnit : form.unit;
//     if (!finalUnit) return alert('Enter unit');

//     const payload = {
//       ...form,
//       category: finalCategory,
//       unit: finalUnit
//     };

//     try {
//       if (editingProduct) {
//         const { data } = await axios.put(
//           `http://localhost:5000/api/products/${editingProduct._id}`,
//           payload,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setAllProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
//         setEditingProduct(null);
//         alert('Product updated!');
//       } else {
//         const { data } = await axios.post('http://localhost:5000/api/products', payload, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAllProducts((p) => [data, ...p]);
//         alert('Product added!');
//       }

//       setForm({ name: '', description: '', price: '', category: '', newCategory: '', image: '', quantity: 1, unit: 'pcs', newUnit: '', stock: 0 });
//     } catch (err) {
//       console.error('Add/Edit error:', err);
//       alert(err?.response?.data?.message || 'Failed to add/update product');
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Delete this product?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setAllProducts((p) => p.filter((x) => x._id !== id));
//     } catch (err) {
//       console.error('Delete error:', err);
//       alert(err?.response?.data?.message || 'Failed to delete');
//     }
//   };

//   const handleEditClick = (product) => {
//     setEditingProduct(product);
//     const normalizedCategory = categoryUnits[product.category] ? product.category : '__new__';
//     setForm({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: normalizedCategory,
//       newCategory: normalizedCategory === '__new__' ? product.category : '',
//       image: product.image || '',
//       quantity: product.quantity || 1,
//       unit: getUnitForCategory(product.category),
//       newUnit: normalizedCategory === '__new__' ? '' : product.unit,
//       stock: product.stock || 0,
//     });
//   };

//   // Normalize categories and remove duplicates
//   const uniqueCategories = [
//     'All',
//     ...Array.from(
//       new Set(
//         allProducts
//           .map((p) => p.category?.trim())
//           .filter(Boolean)
//           .map((c) => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase())
//       )
//     ),
//   ];
//   const uniqueUnits = allUnits;

//   if (!isAuthenticated || user.role !== 'admin') {
//     return (
//       <div className="p-6 text-center text-pink-400 font-semibold">
//         You are not authorized to view this page.
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
//           Admin Shop Dashboard
//         </h1>

//         <div className="mb-6 text-center">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 rounded w-full md:w-1/3"
//           />
//         </div>

//         <form
//           onSubmit={handleAddOrEdit}
//           className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="border p-2 rounded" required />

//           {/* Category dropdown */}
//           <select name="category" value={form.category} onChange={handleChange} className="border p-2 rounded" required>
//             <option value="">Select Category</option>
//             {uniqueCategories.filter(c => c !== 'All').map((cat) => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//             <option value="__new__">Add new category</option>
//           </select>

//           {/* New category input */}
//           {form.category === '__new__' && (
//             <input
//               type="text"
//               name="newCategory"
//               placeholder="Enter new category"
//               value={form.newCategory || ''}
//               onChange={handleChange}
//               className="border p-2 rounded"
//               required
//             />
//           )}

//           <input name="price" type="number" min="0" step="0.01" placeholder="Price" value={form.price} onChange={handleChange} className="border p-2 rounded" required />

//           {/* Quantity + Unit */}
//           <div className="flex gap-2">
//             <input name="quantity" type="number" min="1" step="1" placeholder="Quantity" value={form.quantity} onChange={handleChange} className="border p-2 rounded w-2/3" required />
//             <select name="unit" value={form.unit} onChange={handleChange} className="border p-2 rounded w-1/3" required>
//               {uniqueUnits.map(u => <option key={u} value={u}>{u}</option>)}
//               <option value="__new__">Add new unit</option>
//             </select>
//           </div>

//           {/* New unit input */}
//           {form.unit === '__new__' && (
//             <input
//               type="text"
//               name="newUnit"
//               placeholder="Enter new unit"
//               value={form.newUnit || ''}
//               onChange={handleChange}
//               className="border p-2 rounded w-1/3 mt-2"
//               required
//             />
//           )}

//           <input name="stock" type="number" min="0" step="1" placeholder="Stock" value={form.stock} onChange={handleChange} className="border p-2 rounded" required />
//           <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2 rounded md:col-span-2" />
//           <input name="image" type="text" placeholder="Image URL" value={form.image || ''} onChange={handleChange} className="border p-2 rounded md:col-span-2" />

//           <button type="submit" className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500">
//             {editingProduct ? 'Update Product' : 'Add Product'}
//           </button>
//         </form>

//         {/* Category Filter */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button key={cat} onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-400`}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((p) => (
//               <div key={p._id} className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200">
//                 {p.image ? <img src={p.image} alt={p.name} className="w-full h-64 object-cover rounded-md mb-4" />
//                   : <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center"><span className="text-gray-500">No image</span></div>
//                 }
//                 <h2 className="text-2xl font-semibold text-pink-400">{p.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{p.description}</p>
//                 <p className="text-lg font-bold text-pink-400 mt-2">{p.price} INR</p>
//                 <p className="text-sm text-gray-600 mt-1">Category: {p.category}</p>
//                 <p className="text-sm text-gray-600 mt-1">Quantity: {p.quantity} {p.unit}</p>
//                 <p className="text-sm text-gray-600 mt-1">Stock: {p.stock}</p>

//                 <div className="mt-4 flex gap-3">
//                   <button onClick={() => handleEditClick(p)} className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500">Edit</button>
//                   <button onClick={() => handleDelete(p._id)} className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500">Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;










// pages/AdminProducts.jsx
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

// category → default unit mapping
const categoryUnits = {
  Serum: "ml",
  Moisturizer: "g",
  Facewash: "ml",
  Soap: "pcs",
  Sunscreen: "ml",
  Shampoo: "ml",
  Conditioner: "ml",
  Toner: "ml",
  Cleanser: "ml",
  Lotion: "ml",
  Gel: "ml",
  Oil: "ml",
  Scrub: "g",
  Mask: "g",
  Creams: "g",
  Balm: "g",
  Powder: "g",
  Mist: "ml",
  Pack: "pcs",
  Capsule: "pcs",
  Drops: "ml",
  Exfoliator: "g",
  Peel: "ml",
  Essence: "ml",
  Ampoule: "ml",
  Sheetmask: "pcs",
  Lipcare: "g",
  Bodybutter: "g",
  Bodywash: "ml",
  Bodylotion: "ml",
  Handwash: "ml",
  Deodorant: "ml",
  Perfume: "ml"
};

// helper → get unit for category
const getUnitForCategory = (category) => {
  if (!category) return "pcs";
  return categoryUnits[category] || "pcs";
};

// normalize category name
const normalizeCategory = (cat) =>
  cat ? cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase() : "";

const allUnits = Array.from(new Set(Object.values(categoryUnits))).sort();

const AdminProducts = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    newCategory: "",
    image: "",
    quantity: 1,
    unit: "pcs",
    newUnit: "",
    stock: 0,
  });
  const [editingProduct, setEditingProduct] = useState(null);

  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    setLoadingProducts(true);
    try {
      const res = await axios.get("http://localhost:5000/api/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllProducts(res.data || []);
      setProducts(res.data || []);
    } catch (err) {
      console.error("Fetch products error:", err);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated || user.role !== "admin") return;
    fetchProducts();
  }, [isAuthenticated, user]);

  useEffect(() => {
    let filtered = allProducts;
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (p) => normalizeCategory(p.category) === selectedCategory
      );
    }
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setProducts(filtered);
  }, [allProducts, searchTerm, selectedCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setForm((f) => ({ ...f, category: value, newCategory: "" }));
      const unit = value && value !== "__new__" ? getUnitForCategory(value) : "pcs";
      setForm((f) => ({ ...f, unit }));
    } else if (name === "newCategory") {
      setForm((f) => ({ ...f, newCategory: value }));
      if (value) setForm((f) => ({ ...f, unit: "pcs" }));
    } else if (name === "unit") {
      if (value === "__new__") {
        setForm((f) => ({ ...f, unit: value, newUnit: "" }));
      } else {
        setForm((f) => ({ ...f, unit: value, newUnit: "" }));
      }
    } else if (name === "newUnit") {
      setForm((f) => ({ ...f, newUnit: value }));
    } else {
      setForm((f) => ({
        ...f,
        [name]: ["price", "quantity", "stock"].includes(name) ? Number(value) : value,
      }));
    }
  };

  const handleCategoryChange = (category) => setSelectedCategory(category);

  const handleAddOrEdit = async (e) => {
    e.preventDefault();

    let finalCategory = form.category === "__new__" ? form.newCategory : form.category;
    if (!finalCategory) return alert("Enter category");
    finalCategory = normalizeCategory(finalCategory);

    let finalUnit = form.unit === "__new__" ? form.newUnit : form.unit;
    if (!finalUnit) return alert("Enter unit");

    const payload = {
      ...form,
      category: finalCategory,
      unit: finalUnit,
    };

    try {
      if (editingProduct) {
        const { data } = await axios.put(
          `http://localhost:5000/api/products/${editingProduct._id}`,
          payload,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAllProducts((p) => p.map((prod) => (prod._id === data._id ? data : prod)));
        setEditingProduct(null);
        alert("Product updated!");
      } else {
        const { data } = await axios.post("http://localhost:5000/api/products", payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAllProducts((p) => [data, ...p]);
        alert("Product added!");
      }

      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        newCategory: "",
        image: "",
        quantity: 1,
        unit: "pcs",
        newUnit: "",
        stock: 0,
      });
    } catch (err) {
      console.error("Add/Edit error:", err);
      alert(err?.response?.data?.message || "Failed to add/update product");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllProducts((p) => p.filter((x) => x._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert(err?.response?.data?.message || "Failed to delete");
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    const normalizedCategory = categoryUnits[normalizeCategory(product.category)]
      ? normalizeCategory(product.category)
      : "__new__";
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      category: normalizedCategory,
      newCategory: normalizedCategory === "__new__" ? product.category : "",
      image: product.image || "",
      quantity: product.quantity || 1,
      unit: getUnitForCategory(normalizeCategory(product.category)),
      newUnit: normalizedCategory === "__new__" ? "" : product.unit,
      stock: product.stock || 0,
    });
  };

  const uniqueCategories = [
    "All",
    ...Array.from(
      new Set(
        allProducts
          .map((p) => normalizeCategory(p.category))
          .filter(Boolean)
      )
    ),
  ];

  const uniqueUnits = allUnits;

  if (!isAuthenticated || user.role !== "admin") {
    return (
      <div className="p-6 text-center text-pink-400 font-semibold">
        You are not authorized to view this page.
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-pink-400 mb-6">
          Admin Shop Dashboard
        </h1>

        <div className="mb-6 text-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full md:w-1/3"
          />
        </div>

        <form
          onSubmit={handleAddOrEdit}
          className="bg-gray-50 p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            {uniqueCategories.filter((c) => c !== "All").map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
            <option value="__new__">Add new category</option>
          </select>

          {form.category === "__new__" && (
            <input
              type="text"
              name="newCategory"
              placeholder="Enter new category"
              value={form.newCategory || ""}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          )}

          <input
            name="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <div className="flex gap-2">
            <input
              name="quantity"
              type="number"
              min="1"
              step="1"
              placeholder="Quantity"
              value={form.quantity}
              onChange={handleChange}
              className="border p-2 rounded w-2/3"
              required
            />
            <select
              name="unit"
              value={form.unit}
              onChange={handleChange}
              className="border p-2 rounded w-1/3"
              required
            >
              {uniqueUnits.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
              <option value="__new__">Add new unit</option>
            </select>
          </div>

          {form.unit === "__new__" && (
            <input
              type="text"
              name="newUnit"
              placeholder="Enter new unit"
              value={form.newUnit || ""}
              onChange={handleChange}
              className="border p-2 rounded w-1/3 mt-2"
              required
            />
          )}

          <input
            name="stock"
            type="number"
            min="0"
            step="1"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 rounded md:col-span-2"
          />
          <input
            name="image"
            type="text"
            placeholder="Image URL"
            value={form.image || ""}
            onChange={handleChange}
            className="border p-2 rounded md:col-span-2"
          />

          <button
            type="submit"
            className="bg-pink-400 text-white px-4 py-2 rounded md:col-span-2 hover:bg-pink-500"
          >
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
        </form>

        <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } hover:bg-blue-400`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loadingProducts ? (
          <p className="text-center text-gray-600">Loading products…</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p._id}
                className="bg-gray-50 rounded-lg shadow-lg p-6 border border-pink-200"
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
                    <span className="text-gray-500">No image</span>
                  </div>
                )}
                <h2 className="text-2xl font-semibold text-pink-400">
                  {p.name}
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {p.description}
                </p>
                <p className="text-lg font-bold text-pink-400 mt-2">
                  {p.price} INR
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Category: {normalizeCategory(p.category)}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Quantity: {p.quantity} {p.unit}
                </p>
                <p className="text-sm text-gray-600 mt-1">Stock: {p.stock}</p>

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => handleEditClick(p)}
                    className="bg-blue-400 text-white px-3 py-2 rounded hover:bg-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="bg-pink-400 text-white px-3 py-2 rounded hover:bg-pink-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products found</p>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;
