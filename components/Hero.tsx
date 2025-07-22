
import React from 'react';
import { DownloadIcon, LinkedinIcon, GithubIcon, TensorFlowIcon, RLangIcon, PythonIcon, KerasIcon, FigmaIcon, OracleIcon, JupyterIcon, MailIcon, TelegramIcon } from './icons';

const FloatingIcon: React.FC<{icon: React.ReactNode, className: string, delay?: string}> = ({icon, className, delay = '0s'}) => (
    <div 
      className={`absolute bg-[#303632]/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg floating ${className}`}
      style={{ animationDelay: delay }}
    >
      {icon}
    </div>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
        {/* Left Side */}
        <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start z-10">
          <h2 className="text-4xl font-light text-[#BDBDBD]">
            Hi, 제 이름은
          </h2>
          <h1 className="text-6xl font-bold text-white tracking-tight">
            Kiara Azzahra
          </h1>
          <p className="text-lg text-[#BDBDBD] max-w-md italic">
            I am a <span className="text-white font-semibold">Data Scientist</span> focusing on <span className="text-white font-semibold">analytics and machine learning</span>. I have 2 years of experience in my field of interest and I am also learning other languages such as Korean and Japanese.
          </p>
          <button className="flex items-center gap-2 bg-[#404642] hover:bg-[#505652] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md">
            Download CV <DownloadIcon className="w-5 h-5" />
          </button>
          <div className="w-full max-w-sm mt-4 p-2 bg-[#303632] rounded-full flex items-center justify-between glow-border border border-solid border-[#4a5c4f]">
            <div className="flex items-center gap-4 pl-2">
                <a href="https://www.linkedin.com/in/kiara-azzahra-0410b3232/" className="text-[#BDBDBD] hover:text-white"><LinkedinIcon className="w-7 h-7" /></a>
                <a href="https://github.com/xyzaraa" className="text-[#BDBDBD] hover:text-white"><GithubIcon className="w-7 h-7" /></a>
            </div>
            <div className="flex-grow h-1 bg-[#4a5c4f] rounded-full mx-4 relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-1/4 h-2 w-5 bg-white rounded-full slider-thumb-animation"></div>
            </div>
            <div className="flex items-center gap-3 pr-2">
                <a href="mailto:kiarazzahraaa@gmail.com" className="text-[#d8d0f1] hover:text-white transition-colors">
                    <MailIcon className="w-8 h-8"/>
                </a>
                <a href="https://t.me/marvelionn" target="_blank" rel="noopener noreferrer" className="text-[#BDBDBD] hover:text-white transition-colors">
                    <TelegramIcon className="w-7 h-7" />
                </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center h-[500px] lg:h-[650px]">
           {/* Image is in an absolute container that is shifted left on large screens to be more centered */}
           <div className="absolute lg:-translate-x-1/4 w-80 h-full lg:w-[420px] bg-[#E0D5C3] rounded-t-full rounded-b-[4rem] overflow-hidden hero-image-glow">
              <img src="https://ik.imagekit.io/bly37h3bc/nyan_1753182694676_GJ5DUPwMd.jpg" alt="Kiara Azzahra" className="w-full h-full object-cover object-center" />
           </div>
           {/* Floating Icons positioned relative to the right-side container, now more spread out */}
           <FloatingIcon icon={<TensorFlowIcon className="w-8 h-8" />} className="top-10 right-0 lg:right-10" delay="0s" />
           <FloatingIcon icon={<RLangIcon className="w-8 h-8" />} className="top-1/3 -left-8 lg:-left-28" delay="1s" />
           <FloatingIcon icon={<PythonIcon className="w-8 h-8" />} className="top-1/2 -right-8 lg:-right-4" delay="2s" />
           <FloatingIcon icon={<KerasIcon className="w-8 h-8" />} className="bottom-24 right-0 lg:right-12" delay="0.5s" />
           <FloatingIcon icon={<FigmaIcon className="w-8 h-8" />} className="bottom-1/4 -left-12 lg:-left-16" delay="1.5s" />
           <FloatingIcon icon={<JupyterIcon className="w-8 h-8" />} className="top-1/2 -left-16 lg:-left-44" delay="2.5s" />
           <FloatingIcon icon={<OracleIcon className="w-8 h-8" />} className="bottom-10 -left-5 lg:-left-24" delay="3s"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;