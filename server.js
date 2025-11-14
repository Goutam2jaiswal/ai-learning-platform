const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'users.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Initialize users.json if it doesn't exist
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
}

// Helper function to read users
function readUsers() {
    try {
        const data = fs.readFileSync(USERS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Helper function to write users
function writeUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Signup endpoint
app.post('/api/signup', (req, res) => {
    const { name, email, phone, password } = req.body;

    // Validation
    if (!name || !email || !phone || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'All fields are required!' 
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            success: false, 
            message: 'Invalid email format!' 
        });
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        return res.status(400).json({ 
            success: false, 
            message: 'Password must be at least 6 characters long!' 
        });
    }

    const users = readUsers();

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ 
            success: false, 
            message: 'User with this email already exists!' 
        });
    }

    // Create new user
    const newUser = {
        id: Date.now().toString(),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        password: password, // In production, hash this password
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    writeUsers(users);

    res.json({ 
        success: true, 
        message: 'Account created successfully! Please login.' 
    });
});

// Login endpoint
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Email and password are required!' 
        });
    }

    const users = readUsers();
    const user = users.find(u => u.email === email.toLowerCase().trim());

    if (!user) {
        return res.status(401).json({ 
            success: false, 
            message: 'Invalid email or password!' 
        });
    }

    if (user.password !== password) {
        return res.status(401).json({ 
            success: false, 
            message: 'Invalid email or password!' 
        });
    }

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user;
    res.json({ 
        success: true, 
        message: 'Login successful!', 
        user: userWithoutPassword 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Users database: ${USERS_FILE}`);
});

