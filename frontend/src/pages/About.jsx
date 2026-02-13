import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox';

function About() {
  return (
    <div className="my-5">
      <Title text1={"ABOUT"} text2={"US"} />

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 place-items-center my-15">
        <img className="w-110" src={assets.about_img} alt="" />

        <div className="flex flex-col gap-3 text-sm text-gray-600 mt-15">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="font-bold">Our Mission</p>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond
          </p>
        </div>
      </div>

      <div className="flex items-start mb-5">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-[1.5px] border-gray-400 mb-18">
        <div className="px-10 py-10 flex flex-col gap-4 text-sm max-sm:border-b-[1.5px] md:border-r-[1.5px] border-gray-400">
          <h2 className="text-gray-900 font-bold">QUALITY ASSURANCE:</h2>
          <p className="text-gray-600">
            We Meticulously Select And Vet Each Product To Ensure It Meets Our
            Stringent Quality Standards.
          </p>
        </div>

        <div className="px-10 py-10 flex flex-col gap-4 text-sm max-sm:border-b-[1.5px] md:border-r-[1.5px] border-gray-400">
          <h2 className="text-gray-900 font-bold">CONVENIENCE:</h2>
          <p className="text-gray-600">
            With Our User-Freindly Interface And Hossle-Free Ordering Process,
            Shopping Has Never Been Easier.
          </p>
        </div>

        <div className="px-10 py-10 flex flex-col gap-4 text-sm">
          <h2 className="text-gray-900 font-bold">
            EXCEPTIONAL CUSTOMER SERVICE:
          </h2>
          <p className="text-gray-600">
            Our Team Of Dedicated Professionals Is Here To Assist You The Way,
            Ensuring Your Satisfaction Is Our Top Priority.
          </p>
        </div>
      </div>

      <NewsLetterBox/>
    </div>
  );
}

export default About