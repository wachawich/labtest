"use client"

import { useState } from "react";

import { useRouter } from 'next/navigation';

export default function InputForm() {

    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [formData, setFormData] = useState({
        UserName: '',
        DisplayName: '',
        Following: 0,
        Follower: 0,
        Likes: 0,
        Description: '',
        Contact: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.UserName || !formData.DisplayName || !formData.Following || !formData.Follower || !formData.Likes) {
            setErrorMessage("Please fill in all fields.");
            return;
        }

        setErrorMessage("");
        setSuccessMessage("Loading...");

        const res = await fetch('http://127.0.0.1:5000/addUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        // const data = await res.json();
        setSuccessMessage("Add User Successfully!");
        setTimeout(() => {
          router.push('/');
        }, 1200);
        console.log(formData);
    };


    return (
        <div className="noto-thai w-full h-full flex justify-center items-center">
            <div className="w-50 h-4/6 flex flex-col justify-center items-center sm:w-11/12 md:w-8/12">
                <h1 className="text-3xl font-bold mb-1">Input Details of your Account</h1>
                <form onSubmit={handleSubmit} className="flex flex-col w-full items-start mt-5">
                    <label className='block mt-2 text-sm font-semibold relative'>Username<span className='text-red-500'>*</span> </label>
                    <input type="text"
                        placeholder="Input Your Name"
                        className="w-full border-2 rounded-md p-2 text-sm mb-3"
                        onChange={handleChange}
                        name="UserName"
                        required
                    />
                    <label className='block mt-2 text-sm font-semibold relative'>Display Name<span className='text-red-500'>*</span> </label>
                    <input type="text"
                        placeholder="Input Your Display Name"
                        className="w-full border-2 rounded-md p-2 text-sm mb-3"
                        onChange={handleChange}
                        name="DisplayName"
                        required
                    />
                    <label className='block mt-2 text-sm font-semibold relative'>Following<span className='text-red-500'>*</span> </label>
                    <input type="number"
                        placeholder="Input Your Following"
                        className="w-full border-2 rounded-md p-2 text-sm mb-3"
                        onChange={handleChange}
                        name="Following"
                        required
                    />
                    <label className='block mt-2 text-sm font-semibold relative'>Follower<span className='text-red-500'>*</span> </label>
                    <input type="number"
                        placeholder="Input Your Follower"
                        className="w-full border-2 rounded-md p-2 text-sm mb-3"
                        onChange={handleChange}
                        name="Follower"
                        required
                    />
                    <label className='block mt-2 text-sm font-semibold relative'>Likes<span className='text-red-500'>*</span> </label>
                    <input type="number"
                        placeholder="Input Your Likes"
                        className="w-full border-2 rounded-md p-2 text-sm mb-3"
                        onChange={handleChange}
                        name="Likes"
                        required
                    />
                    <label className='block mt-2 text-sm font-semibold relative'>Description<span className='text-red-500'>*</span> </label>
                    <input type="text"
                        placeholder="Input Your Description"
                        className="w-full border-2 rounded-md p-2 text-sm mb-3"
                        onChange={handleChange}
                        name="Description"
                        required
                    />
                    <label className='block mt-2 text-sm font-semibold relative'>Contact<span className='text-red-500'>*</span> </label>
                    <input type="text"
                        placeholder="Input Your Contact"
                        className="w-full border-2 rounded-md p-2 text-sm mb-3"
                        onChange={handleChange}
                        name="Contact"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-green-500 px-5 py-3 rounded-md text-white w-full mt-10"
                    >
                        Send
                    </button>

                </form>

                {successMessage && <p className="text-green-500">{successMessage}</p>}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
        </div>
    );
}
