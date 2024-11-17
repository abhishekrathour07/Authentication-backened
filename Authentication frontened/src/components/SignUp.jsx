
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { yupResolver } from '@hookform/resolvers/yup';  // Ensure yupResolver is imported
import { SignUpSchema } from './validation/SignUp.validation';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: '',
    },
    resolver: yupResolver(SignUpSchema),
  })
  const onsubmit = async (data) => {
    try {
      const url = "http://localhost:3001/auth/signup"
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const result = await response.json();
      const { success, message } = result

      if (success) {
        console.log(message);
        toast.success(message);
        navigate('/login')
      }
      else {
        toast.error(message)
        form.reset()
      }
    } catch (error) {
      toast(err)
      form.reset()
    }
  }
  return (
    <div className="h-[92vh] bg-cover bg-center bg-[url('/img/bgImg.gif')] flex flex-col items-center justify-center">
      <div className=" bg-white p-12 rounded-xl h-auto flex flex-col gap-4 lg:w-1/3 md:w-1/2 sm:w-[75%]">
        <Form {...form} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
          <div className='flex flex-col '>
            <h2 className='text-2xl font-extrabold'>Hello new user !</h2>
            <p className='text-gray-700'>Enter your name, email and password</p>
          </div>
          {/* Name Field */}
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">
                  <p className='text-lg'>Name <span className="text-red-600">*</span></p>
                </FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-gray-700"
                    placeholder="Enter your name"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600 mt-1 " />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold">
                  <p className='text-lg'>Email <span className="text-red-600">*</span></p>

                </FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring focus:ring-gray-700"
                    placeholder="Enter your email"
                    type="email"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600 mt-1 " />
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
                  <p className='text-lg'>Password <span className="text-red-600">*</span></p>
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
        </Form>
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-4 rounded-lg mt-4 hover:bg-gray-800 focus:outline-none  "
          onClick={form.handleSubmit(onsubmit)} >
          Signup
        </button>
        <p className='text-center'>Already have account? <span className='text-blue-700 hover:text-red-600 cursor-pointer'
          onClick={() => navigate('/login')}>Login here</span></p>
      </div>
    </div>
  );
}

export default SignUp
