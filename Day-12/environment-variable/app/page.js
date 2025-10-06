import Image from "next/image";

export default function Home() {
  console.log("The id is : ", process.env.ID);
  console.log("The secret is : ", process.env.SECRET);
  
  return (
    <div>HEY! This is home. The id is : {process.env.ID} and The secret is : { process.env.SECRET}</div>
  );
}
