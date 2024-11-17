import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useNavigate } from 'react-router-dom';
import { LoginSchema } from './validation/Login.validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'sonner';

const Login = () => {

    const navigate = useNavigate()
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(LoginSchema),
    });
    const onsubmit = async (data) => {
        console.log(data);
        try {
            const url = "http://localhost:3001/auth/login"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "content-Type": 'application/json',
                },
                body: JSON.stringify(data)
            })
            const result = await response.json();
            const { success, message, name, jwtToken } = result;

            if (success) {
                toast.success(message)
                localStorage.setItem("name", name); 
                localStorage.setItem("jwtToken", jwtToken); 
                navigate('/home')
            }
        } catch (err) {
            toast.error("Something went wrong", err)
        }
    }
    return (
        <div className="h-[92vh] bg-cover bg-center bg-[url('/img/bgImg.gif')] flex flex-col items-center justify-center">
            <Form {...form} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
                <div className=" bg-white p-12 rounded-xl h-auto flex flex-col gap-2 lg:w-1/3 md:w-1/2 sm:w-[75%]">

                    <div className='flex flex-col gap-1'>
                        <h2 className='text-2xl font-extrabold'>Welcome Back !</h2>
                        <p className='text-gray-700'>Enter your email and password</p>
                    </div>
                    {/* Email Field */}
                    <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-semibold">
                                    Email <span className="text-red-600">*</span>
                                </FormLabel>
                                <FormControl>
                                    <input
                                        {...field}
                                        className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-gray-700"
                                        placeholder="Enter your email"
                                        type="email"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs text-red-600 mt-1" />
                            </FormItem>
                        )}
                    />

                    {/* Password Field */}
                    <FormField
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm font-semibold">
                                    Password <span className="text-red-600">*</span>
                                </FormLabel>
                                <FormControl>
                                    <input
                                        {...field}
                                        className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-gray-700"
                                        placeholder="Enter your password"
                                        type="password"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs text-red-600 mt-1" />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-900 text-white py-2 rounded-lg mt-4 hover:bg-gray-800 focus:outline-none "
                        onClick={form.handleSubmit(onsubmit)} >
                        Login
                    </button>
                    <p className='text-center'>
                        Don't have an account?{' '}
                        <span
                            className='text-blue-700 hover:text-red-600 cursor-pointer'
                            onClick={() => navigate('/signup')}>Signup here
                        </span>
                    </p>

                </div>
            </Form>
        </div>
    );
};

export default Login;
