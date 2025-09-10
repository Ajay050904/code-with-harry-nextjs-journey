// "use client";
// import { useEffect, useState } from "react";

import fs from "fs/promises"

export default function Home() {

  // const [count, setCount] = useState(0);
  // console.log("Hey I am ajay") // by default ye server SIDE  pe render hota h if we use "use client {At ToP} then its shows on clien server(user scrren cosnsole)"
  
  let a = fs.readFile(".gitignore")
  a.then(e => { console.log(e.toString()) })
 
  return (
    < div >
      I am a component
      {/* {count} */}
      {/* <button onClick={() => setCount(count + 1)}> Click me</button> */}
    </div >
  );
}
