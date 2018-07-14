const express = require('express');
const path = require('path');
const landing = express();

const PORT = process.env.PORT || 8080;

landing.use(express.static(__dirname));
landing.use(express.static(path.join(__dirname, 'public')));

landing.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
landing.get('/brochure.pdf', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public', 'brochure.pdf'));
});
landing.get('/*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public', '404.html'));
});

landing.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});