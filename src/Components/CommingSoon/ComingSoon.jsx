/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ComingSoon = ({ title, description }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const targetDate="2024-12-31T23:59:59"

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = new Date(targetDate) - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-500 text-white">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{title || "Coming Soon"}</h1>
                <p className="text-lg md:text-xl mb-6">
                    {description || "We are working hard to bring this page to life. Stay tuned!"}
                </p>

                {/* Countdown Timer with Stylish Design */}
                <div className="flex justify-center items-center space-x-4 mb-6">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="text-center">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-purple-600 flex items-center justify-center shadow-lg text-2xl md:text-3xl font-bold">
                                {value}
                            </div>
                            <p className="mt-2 text-sm md:text-base font-medium capitalize">{unit}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-white animate-pulse"></div>
                    <div className="w-8 h-8 rounded-full bg-white animate-pulse delay-200"></div>
                    <div className="w-8 h-8 rounded-full bg-white animate-pulse delay-400"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default ComingSoon;
