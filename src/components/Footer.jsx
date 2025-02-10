import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const section = [
  {
    title: 'Quick Links',
    items: ['Home', 'BusEase', 'Lost & Found', 'About Us', 'FAQ'],
  },
];

const items = [
  {
    name: 'Facebook',
    icon: <FaFacebook size={24} />,
    link: 'https://facebook.com/',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram size={24} />,
    link: 'https://instagram.com/',
  },
  {
    name: 'Twitter',
    icon: <FaTwitter size={24} />,
    link: 'https://x.com/',
  },
];

const Footer = () => {
  return (
    <>
      <div
        className="w-full text-gray-300 py-y px-2 bg-gray-400"
        // style={{
        //   backgroundImage: "url('/footer.jpg')",
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        // }}
      >
        <div className="w-full bg-black/10 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-600 py-2 gap-x-8">
          <div className="w-full text-m text-white">
            {section.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold mb-2">{section.title}</h4>
                <ul className="list-none hover:list-disc">
                  {section.items.map((item, index) => (
                    <li key={index} className="mb-2">
                      <Link
                        to={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                        className="hover:text-black"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div></div>
          <div className="text-white">
            <p className="font-bold uppercase">Subscribe to our Newsletter</p>
            <p className="py-4">
              The latest updates, articles, and resources are sent to your inbox weekly.
            </p>
            <form className="flex flex-row items-center w-full">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full sm:w-3/4 p-2 rounded-md mr-4 text-black"/>
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md flex items-center transition duration-300">
                Subscribe
                <FaArrowRight className="ml-2" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col max-w-[1240px] px-2 py-2 mx-auto justify-between sm:flex-row text-center text-gray-500">
          <p className="py-2 font-bold text-white">
            © 2024-SL Highway. All Rights Reserved
          </p>
          <div className="flex justify-between items-center sm:w-[300px] pt-2 text-2xl">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-white hover:text-black transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;