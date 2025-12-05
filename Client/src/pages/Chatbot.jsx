import { useEffect, useState } from "react";
import axios from "axios";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        sender: "bot",
        text: "Hello! Welcome to Derm-Care! I'm your skincare assistant. I can help you with skincare advice, product recommendations, and answer questions about our dermatology products. How can I assist you today?"
      }
    ]);
  }, []);

  const sendMessage = async () => {
    if (!userInput.trim() || isLoading) return;
    
    const userMessage = userInput.trim();
    setMessages((prevMessages) => [...prevMessages, { sender: "user", text: userMessage }]);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/chatbot/send', {
        message: userMessage
      });

      if (response.data.success) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: response.data.response },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Sorry, I couldn't process your request. Please try again." },
        ]);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "I'm having trouble connecting right now. Please try again later or contact us directly at 7695986564." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
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
          {isLoading && (
            <div className="text-left text-gray-700">
              <span className="inline-block px-3 py-2 bg-gray-200 rounded">
                Assistant is thinking...
              </span>
            </div>
          )}
        </div>

        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message"
          className="w-full px-3 py-2 border rounded mb-2"
          disabled={isLoading}
        />

        <button
          onClick={sendMessage}
          disabled={isLoading || !userInput.trim()}
          className="w-full bg-pink-400 hover:bg-pink-500 disabled:bg-gray-300 text-black py-2 rounded"
        >
          {isLoading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;