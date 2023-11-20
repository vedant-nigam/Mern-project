import React from 'react'

const Home = () => {
  return (
    <section className="bg-gray-900">
        <div className="px-6 mx-auto h-screen pt-6">
            <nav className='flex justify-between'>
                <a href='/' className='text-xl font-bold md:text-2xl text-white border-2 p-2 rounded'>Logo</a>
                <a href='/login' onClick={() => {window.localStorage.removeItem("isLogged")}} className=' text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md py-3 px-6 text-center'>Logout</a>
            </nav>
            <div className='h-max flex justify-center mt-40'>
                <div>
                    <h1 className='text-3xl font-bold text-white'>Show Database for</h1>
                    <div className='flex justify-center mt-4'>
                        <a href='/teachers' className=' text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-lg mr-3'>Teacher</a>
                        <a href='/students' className=' text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-lg ml-3'>Student</a>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home