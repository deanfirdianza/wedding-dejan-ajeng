const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/debug-path', (req, res) => {
  res.json({ staticPath: path.join(__dirname, '..', 'public') });
});

module.exports = app;
module.exports.handler = serverless(app);
