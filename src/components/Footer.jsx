const Footer = () => {
  return (
    <footer className="w-full py-4 border-t border-gray-700">
      <div className="max-w-3xl mx-auto flex justify-between items-center text-gray-400 text-sm">
        {/* Left text */}
        <p>Sit with your ambient ambition.</p>

        {/* Tiny Resume Download Button */}
        <a
          href="https://drive.google.com/file/d/10--4ME9BwFyUjGHbRIzF_dscyvT_dcKw/view"
          download="Priyansh_Yadav_Resume.pdf"
          className="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-gray-400 text-gray-400 hover:bg-white hover:text-black transition-all text-xs"
        >
          <div className="w-4 h-4 flex items-center justify-center rounded-full border border-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
              />
            </svg>
          </div>
          <span className="font-medium">Resume</span>
        </a>

        {/* Right text */}
        <div className="flex items-center space-x-1">
          <span>2024</span>
          <span className="text-lg font-thin">λ</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


  