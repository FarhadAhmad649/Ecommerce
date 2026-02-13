import React from 'react'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import NewsLetterBox from '../components/NewsLetterBox';

function Contact() {
  return (
    <div className="my-5">
      <Title text1={"ABOUT"} text2={"US"} />

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 my-15">
        <div className="flex justify-center md:justify-end">
          <img className="w-96" src={assets.contact_img} alt="contact" />
        </div>

        <div className="flex flex-col gap-4 items-center md:items-start leading-6 text-sm text-gray-600 mt-8">
          <h2 className="font-bold text-lg">OUR STORE</h2>

          <div>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washigton, USA</p>
          </div>

          <div>
            <p>Tel:(415)555-0123</p>
            <p>Email:ahmaddev@gmail.com</p>
          </div>

          <h2 className="font-bold text-lg mt-4">CAREERS AT FOREVER</h2>

          <p>Learn more about our teams and job openings.</p>

          <button className="smart-btn w-36">
            Explore Jobs
          </button>
        </div>
      </div>

      <div className="mt-30 mb-60">
        <NewsLetterBox />
      </div>
    </div>
  );
}

export default Contact