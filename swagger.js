const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API documentation for the Contacts API built in Node.js with Express and MongoDB',
    },
    servers: [
      {
        url: 'https://personal-api-amx8.onrender.com', // Render deployment URL
      },
    ],
    components: {
      schemas: {
        Contact: {
          type: 'object',
          required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'],
          properties: {
            firstName: {
              type: 'string',
              description: 'The first name of the contact'
            },
            lastName: {
              type: 'string',
              description: 'The last name of the contact'
            },
            email: {
              type: 'string',
              description: 'The email address of the contact'
            },
            favoriteColor: {
              type: 'string',
              description: 'The favorite color of the contact'
            },
            birthday: {
              type: 'string',
              format: 'date',
              description: 'The birthdate of the contact'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js'], // Adjust if your route files are in a different folder
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
