import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Eye, EyeOff } from "lucide-react";
import api from "../../../api";
import { toast } from "react-hot-toast";


export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate= useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            // console.log(api.defaults.baseURL);
            console.log("Form data before submission:", formData); // Debugging line
            const response = await api.post('/login', formData,{withCredentials:true});
            setMessage("Login successful!");
            console.log("Server response:", response.data);
            navigate("/dashboard",{response});
            toast.success("Logged In"); // Redirect to admin dashboard or another page
        } catch (error) {
            console.error("Login failed:", error);
            setMessage("Login failed. Please check your credentials.");
            toast.error("Login failed check your credentials.",{style:{marginTop:"50px",zIndex:1000}});
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center ">
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6 relative">
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-10 text-gray-600"
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {message && (
                    <div className="mt-4 text-center text-md text-blue-900">{message}</div>
                )}
            </div>
        </div>
    );
}
