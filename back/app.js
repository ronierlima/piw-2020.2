const app = require('./src/config/server'); 
const db = require('./src/config/database');


app.listen(3003, () => {
    console.log('Server running in port 3003');
});

db('mongodb://localhost/social');    