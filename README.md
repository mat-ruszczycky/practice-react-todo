# Practice React TODO App
Repository for practicing React and front-end system design using a TODO app as the subject. Credit to following sources for research into process:

- https://www.greatfrontend.com/system-design
- https://www.udemy.com/course/software-architecture-design-of-modern-large-scale-systems
- https://www.youtube.com/@shivam_bhalla
- https://www.youtube.com/@FrontEndEngineer
- https://www.youtube.com/@d.zhiganov

# Requirements
Formal descriptions of what needs to be built, commonly categorized as functional, non-functional, and constraints.

## Functional
The behaviors and features an application must have. They specify what the system should do to meet user needs, defining the application's required functionality based on user actions, events, and/or business processes.

### Core Behaviors &amp; Features:
- User authentication to access a personalized TODO list.
- Users can read a list of personal TODO items.
- Users can create TODO items to the list.
- Users can mark TODO items on the list as complete.

### Optional Behaviors &amp; Features:
- Edit TODO items (e.g., update title, description, or details).
- Assign priority levels to TODO items.
- Set deadlines for TODO items.
- Delete TODO items from the list.
- Filter TODO items by attributes like status, priority, due date, or alphabetical order.

## Non-Functional
Specify the quality attributes that enhance the application's usability, reliability, and performance but are not critical for basic operations.

### Core Attributes:
- The app must be responsive and functional across desktop and mobile devices.
- User interactions should have minimal response times.
- The back-end should be scalable to accommodate increasing numbers of users and tasks.
- User data must be securely stored, following best practices for encryption and data privacy.

### Optional Attributes:
- Accessibility compliance (e.g., WCAG standards).
- High availability and fault tolerance to ensure uptime.

## Constraints
Constraints define the limitations within which the system must operate.

- Tasks must persist between sessions using methods like `localStorage`, database, or cloud.
- App doesn’t support offline mode, requires a stable internet connection.
- Source code must be stored on GitHub.
- Deployment must utilize AWS services.
- The project must operate within a limited budget and be open-source.
- The application is web-based only and will not include native iOS or Android versions.
- "Napkin math" can also be used to identify constraints that the system may be subject to, such as time and space complexities in runtime, storage, network load, and other quantitative factors.

# Architecture Design
Identify the essential components of the product and analyze their interconnections.

## UI Mock-up aka Wire-frame
Similar to using "napkin math" for quantitative factors, a "napkin sketch" can be used to roughly sketch or wireframe an application’s UI, helping to better visualize and provide a qualitative overview of the system.

![FPO](./docs/images/fpo.png)

## High Level Design / Component Tree (Graph)
Depending on the chosen technical design pattern for the application, you may opt to create a high-level diagram tailored to traditional patterns such as MVC or MVVM. 

Alternatively, the diagram can take the form of a tree (graph) that illustrates parent-child relationships as well as prop and event actions, making it suitable for component-based systems. It may also be helpful to generate markup for purposed implementation.

![FPO](./docs/images/fpo.png)

## Sequence Diagram / User-flows
![FPO](./docs/images/fpo.png)

# Data Model / State Design

# Interface Definitions / API / State

# Optimizations / Performance