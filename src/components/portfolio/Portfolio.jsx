import React, { useState, useEffect } from "react";

import "./portfolio.scss";
const items = [
  {
    id: 1,
    title: "Propert Rental Website",
    img: "https://github.com/Najamulhassan3383/PropertyRental/blob/main/public/images/screen.jpg",
    desc: "A full-stack property rental website built with Next.js, featuring user-friendly property listings, chat functionality for seamless communication, and the ability to bookmark properties. Cloudinary is integrated for efficient image uploads, ensuring a smooth and scalable experience for managing property images. This platform provides a comprehensive solution for both property owners and renters.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
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
    <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
      <div className="h-full bg-white rounded shadow-lg overflow-hidden">
        <img className="w-full h-64 object-cover" src={item.img} alt="" />
        <div className="p-6">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="mt-2 text-gray-600">{item.desc}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            See Demo
          </button>
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
    <div className="portfolio pb-5 px-3">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-5 p-2 w-full"
      >
        <option value="all">All</option>
        <option value="web">Web</option>
        <option value="mobile">Mobile</option>
        <option value="dsa">DSA</option>
        <option value="dip">DIP</option>
        <option value="databases">Databases</option>
      </select>
      <div className="flex flex-wrap">
        {filteredItems.map((item) => (
          <Single key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
