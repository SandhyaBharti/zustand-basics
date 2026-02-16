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
import Products from "./components/products";
import Search from "./components/search";
import { useState } from "react";
const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div className='flex flex-col gap-12 w-full h-screen items-center py-10'>
      <Search setQuery={setQuery} />
      <Products filter={query} />
    </div>
  )
}
export default App;