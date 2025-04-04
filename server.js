const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

// API endpoint to serve Firebase config
app.get('/config', (req, res) => {
  res.json({
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.FIREBASE_APP_ID,
    firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID
  });
});

// Serve the index.html file when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Instead of `app.listen()`, export `app`
module.exports = app;
