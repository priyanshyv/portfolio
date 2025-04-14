import React from 'react';
import Header from './components/Header';
import Section from './components/Sections';
import NowSection from './components/NowSection';
import Connect from './components/Connect';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

const App = () => {
  const [leetcodeRating, setLeetcodeRating] = useState(null);

  useEffect(() => {
    const fetchLeetcodeRating = async () => {
      try {
        const res = await fetch('https://alfa-leetcode-api.onrender.com/userContestRankingInfo/priyanshyadav');
        const data = await res.json();
        const rating = data?.data?.userContestRanking?.rating;
        if (rating) {
          setLeetcodeRating(Math.round(rating));
        }
      } catch (err) {
        console.error('Failed to fetch LeetCode rating', err);
      }
    };
  
    fetchLeetcodeRating();
  }, []);
  const codingProfileItems = [
    {
      title: "LeetCode",
      link: "https://leetcode.com/u/priyanshyadav/",
      description: `Solve Over 600+ questions & Contest Rating - ${leetcodeRating ?? "1650+"}`,
      details: [
        "Participated in 50+ coding contests.",
        "Solved problems related to algorithms and data structures."
      ]
    },
    {
      title: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/priyanshyadav/",
      description: "Top 50 in Manipal University Jaipur, Contest Rating - 1750",
      details: [
        "Ranked among the top 50 coders from Manipal University Jaipur.",
        "Contributed articles and solutions on various topics in computer science."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <div className="flex-grow px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* <Section title="Building" items={buildingItems} /> */}
            <Section title="Projects" items={projectsItems} />
            <Section title="Coding Profiles" items={codingProfileItems} />
          </div>
          <NowSection />
          <Connect />
         
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Data for the sections
const buildingItems = [
  { title: "Craft", description: "Implementing interfaces and interactions." }
];

const projectsItems = [
  {
    title: "StudyNotion",
    link: "https://padhaicrow.vercel.app/",
    description: "An ed-tech platform built on the MERN stack for course creation, consumption, and rating.",
    technologies: "(MongoDB, ExpressJS, ReactJS, NodeJS, WebRTC, Socket.IO)",
    date: "Mar 2024 – Sept 2024",
    details: [
      "Developed student and instructor-specific pages.",
      "Integrated user authentication with OTP verification and password recovery.",
      "Implemented secure payment processing using Razorpay API.",
      "Enabled course management with CRUD operations and media handling.",
      "Added live video classes using WebRTC and Socket.IO.",
      "Integrated an online code compiler supporting multiple programming languages."
    ]
  },
  {
    title: "Reposheet",
    link: "https://reposheet.onrender.com/",
    description: "A GitHub-like app, allowing users to manage repositories and host their own Git server on AWS.",
    technologies: "(ExpressJS, ReactJS, NodeJS, AWS)",
    date: "Jul 2024 – Aug 2024",
    details: [
      "Implemented SSH key integration for secure repository access and management.",
      "Provided a detailed in-app guide for launching and configuring an AWS Git server.",
      "Enabled version control through the creation and management of bare Git repositories.",
      "Integrated user authentication for a personalized experience with Git accounts using Passport.js."
    ]
  },
  {
    title: "Musical Showcase",
    link: "https://github.com/priyanshyv/SM-project",
    description: "A fan webpage for SEEDHEMAUT, featuring hip-hop content and wishlist functionality.",
    technologies: "(ReactJS, Tailwind, CSS, JavaScript, HTML, XAMPP, MySQL)",
    date: "Dec 2023 – Mar 2024",
    details: [
      "Enhanced user experience with a secure routing system and a visually appealing interface, resulting in increased engagement.",
      "The webpage provides comprehensive information about hip-hop and allows users to explore and interact with content."
    ]
  },
  {
    title: "Video Call App",
    link: "https://video-call-mern-front.onrender.com/",
    description: "A real-time video call application using WebRTC and Socket.IO.",
    technologies: "(ReactJS, WebRTC, Socket.IO)",
    date: "Aug 2024 – Sept 2024",
    details: [
      "Implemented peer-to-peer video and audio communication.",
      "Enabled group video calls with dynamic user management.",
      "Integrated chat functionality for text communication during calls."
    ]
  },
  {
    title: "Online Code Compiler",
    link: "https://onlinecoderunner.onrender.com/",
    description: "An online code compiler using the Monaco editor, supporting multiple programming languages.",
    technologies: "(ReactJS, Monaco Editor, WebAssembly)",
    date: "Oct 2024 – Nov 2024",
    details: [
      "Implemented live code execution for multiple programming languages.",
      "Provided syntax highlighting and IntelliSense features.",
      "Enabled user collaboration through real-time editing."
    ]
  }
];



export default App;


