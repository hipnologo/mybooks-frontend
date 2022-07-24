import '../css/login.css';
import React from "react";

const SignUp = () => {

    return (

        <div className="flex w-full relative min-h-(screen-16)">
            <div className="flex w-full lg:w-full min-w-min sm:min-w-480 bg-white min-h-(screen-16)">
                <div className="flex flex-col w-full items-center mx-0 sm:mx-5 mb-5 mt-4 sm:mt-11">
                    <div className="flex mb-0 sm:mb-5">

                    </div>

                    <div className="text-4xl font-bold mb-4 sm:mb-9 text-center">Welcome!</div>

                    <div id="login-content" className="flex flex-col w-full items-center" data-controller="login">
                        <div className="flex flex-col w-full items-center "
                             data-login-target="nonSaml"
                             data-test-non-saml="">

                            <div className="pb-6 font-semibold">
                                Setup your profile
                            </div>

                            <form id="login-form" className="w-300"
                                  action="https://auth.facmidia.com/login?param="
                                  accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;"
                                                                              autocomplete="off"/><input type="hidden"
                                                                                                         name="authenticity_token"
                                                                                                         value="MxMcGbzA6BEdKrdLJsc/Jmoa3ojPB4CpT1n5KyFBnLDHAfMSSssCkjB3OlebPI6Zd9jEm43BbGgjHTXHSIiz2A=="
                                                                                                         autocomplete="off"/>

                                <div data-controller="form-errors"
                                     className=" ">

                                    <div className="mb-4">

                                        <label
                                            className="block font-semibold text-lg text-gray-900 mb-1 block form-builder-element">Username</label>

                                        <div className="input-form ">
                                            <input autocomplete="username" autocorrect="off" autocapitalize="none"
                                                   required="required" placeholder="Username"
                                                   className="form-input w-full error:border-red-500 base-error:border-red-500 form-builder-element rounded border-gray-400"
                                                   type="text" name="user[username]"/>

                                            <div
                                                className="hidden error:block relative max-w-full rounded mt-2 self-start mr-2"
                                                data-form-errors-target="" data-form-reset-target="inlineMessage">
                                                <div className="flex items-center">


                                                    <div className="form-error text-red-500 max-w-full leading-4">
                                                        Something went wrong
                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                    </div>

                                    <div className="mb-4">

                                        <label
                                            className="block font-semibold text-lg text-gray-900 mb-1 block form-builder-element">E-mail</label>

                                        <div className="input-form ">
                                            <input autoComplete="email" autoCorrect="off" autoCapitalize="none"
                                                   required="required" placeholder="Email"
                                                   className="form-input w-full error:border-red-500 base-error:border-red-500 form-builder-element rounded border-gray-400"
                                                   type="text" name="user[email]"/>

                                            <div
                                                className="hidden error:block relative max-w-full rounded mt-2 self-start mr-2"
                                                data-form-errors-target="" data-form-reset-target="inlineMessage">
                                                <div className="flex items-center">


                                                    <div className="form-error text-red-500 max-w-full leading-4">
                                                        Something went wrong
                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                    </div>

                                    <div className="mb-0">

                                        <label
                                            className="block font-semibold text-lg text-gray-900 mb-1 block form-builder-element">Password</label>

                                        <div className="input-form ">
                                            <input autocomplete="current-password" required="required"
                                                   placeholder="Password"
                                                   className="form-input w-full error:border-red-500 base-error:border-red-500 form-builder-element rounded border-gray-400"
                                                   type="password" name="user[password]"/>

                                            <div
                                                className="hidden error:block relative max-w-full rounded mt-2 self-start mr-2"
                                                data-form-errors-target="" data-form-reset-target="inlineMessage">
                                                <div className="flex items-center">


                                                    <div className="form-error text-red-500 max-w-full leading-4">
                                                        Something went wrong
                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                    </div>
                                    <div className="mb-4">

                                        <div
                                            className="hidden base-error:block relative max-w-full rounded mt-2 self-start mr-2"
                                            data-form-errors-target="" data-form-reset-target="inlineMessage">
                                            <div className="flex items-center">

                                                <div className="form-error text-red-500 max-w-full leading-4">
                                                    Something went wrong
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="mt-7">
                                        <input type="submit" name="commit" value="Signup"
                                               data-disable-with="Loading..." id="form-submit"
                                               className="rounded-xl text-base font-bold leading-3 h-9 px-5 cursor-pointer min-w-90 items-center w-full h-10 gradient-button gradient-text shadow-button hover:shadow-button-hover-sm focus:outline-none rounded-3xl disabled:opacity-50 disabled:cursor-not-allowed"/>

                                    </div>

                                </div>

                            </form>
                        </div>

                    </div>

                    <div className="w-300 mt-12">
                    </div>


                    <div className="mt-auto pt-14 self-start text-xs text-gray-700 font-medium ml-5 sm:ml-0">
                        facmidia.com
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;