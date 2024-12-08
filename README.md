# Practice React TODO App
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
- The app/system should be accessible via a profile or authentication for user(s).
- The app/system should have a Back-End that is scalable to accommodate increasing users and tasks.
- The app/system should be securely stored for user(s) data; following best practices for encryption and data privacy.
- The app/system should be accessibility compliant (e.g., [WCAG standards](https://www.wcag.com/resource/what-is-wcag/)).
- The app/system should track/display the number of items.

## Constraints
Limitations which the system must operate within. "Napkin math" can be used to identify time and space complexities in runtime, storage, network load, and other quantitative factors.

- The app/system needs tasks to persist between sessions using methods like `localStorage`, database, or cloud.
- The app/system doesn't need support offline mode, requires a stable internet connection.
- The app/system needs it source code stored on GitHub.
- The app/system needs to utilize AWS services for CI/CD in addition to other micro services.
- The app/system needs to operate within a limited budget, thus be open-source.
- The app/system needs to be web-based only and will not support native iOS or Android.

# 02. Architecture
Identify the essential pieces of the application/system and analyze the relationships to one another.

## UI Mock-up aka Wire-frame Design(s)
Similar to "napkin math" of constraints, a "napkin sketch" can be used to wire-frame an application's/system's UI, to better visualize a high overview everything.

![FPO](./docs/images/fpo.png)

## High Level / Component Tree (Dependency Graph) Diagram(s)
Depending on chosen frameworks/libs of the application/system, a high-level diagram for traditional (VanilliaJS) patterns such as MVC or MVVM is best. 

![FPO](./docs/images/fpo.png)

Otherwise, the diagram can be a tree (dependency graph) that shows parent-child relationships as well as prop and event actions, making it great for component-based (React, Svelte, Angular, etc...) architecture.

![FPO](./docs/images/fpo.png)

It may also be helpful to generate markup for a purposed implementation. Props, state, and the more granular workings of the application/system can be discussed during data modeling / prop design, and interface / API / state definitions.

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
Sequence Diagram: “A sequence diagram visualizes the interactions between actors and systems by mapping requests and responses over time, helping to define user flows, events, and endpoints.”

![FPO](./docs/images/fpo.png)

## User-flow(s)
User Flow: “A user flow outlines the step-by-step journey a user takes to achieve a goal within a system, revealing key interactions, decision points, and events that can inform interface design.”

![FPO](./docs/images/fpo.png)

# 03. Data Model
Describe the various data entities, the fields they contain and which component(s) they belong to.

## Cache / DB Store
| Header 1     | Header 2     | Header 3     |
|:-------------|:-------------|:-------------|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |
| Row 3, Col 1 | Row 3, Col 2 | Row 3, Col 3 |

## State(s)
| Header 1     | Header 2     | Header 3     |
|:-------------|:-------------|:-------------|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |
| Row 3, Col 1 | Row 3, Col 2 | Row 3, Col 3 |

## Prop(s)
| Header 1     | Header 2     | Header 3     |
|:-------------|:-------------|:-------------|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |
| Row 3, Col 1 | Row 3, Col 2 | Row 3, Col 3 |

# 04. Interface Definition(s)
TBD...use interfaces/JSON

## Event(s)
TBD...

## API
TBD...

### GET:

#### Request
```jsx
TBD
```

#### Response
```jsx
TBD
```

### POST:

#### Request
```jsx
TBD
```

#### Response
```jsx
TBD
```

### PUT:

#### Request
```jsx
TBD
```

#### Response
```jsx
TBD
```

### DELETE:

#### Request
```jsx
TBD
```

#### Response
```jsx
TBD
```

# 05. Optimization(s)
Discuss about possible optimization opportunities and specific areas of interest when building the product.

## Rendering
TBD...

## A11y
TBD...

## Performance
TBD...