import { SiRetroarch } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
const Header = () => {
    return (
      <header className="space-y-4">
        <h1 className="text-3xl font-bold flex items-center justify-between text-slate-200">Priyansh Yadav<SiRetroarch color="white" className="ml-50"/></h1>
        <p className="flex items-center text-sm ">
        <CiLocationOn className="mr-1 " />
        <span className="text-slate-200">Jaipur, India</span>
      </p>
        <p className=" text-xl text-gray-400 font-retro">I'm 20-year-old Computer Science undergrad. My passion lies in building innovative solutions and tackling challenging problems. I thrive on the intersection computer science and practical application, often finding myself immersed in coding while enjoying Lofi-music. I'm always eager to learn and grow in this ever-evolving tech landscape. Whether it’s designing clean UIs or tackling backend logic, I’m always excited to learn, build, and push my limits.</p>
        <p className="text-xl text-gray-400 font-retro">In the past I’ve developed the <a href="https://youtu.be/AROVBbZM3A0" className="underline hover:text-white transition-colors" target="_blank">Reposheet</a>,  <a href="https://padhaicrow.vercel.app/" className="underline hover:text-white transition-colors" target="_blank">StudyNotion</a> and some small but good projects.</p>
      </header>
    );
  };
  
  export default Header;
  
  