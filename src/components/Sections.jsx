
import { GoArrowUpRight } from "react-icons/go";
const Section = ({ title, items }) => {
    return (
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-slate-200">{title}</h2>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <a href={item.link} className="underline flex items-center">
                  {item.title}
                  {/* <GiArrowCursor/> */}
                  <GoArrowUpRight/>
                </a>
              ) : (
                <span>{item.title}</span>
              )}
              {item.description && <p className="text-gray-400">{item.description}</p>}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Section;
  
  