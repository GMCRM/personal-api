require('dotenv').config(); 
require('./db'); // Connect to MongoDB
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const app = express();
const contactsRoutes = require('./routes/contacts');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/contacts', contactsRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});