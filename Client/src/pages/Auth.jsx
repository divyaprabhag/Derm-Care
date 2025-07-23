import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ import context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ get login from context

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, password } = formData;

    if (!email || !password || (!isLogin && (!name || !phone))) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const url = isLogin ? "http://localhost:5000/api/login" : "http://localhost:5000/api/signup";
      const payload = isLogin ? { email, password } : { name, email, phone, password };

      const res = await axios.post(url, payload);
      const { token, role } = res.data;

      login(email, role, token); // ✅ update context + localStorage
      setIsSubmitted(true);
      setErrorMessage("");

      setTimeout(() => {
        setIsSubmitted(false);
        navigate("/"); // redirect to home
      }, 1000);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center pb-16">
      <div className="bg-[linear-gradient(to_right,#414345,#232526)] p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl text-center text-white font-bold mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-slate-500 rounded-lg focus:outline-none hover:border-black"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border-2 border-slate-500 rounded-lg focus:outline-none hover:border-black"
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:border-black"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:border-black"
          />
          <button
            type="submit"
            className="w-full bg-white text-[linear-gradient(to_right,#414345,#232526)] p-3 rounded-lg hover:bg-pink-500 transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>

          {isSubmitted && (
            <div className="bg-green-500 text-white p-3 rounded-lg text-center mb-4">
              {isLogin ? "Login Successful!" : "Signup Successful!"}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-500 text-white p-3 rounded-lg text-center mb-4">
              {errorMessage}
            </div>
          )}
        </form>

        <div className="text-center mt-6">
          <p className="text-white">
            {isLogin ? "New here?" : "Already have an account?"}{" "}
            <span
              onClick={toggleMode}
              className="text-pink-400 cursor-pointer underline hover:text-pink-300"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="text-white">For any further details, contact me:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="tel:+917695986564" className="text-2xl text-white hover:text-slate-300 transition">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="mailto:divyagprabha@gmail.com" className="text-2xl text-white hover:text-slate-300 transition">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://www.linkedin.com/in/divya-prabha-g-5616a731b" className="text-2xl text-white hover:text-slate-300 transition">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
