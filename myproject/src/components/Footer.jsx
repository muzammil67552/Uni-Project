import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-10">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-4">
                {/* Company Info */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">Tech Solution</h1>
                    <p className="text-gray-400">We provide you with the best way to learn the top online skills for your career growth.</p>
                </div>

                {/* Services */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">Services</h1>
                    <ul className="space-y-2">
                        <li>
                            <a href="https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=1" target="" className="text-gray-400 hover:text-gray-100 transition duration-300">Web Development</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=-Dgivwfs1hc&list=PLXwTOG3-tRwiDxAQ0xtif2SjKSovXl9Ff" target="" className="text-gray-400 hover:text-gray-100 transition duration-300">WordPress</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=bLUkIgY8MTE&list=PLjVLYmrlmjGdNxIBIdaDEHtI4gAxaYoq1" target="" className="text-gray-400 hover:text-gray-100 transition duration-300">SEO</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=s7sUDQni0LI&list=PL9ooVrP1hQOH9Ttkk5M8qDTy4tpD8AIEI" target="" className="text-gray-400 hover:text-gray-100 transition duration-300">Digital Marketing</a>
                        </li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">Follow Us</h1>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/Muzammil16070?mibextid=ZbWKwL" target="__jump" className="text-gray-400 hover:text-blue-500 transition duration-300">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.instagram.com/" target="__jump" className="text-gray-400 hover:text-pink-500 transition duration-300">
                            <RiInstagramFill size={30} />
                        </a>
                        <a href="#About" target="__jump" className="text-gray-400 hover:text-green-500 transition duration-300">
                            <IoLogoWhatsapp size={30} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-400 text-sm">
                <p>&copy; 2024 Tech Solution. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
