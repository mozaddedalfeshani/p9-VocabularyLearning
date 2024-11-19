import logoIcon from "../assets/icons/logoIcon.png";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-10 bg-base-200">
      <footer className="footer container mx-auto text-base-content p-10">
        <aside>
          <img src={logoIcon} alt="logo" className="w-10 h-10" />
          <p className="font-sans font-medium">
            Lingo Bingo
            <br />
            Helping you expand your vocabulary, one word at a time!
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Interactive Lessons</a>
          <a className="link link-hover">Pronunciation Guides</a>
          <a className="link link-hover">Quiz Mode</a>
          <a className="link link-hover">Personalized Learning</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <p>Email: contact@lingobingo.com</p>
          <p>Phone: +123 456 7890</p>
        </nav>
        <nav>
          <h6 className="footer-title">Follow Us</h6>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="link link-hover">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="link link-hover">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="link link-hover">
              <FaInstagram />
            </a>
          </div>
        </nav>
      </footer>
      <div className="text-center py-4 bg-base-300">
        <p>&copy; 2023 Lingo Bingo. All rights reserved.</p>
      </div>
    </div>
  );
}
