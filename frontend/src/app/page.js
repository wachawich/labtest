"use client"

import { useState } from "react";
import AlertModel from "./components/AlertModel";

import Link from "next/link";

export default function Home() {

  const [model, setModel] = useState(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState();


  const [formData, setFormData] = useState({
    UserName: '',
    DisplayName: '',
    Following: 0,
    Follower: 0,
    Likes: 0,
    Description: '',
    Contact: '',
  });

  const fetchUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://127.0.0.1:5000/getUserByName/${name}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data.Detail);
        setFormData({
          UserName: data.UserName,
          DisplayName: data.DisplayName,
          Following: data.Detail.Following,
          Follower:  data.Detail.Follower,
          Likes:  data.Detail.Likes,
          Description:  data.Detail.Description,
          Contact:  data.Detail.Contact,
        });
      } else {
        console.error('Failed to fetch images');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };


  return (
    <div className="noto-thai w-full h-full flex justify-center items-center">
      <div className="w-50 h-4/6 flex flex-col justify-center items-center sm:w-11/12 md:w-6/12">
        <h1 className="text-3xl font-bold mb-3">LAB TEST 2</h1>
        <div className="btnBox flex flex-col justify-around items-center w-full h-28 text-white">
          <button className="px-5 py-2 bg-blue-500 rounded-md w-full" onClick={() => OpenModal()}>Alert</button>
          <Link href="/InputForm" className="w-full"><button className="px-5 py-2 bg-blue-500 rounded-md w-full">From Page 7</button></Link>
        </div>
        <form onSubmit={fetchUser} className="flex w-full items-center mt-10">
          <input type="text"
            placeholder="Input Your Name"
            className="w-full border-2 rounded-md p-2 text-xl"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <button
            type="submit"
            className="bg-green-500 px-5 py-3 rounded-md text-white ml-3"
          >
            Send
          </button>

        </form>
        {formData && <p className="text-black mt-10">
          <div className="">UserName : {formData.UserName}</div>
          <div className="">DisplayName : {formData.DisplayName}</div>
          <div className="">Following : {formData.Following}</div>
          <div className="">Follower : {formData.Follower}</div>
          <div className="">Likes : {formData.Likes}</div>
          <div className="">Description : {formData.Description}</div>
          <div className="">Contact : {formData.Contact}</div>
  
        </p>}
      </div>
      {model === 1 && (
        <AlertModel
          model={model}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}
