const express = require('express');
const consign = require('consign');
const { urlencoded } = require('express');

module.exports = () => {
    const app = express();

    app.use(urlencoded({extended: true}));
    app.use(express.json());
    
    consign().include('controllers').into(app);

    return app;
}