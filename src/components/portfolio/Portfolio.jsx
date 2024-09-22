import React, { useState, useEffect } from "react";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Propert Rental Website",
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
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
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
