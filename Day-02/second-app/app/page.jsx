import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    < div >
      I am a component {count}
    </div >
  );
}
