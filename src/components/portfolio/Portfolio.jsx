import React, { useState, useEffect } from "react";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Property Rental Website",
    img: "https://raw.githubusercontent.com/Najamulhassan3383/PropertyRental/refs/heads/main/public/images/screen.jpg",
    desc: "A full-stack property rental website built with Next.js, featuring user-friendly property listings, chat functionality for seamless communication, and the ability to bookmark properties. Cloudinary is integrated for efficient image uploads, ensuring a smooth and scalable experience for managing property images. This platform provides a comprehensive solution for both property owners and renters.",
    liveLink: "https://proprental.vercel.app/",
    githubLink: "https://github.com/Najamulhassan3383/PropertyRental",
  },
  {
    id: 2,
    title: "Full Stack E-Commerce Website",
    img: "/Home_page.png",
    desc: "During my internship at Arbisoft, I developed a scalable e-commerce platform featuring dynamic product listings, secure payment integration, order tracking, and inventory management. The project focused on enhancing the user experience for both customers and sellers, offering a seamless interface for browsing products, managing orders, and handling real-time stock updates, while ensuring performance and security.",
    liveLink: "https://arbishop.onrender.com/",
    githubLink:
      "https://github.com/najamulhassanarbi/BVStraining/tree/ArbiShop/ArbiShop",
  },
  {
    id: 3,
    title: "Dictionary App",
    img: "/dictionary.png",
    desc: "This is a challenge from frontend Masters. I have created a dictionary app using React and Material UI. This app is fetching data from an API and displaying it in a user-friendly way.",
    liveLink: "https://dictionary-app012345.netlify.app/",
    githubLink: "https://github.com/Najamulhassan3383/Dictionary-App",
  },
  {
    id: 4,
    title: "Memory Card Game",
    img: "/momory_card.png",
    desc: "This is a challenge from frontend Masters. I have created a memory game app using React and Tailwind css. This is a game where you have to click on the cards and match them, using famous charaters.",
    liveLink: "https://memorycardgamenajam.netlify.app/",
    githubLink: "https://github.com/Najamulhassan3383/Memory-Card-Game",
  },
];

const Single = ({ item }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4" id="projects">
      <div className="h-full bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
        <img
          className="w-full h-64 object-cover"
          src={item.img}
          alt={item.title}
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
          <p className="mt-2 text-gray-600">{item.desc}</p>
          <div className="mt-4 flex space-x-2">
            {item.liveLink && (
              <a
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                See Demo
              </a>
            )}
            {item.githubLink && (
              <a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition duration-300"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(
      filter === "all"
        ? items
        : items.filter((item) => item.category === filter)
    );
  }, [filter]);

  return (
    <div className="portfolio pb-10 px-5">
      <div className="mb-5">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 w-full border border-gray-300 rounded"
        >
          <option value="all">All</option>
          <option value="web">Web</option>
          <option value="mobile">Mobile</option>
          <option value="dsa">DSA</option>
          <option value="dip">DIP</option>
          <option value="databases">Databases</option>
        </select>
      </div>
      <div className="flex flex-wrap -m-4 mt-4">
        {filteredItems.map((item) => (
          <Single key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
