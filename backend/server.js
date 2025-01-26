const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));

// Define schema and model
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  query: { type: String, required: true },
});

const Contact = mongoose.model("Contact", ContactSchema);

// API endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, query } = req.body;

  // Validation
  if (!name || !email || !query) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newContact = new Contact({ name, email, query });
    await newContact.save();
    res.status(201).json({ message: "Query submitted successfully!" });
  } catch (error) {
    console.error("Error saving query:", error.message);
    res.status(500).json({ error: "Failed to submit query." });
  }
});

// Export the app for serverless deployment
module.exports = app;
