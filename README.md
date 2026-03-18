# GeoSecure IAM Platform

## Overview

GeoSecure is a backend Identity and Access Management (IAM) platform built to simulate real-world authentication and authorization patterns used in production APIs.

The project includes secure signup and login flows, bcrypt password hashing, JWT-based authentication, middleware-protected routes, role-based access control, rate limiting for abuse prevention, environment-based secret management, and Swagger API documentation.

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
- Swagger documentation at `/api-docs`
- Centralized 404 and error handling

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
- swagger-ui-express
- swagger-jsdoc

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

### Documentation

- `GET /api-docs` → Swagger UI

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
- Centralized error handling
- API documentation practices

---

## Future Improvements

- Automated tests
- Refresh tokens
- Password reset flow
- Request validation middleware
- Cloud deployment

---

## Author

Built as a backend security and IAM case study to demonstrate real-world authentication and authorization design patterns.