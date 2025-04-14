import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";

const Section = ({ title, items }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleDetails = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-slate-200">{title}</h2>
      <ul className="space-y-6">
        {items.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <a
                href={item.link}
                className="underline flex items-center hover:text-yellow-400 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
                <GoArrowUpRight className="ml-1" />
              </a>
            ) : (
              <span className="font-semibold">{item.title}</span>
            )}

            {item.description && <p className="text-gray-400">{item.description}</p>}

            {/* Toggleable Details */}
            {expandedItems[index] && item.details && (
              <ul className="list-disc ml-5 mt-2 text-sm text-gray-300 space-y-1">
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {item.details && (
              <button
                onClick={() => toggleDetails(index)}
                className="mt-2 text-yellow-400 hover:underline text-sm"
              >
                {expandedItems[index] ? "See less ▲" : "See more ▼"}
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;

  