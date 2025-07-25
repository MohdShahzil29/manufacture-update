import React from "react";
import { Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Only base styles, no pagination or buttons

const blogData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Role of Hard Packaging in Supply Chain Efficiency",
    date: "Jul 24, 2025",
    description:
      "In the intricate web of supply chain management, packaging stands as a pivotal element influencing efficiency and reliability...",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Custom Hard Packaging Solutions for Different Industries: Enhancing Protection, Branding, and Efficiency",
    date: "Jul 24, 2025",
    description:
      "Tailored packaging not only ensures product safety but also reinforces brand identity and meets specific industry standards...",
  },
];

export default function OurBlogs() {
  return (
    <section className=" px-4 sm:px-8 lg:px-16 bg-white mb-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our{" "}
        <span className="text-green-600 border-b-4 border-green-600">
          Blogs
        </span>
      </h2>

      {/* Mobile view: Swiper */}
      <div className="md:hidden">
        <Swiper spaceBetween={16} slidesPerView={"auto"}>
          {blogData.map((blog) => (
            <SwiperSlide
              key={blog.id}
              style={{ width: "85%", maxWidth: "360px" }}
              className="!mr-4"
            >
              <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-t-xl w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock size={16} className="mr-1.5" />
                    {blog.date}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {blog.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop view: Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-8">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-t-xl w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Clock size={16} className="mr-1.5" />
                {blog.date}
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
