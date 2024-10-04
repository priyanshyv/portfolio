const Footer = () => {
    return (
      <footer className="w-full  py-4 border-t border-gray-700">
        <div className="max-w-3xl mx-auto flex justify-between items-center text-gray-400 text-sm">
          {/* Left text */}
          <p>Sit with your ambient ambition.</p>

          {/* Right text with year and icon */}
          <div className="flex items-center space-x-2">
            <span>2024</span>
            <span className="text-lg font-thin">λ</span> {/* Replace with your preferred icon */}
          </div>
        </div>
      </footer>
    );
};

export default Footer;

  