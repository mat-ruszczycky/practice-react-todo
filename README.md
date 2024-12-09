# Practice React TODO App
Project for practicing React development and Front-End app/system design using a TODO app. 

Credit to following sources for research:

- https://www.greatfrontend.com/system-design
- https://www.geeksforgeeks.org/what-is-system-design-learn-system-design
- https://www.udemy.com/course/software-architecture-design-of-modern-large-scale-systems
- https://www.youtube.com/@shivam_bhalla
- https://www.youtube.com/@FrontEndEngineer
- https://www.youtube.com/@d.zhiganov
- https://github.com/tastejs/todomvc

## 01. Requirements
What needs to be built; categorized as functional, non-functional, and constraints.

### Functional
Behaviors and/or features the app/system is expected to have.

#### Required Behaviors/Features:
- User(s) can read TODO items as a list.
- User(s) can create TODO items for the list.
- User(s) can update TODO items on the list as complete.

#### Optional Behaviors/Features:
- User(s) could be able to edit TODO items.
- User(s) could be able to assign priority levels to TODO items.
- User(s) could be able to set deadlines for TODO items.
- User(s) could be able to delete TODO items from the list.
- User(s) could be able to filter TODO items by status, priority, due date, or alphabetical order.
- User(s) could be able to switch between different views.
- User(s) could be able to search through TODO items.

### Non-Functional
Describes the quality attributes of the application's/system's usability, reliability, and performance but not critical for basic operations.

#### Required Attributes:
- The app/system must be responsive and functional across desktop and mobile devices.
- The app/system must be have minimal response times.

