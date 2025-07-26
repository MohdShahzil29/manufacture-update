import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  Factory,
  Settings,
  ShieldCheck,
  Truck,
  Clock,
  Users,
  Globe,
  Award,
  Cog,
  Package,
  Gauge,
  Leaf,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Service = () => {
  const services = [
    {
      icon: <Factory className="w-12 h-12 text-blue-600" />,
      title: "Custom Manufacturing",
      description:
        "Tailored production solutions to meet your specific requirements with precision engineering.",
    },
    {
      icon: <Settings className="w-12 h-12 text-green-600" />,
      title: "Assembly Services",
      description:
        "Complete assembly solutions with rigorous quality control at every stage.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-red-600" />,
      title: "Quality Assurance",
      description:
        "Comprehensive testing and inspection to ensure product reliability and performance.",
    },
    {
      icon: <Truck className="w-12 h-12 text-purple-600" />,
      title: "Logistics Support",
      description:
        "Efficient supply chain management and timely delivery solutions.",
    },
    {
      icon: <Cog className="w-12 h-12 text-yellow-600" />,
      title: "Machining Services",
      description: "Precision machining with state-of-the-art CNC equipment.",
    },
    {
      icon: <Package className="w-12 h-12 text-indigo-600" />,
      title: "Packaging Solutions",
      description:
        "Custom packaging designed to protect your products during transit.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Operations Manager, ABC Industries",
      comment:
        "Dekh Manufacturing has been our trusted partner for 5 years. Their precision and reliability are unmatched.",
    },
    {
      name: "Priya Sharma",
      position: "Procurement Head, XYZ Corp",
      comment:
        "Their custom manufacturing solutions helped us reduce costs by 20% while improving quality.",
    },
    {
      name: "Amit Patel",
      position: "CEO, Innovate Tech",
      comment:
        "The team at Dekh understands our needs and delivers beyond expectations every time.",
    },
  ];

  const stats = [
    {
      value: "15+",
      label: "Years Experience",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      value: "200+",
      label: "Satisfied Clients",
      icon: <Users className="w-8 h-8" />,
    },
    {
      value: "50+",
      label: "Countries Served",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      value: "12",
      label: "Industry Awards",
      icon: <Award className="w-8 h-8" />,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Manufacturing Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Precision-engineered solutions tailored to your industrial needs
          </motion.p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Manufacturing Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive manufacturing solutions with a focus on
            quality, efficiency, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined approach ensuring quality at every stage
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-blue-500 transform -translate-x-1/2"></div>

            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
              {[
                {
                  title: "Design & Engineering",
                  description:
                    "Our team collaborates with you to create detailed CAD models and engineering specifications.",
                  icon: <Gauge className="w-8 h-8 text-blue-600" />,
                },
                {
                  title: "Material Procurement",
                  description:
                    "Sourcing high-quality raw materials from trusted suppliers with full traceability.",
                  icon: <Package className="w-8 h-8 text-green-600" />,
                },
                {
                  title: "Precision Manufacturing",
                  description:
                    "State-of-the-art CNC machines and skilled technicians ensure millimeter precision.",
                  icon: <Cog className="w-8 h-8 text-yellow-600" />,
                },
                {
                  title: "Quality Inspection",
                  description:
                    "Rigorous testing at multiple checkpoints to meet international quality standards.",
                  icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
                },
                {
                  title: "Assembly & Finishing",
                  description:
                    "Expert assembly and surface treatment for durability and aesthetic appeal.",
                  icon: <Settings className="w-8 h-8 text-purple-600" />,
                },
                {
                  title: "Sustainable Packaging",
                  description:
                    "Eco-friendly packaging solutions that protect your products and the environment.",
                  icon: <Leaf className="w-8 h-8 text-indigo-600" />,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative p-6 bg-white rounded-lg shadow-md ${
                    index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                  } ${index < 2 ? "lg:mb-12" : ""}`}
                >
                  <div className="absolute -left-4 lg:left-auto lg:right-0 lg:-right-4 top-6 flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-blue-500">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-16">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by manufacturers and businesses worldwide
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto">
                  <p className="text-gray-700 text-lg italic mb-6">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Manufacturing Process?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover
            how we can help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Service;
