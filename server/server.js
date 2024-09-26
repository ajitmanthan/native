const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({ origin: process.env.CLIENT_PORT, credentials: true }));
const router = express.Router();
require('./db/dbconfig.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.post('/createUser', (req, res) => {
    console.log(req.body);
});
// console.log(process.env);
app.use('/', router);
app.listen(process.env.PORT, () => {
    console.log('server running');
});
