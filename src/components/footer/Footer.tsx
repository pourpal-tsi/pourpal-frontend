import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="border-t bg-white py-4">
      <div className="flex flex-col items-center justify-around gap-2 md:flex-row">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Ragazzo Sporco
          </span>
          <div className="flex gap-3">
            <Link
              href="https://www.facebook.com/elvis.placis"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href="https://twitter.com/elonmusk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://youtu.be/5tSvWqLmDYA?si=srpTalOESC2IM8nt&t=26"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 text-sm md:flex-row">
          <br />
          <Link className="footer-link" href="/about">
            About Us
          </Link>
          <Link className="footer-link" href="/faq">
            FAQ
          </Link>
          <Link className="footer-link" href="/contact">
            Contact
          </Link>
          <Link className="footer-link" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="footer-link" href="/terms-of-service">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
