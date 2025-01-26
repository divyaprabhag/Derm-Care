import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;

    if (!name || !email || !phone) {
      setErrorMessage("Please fill in all fields.");
      setIsSubmitted(false);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/login", { name, email, phone });
      setIsSubmitted(true);
      setErrorMessage("");
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setErrorMessage("Failed to submit user data. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center pb-16">
      <div className="bg-[linear-gradient(to_right,#414345,#232526)] p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl text-center text-white font-bold mb-6">Let's Catch Up</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="w-full p-3 border-2 border-slate-500 rounded-lg focus:outline-none hover:border-black" />
          <input type="email" placeholder="Email" className="w-full p-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:border-black" />
          <input type="tel" placeholder="Phone" className="w-full p-3 border-2 border-slate-500 rounded-lg focus:outline-none focus:border-black" />
          <button type="submit" className="w-full bg-white text-[linear-gradient(to_right,#414345,#232526)] p-3 rounded-lg hover:bg-pink-500 transition"> Submit </button>

          {isSubmitted && (
            <div className="bg-green-500 text-white p-3 rounded-lg text-center mb-4">
              Submitted Successfully!
            </div>
          )}

          {errorMessage && (
            <div className="bg-red-500 text-white p-3 rounded-lg text-center mb-4">
              {errorMessage}
            </div>
          )}
        </form>
        <div className="mt-10 text-center">
          <p className="text-white">For any further details, contact me:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="tel:+917695986564" className="text-2xl text-white hover:text-slate-300 group-hover:opacity-100 transition">
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

export default Login;

