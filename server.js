const express = require('express');
const app = new express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, () => {
    console.log(`Server is running on port ${5000}...`);
});
