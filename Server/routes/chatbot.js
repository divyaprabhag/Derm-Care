const express = require("express");
const router = express.Router();

// Hardcoded responses for Derm-Care chatbot
const predefinedQA = {
  "hello": ["Hi there! Welcome to Derm-Care! How can I help you today?", "Hello! I'm here to help with your skincare needs.", "Hey! What skincare questions do you have?"],
  "hi": ["Hi there! Welcome to Derm-Care! How can I help you today?", "Hello! I'm here to help with your skincare needs.", "Hey! What skincare questions do you have?"],
  "hey": ["Hi there! Welcome to Derm-Care! How can I help you today?", "Hello! I'm here to help with your skincare needs.", "Hey! What skincare questions do you have?"],
  "what is your name?": ["I'm your Derm-Care skincare assistant!", "I am the Derm-Care chatbot, your virtual skincare consultant.", "People call me the Derm-Care assistant, but you can call me your skincare helper!"],
  "how can i treat acne?": [
    "For acne treatment, I recommend our salicylic acid cleanser and benzoyl peroxide spot treatment. Use gentle, non-comedogenic products and always patch test new products. For severe acne, consult a dermatologist.",
    "Start with a gentle cleanser, use salicylic acid products, and always moisturize. Our acne treatment gel works great for spot treatment. Remember to be patient - results take 6-8 weeks.",
    "Acne needs a consistent routine: gentle cleansing, salicylic acid or benzoyl peroxide treatment, and proper moisturizing. Avoid harsh scrubs and always use sunscreen during the day."
  ],
  "what are your best products?": [
    "Our top products include our Vitamin C serum, Hyaluronic Acid moisturizer, Salicylic Acid cleanser, and SPF 50 sunscreen. Each is dermatologically tested and suitable for different skin types.",
    "You should try our Niacinamide serum for oil control, our Ceramide moisturizer for dry skin, and our Gentle Foaming Cleanser. All our products are fragrance-free and gentle.",
    "Our best sellers are the Vitamin C Brightening Serum, Hyaluronic Acid Hydrating Cream, Salicylic Acid Acne Treatment, and our Daily Sunscreen Lotion."
  ],
  "how can i treat dry skin?": [
    "For dry skin, use gentle cleansers, hyaluronic acid serums, and rich moisturizers with ceramides. Our Hyaluronic Acid moisturizer and Ceramide cream work great for dry skin.",
    "Focus on hydration: gentle cleansing, hydrating serums, and occlusive moisturizers. Use our Hyaluronic Acid serum followed by our Ceramide moisturizer for best results.",
    "Dry skin needs extra care: avoid harsh cleansers, use hydrating products with hyaluronic acid and ceramides, and always apply moisturizer on damp skin for better absorption."
  ],
  "how can i treat oily skin?": [
    "For oily skin, use oil-free, non-comedogenic products. Our Niacinamide serum helps control oil production, and our Salicylic Acid cleanser keeps pores clear.",
    "Focus on gentle cleansing, oil-free moisturizers, and products with niacinamide or salicylic acid. Our gel-based moisturizer is perfect for oily skin types.",
    "Oily skin benefits from gentle cleansing, lightweight moisturizers, and products that control sebum production. Our Niacinamide serum and oil-free moisturizer work great together."
  ],
  "which type of sunscreen can i use for my skin type?": [
    "For oily skin: use matte finish or gel-based sunscreen. For dry skin: use cream-based or hydrating sunscreen. For combination skin: most types work well. Always choose SPF 30+ and reapply every 2 hours.",
    "Analyze your skin type first: oily skin needs matte/gel sunscreen, dry skin needs cream-based sunscreen, combination skin can use any type. Our SPF 50 sunscreen works for all skin types.",
    "Choose based on your skin: oily skin - gel/matte sunscreen, dry skin - cream sunscreen, sensitive skin - mineral sunscreen. Our broad-spectrum SPF 50 protects all skin types."
  ],
  "how can i treat severe pigmentation?": [
    "For pigmentation, use vitamin C serums, niacinamide products, and gentle exfoliants with glycolic acid. Start with lower concentrations and always patch test. Use sunscreen daily!",
    "Pigmentation treatment requires patience: vitamin C in the morning, gentle exfoliation 2-3 times per week, and consistent sunscreen use. Our Vitamin C serum helps brighten dark spots.",
    "Treat pigmentation with vitamin C, niacinamide, and gentle exfoliation. Always use SPF 50 sunscreen as it's crucial for preventing further pigmentation. Results take 6-12 weeks."
  ],
  "give me a solution for blackheads?": [
    "For blackheads, use salicylic acid-based cleansers and serums. Our Salicylic Acid cleanser helps unclog pores and prevent blackheads. Use 2-3 times per week and always moisturize after.",
    "Include salicylic acid products in your routine: cleanser, serum, or treatment. Our BHA cleanser works great for blackheads. Avoid harsh scrubs that can irritate the skin.",
    "Blackheads respond well to salicylic acid (BHA) products. Use our Salicylic Acid cleanser regularly, follow with a gentle moisturizer, and always use sunscreen during the day."
  ],
  "how to get rid of dark circles?": [
    "For dark circles, use eye creams with ceramides, caffeine, or vitamin C. Apply gently with patting motions and include this only in your PM routine. Get adequate sleep and stay hydrated.",
    "Dark circles need gentle care: use our Ceramide eye cream, apply with ring finger in patting motions, and include vitamin C serum for overall skin brightening. Sleep and hydration help too!",
    "Treat dark circles with gentle eye creams containing ceramides or caffeine. Use our Vitamin C serum for overall brightening and remember to get enough sleep and stay hydrated."
  ],
  "what skincare routine should i follow?": [
    "A basic routine: 1) Gentle cleanser, 2) Treatment serum (vitamin C AM, retinol PM), 3) Moisturizer, 4) Sunscreen (AM only). Start simple and add products gradually. Our products work great together!",
    "Morning: cleanser, vitamin C serum, moisturizer, sunscreen. Evening: cleanser, treatment serum, moisturizer. Our products are designed to work together for optimal results.",
    "Keep it simple: cleanse, treat, moisturize, protect (sunscreen). Our Vitamin C serum for morning, gentle cleanser, and hydrating moisturizer make a great basic routine."
  ],
  "i have a query on delivery date": [
    "Please check your email for order tracking information. You can also contact us at 7695986564 for delivery updates. We'll keep you informed about your order status.",
    "For delivery updates, check your email confirmation or contact our customer service at 7695986564. We provide tracking information once your order is shipped.",
    "You can track your order through the email confirmation we send. For specific delivery questions, contact us at 7695986564 and we'll help you with the latest updates."
  ],
  "there is no option of online payment": [
    "We currently accept offline payment methods only. We're working on adding online payment options soon. You can place your order and we'll contact you for payment details. Sorry for any inconvenience!",
    "For now, we only have offline payment options. We're in the process of adding online payment methods. Place your order and we'll arrange payment details with you directly.",
    "We apologize, but we currently only accept offline payments. We're working on implementing online payment options. You can still place orders and we'll handle payment arrangements."
  ],
  "what products do you have for sensitive skin?": [
    "For sensitive skin, we recommend our Gentle Foaming Cleanser, Hyaluronic Acid moisturizer, and Mineral Sunscreen. All our products are fragrance-free and dermatologically tested.",
    "Sensitive skin needs gentle care: our fragrance-free cleanser, hypoallergenic moisturizer, and mineral-based sunscreen. All products are tested for sensitive skin compatibility.",
    "Our sensitive skin range includes gentle cleansers, fragrance-free moisturizers, and mineral sunscreens. Each product is formulated to be gentle and non-irritating."
  ],
  "how often should i use exfoliants?": [
    "Start with 1-2 times per week and gradually increase to 2-3 times per week. Our Salicylic Acid cleanser can be used daily, but stronger exfoliants should be limited. Always follow with moisturizer and sunscreen.",
    "Gentle exfoliation 2-3 times per week is usually sufficient. Our BHA products can be used more frequently, but always patch test first and don't over-exfoliate. Moisturize after!",
    "Exfoliation frequency depends on your skin: sensitive skin - once per week, normal skin - 2-3 times per week, oily skin - 3-4 times per week. Our gentle exfoliants are safe for regular use."
  ],
  "thank you": [
    "You're very welcome! I'm here to help with all your skincare questions. Feel free to ask about products, routines, or any dermatology concerns anytime! 😊",
    "Anytime! I'm always here to help with your skincare needs. Don't hesitate to reach out if you have more questions about our products or routines!",
    "No problem at all! I'm your Derm-Care assistant and I'm here whenever you need skincare advice or product recommendations. Take care of your skin! 🌟"
  ],
  "okay": [
    "Great! I'm here whenever you need more skincare advice or have questions about our products. Feel free to ask anything about Derm-Care!",
    "Perfect! Don't hesitate to reach out if you have more questions about skincare routines or our products. I'm always here to help!",
    "Awesome! I'm your Derm-Care assistant, so feel free to ask about products, routines, or any skincare concerns anytime!"
  ],
  "ok": [
    "Great! I'm here whenever you need more skincare advice or have questions about our products. Feel free to ask anything about Derm-Care!",
    "Perfect! Don't hesitate to reach out if you have more questions about skincare routines or our products. I'm always here to help!",
    "Awesome! I'm your Derm-Care assistant, so feel free to ask about products, routines, or any skincare concerns anytime!"
  ],
  "yes": [
    "Great! I'm here whenever you need more skincare advice or have questions about our products. Feel free to ask anything about Derm-Care!",
    "Perfect! Don't hesitate to reach out if you have more questions about skincare routines or our products. I'm always here to help!",
    "Awesome! I'm your Derm-Care assistant, so feel free to ask about products, routines, or any skincare concerns anytime!"
  ],
  "bye": [
    "Goodbye! Take care of your skin and remember to stay consistent with your routine. Feel free to come back anytime for more skincare advice. Have a great day! 🌟",
    "See you later! Keep up with your skincare routine and don't hesitate to return if you need more advice. Take care! 😊",
    "Bye! Remember, consistency is key in skincare. I'm always here when you need more guidance. Have a wonderful day! ✨"
  ],
  "goodbye": [
    "Goodbye! Take care of your skin and remember to stay consistent with your routine. Feel free to come back anytime for more skincare advice. Have a great day! 🌟",
    "See you later! Keep up with your skincare routine and don't hesitate to return if you need more advice. Take care! 😊",
    "Bye! Remember, consistency is key in skincare. I'm always here when you need more guidance. Have a wonderful day! ✨"
  ]
};

