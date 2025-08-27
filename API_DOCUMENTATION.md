# Smart Toilet API Documentation

## Base URL
```
http://localhost:5000/api
```

## Environment Variables
Create a `.env` file in the server directory with:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## API Endpoints

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Sensor Data
- `GET /api/data` - Get all sensor data
- `GET /api/data/latest` - Get latest sensor reading
- `GET /api/data/location/:location` - Get data by location
- `GET /api/data/:id` - Get data by ID
- `POST /api/data` - Create new sensor data
- `DELETE /api/data/:id` - Delete data

### Messages
- `GET /api/messages` - Get all messages
- `GET /api/messages/user/:userId` - Get messages by user ID
- `GET /api/messages/mobile/:mobileNumber` - Get messages by mobile number
- `GET /api/messages/:id` - Get message by ID
- `POST /api/messages` - Create new message
- `PUT /api/messages/:id` - Update message
- `DELETE /api/messages/:id` - Delete message

## Data Models

### User
```json
{
  "name": "string (required)",
  "mobileNumber": "string (required, unique)",
  "address": "string (optional)",
  "pic": "string (optional, Cloudinary URL)",
  "socialLink": {
    "type": {
      "platform": "string (optional)",
      "url": "string (optional)"
    },
    "userType": "string (optional)"
  }
}
```

### Data (Sensor Data)
```json
{
  "sensorValue": "number (required)",
  "timestamp": "date (auto-generated)",
  "location": "string (optional)"
}
```

### Message
```json
{
  "userId": "ObjectId (required, references User)",
  "mobileNumber": "string (required)",
  "message": "string (required)",
  "timestamp": "date (auto-generated)"
}
```

## Running the Server

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with your MongoDB connection string

3. Start the server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## Health Check
- `GET /` - Returns API status message
