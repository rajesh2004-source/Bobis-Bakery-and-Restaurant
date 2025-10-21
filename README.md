# Bobi's Bakery & Restaurant 🍰 (MERN Stack E-Commerce Platform)


## 📖 Overview

Bobi's Bakery & Restaurant is a fully functional **full-stack online ordering platform** built to provide a seamless e-commerce experience for food and restaurant services. This project showcases proficiency in the **MERN stack**, secure authentication, and integration with third-party payment services.

## ✨ Key Features

* **Secure Authentication:** User registration, login, and protected routes secured using **JSON Web Tokens (JWT)** and password hashing with **Bcrypt**.
* **Online Payment Integration:** Seamless checkout process using **Razorpay** API for secure and reliable payment processing.
* **Real-Time Order Tracking:** Users can view the live status of their orders from placement to delivery.
* **Admin Dashboard:** A dedicated interface for store management, including:
    * Efficient inventory and menu management.
    * Processing and tracking incoming orders.
    * Customer data management.
* **Mobile Responsiveness:** Full compatibility across all device sizes for a consistent user experience.

---

## 🛠️ Tech Stack

This application is built using the following technologies:

### Frontend
* **React.js:** For building the dynamic user interface.
* **HTML5 / CSS3**

### Backend
* **Node.js & Express.js:** For building the robust and scalable server-side API.
* **MongoDB (Mongoose):** As the NoSQL database for storing user, product, and order information.

### Payments
* **Razorpay API**

---

## Configure Environment Variables (CRITICAL STEP)

Create a file named **`.env`** in the **root directory** (for the server) and a separate **`.env`** file inside the **`client`** directory (for the frontend). **You must provide your own MongoDB connection string and API keys.**

**Server (`.env`) Example:**

```
PORT=5000
MONGO_URI=[YOUR_MONGODB_CONNECTION_STRING_HERE]
JWT_SECRET=[A_RANDOM_SECRET_STRING_FOR_JWT]
RAZORPAY_KEY_ID=[YOUR_RAZORPAY_KEY_ID]
RAZORPAY_KEY_SECRET=[YOUR_RAZORPAY_SECRET]
```

**Client (`client/.env`) Example:**

```
REACT_APP_SERVER_URL=http://localhost:5000
```

## Install Dependencies & Run

#### **A. Install Dependencies**

Navigate to both the root and `client` directories to install dependencies:

```bash
# In the root directory:
npm install 

# Then, in the client directory:
cd client
npm install
cd ..
```

#### **B. Start the Application**

Start the server and client in separate terminals (or use your custom run command):

```bash
# To start the server (in the root directory):
npm start  
# OR: node server.js

# To start the client (in the client directory):
cd client
npm start
```

The application will typically be accessible at `http://localhost:[Your Client Port, e.g., 3000]`.

-----

## 📜 License

This project is distributed under the **MIT License**. See the **`LICENSE`** file in the repository root for full details.

-----

## 📧 Contact

**Mahale Rajesh** - [rajeshmahale103@gmail.com](mailto:rajeshmahale103@gmail.com)

Project Link: [Your GitHub Repository Link]

```
