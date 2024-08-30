import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios, { toFormData } from "axios";
import toast from "react-hot-toast";
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit =async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                  toast.success("Logged in Successfully");
                  document.getElementById('my_modal_3').close();
                  setTimeout(()=>
                  { 
                    window.location.reload();
                    localStorage.setItem("Users",JSON.stringify(res.data.user));
                  },1000 )

                }
           
            }).catch((error) => {
                if(error.response)
                {
                    toast.error("Error :" + error.response.data.message);
                    setTimeout(()=>  {},2000);
                }
            });
    };

    return (
        <div>
            <dialog id="my_modal_3" className="  modal flex items-center justify-center">
                <div className="dark:bg-slate-700 dark:text-white modal-box flex flex-col items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
                        <h3 className="font-bold text-lg text-pink-500 text-center">Login</h3>
                        <div className="mt-4 space-y-2 w-full">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-1 border rounded-md outline-none"
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
                        <div className="mt-4 space-y-2 w-full">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <button
                                type="submit"
                                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                            >
                                Login
                            </button>
                            <p className='mt-2'>
                                Not Registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
