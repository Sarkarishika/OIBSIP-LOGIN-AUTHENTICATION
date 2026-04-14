# OIBSIP-LOGIN-AUTHENTICATION
# 🔐 Login Authentication System

A simple **Login and Registration Web Application** built using **HTML, CSS, and JavaScript**.  
This project demonstrates how a basic authentication system works using **LocalStorage** and a protected dashboard page.

---

## 📌 Features

- User Registration
- User Login Authentication
- Protected Dashboard Page
- Logout Functionality
- Show / Hide Password
- Toast Notifications
- Modern UI with Gradient Background
- Glassmorphism Style Design

---

## 📂 Project Structure
login-authentication/
│
├── index.html # Login Page
├── register.html # Register Page
├── dashboard.html # Dashboard (Protected Page)
├── style.css # UI Styling
└── script.js # Authentication Logic


---

## ⚙️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- LocalStorage

---

## 🚀 How It Works

1. A user creates an account using the **Register page**.
2. The username and password are stored in **LocalStorage**.
3. The user logs in using their credentials.
4. If the credentials match, the user is redirected to the **Dashboard**.
5. The dashboard page checks if the user is logged in.
6. If not logged in, the user is redirected back to the **Login page**.

---

## ▶️ How to Run the Project

1. Clone the repository
git clone -  https://github.com/Sarkarishika/OIBSIP-LOGIN-AUTHENTICATION.git

3. Open the project folder.

4. Open **index.html** in your browser  
   OR run with **Live Server in VS Code**.

---

## 📸 Screenshots

### Login Page
A modern login interface with animated gradient background.

### Dashboard
Displays a welcome message with username and logout button.

---

## ⚠️ Important Note

This project stores user credentials in **LocalStorage**, which is **not secure for production applications**.

For real-world applications you should use:

- Backend server (Node.js / Django / Flask)
- Database (MongoDB / MySQL)
- Password hashing (bcrypt)
- JWT Authentication

---

## 📚 Purpose of This Project

This project helps beginners understand:

- Basic authentication logic
- DOM manipulation
- LocalStorage usage
- Simple dashboard protection
- Frontend UI design

---

## 👩‍💻 Author

**Ishika Sarkar**

---

## ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**.
