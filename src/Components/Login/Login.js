import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
// import useToken from '../../Hook/useToken';
import Loading from '../Loading/Loading';

const Login = () => {




    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    // const { register, formState: { errors }, handleSubmit } = useForm();
    // // const [token] = useToken(user || gUser)

    // const navigate = useNavigate()
    // const location = useLocation();
    // let signInError;


    // const from = location.state?.from?.pathname || "/";



    // useEffect(() => {
    //     if (token) {
    //         toast.success('Successfully Login');
    //         navigate(from, { replace: true });
    //     }
    // }, [token])

    // if (user || gUser) {
    //     toast.success('Successfully Login');
    //     navigate(from, { replace: true });
    // }

    // if (gLoading || loading) {
    //     return <Loading></Loading>
    // }


    // if (gError || error) {
    //     signInError = <p className=' text-red-500 text-xs'>{error?.message || gError?.message}</p>
    // }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };





    return (
        <div className='flex justify-center items-center h-screen px-4'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^(.+)@(.+)$/,
                                        message: 'Provied a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>
                                }
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>
                                }
                            </label>
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
                                }
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
                                }
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs' type="submit" value='Login' />

                        {signInError}

                    </form>


                    <p className=' text-sm text-center'>New to Doctors Portal? <Link to='/signUp' className=' text-primary'>Create New Account</Link></p>


                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Contineu with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;