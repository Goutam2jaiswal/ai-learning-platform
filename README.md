# AI Learning Platform

A comprehensive AI-powered learning platform designed for rural education, featuring courses, teachers, AI tools, and user authentication.

## Features

- 🎓 **Course Management**: Browse and explore various educational courses
- 👨‍🏫 **Teacher Profiles**: View profiles of expert teachers
- 🤖 **AI Tools**: Interactive AI chatbot for learning assistance
- 👤 **User Authentication**: Signup and login system with JSON database
- 📱 **Responsive Design**: Works on all devices
- 🔗 **Social Sharing**: Share the platform with others

## Project Structure

```
ai-learning-platform/
├── index.html          # Home/Courses page
├── loginpage.html      # Login and Signup page
├── course.html         # Course details page
├── teacher.html        # Teachers page
├── about.html          # About us page
├── share.html          # Share page
├── chatbot/            # AI Chatbot package
│   ├── index.html      # Chatbot interface
│   ├── script.js       # Chatbot logic
│   └── config.js       # AI API configuration
└── package.json        # Optional: for local web server
```

## Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. **Clone or download this repository**

2. **Open the project**
   - Option 1: Open `index.html` directly in your browser (some features may be limited)
   - Option 2: Use a local web server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server -p 8000
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the application**
   - Navigate to `http://localhost:8000` (or the port you chose)
   - Or simply open `index.html` in your browser

### Usage

1. **Login**
   - Click the "Login" button in the navigation
   - Use one of the hardcoded credentials:
     - **Email**: `admin@example.com` | **Password**: `admin123`
     - **Email**: `test@example.com` | **Password**: `test123`
     - **Email**: `student@example.com` | **Password**: `student123`
   - Or create a new account using the "Create an Account" link
   - After successful login, you'll be redirected to the home page

2. **Navigation**
   - **Home**: Browse courses and main content
   - **Courses**: View available courses
   - **Teachers**: See teacher profiles
   - **About**: Learn about the platform
   - **AI Tools**: Access the AI chatbot (links to `chatbot/index.html`)
   - **Share**: Share the platform with others

3. **AI Chatbot Setup** (Optional)
   - The chatbot is located in the `chatbot/` folder
   - To use AI features, configure your API key in `chatbot/config.js`
   - Supported providers: Groq, OpenAI, Anthropic, Google Gemini, Together AI
   - See `chatbot/README.md` for detailed setup instructions

## Hardcoded Credentials

The following users are hardcoded in `loginpage.html`:

1. **Admin User**
   - Email: `admin@example.com`
   - Password: `admin123`

2. **Test User**
   - Email: `test@example.com`
   - Password: `test123`

3. **Student**
   - Email: `student@example.com`
   - Password: `student123`

**Note**: New users can also sign up, and their credentials will be stored in browser localStorage. This is a client-side only authentication system for demo purposes.

## Development

### File Structure

- Static files (HTML, CSS, JS) are served from the root directory
- Authentication is handled client-side with hardcoded credentials
- New user signups are stored in browser localStorage

## Notes

- No server required! All authentication is client-side
- Hardcoded credentials are available for quick login
- All pages are integrated with consistent navigation
- AI Tools link points to `chatbot/index.html`
- After login, users are redirected to `index.html` (root)

## Troubleshooting

1. **Login not working**
   - Use one of the hardcoded credentials listed above
   - Check browser console for JavaScript errors
   - Make sure CAPTCHA is entered correctly

2. **Pages not loading**
   - Use a local web server instead of opening files directly
   - Check that all HTML files are in the root directory
   - Verify file paths in navigation links are correct

3. **Signup not saving**
   - Check browser localStorage is enabled
   - Open browser console to see any errors

## License

This project is open source and available for educational purposes.
