import React from 'react';

const Blog = () => {
    return (
        <div className='text-center my-10'>
        <h2 className='text-fuchsia-600 text-5xl font-bold mb-10'>Learn More About React</h2>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium text-fuchsia-500">
               When Should we use Context Api?
            </div>
            <div className="collapse-content"> 
            <p><span className='font-bold'>ContextApi: </span> The Context API in React is primarily used for sharing data or state between multiple components, without the need for prop drilling or passing the data through multiple levels of component hierarchy.</p>
            <p>Here are some examples: </p>
            <li>
            When you have a large application with many components and you want to avoid prop drilling, which can make your code more complex and harder to maintain.
            </li>
            <li>When you have data that needs to be shared between many components that are not directly related, such as data related to user authentication, user preferences, or app settings.</li>
            <li>When you want to create a reusable component or set of components that can be used across your application, and you want to provide a simple and consistent way for those components to access data or state.</li>
            </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium text-fuchsia-500">
            What is Custom Hook?
            </div>
            <div className="collapse-content"> 
                <p>
                A custom hook in React is a reusable function that encapsulates some logic and state, allowing you to reuse that logic across multiple components in your application. Custom hooks are a way to abstract away complex logic from your components, making them more readable, reusable, and easier to maintain. <br /> <br />

Custom hooks are created by extracting common logic and state from multiple components and putting it into a separate function. This function can then be called from any component that needs that logic and state. <br /> 

Custom hooks follow a naming convention of starting with the word "use" (e.g. useCustomHook). This naming convention is important because it lets React know that the function is a custom hook, and it allows React to enforce the rules of hooks, which ensure that hooks are only used in certain places in your component. <br />
                </p>
            </div>
            </div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium text-fuchsia-500">
                How does useRef() works?
            </div>
            <p>
            useRef() is a built-in hook in React that allows you to create a mutable object that persists across renders. It provides a way to access a DOM element or some other value that may change over time, without triggering a re-render of your component. <br /><br />

When you call useRef(), it returns a single mutable reference object. You can then assign any value to this reference object by accessing its .current property. The .current property is where the mutable value is stored.
    
            </p>
            </div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium text-fuchsia-500">
                How does useMemo() work?
            </div>
            <div className="collapse-content"> 
                <p>useMemo() is a built-in hook in React that allows you to memoize expensive computations so that they only need to be re-calculated when their inputs change. It takes two arguments: a function that computes a value, and an array of dependencies that the function relies on. <br /> <br />

When you call useMemo(), React will execute the function that you pass to it and store the result. On subsequent renders, React will check if the dependencies have changed. If the dependencies have not changed, React will return the cached value from the previous render without re-executing the function. If the dependencies have changed, React will re-execute the function to calculate a new value.</p>
            </div>
            </div>

            
    </div>
    );
};

export default Blog;