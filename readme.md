# Flight Service

## Related Services

This project is part of a larger microservices architecture. Each service in the ecosystem plays a crucial role in the overall functionality. Explore the related services:

### 🔗 [FlightsAndSearchService](https://github.com/Nani-Prabhakar/FlightsAndSearch)
### 🔗 [EmailReminderService](https://github.com/Nani-Prabhakar/EmailRemainderService)
### 🔗 [Auth_Service](https://github.com/Nani-Prabhakar/Auth_Service)
### 🔗 [TicketBookingService](https://github.com/Nani-Prabhakar/TicketBookingService)
### 🔗 [API_Gateway](https://github.com/Nani-Prabhakar/API_Gateway)

---

## Table of Contents
- [Overview](#overview)
- [Project Setup](#project-setup)
- [Database Design](#database-design-for-flightsandsearch_service)
- [Service-Specific Configuration](#service-specific-configuration)
- [Tech Stack](#tech-stack)

## Project Overview

This is a microservice architecture project designed for managing flight bookings. It includes the following key features:

- **Inter-Service Communication**: Utilizes Axios for seamless communication between microservices.
- **Message Broker Integration**: Employs RabbitMQ for handling service downtime and managing message queues.
- **Rate Limiting**: Implements rate limiting to prevent abuse and ensure fair usage.
- **Logging**: Uses Morgan logger for HTTP request logging.
- **Flight Search**: Allows searching for flights based on various filters.
- **Email Notifications**: Sends emails using Nodemailer and manages pending emails with Node-cron.
- **Centralized API Handling**: Features an API Gateway for centralized management and rate limiting of API requests.

## Project Setup

1. **Clone the project on your local machine**
   - Clone this repository: `[FlightsAndSearchService](https://github.com/Srinu-Bandlamudi/FlightsAndSearch)`
   - Clone the remaining services if needed:
     - [EmailReminderService](https://github.com/Srinu-Bandlamudi/EmailReminderService)
     - [Auth_Service](https://github.com/Srinu-Bandlamudi/Auth_Service)
     - [TicketBookingService](https://github.com/Srinu-Bandlamudi/TicketBookingService)
     - [API_Gateway](https://github.com/Srinu-Bandlamudi/API_Gateway)

2. **Install dependencies**
   - Execute `npm install` in the root directory of each service after cloning them.

3. **Environment Setup**
   - Create a `.env` file in the root directory and add the following environment variable:
     ```plaintext
     PORT=3000
     ```
   - Inside the `src/config` folder, create a file `config.json` with the following content:
     ```json
     {
       "development": {
         "username": "<YOUR_USER_NAME>",
         "password": "<YOUR_DB_PASSWORD>",
         "database": "Flights_Serach_DB_DEV",
         "host": "127.0.0.1",
         "dialect": "mysql"
       }
     }
     ```

4. **Database Setup**
   - Once you've added your DB config as listed above, navigate to the `src` folder from your terminal and execute:
     ```bash
     npx sequelize db:create
     ```
   - Then, execute the migration command:
     ```bash
     npx sequelize db:migrate
     ```

## Database Design for FlightsAndSearch_Service

- **Tables:**
  - Airplane
  - Flight
  - Airport
  - City

- **Relationships:**
  - A Flight belongs to an Airplane, but one airplane can be used in multiple flights.
  - A city has many airports, but an airport belongs to one city.
  - One airport can have many flights, but a flight belongs to one airport.

### Table Schemas

- **City:**
  - `id`, `name`, `created_at`, `updated_at`

- **Airport:**
  - `id`, `name`, `address`, `city_id`, `created_at`, `updated_at`
  - Relationship: City has many Airports, and Airport belongs to a City (one-to-many).

  ```bash
  npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
