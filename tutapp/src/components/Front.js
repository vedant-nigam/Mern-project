import React from 'react'

const Front = () => {
  return (
    <section className="bg-gray-900">
        <div className="px-6 mx-auto h-screen pt-6">
            <nav className='flex justify-between'>
                <a href='/' className='text-xl font-bold md:text-2xl text-white border-2 p-2 rounded'>Logo</a>
                <a href='/login' className=' text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md py-3 px-6 text-center'>Login</a>
            </nav>
            <div className='h-max flex justify-center mt-40'>
                <div>
                    <h1 className='text-5xl font-bold text-white'>Student-Teacher Database</h1>
                    <div className='flex justify-center mt-8'>
                        <a href='/login' className=' text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-lg mr-3'>Login</a>
                        <a href='/register' className=' text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-lg ml-3'>Regster new user</a>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Front