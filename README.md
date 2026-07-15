# 🛍️ E-Commerce Web Application

A full-stack MERN e-commerce platform that provides a seamless online shopping experience. Users can browse products, manage their cart, place orders, and securely authenticate, while administrators can manage products, categories, and customer orders.

---

## ✨ Features

### 👤 User Features

- User Registration & Login
- JWT Authentication
- Browse Products
- Product Categories
- Product Search
- Product Details
- Shopping Cart
- Checkout Process
- Order History
- Responsive Design

### 🛠️ Admin Features

- Admin Dashboard
- Add/Edit/Delete Products
- Category Management
- Order Management
- User Management
- Product Image Upload

---

## 🚀 Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

### Cloud Services
- Cloudinary (Image Upload)

---

## 📂 Project Structure

```
Ecommerce/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/FarhadAhmad649/Ecommerce.git
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=Your_MongoDB_URI
JWT_SECRET=Your_JWT_Secret
CLOUDINARY_CLOUD_NAME=Your_Cloud_Name
CLOUDINARY_API_KEY=Your_API_Key
CLOUDINARY_API_SECRET=Your_API_Secret
```

Run Backend

```bash
npm run server
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📸 Screenshots

> Add screenshots here

| Home | Product |
|------|---------|
| ![](screenshots/home.png) | ![](screenshots/product.png) |

| Cart | Admin Dashboard |
|------|-----------------|
| ![](screenshots/cart.png) | ![](screenshots/admin.png) |

---

## 🔒 Authentication

- JWT Authentication
- Password Hashing with Bcrypt
- Protected Routes
- Admin Authorization

---

## 📱 Responsive Design

- Desktop
- Tablet
- Mobile

---

## 🎯 Future Improvements

- Stripe Payment Integration
- Wishlist
- Product Reviews & Ratings
- Coupons & Discounts
- Order Tracking
- Email Notifications
- Inventory Management

---

## 👨‍💻 Author

**Farhad Ahmad**

- GitHub: https://github.com/FarhadAhmad649
- LinkedIn: https://linkedin.com/in/farhadahmad649

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
