// components/Footer.js
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4  flex flex-col gap-3">
            <div className="container mx-auto text-center cursor-pointer hover:underline">Mentions Légales</div>
            <div className="container mx-auto text-center">
                <p>© {new Date().getFullYear()} onayek. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