#### Optional Attributes:
- The app/system should be viewable via a profile or authentication for user(s).
- The app/system should have a storage that is scalable for increasing users and tasks.
- The app/system should secure user(s) data; follows best practices for encryption and data privacy.
- The app/system should be accessibility compliant (e.g., [WCAG standards](https://www.wcag.com/resource/what-is-wcag/)).
- The app/system should track/display the number of items.

### Constraints
Limitations the system needs to operate within. 

- The app/system needs data to persist using methods like `localStorage`, database, or cloud services.
- The app/system needs a stable internet connection, does NOT support offline (PWA).
- The app/system needs the source code stored on GitHub.
- The app/system needs to utilize AWS services for CI/CD in addition to micro services.
- The app/system needs to operate within a limited budget.
- The app/system needs to be web-based and will not support native iOS or Android.

**"Napkin math"** can be used to identify time/space complexities in runtime, storage, network, etc...

```
User:
  - Daily Active Users (DAU): Assume 100 users in the initial phase.
  - TODOs Created per User: Each user creates 5 TODOs per day.  
  - Total TODOs per Day: 100 users * 5 TODOs per user = 500 TODOs/day

Storage Estimates:
  - TODO Data: Assume each TODO has:  
    * `id`: 4 bytes (integer).  
    * `text`: 100 characters max (100 bytes).  
    * `completed`: 1 byte (boolean).  
    * `metadata` (e.g., timestamps): 8 bytes.

  - Total size per TODO: 4 + 100 + 1 + 8 = 113 bytes.  
  - Storage Needed Per Day: 500 TODOs/day * 113 bytes/TODO = 56,500 bytes/day ≈ 56.5 KB/day.  
  - Monthly Storage: 56.5 KB/day * 30 days = 1.7 MB/month.

API Load:
  - TODO Fetches: Assume users fetch their TODO lists 5 times daily.  
  - API Calls for Fetching: 100 users * 5 fetches/user/day = 500 API calls/day.  
  - TODO Additions: Assume users add TODOs 5 times daily.  
  - API Calls for Adding: 100 users * 5 adds/user/day = 500 API calls/day.  
  - Total API Calls Per Day: 500 fetches/day + 500 adds/day = 1,000 API calls/day.

Scaling:
  If the user base grows to 10,000 users:
    - Daily TODOs: 10,000 * 5 = 50,000  TODOs/day.  
    - Monthly Storage: 50,000 * 113  bytes/day * 30 ≈ 170  MB/month.  
    - API Calls: 10,000 * 5 * 2 = 100,000  calls/day.  
```

## 02. Architecture
Essential pieces of the app/system and the relationships to one another.

### UI Mock-up aka Wire-frame Design(s)
A "napkin sketch" can be used to wire-frame an app/system's UI to better visualize a high overview everything.

![FPO](./docs/images/fpo.png)

### High Level Diagram(s)
A high-level diagram for traditional (VanillaJS) patterns such as MVC or MVVM is best. 

![FPO](./docs/images/fpo.png)

### Component Tree (Dependency Graph)
A diagram tree (dependency graph) showing parent-child relationships as well as prop and event actions, making it great for component-based libs.

![FPO](./docs/images/fpo.png)

### Markup
Markup for a purposed implementation can be useful. Props, state, and the more granular workings of the app/system can be discussed during data modeling and interface definitions.

```jsx
<App>
  <ToDo>
    <ToDoHeader/>
      <ToDoInput/>
      <ToDoList>
        <ToDoItem key="uuid">
          <ToDoDescription/>
          <ToDoStatus completed="true | false"/>
        </ToDoItem>
        <ToDoItem key="uuid"/>
        <ToDoItem key="uuid"/>
        <ToDoItem key="uuid"/>
        ...		
      </ToDoList>
    <ToDoFooter/>
  </ToDo>
</App>
```

### Sequence Diagram(s)
Shows interactions between actors and the app/system by mapping requests and responses over time, helping to define user flows, events, and endpoints.

![FPO](./docs/images/fpo.png)

### User-flow(s)
Outlines the step-by-step flow user(s) take to work within the app/system, helping to further events and endpoints.

![FPO](./docs/images/fpo.png)

### Rendering Strategies
Determines how an app's content is generated and displayed to the user. Can impact factors such as load speed, SEO, and interactivity.

#### Client-Side Rendering (CSR):
Rendering process is on the client; JavaScript generates most of the app's structure. The browser receives minimal HTML, fetches data, and dynamically renders content, making it ideal for highly interactive applications.

#### Server-Side Rendering (SSR):
Generates a fully-rendered HTML page on the server and sends it to the client, enabling faster initial load times and improved SEO.

## 03. Data Model
Focus on how the app/system internally organizes and stores information.

### State
Client state

```TS
// TBD
```

### Entities
TBD..

```ts
// User Interface
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string; // ISO timestamp
}

// List Interface
interface List {
  id: number;
  name: string;
  userId: number; // Foreign key linking to User
  createdAt: string; // ISO timestamp
}

// Task Interface
interface Task {
  id: number;
  title: string;
  description?: string; // Optional field
  status: "pending" | "completed"; // Enum-like union type
  dueDate?: string; // ISO timestamp, optional
  priority: "low" | "medium" | "high";
  listId: number; // Foreign key linking to List
  userId: number; // Foreign key linking to User
  createdAt: string; // ISO timestamp
}
```

### Response
TBD..

```json
{
  "users": [
    { "id": 1, "name": "Alice", "email": "alice@example.com", "createdAt": "2024-12-08T10:00:00Z" }
  ],
  "lists": [
    { "id": 1, "name": "Work", "userId": 1, "createdAt": "2024-12-08T11:00:00Z" },
    { "id": 2, "name": "Personal", "userId": 1, "createdAt": "2024-12-08T11:30:00Z" }
  ],
  "tasks": [
    {
      "id": 1,
      "title": "Finish project report",
      "description": "Submit the final report by EOD.",
      "status": "pending",
      "dueDate": "2024-12-09T17:00:00Z",
      "priority": "high",
      "listId": 1,
      "userId": 1,
      "createdAt": "2024-12-08T12:00:00Z"
    },
    {
      "id": 2,
      "title": "Buy groceries",
      "description": "Milk, eggs, and bread.",
      "status": "completed",
      "dueDate": null,
      "priority": "low",
      "listId": 2,
      "userId": 1,
      "createdAt": "2024-12-08T13:00:00Z"
    }
  ]
}
```

## 04. Interface API
Focus on how developers or external systems interact with app/system.


### Endpoints
How does app/system interact with server

```ts
interface APIEndpoints {
  // Retrieve all tasks
  "GET /tasks": {
    response: Task[]; // Array of tasks returned by the server
  };

  // Create a new task
  "POST /tasks": {
    request: TaskRequest; // Data sent to create the task
    response: Task; // Newly created task returned by the server
  };

  // Update an existing task
  "PUT /tasks/{id}": {
    request: TaskRequest; // Updated data for the task
    response: Task; // Updated task returned by the server
  };

  // Delete a task
  "DELETE /tasks/{id}": {
    response: { message: string }; // Response confirming deletion
  };
}
```

### Client
How do users/developers interact with app/system

#### Events:
...

#### Props:
...

## 05. Optimization(s)
Discuss about possible optimization opportunities and specific areas of interest when building the product.

- Performance
- User Experience
- Rendering
- SEO
- Accessibility (a11y)
- Network
- Internationalization (i18n)
- Multi-device Support
- Security
