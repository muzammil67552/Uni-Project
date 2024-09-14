import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font fixed top-0 w-full z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src='./src/image/6375848.jpg' className='w-16 h-16 rounded-full' alt="Logo" />
          <span className="ml-3 text-3xl font-bold">Tech Solution</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-white text-xl cursor-pointer">Home</Link>
          <Link to="/motive" className="mr-5 hover:text-white text-xl cursor-pointer">Our Motive</Link>
          <Link to="/services" className="mr-5 hover:text-white text-xl cursor-pointer">Services</Link>
          <Link to="/about" className="mr-5 hover:text-white text-xl cursor-pointer">About Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
