// // src/pages/Signup.jsx
// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// export default function Signup() {
//   const [err, setErr] = useState('');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const name = e.target[0].value;
//     const email = e.target[1].value;
//     const phone = e.target[2].value;
//     const password = e.target[3].value;

//     if (!name || !email || !password) {
//       setErr('Name, email and password are required');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signup', { name, email, phone, password });
//       const { token, user } = res.data;
//       // optionally call legacy endpoint to keep old data too:
//       await axios.post('http://localhost:5000/api/login', { name, email, phone }).catch(()=>{});
//       login(token, user);
//       navigate('/');
//     } catch (error) {
//       setErr(error.response?.data?.message || 'Signup failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md w-full max-w-md space-y-4">
//         <h2 className="text-2xl font-semibold">Create account</h2>
//         <input placeholder="Name" className="w-full p-3 border" />
//         <input placeholder="Email" type="email" className="w-full p-3 border" />
//         <input placeholder="Phone" className="w-full p-3 border" />
//         <input placeholder="Password" type="password" className="w-full p-3 border" />
//         <button className="w-full p-3 bg-pink-400 text-white rounded">Sign up</button>
//         {err && <div className="text-red-500">{err}</div>}
//       </form>
//     </div>
//   );
// }








// // src/pages/Signup.jsx
// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// export default function Signup() {
//   const [err, setErr] = useState('');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     adminCode: '', // optional field for admin
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, phone, password, adminCode } = formData;

//     if (!name || !email || !password) {
//       setErr('Name, email, and password are required');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signup', {
//         name,
//         email,
//         phone,
//         password,
//         adminCode, // send admin code if provided
//       });

//       const { token, user } = res.data;

//       // log the user in
//       login(token, user);

//       // redirect based on role
//       if (user.role === 'admin') navigate('/admin/dashboard');
//       else navigate('/');
//     } catch (error) {
//       setErr(error.response?.data?.message || 'Signup failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md w-full max-w-md space-y-4">
//         <h2 className="text-2xl font-semibold text-center">Create Account</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-3 border"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-3 border"
//           required
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full p-3 border"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full p-3 border"
//           required
//         />
//         <input
//           type="text"
//           name="adminCode"
//           placeholder="Admin Code (optional)"
//           value={formData.adminCode}
//           onChange={handleChange}
//           className="w-full p-3 border"
//         />
//         <button className="w-full p-3 bg-pink-400 text-white rounded">Sign up</button>
//         {err && <div className="text-red-500">{err}</div>}
//       </form>
//     </div>
//   );
// }











// // src/pages/Signup.jsx
// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// export default function Signup() {
//   const [err, setErr] = useState('');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     adminCode: '', // optional field for admin
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, phone, password, adminCode } = formData;

//     if (!name || !email || !password) {
//       setErr('Name, email, and password are required');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signup', {
//         name,
//         email,
//         phone,
//         password,
//         adminCode, // send admin code if provided
//       });

//       const { token, user } = res.data;

//       // log the user in
//       login(token, user);

//       // redirect based on role
//       if (user.role === 'admin') navigate('/admin/dashboard');
//       else navigate('/');
//     } catch (error) {
//       setErr(error.response?.data?.message || 'Signup failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md w-full max-w-md space-y-4">
//         <h2 className="text-2xl font-semibold text-center">Create Account</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-3 border"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-3 border"
//           required
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full p-3 border"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full p-3 border"
//           required
//         />
//         <input
//           type="text"
//           name="adminCode"
//           placeholder="Admin Code (optional)"
//           value={formData.adminCode}
//           onChange={handleChange}
//           className="w-full p-3 border"
//         />
//         <button className="w-full p-3 bg-pink-400 text-white rounded">Sign up</button>
//         {err && <div className="text-red-500">{err}</div>}
//       </form>
//     </div>
//   );
// }





// src/pages/Signup.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Signup() {
  const [err, setErr] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    adminCode: '', // optional admin secret
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr('');

    const { name, email, phone, password, adminCode } = formData;

    if (!name || !email || !password) {
      setErr('Name, email, and password are required');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        phone,
        password,
        adminCode: adminCode.trim() || undefined, // send only if filled
      });

      const { token, user } = res.data;

      // login and save to context/localStorage
      login(token, user);

      // redirect based on role
      if (user.role === 'admin') navigate('/admin/dashboard');
      else navigate('/');
    } catch (error) {
      setErr(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
          required
        />

        <input
          type="text"
          name="adminCode"
          placeholder="Admin Code (optional)"
          value={formData.adminCode}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
        />

        <button className="w-full p-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md transition">
          Sign up
        </button>

        {err && <div className="text-red-500 text-center">{err}</div>}
      </form>
    </div>
  );
}
