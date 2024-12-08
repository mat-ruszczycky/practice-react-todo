# Practice React TODO App
Repository for practicing React development and Front-End system design using a TODO app. 

Credit to following sources for research into the process:

- https://www.greatfrontend.com/system-design
- https://www.geeksforgeeks.org/what-is-system-design-learn-system-design
- https://www.udemy.com/course/software-architecture-design-of-modern-large-scale-systems
- https://www.youtube.com/@shivam_bhalla
- https://www.youtube.com/@FrontEndEngineer
- https://www.youtube.com/@d.zhiganov

# Requirements
Descriptions of what needs to be built, categorized as functional, non-functional, and constraints.

## Functional
Behaviors and/or features based on user actions, events or business needs that the application is expected to have.

### Required Behaviors/Features:
- User(s) can read a list of TODO items.
- User(s) can create TODO items for the list.
- User(s) can update TODO items on the list as complete.

### Optional Behaviors/Features:
- User(s) could be able to edit TODO items (e.g., update title, description, or details).
- User(s) could be able to assign priority levels to TODO items.
- User(s) could be able to set deadlines for TODO items.
- User(s) could be able to delete TODO items from the list.
- User(s) could be able to filter TODO items by status, priority, due date, or alphabetical order.
- User(s) could be able to switch between different views.
- User(s) could be able to search through TODO items.

## Non-Functional
Describes the quality attributes of the application's usability, reliability, and performance but are not critical for basic operations.

### Required Attributes:
- The app must be accessible via a profile or authentication for user(s).
- The app must be responsive and functional across desktop and mobile devices.
- The app must be have minimal response times.
- The app must be have a Back-End that is scalable to accommodate increasing users and tasks.
- The app must be securely stored for user(s) data; following best practices for encryption and data privacy.

### Optional Attributes:
- The app should be accessibility compliant (e.g., [WCAG standards](https://www.wcag.com/resource/what-is-wcag/)).
- The app should track/display the number of items.

## Constraints
Limitations which the system must operate within. "Napkin math" can be used to identify time and space complexities in runtime, storage, network load, and other quantitative factors.

- The app needs tasks to persist between sessions using methods like `localStorage`, database, or cloud.
- The app doesn't need support offline mode, requires a stable internet connection.
- The app needs it source code stored on GitHub.
- The app needs to utilize AWS services for CI/CD in addition to other micro services.
- The app needs to operate within a limited budget, thus be open-source.
- The app needs to be web-based only and will not support native iOS or Android.

# Architecture
Identify the essential components of the application and analyze the relationships to one another.

## UI Mock-up aka Wire-frame Design(s)
Similar to "napkin math" for constraints, a "napkin sketch" can be used to wire-frame an application's UI, to better visualize high overview of the system.

![FPO](./docs/images/fpo.png)

## High Level / Component Tree (Dependency Graph) Diagram(s)
Depending on chosen frameworks/libs of the application, a high-level diagram for traditional (VanilliaJS) patterns such as MVC or MVVM is best. 

Otherwise, the diagram can be a tree (dependency graph) that shows parent-child relationships as well as prop and event actions, making it suitable for component-based (React, Svelte, Angular, etc...) architecture. 

![FPO](./docs/images/fpo.png)

It may also be helpful to generate markup for a purposed implementation. Props, state, and the more granular workings of the components can be discussed and explained during data modeling / prop design, and interface / api / state definitions.

```jsx
<App>
  <ToDo>
    <ToDoHeader/>
      <ToDoList>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>		
        ...		
      </ToDoList>
    <ToDoFooter/>
  </ToDo>
</App>
```

## Sequence / User-flows Diagram(s)
TBD...

![FPO](./docs/images/fpo.png)

# Data Model / Prop Design
TBD...

# Interface / API / State Definition(s)
TBD...

# Optimizations / Performance
TBD...