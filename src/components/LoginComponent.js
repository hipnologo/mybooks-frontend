import '../css/login.css';
import {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from "../context/AuthProvider";

import axios from '../api/axios';

const LOGIN_URL = '/auth';

const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({user, pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user, pwd, roles, accessToken});
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <div className="text-4xl font-bold mb-4 sm:mb-9 text-center"><h1>You are logged in!</h1></div>
                    <br/>
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <div className="flex w-full lg:w-full min-w-min sm:min-w-480 bg-white">
                        <div className="flex flex-col w-full items-center mx-0 sm:mx-5 mb-5 mt-4 sm:mt-11">
                            <div className="flex mb-0 sm:mb-5">

                            </div>

                            <div className="text-4xl font-bold mb-4 sm:mb-9 text-center">Welcome!</div>
                            <div id="login-content" className="flex flex-col w-full items-center"
                                 data-controller="login">
                                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                                   aria-live="assertive">{errMsg}</p>
                                <h1>Sign In</h1>
                                <form onSubmit={handleSubmit} className="w-300">
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        type="text"
                                        id="username"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        required
                                    />

                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                    />
                                    <div className="mb-4"/>
                                    <button
                                        className="rounded-xl text-base font-bold leading-3 h-9 px-5 cursor-pointer min-w-90 items-center w-full h-10 gradient-button gradient-text shadow-button hover:shadow-button-hover-sm focus:outline-none rounded-3xl disabled:opacity-50 disabled:cursor-not-allowed">
                                        Sign In
                                    </button>
                                </form>
                                <p>
                                    <div className="w-full text-center ">
                                        Need an Account?<br/>
                                    </div>
                                    <span className="line">
                            {/*put router link here*/}
                                        <a href="/register"
                                           className="rounded-small text-base text-gray-900 no-underline hover:underline disabled:opacity-50 disabled:cursor-not-allowed flex">
                                Register</a>
                        </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Login