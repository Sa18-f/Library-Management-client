import { FaEye } from "react-icons/fa";
import SocialLogin from "../SocialLogin";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";



const Login = () => {
    return (
        <div className="flex flex-col justify-around lg:flex-row mb-10 lg:p-10 p-2">
            <div>
                <img src="https://i.ibb.co/kcWKynT/login-concept-illustration-114360-739.jpg" alt="" />
            </div>
            <div className="lg:w-[450px]">
                <h2 className="text-5xl font-bold text-center">Please Login</h2>
                <form className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="join">
                            <input placeholder="password" name="password" className="w-full input input-bordered" required />
                            <FaEye className="my-auto -ml-8" />
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent">Login</button>
                    </div>
                </form>
                <p className="text-center">Do not have an account? <Link to='/register'><span className="text-primary font-bold">Register</span></Link></p>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;