// Chatbot endpoint
router.post("/send", (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message || !message.trim()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a message' 
      });
    }

    const userQuery = message.trim().toLowerCase();
    
    // Check for exact matches first
    if (predefinedQA[userQuery]) {
      const randomResponse = predefinedQA[userQuery][Math.floor(Math.random() * predefinedQA[userQuery].length)];
      return res.json({
        success: true,
        response: randomResponse,
        timestamp: new Date().toISOString()
      });
    }

    // Check for partial matches
    let foundMatch = false;
    let response = "";
    
    for (const [key, answers] of Object.entries(predefinedQA)) {
      if (userQuery.includes(key) || key.includes(userQuery)) {
        response = answers[Math.floor(Math.random() * answers.length)];
        foundMatch = true;
        break;
      }
    }

    if (foundMatch) {
      return res.json({
        success: true,
        response: response,
        timestamp: new Date().toISOString()
      });
    }

    // Default response for unmatched queries
    const defaultResponse = `I understand you're asking about "${message}". As your Derm-Care assistant, I specialize in skincare advice and product recommendations. Could you be more specific about your skin type, concerns, or what you'd like to know about our products? For further assistance, contact us at 7695986564 or email divyagprabha@gmail.com`;

    res.json({
      success: true,
      response: defaultResponse,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Chatbot error:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, I encountered an error. Please try again later.',
      error: error.message
    });
  }
});

module.exports = router;
