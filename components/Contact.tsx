import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1E221F] py-24 text-center border-t border-[#303632]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-light text-[#BDBDBD]">Don't Hesitate To</h2>
          <a
            href="mailto:kiarazzahraaa@gmail.com"
            className="bg-[#404642] hover:bg-[#505652] text-white font-bold py-4 px-10 text-2xl rounded-full transition-colors duration-300 shadow-lg glow-border"
          >
            Contact Me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;