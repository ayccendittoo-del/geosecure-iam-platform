# GeoSecure IAM Platform

## Overview

GeoSecure is a backend Identity and Access Management (IAM) platform built to simulate the core security patterns used in modern production APIs.

The project includes secure user signup and login flows, JWT-based authentication, middleware-protected routes, role-based access control, and rate limiting for abuse prevention. It is designed as a hands-on backend case study focused on authentication, authorization, and API security.

---

## Features

- User signup with bcrypt password hashing
- User login with credential validation
- JWT-based authentication
- Middleware-protected API routes
- Role-based access control (user vs admin)
- Admin-only route enforcement
- Rate limiting on authentication endpoints
- MongoDB Atlas cloud database integration
- Environment-based secret management

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- jsonwebtoken
- express-rate-limit
- dotenv

---

## Architecture

The project follows a modular backend architecture:

- **Models** → define database structure
- **Controllers** → handle auth business logic
- **Routes** → define API endpoints
- **Middleware** → enforce authentication, authorization, and rate limiting

---

## API Endpoints

### Authentication

- `POST /api/auth/signup`
- `POST /api/auth/login`

### Protected Routes

- `GET /api/protected/dashboard` → authenticated users only
- `GET /api/protected/admin` → admin users only

---

## Security Design

- Passwords are hashed with bcrypt before storage
- JWT tokens are signed using an environment-based secret
- Protected routes require valid bearer tokens
- Admin routes enforce role-based access control
- Rate limiting reduces brute-force and abuse risk
- Signup does not allow privilege escalation through client-supplied roles

---

## Example Flow

1. A user signs up with an email and password
2. The password is hashed before being stored
3. The user logs in and receives a JWT token
4. The token is sent in the Authorization header
5. Middleware validates the token and extracts user identity
6. Access is granted or denied based on route protection and role

---

## Learning Outcome

This project demonstrates practical backend engineering concepts:

- Authentication vs authorization
- Secure password storage
- JWT-based session patterns
- Middleware-driven route protection
- Role-based access control (RBAC)
- Basic API abuse prevention with rate limiting

---

## Future Improvements

- Refresh tokens
- Password reset flow
- Automated testing
- Centralized error handling
- API documentation with Swagger
- Cloud deployment

---

## Author

Built as a backend security and IAM case study to demonstrate real-world authentication and authorization design patterns.