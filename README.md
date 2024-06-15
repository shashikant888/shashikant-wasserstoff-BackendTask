# Wasserstoff Load Balancer

## Overview

This project implements an intelligent load balancer for managing and distributing traffic across multiple APIs. The load balancer uses dynamic routing based on various criteria and includes different queue management strategies.

## Folder Structure
```
wasserstoff-load-balancer/
├── config/
│ └── config.js
├── controllers/
│ ├── apiController.js
│ └── queueController.js
├── logs/
│ └── logs.txt
├── middlewares/
│ └── routingMiddleware.js
├── models/
│ └── queue.js
├── routes/
│ ├── apiRoutes.js
│ └── queueRoutes.js
├── utils/
│ └── logger.js
├── .gitignore
├── package.json
├── README.md
└── server.js
```


## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/shashikant888/shashikant-wasserstoff-BackendTask.git
   cd wasserstoff-load-balancer
   ```

2. Install dependencies:

    ```
    npm install
    ```
3. Start the server:
    ```
    node server.js
    ```

    The server will run on http://localhost:3000.

## API Endpoints

1. Route Request
URL: http://localhost:3000/api/route
Method: POST
Payload:
json
Copy code
{
  "apiType": "fast" // or "slow" or "random"
}

2. Enqueue Request
URL: http://localhost:3000/queue/enqueue
Method: POST
Payload:
json
Copy code
{
  "apiType": "random", // or "fast" or "slow"
  "payload": {
    "data": "some data"
  }
}

3. Process Queue Request
URL: http://localhost:3000/queue/process
Method: GET
Logging and Metrics
Logs are stored in logs/logs.txt and include request times, endpoint selection, and response times.

## Postman Collection
Import the provided Postman collection presesent in the project folder JSON file to test the endpoints.

## Screencast Video
A screencast video explaining the code and demonstrating the running application can be found "{ link }".

## Additional Features
Implemented FIFO queue management.
Detailed logging and metrics capture.
## Test Scenarios
Several test scenarios have been created to showcase the performance and reliability of the load balancer. These are documented in the Postman collection.

## Conclusion
This project demonstrates an intelligent load balancer with dynamic routing and queue management, highlighting problem-solving skills, creativity, and technical expertise.

# Thank You !!