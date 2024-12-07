# Practice React TODO App
Repository for practicing React and front-end system design using a TODO app as the subject. Credit to following sources for research into process:

- https://www.greatfrontend.com/system-design
- https://www.udemy.com/course/software-architecture-design-of-modern-large-scale-systems
- https://www.youtube.com/@shivam_bhalla
- https://www.youtube.com/@FrontEndEngineer
- https://www.youtube.com/@d.zhiganov

# Requirements
Formal descriptions of what needs to be built, commonly categorized as functional requirements, non-functional requirements, and constraints.

## Functional Requirements
Functional requirements are the behaviors and features an application must have. They specify what the system should do to meet user needs, defining the application's required functionality based on user actions, events, and/or business processes.

### Core:
- Users can create TODO items in a list.
- Users can mark TODO items as complete.

### Optional:
- Edit TODO items (e.g., update title, description, or details).
- Filter tasks by attributes like completion status, priority, due date, or alphabetical order.
- Assign priority levels to TODO items.
- Set deadlines for tasks.
- Delete TODO items from the list.
- User authentication to access a personalized TODO list.

## Non-Functional Requirements
Non-functional requirements specify the quality attributes that enhance the application's usability, reliability, and performance but are not critical for basic operations.

### Core:
- The app must be responsive and functional across desktop and mobile devices.
- User interactions should have minimal response times.
- The backend should be scalable to accommodate increasing numbers of users and tasks.
- User data must be securely stored, following best practices for encryption and data privacy.

### Optional:
- Accessibility compliance (e.g., WCAG standards).
- High availability and fault tolerance to ensure uptime.

## Constraints
Constraints define the limitations within which the system must operate.

- Tasks must persist between sessions using methods like `localStorage`, a database, or cloud syncing.
- Source code must be stored on GitHub.
- Deployment must utilize AWS services.
- The project must operate within a limited budget and be open-source.
- The application is web-based only and will not include native iOS or Android versions.

# Architecture Design

## UI Mock-up

## High Level Design / Component Tree

## Sequence Diagram / User-flows

# Data Model / State Design

# Interface Definitions / API / State

# Optimizations / Performance