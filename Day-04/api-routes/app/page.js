"use client"
import Image from "next/image";
export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Shubham",
      role: "Coder"
    }
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)
  }

  const handleDelete = async () => {
    let data = {
      name: "Shubham", // Example: delete this user
    };
    let a = await fetch("/api/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log("Delete response:", res);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js API Routes Demo</h1>
      <button
        onClick={handleClick}
        className="px-3 py-1 bg-green-500 text-white rounded m-2"
      >
        Add User
      </button>
      <button
        onClick={handleDelete}
        className="px-3 py-1 bg-red-500 text-white rounded m-2"
      >
        Delete User
      </button>
    </div>
  );
}
