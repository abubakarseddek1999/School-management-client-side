import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import login from "../../assets/image/login-img.png"
import "./login.css"
import Swal from "sweetalert2";

const Login = () => {
    const { signIn, signInWithGoogle } = UseAuth()
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                                </label>
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