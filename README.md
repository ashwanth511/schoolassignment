# Kids Quiz Application

A fun and interactive quiz application designed for children aged 8-10, built with React and Node.js.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure MongoDB service is running)
- npm (comes with Node.js)

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repository-url>
cd school-assignment
```

2. Install dependencies:
```bash
npm install
```


## Running the Application

You can run the application in two ways:

### Method 1: Run Frontend and Backend Together
```bash
npm run dev:all
```
This will start:
- Frontend at: http://localhost:5173
- Backend at: http://localhost:5000


## Project Structure

```
school-assignment/
├── src/
│   ├── Pages/
│   │   ├── Login/
│   │   ├── SignUp/
│   │   ├── Quiz/
│   │   └── HomePage/
│   ├── components/
│   ├── server.js
│   └── ...
├── package.json
└── README.md
```

## Features

- Interactive quiz interface designed for children
- User authentication (signup/login)
- Progress tracking
- Kid-friendly UI/UX
- Responsive design for all devices
- Score tracking and completion popup

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: JWT
- Styling: Bootstrap

## Development

To build for production:
```bash
npm run build
```

To preview production build:
```bash
npm run preview
```

## Notes

- The backend runs on port 5000
- The frontend development server runs on port 5173
- Make sure MongoDB is running before starting the application
- Default MongoDB connection URL: mongodb://localhost:27017/quizapp



