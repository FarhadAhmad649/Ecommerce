import React from 'react'

function NewsLetterBox() {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h2 className='text-2xl font-bold'>Subscribe now & get 20% off</h2>
      <p className='text-gray-600 text-sm'>Lorem insum is simply text of the printing and tepesetting industry</p>

      <form onSubmit={onSubmitHandler} className='flex mt-5 text-sm'>
        <input className='px-2 py-2 w-78 border border-gray-300 ' type="email" name="email" placeholder="Enter you email id" />
        <button type='submit' className='py-2 px-6 bg-black text-white hover:cursor-pointer text-sm'>SUBSCRIBE</button>
      </form>
    </div>
  );
}

export default NewsLetterBox