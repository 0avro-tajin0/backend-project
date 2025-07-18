Backend Project (Node.js + Express)
This is a basic backend project built with Node.js and Express.js. It includes a proper file-folder structure with separate routes, controllers, and server logic.

📁 Project Structure
graphql
Copy
Edit
backend-project/
│
├── controllers/
│   └── messageController.js   # Handles GET and POST logic
│
├── routes/
│   └── messageRoutes.js       # Defines API routes
│
├── app.js                     # Initializes express app and middleware
├── server.js                  # Starts the server
└── package.json               # Node.js configuration (install manually)

⚠️ Important Notes
Make sure Node.js and npm are installed.

Use Postman, Thunder Client, or browser (for GET) to test routes.

This is a simple project returning static responses.

No database is used — good for understanding structure and flow.

You can extend this with MongoDB or MySQL for a full-stack project.
