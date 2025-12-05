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
