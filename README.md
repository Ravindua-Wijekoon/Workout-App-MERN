# Workout Management App

The **Workout Management App** is a full-stack application developed using the MERN stack (MongoDB, Express.js, React, Node.js). This app enables users to manage their workout routines by adding new workouts, editing existing ones, deleting unwanted workouts, and viewing all workouts in a simple interface.

## Key Features

- **Create Workouts:** Add new workout routines with details such as exercise name, duration, and date.
- **Update Workouts:** Edit details of existing workouts.
- **Delete Workouts:** Remove workouts that are no longer needed.
- **View All Workouts:** Display all workouts in a list format for easy management.

## Technologies Used

- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Version Control:** GitHub

## Getting Started

### Prerequisites

- **Node.js** installed on your machine.
- **MongoDB** installed or access to a cloud-based MongoDB (e.g., MongoDB Atlas).
- **Basic knowledge** of the MERN stack.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Ravindua-Wijekoon/Workout-App-MERN.git
   cd workout-management-app

2. **Set up the Backend**
    - **Navigate to the backend folder:**

      ```bash
      cd backend

    - **Install the required dependencies:**
      ```bash
      npm install
    - **Create a .env file in the backend folder and add your MongoDB connection string:**
      ```env
      MONGO_URI=your_mongodb_connection_string
      PORT=5000
3. **Set up the Frontend**

    - **Navigate to the frontend folder:**
      ```bash
      cd ../frontend
    - **Install the frontend dependencies:**
      ```bash
      npm install
4. **Run the Application**

    - **Start the backend server:**
      ```bash
      cd ../backend
      npm start
    - **In a new terminal window, start the frontend development server:**
      ```bash
      cd ../frontend
      npm start
5. **Access the Application**

   - **Open your browser and go to http://localhost:3000 to access the Workout Management App.**
