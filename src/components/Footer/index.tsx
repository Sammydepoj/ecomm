import React from 'react'
import CustomButton from '../Button'

const Footer = () => {
  return (
    <div className=" bg-[#002366] text-white pt-14 pb-16 grid grid-rows-[1fr,5rem]">
          <div className=" lg:flex">
            <div className=" lg:w-1/2 lg:flex lg:justify-center">
              <div className=" flex ml-10 lg:ml-64 gap-[3rem] lg:gap-[8rem]">
                <div>
                  <h3 className=" font-bold text-xl mb-6">Menu</h3>
                  <ul className=" flex flex-col gap-6 font-light text-base">
                    <li>Documentation</li>
                    <li>Review</li>
                    <li>About</li>
                    <li>Support</li>
                  </ul>
                </div>
                <div>
                  <h3 className=" font-bold text-xl mb-6">Connect</h3>
                  <ul className=" flex flex-col gap-6 font-light text-base">
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" lg:w-1/2 mt-8 text-center lg:flex justify-center">
              <div>
                <CustomButton
                  text="Contact Us"
                  type="button"
                  variant="primary"
                  fullWidth={false}
                />
              </div>
            </div>
          </div>
          <div className=" lg:flex md:flex justify-between items-center pt-10 ml-3 lg:pt-24 md:mx-20 lg:mx-24">
            <div className=" flex gap-2 text-sm justify-center items-center">
              <p>2024</p>
              <p>E-Commerce</p>
              <p>All Rights Reserved</p>
            </div>
            <div className=" pt-3 text-sm flex justify-center">
              <ul className=" flex gap-5 justify-center items-center">
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
          </div>
        </div>
  )
}

export default Footer