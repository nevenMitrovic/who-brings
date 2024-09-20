# Who Brings

**Who Brings** is a fullstack application for creating and managing event lists. The app allows users to create events, add needed items, and assign people to bring those items.

## Technologies

### Backend
- **Express** with **TypeScript** for server-side logic
- **MongoDB** as the database
- **Mongoose** for MongoDB object modeling
- **CORS** for Cross-Origin Resource Sharing
- **dotenv** for managing environment variables
- **envalid** for validating environment variables
- **http-errors** for enhanced error handling
- **Morgan** for logging HTTP requests
- **Nodemon** for automatically restarting the server during development
- **TypeScript** for static typing

### Frontend
- **Vue 3** with **TypeScript**
- **Vite** for fast development server
- **Pinia** for global state management
- **Vue Router** for navigation
- **Tailwind CSS** for styling
- **Vee-Validate** and **Zod** for form validation
- **TypeScript** for static typing

## Installation

### Backend

1. **Clone the repository and navigate to the `backend` folder:**

   git clone https://github.com/username/whobrings.git
   cd backend

2. **Install dependencies:**

    npm install

3. **Create a .env file in the root directory with the following values:**

    MONGODB_URI=<your-mongodb-connection-string>
    PORT=5000

4. **Start the backend:**

    npm start

### Frontend

1. **Navigate to the frontend folder:**

    cd frontend

2. **Install dependencies:**

    npm install

3. **Start the frontend development server:**

    npm run dev

### Features

1. **Create a new event list with a date, location, and description.**
2. **Add items needed for the event.**
3. **Assign who will bring each item.**
4. **View all created lists and events on the Dashboard page.**