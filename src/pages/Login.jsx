import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router";

const Login = () => {
    const { login, errormsg } = useContext(UserContext);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    
    const submit = (data) => {

        login(data);
        reset();

        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-[350px]">

                {/* Login Card */}
                <div className="bg-white border border-gray-300 px-10 py-8">

                    {/* Instagram Logo */}
                    <h1 className="text-center text-4xl font-bold tracking-tight mb-8">
                        Instagram
                    </h1>

                    <form
                        onSubmit={handleSubmit(submit)}
                        className="flex flex-col gap-2"
                    >
                        <input
                            type="email"
                            placeholder="Phone number, username, or email"
                            {...register("email")}
                            className="w-full px-3 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-sm outline-none focus:border-gray-500"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                            className="w-full px-3 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-sm outline-none focus:border-gray-500"
                        />

                        <button
                            type="submit"
                            className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-2 rounded-lg transition"
                        >
                            Log in
                        </button>
                    <h1 className="text-md text-red-500">{errormsg}</h1>

                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="h-px bg-gray-300 flex-1"></div>

                        <span className="text-xs font-semibold text-gray-500">
                            OR
                        </span>

                        <div className="h-px bg-gray-300 flex-1"></div>
                    </div>

                    {/* Facebook Login */}
                    <button className="w-full text-sm font-semibold text-blue-900">
                        Log in with Facebook
                    </button>

                    {/* Forgot Password */}
                    <p className="text-center text-xs text-blue-900 mt-5 cursor-pointer">
                        Forgot password?
                    </p>
                </div>

                {/* Signup Card */}
                <div className="bg-white border border-gray-300 mt-3 py-5 text-center">
                    <span className="text-sm">
                        Don't have an account?{" "}
                    </span>

                    <button className="text-blue-500 font-semibold text-sm">
                        Sign up
                    </button>
                </div>

                {/* Get App */}
                <p className="text-center text-sm mt-5">
                    Get the app.
                </p>

            </div>
        </div>
    );
};

export default Login;