
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/image/login-img.png"
import { AiFillEye, AiFillEyeInvisible, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../Hooks/UseAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
    const { signInWithGoogle, createUser } = UseAuth()
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const HandleCreatUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const accepted = form.terms.checked;
        console.log(email, password);

        // reset eroor 
        setRegisterError('')
       



        if (password.length < 6) {
            setRegisterError('password should be at 6 characters or long')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('your password should have at least one upper case character ')
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setRegisterError('your password should have at least one special character ')
            return;
        }
        else if (!accepted) {
            setRegisterError('please accept our terms and condition !')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createInUser = result.user;
                console.log(createInUser);
                navigate(location?.state ? location.state : '/');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Create account Success",
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
                    title: "Create account Success",
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

                    <form onSubmit={HandleCreatUser} className="w-full py-2 p-5 z-10 bg-white rounded-xl">
                        <h2 className="text-2xl font-bold text-center uppercase mb-2">Welcome </h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="name" placeholder="Your name" name="name" className="input input-bordered" required />
                        </div>
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



                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="Your password" className="input input-bordered w-full" required />

                                <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>
                                    }
                                </span>
                            </div>
                            {
                                registerError && <p className="text-red-300 font-bold">{registerError}</p>
                            }


                        </div>
                        <div className="mt-2 mb-4">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-2 mb-4" htmlFor="terms"> Accept our  <a href="#"> terms and Conditions</a></label>
                        </div>

                        <div className="form-control mt-2 ">
                            <input className="p-2 cursor-pointer rounded-md bg-[#3734ff] hover:bg-[#161551] transition text-xl font-bold mb-2 text-white shadow-xl" type="submit" value="Sign Up" />
                        </div>

                        <div className="text-center">
                            <p>Or Sign In with</p>
                            <div className="flex justify-center gap-4 mt-2">
                                <Link className="btn loginbtn"><AiFillFacebook className="text-2xl" /></Link>
                                <Link className="btn loginbtn" onClick={handleGoogleSignIn}><FcGoogle className="text-2xl" /></Link>
                                <Link className="btn loginbtn"><AiFillInstagram className="text-2xl" /></Link>
                            </div>
                            <div className="mt-3">
                                <p>Have an account? <Link to="/login" className="text-orange-500 font-bold">Sign In</Link></p>
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

export default SignUp;