# **Railway Reservation API **  

A RESTful API for railway ticket booking, passenger management, and seat allocation, built with **Node.js, Express, Sequelize (MySQL)**.

---

## **Features**  

- **User Authentication** (JWT-based login & registration)  
- **Train Management** (CRUD operations for train schedules)  
- **Booking System** (Seat reservation & cancellation)  
- **Payment Integration** (Supports online transactions)  
- **Admin Panel** (Manage users, bookings & trains)  



## **Tech Stack**   

- **Backend:** Node.js, Express.js  
- **Database:** MySQL with Sequelize ORM  
- **Authentication:** JWT & Bcrypt  
- **Validation:** Express Validator  
- **API Testing:** Postman  



## **Installation & Setup** 🏗  

1. Clone the repository  
   ```bash
   git clone https://github.com/Debjitdolui/Railway-Reservation-API.git
   cd Railway-Reservation-API
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Set up environment variables (`.env` file)  
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=Debjit@2004
   DB_NAME=irctc_db
   JWT_SECRET=AbC123!xYz@
   ADMIN_API_KEY=K9$gH7*pQ
   ```

4. Run database migrations  
   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the server  
   ```bash
   npm start
   ```

---

## **API Endpoints**   

### **Auth Routes**
| Method | Endpoint         | Description         |
|--------|-----------------|---------------------|
| POST   | `/auth/register` | User Registration  |
| POST   | `/auth/login`    | User Login         |

### **Train Routes**
| Method | Endpoint        | Description             |
|--------|----------------|-------------------------|
| GET    | `/trains`      | Get all trains         |
| POST   | `/trains`      | Add a new train (Admin) |

### **Booking Routes**
| Method | Endpoint         | Description             |
|--------|-----------------|-------------------------|
| POST   | `/bookings`     | Book a ticket          |
| DELETE | `/bookings/:id` | Cancel a booking       |

---
# *Feedback & Support *
If you have any suggestions, questions, or issues, feel free to open an issue or reach out! Contributions are always welcome. 

# *Connect with Me *
👤 Debjit Dolui
📍 Hooghly, West Bengal
📧 Email Me on debjitdolui04@gmail.com
.  

---
