//  "use client"
import Image from "next/image";

export default function Home() {
  // console.log("The id is : ", process.env.ID);
  // console.log("The secret is : ", process.env.SECRET);
  
  return (
    // <div>HEY! This is home. The id is : {process.env.ID} and The secret is : { process.env.SECRET}</div>
    <div>HEY! This is home. The id is : {process.env.NEXT_PUBLIC_ID} and The secret is : { process.env.NEXT_PUBLIC_SECRET} and name is {process.env.NAME}</div>
  );
}

// procees.env -> server pe dono load hote h and accesable bhi h

// usecleint krne per ab process.env ab client ki h n ki server ki and access nhi kr payega
