import UseRef from './useRef';
import './App.css'


function App() {
  return (
    <div className="App">
    <h1>Day-4 React Interview Questions</h1>
      <UseRef />
      <hr/>
      <h2>Q2. What is Context api ?</h2>
      <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. (or) Context provides a way to pass data through the component tree without having to pass props down manually at every level.
      For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.</p>
<hr/>
<h2>Q3. Difference between callback and useCallback Hook ?</h2>
<h3>A) callback</h3>
<p>callback is like an argument passed to an function whereas another one is hook, in this you pass another function as an argument.
<br/>A callback is a function assed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished</p>
<h3>B) Use Call Back</h3>
<p>The useCallback hook is used when you have a component in which the child is rerendering again and again without need. Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
It always returns a memoized function.</p>
<hr/>
<h2>Q4. What is Props Drilling Concept ?What is State Uplifting ?</h2>
<h3>A) Props Drilling</h3>
<p>It is the process by which you pass data from one component of the React Component tree to another by going through other components that do not need the data but only help in passing it around.It is a situation when the same data is passed to every level in a component due to the requirement at the final level.</p>
<h3>B) State Uplifting</h3>
<p>In react state uplifting means state is being shared by moving it up to the closest common ancestor of the component that need it.
<br/>When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.</p>
<hr/>
<h2>Q5. Difference between useEffect and useContext ?</h2>
<h3>A) UseEffect</h3>

<p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
<h3>B) Use Context</h3>
<p>React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

“useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”.
</p>
<hr/>
<h2>Q6. What are React Life cycles Explain each one with Example ?</h2>
<p>Every react components has a lifecycles of its own.Lifecycle methods we used to monitored our components in different stages of the components existence.</p>
<p>Lifecycles has four phases that are mentioned below as :-</p>
<p><strong>1. Initialization :</strong> In Initialization stage,the components is contructed wth the given props and default stage.This is done in the constructor of a components class.</p>
<p><strong>2. Mounting :</strong> Mounting is the stage of rendering the JSX returned by the render method itself.In this stage,componentDidMount() methods gets called.</p>
<p><strong>3. Updating :</strong> Updating is the stage where the state of the components is updated.In this stage,componentDidUpdate() method gets called.</p>
<p><strong>4. Unmounting :</strong> This is the final stage of the component lifecycle whre the component is removed from or destoryed from the browser page.In this stage componentWillUnmount() method gets called.</p>
  </div>
  );
}

export default App;
