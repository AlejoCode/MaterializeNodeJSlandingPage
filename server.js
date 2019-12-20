const path = require('path')
const express = require('express')
const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE_INDEX = path.join(DIST_DIR, './index.html'),
            HTML_FILE_SCORT = path.join(DIST_DIR, './scort.html')

            
app.use(express.static(DIST_DIR))
app.get('', (req, res) => {
    res.sendFile(HTML_FILE_INDEX)
})
app.get('/index', (req, res) => {
    res.sendFile(HTML_FILE_INDEX)
})
app.get('/scort', (req, res) => {
    res.sendFile(HTML_FILE_SCORT)
})
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})