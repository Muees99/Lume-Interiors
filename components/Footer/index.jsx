import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam vel augue faucibus.</p>
            <div className="flex">
              <input type="email" placeholder="Enter" className="bg-gray-800 px-4 py-2 flex-grow" />
              <button className="bg-[#B98E75] px-6 py-2 hover:bg-opacity-90">
                <span className="text-sm font-semibold">125 × 66</span>
              </button>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><MdArrowForward className="mr-2" />Architecture</li>
              <li className="flex items-center"><MdArrowForward className="mr-2" />Interior Design</li>
              <li className="flex items-center"><MdArrowForward className="mr-2" />Home Decor</li>
              <li className="flex items-center"><MdArrowForward className="mr-2" />Urban Design</li>
              <li className="flex items-center"><MdArrowForward className="mr-2" />Design System</li>
            </ul>
          </div>

          {/* Our Project Section */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">OUR Project</h3>
            <div className="grid grid-cols-3 gap-2">
              <Image src="https://i.ibb.co/DDqYhTR/Rectangle-567.png" alt="Project 1" width={50} height={50} className="w-full h-auto" />
              <Image src="https://i.ibb.co/fnc0TG1/unsplash-Qd-AAasr-Zhdk.png" alt="Project 2" width={100} height={100} className="w-full h-auto" />
              <Image src="https://i.ibb.co/DDqYhTR/Rectangle-567.png" alt="Project 3" width={100} height={100} className="w-full h-auto" />
              <Image src="https://i.ibb.co/fnc0TG1/unsplash-Qd-AAasr-Zhdk.png" alt="Project 4" width={100} height={100} className="w-full h-auto" />
              <Image src="https://i.ibb.co/DDqYhTR/Rectangle-567.png" alt="Project 5" width={100} height={100} className="w-full h-auto" />
              <Image src="https://i.ibb.co/fnc0TG1/unsplash-Qd-AAasr-Zhdk.png" alt="Project 6" width={100} height={100} className="w-full h-auto" />
            </div>
          </div>

          {/* SolArt Section */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8  mr-2">
              <Image src="https://i.ibb.co/t2MWDQB/AppIcon.png" alt="Project 5" width={40} height={40} className="w-full h-auto" />
              </div>
              <h3 className="text-2xl font-bold">SolArt</h3>
            </div>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor quam vel augue faucibus.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-[#B98E75] flex items-center justify-center rounded-full hover:bg-opacity-80">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#B98E75] flex items-center justify-center rounded-full hover:bg-opacity-80">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#B98E75] flex items-center justify-center rounded-full hover:bg-opacity-80">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#B98E75] flex items-center justify-center rounded-full hover:bg-opacity-80">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>Copyright by SolArt © 2024. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;