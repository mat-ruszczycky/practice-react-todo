# Practice React TODO App
Repository for practicing React and Front-End system design using a TODO app. 

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
Behaviors and features an application must have. Specifies what the system is expected to do to meet user needs, defining the application's required functionality based on user actions, events, and/or business processes.

### Required Behaviors &amp; Features:
- User(s) can read a list of personal TODO items.
- User(s) can create TODO items to the list.
- User(s) can mark TODO items on the list as complete.

### Optional Behaviors &amp; Features:
- User(s) could be able to edit TODO items (e.g., update title, description, or details).
- User(s) could be able to assign priority levels to TODO items.
- User(s) could be able to set deadlines for TODO items.
- User(s) could be able to delete TODO items from the list.
- User(s) could be able to filter TODO items by status, priority, due date, or alphabetical order.
- User(s) could be able to swtich between different views.
- User(s) could be able to search through TODO items.

## Non-Functional
Specifies the quality attributes of the application's usability, reliability, and performance but are not critical for basic operations.

### Required Attributes:
- The app must be accessible via a profile or authentication for user(s).
- The app must be responsive and functional across desktop and mobile devices.
- The app must be have minimal response times.
- The app must be have a Back-End that is scalable to accommodate increasing users and tasks.
- The app must be securely stored for user(s) data; following best practices for encryption and data privacy.

### Optional Attributes:
- The app should be accessibility compliant (e.g., WCAG standards).
- The app should track/display the number of items.

## Constraints
Constraints are the limitations which the system must operate within. "Napkin math" can be used to identify use cases that the system may be subject to, such as time and space complexities in runtime, storage, network load, and other quantitative factors.

- The app needs tasks to persist between sessions using methods like `localStorage`, database, or cloud.
- The app doesn't need support offline mode, requires a stable internet connection.
- The app needs it source code stored on GitHub.
- The app needs to utilize AWS services for CI/CD in addition to other micro services.
- The app needs to operate within a limited budget, thus be open-source.
- The app needs to be web-based only and will not support native iOS or Android.

# Architecture Design
Identify the essential components of the product and analyze their relationships to one another.

## UI Mock-up aka Wire-frame
Similar to using "napkin math" for quantitative factors, a "napkin sketch" can be used to roughly wire-frame an application's UI, to better visualize overview of the application's system.

![FPO](./docs/images/fpo.png)

## High Level Design / Component Tree (Dependency Graph)
Depending on the chosen design pattern(s) for the application, using a high-level diagram tailored to traditional (VanilliaJS) patterns such as MVC or MVVM is best. 

Or, the diagram can take the form of a tree (dependency graph) that illustrates parent-child relationships as well as prop and event actions, making it suitable for component-based (React, Svelte, Angular, etc...) architecture. 

It may also be helpful to generate markup for a purposed implementation.

![FPO](./docs/images/fpo.png)

## Sequence Diagram / User-flows
TBD...

![FPO](./docs/images/fpo.png)

# Data Model / State Design
TBD...

# Interface Definitions / API / State
TBD...

# Optimizations / Performance
TBD...