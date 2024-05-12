import { ToastContainer } from "react-toastify";
import SocialLogin from "./SocialLogin";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";



const Register = () => {
    return (
        <div className="flex flex-col justify-around lg:flex-row mb-10 lg:p-10 p-2">
            <div>

            </div>
            <div>
                <h2 className="text-5xl font-bold text-center">Please Register</h2>
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" />
                    </div>
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
                            <input placeholder="password" name="password" className="w-full input input-bordered"/>
                            <FaEye className="my-auto -ml-8" />
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center">Already have an account? <Link to='/login'><span className="text-primary font-bold">Login</span></Link></p>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;