import React, { useRef, FormEvent } from 'react';

import 'react-toastify/dist/ReactToastify.css';

import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, companyNameLogo } = company;
  const { socialMedia } = about;
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success('Message sent successfully!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          },
          (error) => {
            console.log(error.text);
            toast.error('Failed to send message. Please try again.', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
    }
  };

  return (
    <div
      id="about"
      className="container px-4 lg:px-10 py-6 bg-background text-white"
    >
      <ToastContainer />
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="flex flex-col items-start mb-6 lg:mb-0">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Company Logo"
              className="w-12 h-12 lg:w-16 lg:h-16 mb-2"
            />
            <img
              src={companyNameLogo}
              alt="Company Name Logo"
              className="w-24 lg:w-32 h-auto ml-4"
            />
          </div>
          <div className="flex items-center mt-5 space-x-4">
            <a
              aria-label="telegram"
              href={socialMedia.telegram}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="fill-current text-gray-400 hover:text-primary w-5 h-5 lg:w-6 lg:h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.19 8.907l-1.71 8.055c-.13.573-.464.712-.939.443l-2.61-1.926-1.26 1.214c-.144.144-.266.266-.543.266l.197-2.794 5.087-4.595c.222-.222-.048-.345-.343-.123L8.98 13.182l-2.764-.86c-.603-.177-.615-.603.125-.875l10.815-4.19c.481-.178.897.123.725.65z" />
              </svg>
            </a>
            <a
              aria-label="linkedin"
              href={socialMedia.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="fill-current text-gray-400 hover:text-primary w-5 h-5 lg:w-6 lg:h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              aria-label="twitter"
              href={socialMedia.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-gray-400 hover:text-primary w-5 h-5 lg:w-6 lg:h-6"
              >
                <g clipPath="url(#clip0_269_1369)">
                  <path
                    d="M9.00003 8.25L21.3 24.75H24.1501L11.85 8.25H9.00003Z"
                    fill="#040404"
                  />
                  <path
                    d="M16.5 0C7.34999 0 0 7.34999 0 16.5C0 25.6499 7.34999 33 16.5 33C25.6499 33 33 25.6499 33 16.5C33 7.34999 25.6499 0 16.5 0ZM20.6999 26.1L15.15 18.6L8.25 26.1H6.3L14.2499 17.5499L6.3 7.05H12.45L17.5499 13.9501L23.9999 6.9H25.7999L18.45 14.85L26.85 25.95H20.6999V26.1Z"
                    fill="text-primary"
                    fillOpacity="0.6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_269_1369">
                    <rect width="33" height="33" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <div className="montserrat-18 text-sm lg:text-base ml-4">
              {socialMedia.gettingTouch}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start lg:items-center">
          <div className="flex items-center mb-4 lg:mb-0 lg:mr-8">
            <img
              src={socialMedia.map}
              alt="Map"
              className="w-5 h-5 lg:w-6 lg:h-6 mr-2"
            />
            <span className="montserrat-14 text-xs lg:text-sm">
              {socialMedia.address}
            </span>
          </div>
          <div className="flex items-center mb-4 lg:mb-0 lg:mr-8">
            <img
              src={socialMedia.phone}
              alt="Phone"
              className="w-5 h-5 lg:w-6 lg:h-6 mr-2"
            />
            <span className="montserrat-14 text-xs lg:text-sm">
              {socialMedia.phoneNumber}
            </span>
          </div>
          <div className="flex items-center">
            <img
              src={socialMedia.mail}
              alt="Email"
              className="w-5 h-5 lg:w-6 lg:h-6 mr-2"
            />
            <span className="montserrat-14 text-xs lg:text-sm">
              {socialMedia.mailAddress}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <form className="w-full max-w-full" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-transparent text-white border-b-2 border-gradient focus:border-gradient focus:outline-none montserrat-18 py-2 px-4"
                type="text"
                placeholder="Full Name"
                name="fullName"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-transparent text-white border-b-2 border-gradient focus:border-gradient focus:outline-none montserrat-18 py-2 px-4"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-transparent text-white border-b-2 border-gradient focus:border-gradient focus:outline-none montserrat-18 py-2 px-4"
                type="text"
                placeholder="Message"
                name="message"
              />
            </div>
          </div>
          <div className="flex justify-end px-3">
            <button
              className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded inline-flex items-center"
              type="submit"
            >
              <span>Send</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-600 pt-4 flex justify-between items-center">
        <p className="text-xs lg:text-sm leading-none text-gray-400">
          &copy; {new Date().getFullYear()} Legal Block. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-xs lg:text-sm text-gray-400 hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm text-gray-400 hover:text-white"
          >
            Legal
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
