# GeoSecure IAM Platform

## Overview

GeoSecure is a backend identity and access management (IAM) system designed to simulate a production-grade authentication and authorization service similar to those used by modern platforms like Mapbox.

The system provides secure user authentication, role-based access control, and protected API endpoints using industry-standard practices.

---

## Features

- User signup with secure password hashing (bcrypt)
- User login with credential validation
- JWT-based authentication
- Middleware-protected API routes
- Role-based access control (user vs admin)
- Admin-only route enforcement
- MongoDB Atlas cloud database integration

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- bcryptjs
- jsonwebtoken

---

## Architecture

The system follows a modular backend architecture:

- **Models** → define data structure (User)
- **Controllers** → handle business logic (auth)
- **Routes** → define API endpoints
- **Middleware** → handle authentication & authorization

---

## API Endpoints

### Authentication

- `POST /api/auth/signup`
- `POST /api/auth/login`

### Protected Routes

- `GET /api/protected/dashboard` → requires authentication
- `GET /api/protected/admin` → requires admin role

---

## Security Design

- Passwords are hashed using bcrypt before storage
- JWT tokens are issued upon successful login
- Tokens are validated on protected routes
- Role-based middleware enforces access control
- Unauthorized and invalid requests are properly handled

---

## Example Flow

1. User signs up with email and password
2. Password is hashed and stored securely
3. User logs in and receives a JWT token
4. Token is sent in request headers for protected routes
5. Middleware validates token and extracts user data
6. Access is granted or denied based on role

---

## Learning Outcome

This project demonstrates core backend engineering concepts:

- Authentication vs Authorization
- Secure credential handling
- Token-based session management
- Middleware-driven architecture
- Role-based access control (RBAC)

---

## Future Improvements

- Refresh tokens & session management
- API key system for external developers
- Rate limiting and abuse prevention
- Logging and monitoring
- Deployment to cloud (AWS / Docker)

---

## Author

Built as a hands-on backend engineering case study focused on real-world IAM system design.