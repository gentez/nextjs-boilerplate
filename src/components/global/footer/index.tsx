import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="">About Us</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ex nec enim scelerisque, a tincidunt dolor luctus.
            </p>
          </div>
          <div>
            <h3 className="">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="">Contact</h3>
            <p className="mt-4">1234 Main Street</p>
            <p>City, State, ZIP</p>
            <p className="mt-2">Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div>
            <h3 className="">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="footer-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="footer-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
