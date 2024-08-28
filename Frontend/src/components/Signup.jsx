import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // This will log form data to the console
        // You might want to add functionality to close the dialog here if needed
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-2xl font-bold text-pink-500 text-center mb-6">Signup</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your fullname"
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                            {...register("name", { required: "Fullname is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        Signup
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600">
                    Already have an account?
                    <Link to="/" className="text-blue-500 underline hover:text-blue-600"> Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Signup
