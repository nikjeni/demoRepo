const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {
    database
} = require('../server/middleware/db');
const labourRoutes = require('../server/routes/labour-routes');
const port = process.env.PORT || 3000;
app.use(bodyParser.json({
    extended: false
}));
app.use('*', cors());
app.use(database);

app.use('/api/labour', labourRoutes);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})