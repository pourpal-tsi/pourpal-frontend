"use client";

export default function Footer() {
  return (
    <footer className="mt-10 bg-base-200 py-4 text-base-content">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 PourPal. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
