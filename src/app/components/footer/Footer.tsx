export default function Footer() {
    return (
        <footer className="bg-base-200 text-base-content py-4 mt-10">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 PourPal. All rights reserved.</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="/about" className="hover:underline">About Us</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}