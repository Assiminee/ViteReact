import React from 'react';

export const LoginForm = () => {
    return (
        <div id="loginDiv">
            <h1>Login to Account</h1>
            <p className="text-sm">Please enter your email and password to continue</p>
            <form className="mt-8 w-full" action="/admin/dashboard">
                <div className="mb-5">
                    <label htmlFor="email" className="formInputLabel">Email address:</label>
                    <input type="email" id="email" className="formInput" placeholder="name@example.com" required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="formInputLabel">Password:</label>
                    <input type="password" id="password" placeholder="**********" className="formInput" required/>
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox"/>
                    </div>
                    <label htmlFor="remember" id="checkBoxLabel">Remember me</label>
                </div>
                <div className="flex flex-col items-center justify-center mt-8">
                    <button type="submit" id="signInBtn">Sign In</button>
                    <p className="text-sm">Don&apos;t have an account?&nbsp;
                        <a className="underline text-[#278af5]" href="https://www.google.com/">
                            Create account
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}


