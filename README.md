🌟 Welcome to My Yelp
A modern Yelp-inspired web application built with React, AWS Amplify, and GraphQL. Users can sign up, log in securely, and access personalized content in a protected dashboard, all within a dynamic, image-rich layout using the Unsplash API.

✅ Task
Create a full-stack React application that allows users to:

Register and authenticate using AWS Amplify.

Access protected routes once authenticated.

Enjoy a dynamic visual experience with rotating Unsplash background images.

Experience a clean, mobile-friendly user interface.

🧩 Description
This project solves the challenge of building a secure and beautiful login system with private route protection and seamless AWS integration.

Key Features:
🔒 Authentication: Managed via AWS Cognito using Amplify's auth module.

📦 Routing: Implemented with react-router-dom to manage page access and navigation.

🖼️ Dynamic Backgrounds: Shuffled Unsplash images loaded using useMemo.

🎯 Protected Dashboard: Only accessible when signed in via a PrivateRoute wrapper.

✨ Clean UI: CSS modular styling with components like Signup, Login, and Dashboard.

⚙️ Installation
Clone the repository:

git clone https://github.com/your-username/my-yelp.git
cd my-yelp
Install dependencies:
npm install
Initialize Amplify:
npm install -g @aws-amplify/cli
amplify configure # Follow CLI setup
amplify init
amplify push
Start the development server:
npm start
The app will run on http://localhost:3000 by default.

🚀 Usage
Open your browser and visit: http://localhost:3000

Click “Sign Up” to create an account.

Use your credentials to log in.

Access the protected Dashboard.

Enjoy randomized Unsplash images on each refresh!

🗂️ Project Structure
my-yelp/
│
├── amplify/ # AWS Amplify config and backend definitions
├── public/ # Static assets
├── src/
│ ├── components/ # React components
│ │ ├── BackgroundLayout.jsx
│ │ ├── Dashboard.jsx
│ │ ├── HomePage.jsx
│ │ ├── Login.jsx
│ │ ├── PrivateRoute.jsx
│ │ └── Signup.jsx
│ ├── App.js
│ └── index.js
├── .gitignore
├── package.json
└── README.md

           # This file

🛠 Technologies
React
React Router
AWS Amplify
GraphQL
Unsplash API
CSS (custom & responsive)

👥 The Core Team
Built by Hillary Emmanuel
