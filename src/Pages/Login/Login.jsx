import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { AiFillEye, AiFillEyeInvisible, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import login from "../../assets/image/login-img.png"
import "./login.css"
import Swal from "sweetalert2";
import { useState } from "react";

const Login = () => {
    const { signIn, signInWithGoogle } = UseAuth()
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(location?.state ? location.state : '/');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "login Success",
                    showConfirmButton: false,
                    timer: 1500
                });


            })
            .catch(error => console.log(error))

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "login Success",
                    showConfirmButton: false,
                    timer: 1500
                });


            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 pt-16">
            <div className="flex flex-col md:flex-row justify-center items-center h-full w-full">
                <div className=" w-full md:w-1/2 h-full">
                    <img className="m-2" src={login} alt="login" />
                </div>


                <div className="card p-1 m-5 rounded-2xl  w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100 h-full flex flex-col justify-center">

                    <form onSubmit={handleLogin} className="w-full py-10 p-5 z-10 bg-white rounded-xl">
                        <h2 className="text-2xl font-bold text-center uppercase mb-5">Welcome Back </h2>
                        <div className="form-control mb-1">
                            <label className="label">
                                <label className="block text-gray-700 font-bold" htmlFor="email">Email</label>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:black focus:border-white transition duration-150 ease-in-out focus:shadow-[3px_3px_10px_rgba(0,0,0,1),-1px_-1px_6px_rgba(255,255,255,0.4),inset_3px_3px_10px_rgba(0,0,0,1),inset_-1px_-1px_6px_rgba(255,255,255,0.4)]"
                                required
                            />
                        </div>


                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="block text-gray-700 font-bold">Confirm Password</span>
                            </label>

                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="Your password" className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:black focus:border-white transition duration-150 ease-in-out focus:shadow-[3px_3px_10px_rgba(0,0,0,1),-1px_-1px_6px_rgba(255,255,255,0.4),inset_3px_3px_10px_rgba(0,0,0,1),inset_-1px_-1px_6px_rgba(255,255,255,0.4)]" required />

                                <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>
                                    }
                                </span>
                            </div>



                        </div>

                        <div className="form-control mt-2 m-1">
                            <input className="p-2 rounded-md bg-[#3734ff] hover:bg-[#161551] transition text-xl font-bold mb-2 text-white shadow-xl" type="submit" value="Sign In" />
                        </div>

                        <div className="text-center">
                            <p>Or Sign In with</p>
                            <div className="flex justify-center gap-4 mt-2">
                                <Link className="btn loginbtn"><AiFillFacebook className="text-2xl" /></Link>
                                <Link className="btn loginbtn" onClick={handleGoogleSignIn}><FcGoogle className="text-2xl" /></Link>
                                <Link className="btn loginbtn"><AiFillInstagram className="text-2xl" /></Link>
                            </div>
                            <div className="mt-3">
                                <p>New to Car Doctors? <Link to="/signup" className="text-orange-500 font-bold">Sign up</Link></p>
                            </div>
                        </div>
                    </form>
                    {/* Blob animation in the background */}
                    <div className="blob"></div>
                </div>

            </div>
        </div>


    );
};

export default Login;