## Practice React TODO App
Project for practicing React development and Front-End application/system design using a TODO app. 

Credit to following sources for research:

- https://www.greatfrontend.com/system-design
- https://www.geeksforgeeks.org/what-is-system-design-learn-system-design
- https://www.udemy.com/course/software-architecture-design-of-modern-large-scale-systems
- https://www.youtube.com/@shivam_bhalla
- https://www.youtube.com/@FrontEndEngineer
- https://www.youtube.com/@d.zhiganov
- https://github.com/tastejs/todomvc

# 01. Requirements
Descriptions of what needs to be built; categorized as functional, non-functional, and constraints.

## Functional
Behaviors and/or features of user actions, events or business needs that the application/system is expected to have.

### Required Behaviors/Features:
- User(s) can read TODO items as a list.
- User(s) can create TODO items for the list.
- User(s) can update TODO items on the list as complete.

### Optional Behaviors/Features:
- User(s) could be able to edit TODO items.
- User(s) could be able to assign priority levels to TODO items.
- User(s) could be able to set deadlines for TODO items.
- User(s) could be able to delete TODO items from the list.
- User(s) could be able to filter TODO items by status, priority, due date, or alphabetical order.
- User(s) could be able to switch between different views.
- User(s) could be able to search through TODO items.

## Non-Functional
Describes the quality attributes of the application's/system's usability, reliability, and performance but are not critical for basic operations.

### Required Attributes:
- The app/system must be responsive and functional across desktop and mobile devices.
- The app/system must be have minimal response times.

### Optional Attributes:
- The app/system should be viewable via a profile or authentication for user(s).
- The app/system should have a storage that is scalable for increasing users and tasks.
- The app/system should secure user(s) data; follows best practices for encryption and data privacy.
- The app/system should be accessibility compliant (e.g., [WCAG standards](https://www.wcag.com/resource/what-is-wcag/)).
- The app/system should track/display the number of items.

## Constraints
Limitations the system needs to operate within. 

- The app/system needs data to persist using methods like `localStorage`, database, or cloud services.
- The app/system needs a stable internet connection, does NOT support offline (PWA).
- The app/system needs the source code stored on GitHub.
- The app/system needs to utilize AWS services for CI/CD in addition to micro services.
- The app/system needs to operate within a limited budget.
- The app/system needs to be web-based and will not support native iOS or Android.

"Napkin math" can be used to identify time and space complexities in runtime, storage, network load, and other factors.

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

# 02. Architecture
Identify the essential pieces of the application/system and analyze the relationships to one another.

## UI Mock-up aka Wire-frame Design(s)
Like "napkin math" for constraints, a "napkin sketch" can be used to wire-frame an application's/system's UI to better visualize a high overview everything.

![FPO](./docs/images/fpo.png)

## High Level / Component Tree (Dependency Graph) Diagram(s)
Depending on chosen frameworks/libs of the application/system, a high-level diagram for traditional (VanilliaJS) patterns such as MVC or MVVM is best. 

![FPO](./docs/images/fpo.png)

Otherwise, the diagram can be a tree (dependency graph) that shows parent-child relationships as well as prop and event actions, making it great for component-based lib (React, Svelte, Angular, etc...).

![FPO](./docs/images/fpo.png)

Generating markup for a purposed implementation is also helpful. Props, state, and the more granular workings of the application/system can be discussed during data modeling and interface definitions.

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

## Sequence Diagram(s)
Visualizes the interactions between actors and the application/system by mapping requests and responses over time, helping to define user flows, events, and endpoints.

![FPO](./docs/images/fpo.png)

## User-flow(s)
Outlines the step-by-step flow user(s) take to work within the application/system, helping to further events and endpoints.

![FPO](./docs/images/fpo.png)

## Rendering Approach
web rendering revolve around two main approaches: Client-Side Rendering (CSR) and Server-Side Rendering (SSR).

### Client-Side Rendering (CSR):
Client-Side Rendering (CSR), the rendering process is managed by the client rather than the server. This involves the client generating the majority of the page's structure, with content being produced through JavaScript.

### Server-Side Rendering (SSR):
Server-Side Rendering (SSR) typically involves rendering a web page on the server and sending the fully-rendered HTML to the client.

# 03. Data Model
Describe the various data entities and their fields that can exist on the Client, Server or both.

## Server

## Client

### Persistent

### Ephemeral


## Prop(s)
TBD..


# 04. Interface Definition(s)
Define the interface (interact) between components in the product, functionality of the various APIs, their parameters and responses. API is an overloaded term and generally refer to the protocol which software components communicate and request/send data between components. Client and server communicate via network layer APIs (HTTP/WebSockets). Client components generally communicate via functions in the browser runtime. All APIs have three things in common whether they are between the server and the client or between client components:

## Server Side - Client
| Field        | Value                         |
|:-------------|:------------------------------|
| HTTP Method  | GET                           |
| Path         | `/tasks`                      |
| Description  | Fetched the tasks for a user. |

### Parameters
| Parameter    | Type                          | Description                |
|:-------------|:------------------------------|:---------------------------|
| size         | number                        | Number of results per page |


#### Response
```json
TBD
```

## Client - Client
TBD...


# 05. Optimization(s)
Discuss about possible optimization opportunities and specific areas of interest when building the product.

- Performance
- User Experience
- Rendering
- Accessibility (a11y)
- Network
- Internationalization (i18n)
- Multi-device Support
- Security
