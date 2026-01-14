# Simple CRUD App Backend

A simple RESTful API backend application built with Node.js and Express.js that provides CRUD (Create, Read, Update, Delete) operations for managing items.

## Features

- ✅ Create new items
- ✅ Read all items or a specific item by ID
- ✅ Update existing items
- ✅ Delete items
- ✅ In-memory data storage
- ✅ RESTful API design
- ✅ Error handling
- ✅ CORS enabled

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework (with built-in body parsing)
- **CORS** - Cross-Origin Resource Sharing support

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/bhandaridiwash/Simple-crud-app-backend.git
cd Simple-crud-app-backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will start running on `http://localhost:3000`

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Root Endpoint
- **GET** `/` - Welcome message and API documentation

### CRUD Operations

#### 1. Get All Items
- **Endpoint:** `GET /api/items`
- **Description:** Retrieves all items
- **Response:**
```json
{
  "count": 3,
  "items": [
    {
      "id": 1,
      "name": "Item 1",
      "description": "Description for item 1"
    }
  ]
}
```

#### 2. Get Item by ID
- **Endpoint:** `GET /api/items/:id`
- **Description:** Retrieves a specific item by ID
- **Response:**
```json
{
  "item": {
    "id": 1,
    "name": "Item 1",
    "description": "Description for item 1"
  }
}
```

#### 3. Create New Item
- **Endpoint:** `POST /api/items`
- **Description:** Creates a new item
- **Request Body:**
```json
{
  "name": "New Item",
  "description": "Description for new item"
}
```
- **Response:**
```json
{
  "message": "Item created successfully",
  "item": {
    "id": 4,
    "name": "New Item",
    "description": "Description for new item"
  }
}
```

#### 4. Update Item
- **Endpoint:** `PUT /api/items/:id`
- **Description:** Updates an existing item
- **Request Body:**
```json
{
  "name": "Updated Item",
  "description": "Updated description"
}
```
- **Response:**
```json
{
  "message": "Item updated successfully",
  "item": {
    "id": 1,
    "name": "Updated Item",
    "description": "Updated description"
  }
}
```

#### 5. Delete Item
- **Endpoint:** `DELETE /api/items/:id`
- **Description:** Deletes an item by ID
- **Response:**
```json
{
  "message": "Item deleted successfully",
  "item": {
    "id": 1,
    "name": "Item 1",
    "description": "Description for item 1"
  }
}
```

## Testing the API

You can test the API using tools like:
- **cURL**
- **Postman**
- **Thunder Client** (VS Code extension)
- **Insomnia**

### Example cURL Commands

```bash
# Get all items
curl http://localhost:3000/api/items

# Get item by ID
curl http://localhost:3000/api/items/1

# Create new item
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Item","description":"Test description"}'

# Update item
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Item","description":"Updated description"}'

# Delete item
curl -X DELETE http://localhost:3000/api/items/1
```

## Project Structure

```
Simple-crud-app-backend/
├── index.js           # Main application file
├── package.json       # Project dependencies and scripts
├── .gitignore        # Git ignore rules
└── README.md         # Project documentation
```

## Error Handling

The API includes basic error handling for:
- 400 Bad Request - Missing required fields
- 404 Not Found - Item or route not found
- 500 Internal Server Error - Server errors

## Future Enhancements

- [ ] Add database integration (MongoDB, PostgreSQL, etc.)
- [ ] Add data validation
- [ ] Add authentication and authorization
- [ ] Add unit tests
- [ ] Add logging
- [ ] Add environment configuration
- [ ] Add pagination for large datasets
- [ ] Add search and filter functionality

## License

ISC

## Author

Diwash Bhandari
