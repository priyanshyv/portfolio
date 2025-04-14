import { GiArrowCursor } from "react-icons/gi";
const Connect = () => {
    return (
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-slate-200">Connect</h2>
        <div className="flex">

        
        <p className="text-gray-400 font-retro mr-5 text-xl hover:text-white transition-colors">
          <a href="mailto:priyansh.yv7@gmail.com" target="_blank">
            gmail
          </a>
          <GiArrowCursor/>
        </p>
        <p className="text-gray-400 font-retro mr-5 text-xl hover:text-white transition-colors">
          <a href="https://www.linkedin.com/in/priyanshyv" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          <GiArrowCursor />
        </p>
        <p className="text-gray-400 font-retro mr-5 text-xl hover:text-white transition-colors">
          <a href="https://x.com/priyansh_yv" target="_blank">
            x.com
          </a>
          <GiArrowCursor />
        </p>
        <p className="text-gray-400 font-retro mr-5 text-xl hover:text-white transition-colors">
          <a href="https://github.com/priyanshyv" target="_blank" rel="noopener noreferrer">
            github
          </a>
          <GiArrowCursor/>
        </p>
        <p className="text-gray-400 font-retro mr-5 text-xl hover:text-white transition-colors">
          <a href="https://cal.com/priyanshyv" target="_blank">
            book a call
          </a>
          <GiArrowCursor/>
        </p>
      
      </div>
      </section>
    );
  };
  
  export default Connect;