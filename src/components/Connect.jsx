import { GiArrowCursor } from "react-icons/gi";
const Connect = () => {
    return (
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-slate-200">Connect</h2>
        <div className="flex">

        
        <p className="text-gray-400 font-retro mr-5 text-xl hover:text-white transition-colors">
          <a href="mailto:priyansh.yv7@gmail.com">
            gmail
          </a>
          <GiArrowCursor/>
        </p>
        <p className="text-gray-400 font-retro mr-5 text-xl hover:text-white transition-colors">
          <a href="https://www.linkedin.com/in/priyanshyv">
            linkedin
          </a>
          <GiArrowCursor />
        </p>
        <p className="text-gray-400 font-retro mr-5 text-xl hover:text-white transition-colors">
          <a href="https://x.com/priyansh_yv">
            x.com
          </a>
          <GiArrowCursor />
        </p>
        <p className="text-gray-400 font-retro mr-5 text-xl hover:text-white transition-colors">
          <a href="https://github.com/priyanshyv">
            github
          </a>
          <GiArrowCursor/>
        </p>
        <p className="text-gray-400 font-retro mr-5 text-xl hover:text-white transition-colors">
          <a href="https://cal.com/priyanshyv">
            book a call
          </a>
          <GiArrowCursor/>
        </p>

      </div>
      </section>
    );
  };
  
  export default Connect;