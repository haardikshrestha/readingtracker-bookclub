import React from 'react';

const Login = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-cover bg-center bg-mongoose-100 p-8">
            <div className="flex w-full h-5/6 max-w-6xl bg-white bg-opacity-95 border rounded-xl overflow-hidden shadow-xl">
                <div className="w-1/2 p-12 bg-gradient-to-br from-mongoose-200 to-mongoose-300 flex flex-col justify-between">
                    <div>
                        <h1 className="text-6xl font-serif text-mongoose-900 mb-6 leading-tight">Bookmark</h1>
                        <p className="text-2xl text-mongoose-800 font-medium mb-6">Your personal library, reimagined.</p>
                        <p className="text-lg text-mongoose-700 leading-relaxed">
                            Dive into a world of stories, manage your collection, and connect with fellow book lovers. Let the journey through pages begin here.
                        </p>
                    </div>
                    <div className="mt-auto pt-8">
                        <div className="h-40 border-l-2 border-dashed border-mongoose-700 ml-4 mb-6"></div>
                        <p className="text-xl text-mongoose-800 italic">"A reader lives a thousand lives before he dies."</p>
                        <p className="text-lg text-mongoose-700 mt-3">- George R.R. Martin</p>
                    </div>
                </div>

                <div className="w-1/2 p-12 bg-white flex flex-col justify-center">
                    <h2 className="text-5xl font-serif text-gray-800 mb-10">Welcome Back</h2>
                    <form className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-3">Email</label>
                            <input type="email" id="email" className="block w-full px-5 py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-mongoose-500 focus:border-mongoose-500 text-gray-700" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-base font-medium text-gray-700 mb-3">Password</label>
                            <input type="password" id="password" className="block w-full px-5 py-4 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-mongoose-500 focus:border-mongoose-500 text-gray-700" placeholder="••••••••" />
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-md text-xl font-semibold text-white bg-mongoose-600 hover:bg-mongoose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mongoose-500 transition duration-300">
                                Open Your Library
                            </button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-lg text-gray-600">
                        New to Bookmark? <a href="#" className="font-medium text-mongoose-600 hover:text-mongoose-500 underline">Create an account</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;