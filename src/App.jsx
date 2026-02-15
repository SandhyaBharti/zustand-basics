// import React from 'react'
// import { useCount, usePosts, useUser } from "./store"
// import { useState } from 'react';


// export const App = () => {
//   const { count, increment, decrement, reset, isEven } = useCount();
//   const { posts, createPost } = usePosts();
//   const { user, loading, fetchUser } = useUser();

//   const [even, setEven] = useState(isEven());

//   const handleCheck = () => {
//     const even = isEven();
//     setEven(even);
//   };

//   return (
//     <div>
//       <h1>App</h1>
//       <div>{user.name}</div>
//       <div>
//         <h2>{count}</h2>
//         {even ? <p>Even</p> : <p>Odd</p>}
//         <button onClick={() => increment(2)}>Increment</button>
//         <button onClick={() => decrement(1)}>Decrement</button>
//         <button onClick={reset}>Reset</button>
//         <button onClick={handleCheck}>Check Even count</button>
//       </div>
//       <div>
//         <h2>Posts</h2> 
//         {/* //all posts render */}
//         {posts[0]?.title}
//       </div>
//       <button onClick={() => createPost("Post1", "Desc1")}>Create Post</button>
//     </div>
//   )
// }

// export default App

// Search
import Search from "./components/search";
const App = () => {
  return (
    <div className='flex w-full h-screen justify-center items-start m-10'>
      <Search />
    </div>
  )
}
export default App;