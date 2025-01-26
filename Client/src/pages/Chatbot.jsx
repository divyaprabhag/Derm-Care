import { useEffect, useState } from "react";
import axios from "axios";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  
  const predefinedQA = {
    hello: ["Hi there!", "Hello! How can I help you today?", "Hey! What's up?"],
    "what is your name?": [
      "I'm your chatbot assistant!",
      "I am Chatbot, your virtual assistant.",
      "People call me ChatGPT, but you can name me anything you like.",
    ],
    "how can i treat acne?": [
      "I recommend a gentle cleanser and salicylic acid treatment , Use products with benzoyl peroxide for acne control , Consider consulting a dermatologist for persistent acne.",
    ],
    "what are your best products?": [
      "Our top products include a cleanser, moisturizer, and sunscreen.",
      "You should try our acne treatment gel and vitamin C serum.",
      "Our best sellers are the hydration cream and sunscreen lotion.",
    ],
    "thank you": [
      "You're welcome! 😊",
      "Anytime! Let me know if you need more help.",
      "No problem at all!",
    ],
    "i have a query on delivery date": [
      "Kindly check the email to track your order",
    ],
    "hi":[
      "Hi there! How can I help you today?",
    ],
    "which type of sunscreen can i use for my skin type?":[
      "analyse your skin type first if you have oily skin use matte finish or gel based sunscreen if you have dry skin use watery based suncreen or cream based sunscreen if you have combination skin all type sunscreen suits your skin",
      
    ],
    "how can i treat severe pigmentation?":[
      "You can use less concenrated Glycolic acid to treat pigmentation , Do patch test before including to your skin care.",
    ],
    "give me a solution for blackheads?":[
      "Include Salicylic based cleanser and serum to your skin care routine.",
    ],
    "how can i treat dry skin?":[
      "Use snail mucin for extreme hydration Caution - patch test before use.",
    ],
    "how to get rid of dark circles?":[
      "Use undereye cream with ceramide, include this only in your pm routine.",
    ],
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return; 
    setMessages((prevMessages) => [...prevMessages, { sender: "user", text: userInput }]);

    const userQuery = userInput.trim().toLowerCase();
    if (predefinedQA[userQuery]) {
      
      const randomResponse =
        predefinedQA[userQuery][Math.floor(Math.random() * predefinedQA[userQuery].length)];
      
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: randomResponse },
      ]);
      setUserInput(""); 
      return;
    }

    
    const contactResponse = `For Further queries, please contact:
Phone: 7695986564
Email: divyagprabha@gmail.com`;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: contactResponse },
    ]);

    setUserInput(""); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="chatbot-container bg-white p-6 rounded shadow-lg w-96">
      
        <div className="chat-window mb-4 h-64 overflow-y-auto border p-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${msg.sender === "user" ? "text-right text-blue-500" : "text-left text-gray-700"}`}
            >
              <span className="inline-block px-3 py-2 bg-gray-200 rounded">
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message"
          className="w-full px-3 py-2 border rounded mb-2"
        />

        <button
          onClick={sendMessage}
          className="w-full bg-pink-400 hover:bg-pink-500 text-black py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
