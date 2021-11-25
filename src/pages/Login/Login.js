import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signInUser, success} = useAuth()
    const onSubmit = data => {
        signInUser(data);
    };
    const {signInGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    const handleGoogleSignIn = () => {
        signInGoogle()
        .then( result => {
          history.push(location.state.from || '/home')
        })
        .catch( error => {
            console.log(error);
        })
    }

    return (
        <div className="container mx-auto">
            <div style={{height:'530px'}} className="flex flex-col items-center justify-center border-2 p-4 w-2/4 mx-auto bg-gray-100">
                <div>
                    <img className=' w-72' src={logo} alt="" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold my-4">Sign-In Now</h2>
                </div>
                <h2 className="text-xl my-2 text-green-700">{success}</h2>
                <form className="space-y-3 w-3/5" onSubmit={handleSubmit(onSubmit)}>
                   <div>
                        <label className="text-lg mb-2" htmlFor="email">Email</label>
                        <br />
                        <input type='text' className="input-style" {...register("email", { required: true })} />
                        {errors.email && <span className=" text-red-600">This field is required</span>}
                   </div>

                  <div>
                      <label htmlFor="password">Password</label>
                      <br />
                   <input type='password' className="input-style" {...register("password", { required: true })} />
                    {errors.password && <span className=" text-red-600">This field is required</span>}
                  </div>
                  
                    <input className="w-full px-3 py-2 text-lg bg-green-600 text-white font-semibold cursor-pointer" type="submit" value='Sign In' />
                </form>
                <p className='my-2 text-lg'>No Account? <Link className='text-indigo-600' to='/sign-up'>Sign-Up</Link></p>
                <p className='my-4 text-lg'>Or</p>
                <button onClick={handleGoogleSignIn} className='border border-green-600 text-2xl font-semibold rounded-md px-3 py-2 w-2/4'>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;