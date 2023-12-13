import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Whatsapp from '../assets/coworking-remote-work-1.gif';
import showPwdImg from '../assets/Show-password.svg';
import hidePwdImg from '../assets/Hide-password.svg';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ username: "", password: "" });
    const [passwordMode, setPasswordMode] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch(
                `https://petals.ath.cx/test/login.jsp?username=${username}&password=${password}`
            );
            const data = await response.json();

            if (data.ok) {
                // Successful login, navigate to the successful login page
                navigate("/success");
            } else {
                setErrors(data.error);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <section className="md:h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-20 items-center md:mx-0 md:my-0 bg-gradient-to-br from-blue-500 to-indigo-600">
            <div className="md:w-1/3 max-w-lg">
                <img
                    src={Whatsapp}
                    alt="Sample image"
                />
            </div>
            <div className="md:w-2/3 max-w-sm flex justify-center items-center">
                <div className="w-full max-w-sm bg-white shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-600">
                        Welcome Back!
                    </h1>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? "border-red-500" : ""
                                }`}
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setErrors({ ...errors, username: "" });
                            }}
                        />
                        {errors.username && (
                            <p className="text-red-500 text-xs italic mt-1">
                                {errors.username}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500" : ""
                                    }`}
                                id="password"
                                placeholder="********"
                                type={passwordMode ? "text" : "password"}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrors({ ...errors, password: "" });
                                }}
                            />
                            <img
                                className=" absolute cursor-pointer right-5 top-2 w-5 "
                                title={passwordMode ? "Hide password" : "Show password"}
                                src={passwordMode ? showPwdImg : hidePwdImg}
                                onClick={() => setPasswordMode(prevState => !prevState)}
                                alt='password gif'
                            />
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs italic mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    <div className="mb-6 text-red-500">
                        {errors.error && <p>{errors.error}</p>}
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                    </div>
                    <p className="text-center mt-4 text gray-500 text-xs">
                        Don't have an account?{" "}
                        <Link to={"/signup"} className="text-indigo-500">
                            SIGN UP
                        </Link>
                    </p>
                    <p className="text-center text-gray-500 text-xs mt-4">
                        &copy;2023 Redlitmus. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;