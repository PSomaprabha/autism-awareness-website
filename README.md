# Autism Awareness Website

A community-focused web application designed to spread autism awareness, provide educational resources, support parents, and create a positive environment for children with Autism Spectrum Disorder (ASD).

Built using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.

---

## Features

- Autism awareness and educational content
- Interactive autism quiz system
- Quiz result tracking
- Inspiring success stories
- Guidance and support resources
- Contact form for communication
- Admin login and dashboard
- Email reply system using Nodemailer
- Responsive design for mobile and desktop

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## Project Structure

```bash
autism-awareness-website/
│
├── public/
│   ├── index.html
│   ├── about.html
│   ├── quiz.html
│   ├── result.html
│   ├── successstories.html
│   ├── guidance.html
│   ├── tracker.html
│   ├── contact.html
│   ├── adminlogin.html
│   ├── admindashboard.html
│   ├── adminMessages.html
│   ├── css/
│   ├── js/
│   └── images/
│
├── server/
│   ├── server.js
│   ├── routes/
│   └── models/
│
├── .env.example
├── package.json
├── .gitignore
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/PSomaprabha/autism-awareness-website.git
```

### Move into the project folder

```bash
cd autism-awareness-website
```

### Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file and add:

```env
MONGODB_URI=mongodb://localhost:27017/autismawareness
PORT=5000

ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-admin-password

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

---

## Run the Project

```bash
npm start
```

Server will run on:

```bash
http://localhost:5000
```

---

## Main Sections

- Home
- Autism Quiz
- Guidance & Resources
- Success Stories
- Progress Tracker
- Contact Support
- Admin Dashboard

---

## Future Improvements

- AI-based autism support tools
- Therapy recommendation system
- Parent community forum
- Live chat support
- Multi-language support

---

## Important Notes

- Do not upload `.env` files to GitHub
- `node_modules/` is ignored using `.gitignore`
- Use secure admin credentials
- Use Gmail App Passwords for email functionality

---

## License

This project is created for educational and community service purposes.

---

## Developed By

Soma Prabha

GitHub: https://github.com/PSomaprabha