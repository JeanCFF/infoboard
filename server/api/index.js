// Require API routes
const express = require('express')
const background = require('./routes/background')
const weather = require('./routes/weather')
const nasa = require('./routes/nasa')
const calendar = require('./routes/calendar')

// Create express instnace
const app = express()

// Import API Routes
app.use(background)
app.use(weather)
app.use(nasa)
app.use(calendar)

// Export the server middleware
module.exports = {
	path: '/api',
	handler: app
}
