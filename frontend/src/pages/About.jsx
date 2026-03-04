import React from "react";
import { Link } from "react-router-dom";


export default function About() {
const teamMembers = [
  {
    name: "Sneha",
    role: "Backend developer",
    image: "/src/assets/pp-sneha3.jpeg",
  },
  {
    name: "Karina",
    role: "Frontend developer",
    image: "/src/assets/pp-karina.jpeg",
  },
  {
    name: "Sanita",
    role: "UI/UX manager",
    image: "/src/assets/aayush.jpeg",
  },
  {
    name: "Sashi",
    role: "Tester",
    image: "/src/assets/sita.jpeg",
  },
];
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ✅ SAME ROLE BASED NAVBAR */}
     

      {/* HERO */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-black">
          About Us
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {/* We are committed to delivering the best solutions and
          creating meaningful impact. */}
          We are committed to provide the best online library management system making it easier to borrow or read book from any part of the world.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="/src/assets/mission.jpg"
          alt="Mission"
          className="rounded-xl shadow"
        />

        <div>
          <h2 className="text-2xl font-bold text-black mb-3">
            Our Mission
          </h2>

          <p className="text-gray-700 mb-6">
            Our mission is to provide top-notch learning services that empower people
             to gain knowledge from any part of the world in affordable prices.
          </p>

          <h2 className="text-2xl font-bold text-black mb-3">
            Our Vision
          </h2>

          <p className="text-gray-700">
            To be a global leader delivering best learning platfrom that
            make a positive difference in the world.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-10 text-black">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-white text-black rounded-xl shadow p-6"
        >
          <img
            src={member.image}
            className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
            alt={member.name}
          />

          <h5 className="font-semibold text-lg">
            {member.name}
          </h5>

          <p className="text-gray-500">
            {member.role}
          </p>
        </div>
              )
            )}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h3 className="text-2xl font-bold text-black">
          Want to work with us?
        </h3>

        <p className="text-gray-600 mt-2">
          Join our team and help us create amazing experiences.
        </p>

      <Link to="/contact"> <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Contact Us
        </button>
        </Link> 
      </section>

     
    </div>
  );
}
