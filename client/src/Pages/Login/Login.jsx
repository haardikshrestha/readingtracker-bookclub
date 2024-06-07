import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-mongoose-100">
            <div className="flex w-full max-w-4xl bg-white bg-opacity-95 border rounded-lg overflow-hidden">
                <div className="w-1/2 p-8 bg-gradient-to-br from-mongoose-200 to-mongoose-300">
                    <h1 className="text-4xl font-serif text-mongoose-900 mb-4">Bookmark</h1>
                    <p className="text-lg text-mongoose-800 font-medium">Your personal library, reimagined.</p>
                    <p className="mt-4 text-mongoose-700">Dive into a world of stories, manage your collection, and connect with fellow book lovers.</p>
                    {/* <div class="h-32 border-l-2 border-dashed border-black"></div> */}
                </div>

                <div className="w-1/2 p-8 bg-white">
                    <h2 className="text-3xl font-serif text-gray-800 mb-6">Welcome Back</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mongoose-500 focus:border-mongoose-500" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-mongoose-500 focus:border-mongoose-500" placeholder="••••••••" />
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mongoose-600 hover:bg-mongoose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mongoose-500">
                                Open Your Library
                            </button>
                        </div>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        New to Bookmark? <a href="#" className="font-medium text-mongoose-600 hover:text-mongoose-500">Create an account</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;