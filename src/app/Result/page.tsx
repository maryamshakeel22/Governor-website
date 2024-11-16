import Footer from '@/components/footer'
import React from 'react'

const Result = () => {
  return (
    <div id='Result'>
        <div>
            <h1 className='text-center mt-5 text-sky-900 font-bold text-3xl'>Grand Entrance Exam Result</h1>
            <div className='place-items-center justify-center'>
        <form
  className="mt-10 z-10 mx-4 my-10 items-center w-full max-w-2xl rounded px-4 py-8 text-black shadow-lg" noValidate>
  <div className="my-6">
    <label htmlFor="regNo" className="mb-6 mt-4 text-slate-700">
      Registration Number *
    </label>
    <div className="">
      <input
        id="regNo"
        maxLength={10}
        max=""
        className="block h-12 w-full border border-gray-400 bg-gray-100 p-3 focus:border-sub focus:ring-sub outline-none focus:ring-1 md:text-xl mb-2 mt-1 rounded"
        placeholder=" Registration Number"
        type="tel"
        name="regNo"
      />
    </div>
  </div>
  <div className="my-6">
    <label htmlFor="cnic" className="mb-6 mt-4 text-slate-700">
      CNIC or B-Form Number *
    </label>
    <div className="">
      <input
        id="cnic"
        maxLength={13}
        max=""
        className="block h-12 w-full border border-gray-400 bg-gray-100 p-3 focus:border-sub focus:ring-sub outline-none focus:ring-1 md:text-xl mb-2 mt-1 rounded"
        placeholder=" CNIC or B-Form Number"
        type="tel"
        name="cnic"
      />
    </div>
  </div>
  <button className='bg-sky-900 text-white text-lg mt-8 px-10 py-2 mr-6 w-full rounded font-bold  hover:translate-y-1'>Get Result</button>
</form>
</div>

        </div>
        <Footer /> 
    </div>
  )
}

export default Result