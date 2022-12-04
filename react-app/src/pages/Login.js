import React from 'react'
const Login = () => {
  return (
    <>
    <div className="relative flex flex-1 flex-col items-center justify-center pt-12 pb-16">
    <h1 className="sr-only">Log in to your Tailwind UI account</h1>
    <form action="/login" className="w-full max-w-sm">
        <div className="mb-6">
            <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
            <input type="email" id="email" className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required="" value=""/>
        </div>
      <div className="mb-6">
          <label for="password" className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
            <input type="password" id="password" className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required="" value=""/>
        </div>
        <button type="submit" className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full">
            <span>Sign in to account</span>
        </button>
    </form>
    </div>
    </>
  )
}

export default Login