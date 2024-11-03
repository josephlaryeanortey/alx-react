# 0x02. React Props

## Project Overview

This project introduces the concept of **React props**, which are a way of passing data from one component to another. You'll create reusable components, define types for props, and write tests for each component. By the end of this project, you should be able to understand how to handle props in React and write tests to verify component behavior.

## Learning Objectives

By completing this project, you should be able to:

- Create basic React components using functions.
- Reuse components effectively in React.
- Pass and handle properties (props) between components.
- Define types for components using PropTypes.
- Use React Fragments to group multiple elements without adding extra nodes to the DOM.
- Understand when to use keys to optimize list rendering in React.

## Project Requirements

- All code will be compiled on **Ubuntu 18.04 LTS** using **node 12.x.x** and **npm 6.x.x**.
- You should use the following editors: `vi`, `vim`, `emacs`, or `Visual Studio Code`.
- All files should end with a newline.
- You must include a `README.md` file in the root of your project.
- Testing should be done using **Jest** and **Enzyme**.

## Directory Structure

0x02-react_props/ ├── dashboard/ │ ├── src/ │ │ ├── App/ │ │ │ ├── App.js │ │ │ └── App.test.js │ │ ├── Footer/ │ │ │ ├── Footer.js │ │ │ ├── Footer.css │ │ │ └── Footer.test.js │ │ ├── Header/ │ │ │ ├── Header.js │ │ │ ├── Header.css │ │ │ └── Header.test.js │ │ ├── Login/ │ │ │ ├── Login.js │ │ │ ├── Login.css │ │ │ └── Login.test.js │ │ └── Notifications/ │ │ ├── NotificationItem.js │ │ ├── NotificationItem.test.js │ │ └── Notifications.js │ │ └── Notifications.test.js ├── package.json └── README.md


## Tasks

### 0. Basic Components
- Split the app into several components: `Header`, `Footer`, `Login`, and `Notifications`.
- Move the relevant HTML and CSS code from `App.js` to the newly created components.
- Modify `App.js` to import and render these components.
- Ensure the page looks the same as before, with no errors or warnings in the console.

### 1. Writing Tests
- Write tests for each component to verify that it renders correctly using **Jest** and **Enzyme**.
- Use shallow rendering to check for specific elements within components.

### 2. Split Notifications Component
- Create a `NotificationItem` component to simplify the structure of the `Notifications` component.
- Pass props (`type`, `html`, `value`) to the `NotificationItem` and ensure the component renders correctly.

### 3. Checking Application with React Developer Tools
- Use the React Developer Tools extension in Chrome to inspect the component tree and optimize performance.

### 4. Props Types, Default Props, and Shapes
- Install **prop-types** for type-checking props in React components.
- Implement a `CourseListRow` component to render a table row with props.
- Modify `App.js` to display either the `Login` or `CourseList` component based on a prop (`isLoggedIn`).

## Testing
To run the test suite for the project:

1. Add the following script to `package.json`:
   ```json
   "test-watch": "jest --watch"
---
## Author
* **Joseph Laryea Nortey** - [Nortey](https://github.com/josephlaryeanortey)
