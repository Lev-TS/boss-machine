# Boss Machine

## Project Overview

In this Codecadeny course project, I have created an entire API to serve information to a Boss Machine, a unique management application for today's most accomplished (evil) entrepreneurs. :) 

## Implementation Details

To complete the project, I have coded several sections while the entire front end, testing suite and database logic was provided by CodeCademy. 

### Server Boilerplate

The **server.js**, already included some boilerplate code, but it was missing some key functionality to allow server to run. Namely, I have:

- Set up body-parsing middleware with the `body-parser` packagae.
- Set up CORS middleware with the `cors` package.
- Mounted the existing `apiRouter` at `/api`. This router serves as the starting point for all the API routes.
- Started the server listening on the provided `PORT`.


### API Routes

- All the routes live inside the **server** folder. 
- The 'database' exists in **server/db.js**. The beginning database is seeded every time the server is restarted.

#### Routes created

- `/api/minions`
  - GET /api/minions to get an array of all minions.
  - POST /api/minions to create a new minion and save it to the database.
  - GET /api/minions/:minionId to get a single minion by id.
  - PUT /api/minions/:minionId to update a single minion by id.
  - DELETE /api/minions/:minionId to delete a single minion by id.
- `/api/ideas`
  - GET /api/ideas to get an array of all ideas.
  - POST /api/ideas to create a new idea and save it to the database.
  - GET /api/ideas/:ideaId to get a single idea by id.
  - PUT /api/ideas/:ideaId to update a single idea by id.
  - DELETE /api/ideas/:ideaId to delete a single idea by id.
- `/api/meetings`
  - GET /api/meetings to get an array of all meetings.
  - POST /api/meetings to create a new meeting and save it to the database.
  - DELETE /api/meetings to delete _all_ meetings from the database.

For all `/api/minions` and `/api/ideas routes`, any POST or PUT requests send their new/updated resources in the request body. POST request bodies do not have an `id` property.

For `/api/meetings` POST route, no request body was necessary. Meetings are generated automatically by the server upon request using `createMeeting` function provided by Codecadeny un the folder **db.js**.

### Working with the 'Database'

The **server/db.js** file exports helper functions for working with the database arrays. The goal of this project was to focus on Express routes and not worry about how the database works under the hood. 

#### Schemas

- Minion:
  - id: string
  - name: string
  - title: string
  - salary: number
- Idea
  - id: string
  - name: string
  - description: string
  - numWeeks: number
  - weeklyRevenue: number
- Meeting
  - time: string
  - date: JS `Date` object
  - day: string
  - note: string

### Custom Middleware

- Custom middleware function `checkMillionDollarIdea` makes sure that any new or updated ideas are still worth at least one million dollars! The total value of an idea is the product of its `numWeeks` and `weeklyRevenue` properties.

