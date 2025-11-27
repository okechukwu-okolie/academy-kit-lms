export const quizQuestions =[
  {
    "id": 1,
    "topic": "Fundamentals",
    "difficulty": "Beginner",
    "marks": 10,
    "question": "What is the primary purpose of the `useState` hook in React?",
    "options": [
      "To perform side effects after rendering.",
      "To manage state within a functional component.",
      "To access the DOM directly.",
      "To define component properties."
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": 2,
    "topic": "JSX",
    "difficulty": "Beginner",
    "marks": 10,
    "question": "In JSX, how do you embed JavaScript expressions?",
    "options": [
      "Using double quotes: \"{expression}\"",
      "Using parentheses: ((expression))",
      "Using curly braces: {expression}",
      "Using square brackets: [expression]"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": 3,
    "topic": "Components",
    "difficulty": "Beginner",
    "marks": 10,
    "question": "What is the main difference between a functional component and a class component?",
    "options": [
      "Class components are always faster.",
      "Functional components are easier to test.",
      "Functional components use hooks to manage state, while class components use `this.state`.",
      "Class components can only return one JSX element."
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": 4,
    "topic": "Props",
    "difficulty": "Beginner",
    "marks": 10,
    "question": "Props are primarily used for which direction of data flow in a standard React application?",
    "options": [
      "Component to component (sideways).",
      "Child to parent (upwards).",
      "Parent to child (downwards).",
      "Global to local (inwards)."
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": 5,
    "topic": "Routing",
    "difficulty": "Beginner",
    "marks": 10,
    "question": "Which React Router component is used to define a link for navigation?",
    "options": [
      "`<Route>`",
      "`<Switch>` or `<Routes>`",
      "`<BrowserRouter>`",
      "`<Link>`"
    ],
    "correctAnswerIndex": 3
  },
  {
    "id": 6,
    "topic": "Hooks",
    "difficulty": "Intermediate",
    "marks": 20,
    "question": "What is the correct dependency array for a `useEffect` hook that should only run once after the initial render?",
    "options": [
      "No dependency array (omitted)",
      "An array containing `this`",
      "An empty array (`[]`)",
      "An array containing `true`"
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": 7,
    "topic": "Performance",
    "difficulty": "Intermediate",
    "marks": 20,
    "question": "Which hook is used to memoize expensive function results, preventing recalculation on every render unless dependencies change?",
    "options": [
      "`useCallback`",
      "`useMemo`",
      "`useReducer`",
      "`useEffect`"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": 8,
    "topic": "Forms",
    "difficulty": "Intermediate",
    "marks": 20,
    "question": "In a controlled component setup, where does the form data (like input value) typically reside?",
    "options": [
      "In the DOM (uncontrolled component style).",
      "In the component's state (managed by `useState`).",
      "In the global browser storage.",
      "In the component's render function."
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": 9,
    "topic": "Context API",
    "difficulty": "Intermediate",
    "marks": 20,
    "question": "What problem does the React Context API primarily solve?",
    "options": [
      "Managing asynchronous API calls.",
      "Optimizing component re-rendering.",
      "Prop drilling (passing props through many intermediate components).",
      "Creating custom hooks."
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": 10,
    "topic": "Lifecycle",
    "difficulty": "Intermediate",
    "marks": 20,
    "question": "Which lifecycle method in a class component is analogous to the cleanup phase of `useEffect`?",
    "options": [
      "`componentDidMount`",
      "`componentWillUnmount`",
      "`componentDidUpdate`",
      "`shouldComponentUpdate`"
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": 11,
    "topic": "Advanced Hooks",
    "difficulty": "Expert",
    "marks": 30,
    "question": "When should you prefer the `useReducer` hook over `useState`?",
    "options": [
      "When the state logic is simple (e.g., toggling a boolean).",
      "When managing state that involves external APIs.",
      "When state logic involves complex transitions or multiple related sub-values.",
      "When you need to access the DOM."
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": 12,
    "topic": "Concurrency",
    "difficulty": "Expert",
    "marks": 30,
    "question": "What is the purpose of the `useTransition` hook?",
    "options": [
      "To manage CSS transitions and animations.",
      "To mark some state updates as 'urgent' and others as 'transitions' (non-urgent).",
      "To handle complex routing logic in React Router.",
      "To define state updates that are batched together."
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": 13,
    "topic": "Design Patterns",
    "difficulty": "Expert",
    "marks": 30,
    "question": "The concept of 'Higher-Order Components' (HOCs) is best described as:",
    "options": [
      "A component that uses a custom hook.",
      "A function that takes a component and returns a new component.",
      "A component that accepts other components as props.",
      "A component that renders another component within its own structure."
    ],
    "correctAnswerIndex": 1
  },
  {
    "id": 14,
    "topic": "Error Handling",
    "difficulty": "Expert",
    "marks": 30,
    "question": "What do React Error Boundaries catch?",
    "options": [
      "Errors inside event handlers.",
      "Errors inside asynchronous code (e.g., Promises/fetch).",
      "Errors that occur during rendering, in lifecycle methods, and in constructors of their children.",
      "Warnings logged in the console."
    ],
    "correctAnswerIndex": 2
  },
  {
    "id": 15,
    "topic": "Optimization",
    "difficulty": "Expert",
    "marks": 30,
    "question": "Which hook should be used to memoize a function definition so that it only changes if its dependencies change?",
    "options": [
      "`useMemo`",
      "`useCallback`",
      "`useReducer`",
      "`useLayoutEffect`"
    ],
    "correctAnswerIndex": 1
  }
]