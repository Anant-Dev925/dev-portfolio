"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Camera, User, Phone, Mail, Image, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

// Define the type for a portfolio item
type PortfolioItem = {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Sample portfolio data
const portfolioItems: PortfolioItem[] = [
  { id: 1, src: "/assets/wedding.jpg?height=400&width=600&text=Wedding", alt: "Wedding photo", category: "Wedding" },
  { id: 2, src: "/assets/portrait.jpg?height=400&width=600&text=Portrait", alt: "Portrait photo", category: "Portrait" },
  { id: 3, src: "/assets/event.jpg?height=400&width=600&text=Event", alt: "Event photo", category: "Event" },
  { id: 4, src: "/assets/nature.jpg?height=400&width=600&text=Nature", alt: "Nature photo", category: "Nature" },
  { id: 5, src: "/assets/Baby.jpg?height=400&width=600&text=Street", alt: "Street photo", category: "Baby" },
  { id: 6, src: "/assets/food.jpg?height=400&width=600&text=Architecture", alt: "Architecture photo", category: "Food" },
]

export function DarkPhotographerPortfolio() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navbarHeight = 64 // Adjust this value based on your navbar height
      const sectionTop = section.offsetTop - navbarHeight
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-100">
              Dev Makwana Photography
            </div>
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-gray-100 relative group"
              >
                About
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-300 hover:text-gray-100 relative group"
              >
                Portfolio
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-gray-100 relative group"
              >
                Services
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-gray-100 relative group"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/bg.jpg?height=1080&width=1920&text=Featured+Photo')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 bg-gray-900 bg-opacity-75 p-8 rounded-lg shadow-2xl max-w-6xl w-full mx-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                Dev Makwana
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-300">
                Professional Photographer
              </p>
              <p className="text-lg md:text-xl text-gray-400">
                Capturing life&apos;s precious moments
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src="/assets/dev.jpeg"
                alt="Dev Makwana"
                className="rounded-full w-64 h-64 object-cover border-4 border-gray-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-gray-800"
        initial="hidden"
        animate={scrollY > 300 ? "visible" : "hidden"}
        variants={fadeVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/assets/about.jpg?height=600&width=400&text=About+Dev +Makwana"
                alt="About Dev Makwana"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <p className="text-gray-300 mb-4">
                Hello! I&apos;m Dev Makwana, a passionate photographer based in
                Rajkot, Gujrat. For over 5 years, I&apos;ve been capturing life&apos;s
                most beautiful and fleeting moments through my lens. My journey
                into photography began with a love for storytelling and a desire
                to preserve memories in a way that words cannot.
              </p>
              <p className="text-gray-300 mb-4">
                I specialize in portrait, landscape, wedding, or fashion
                photography, and my style is all about candid moments, natural
                lighting & vibrant colors. I believe that every picture tells a
                story and every subject has a unique tale to tell. My goal is to
                capture those authentic, unguarded moments that truly reflect
                the emotions and essence of the people and places I photograph.
              </p>
              <p className="text-gray-300 mb-4">
                When I&apos;m not behind the camera, you can find me exploring new
                places, seeking inspiration in nature, or enjoying a good cup of
                coffee at a local café. Photography, to me, is not just about
                taking pictures; it&apos;s about creating a connection, evoking
                emotions, and sharing stories.
              </p>
              <p className="text-gray-300 mb-4">
                Thank you for visiting my portfolio. I look forward to the
                opportunity to capture your special moments and help tell your
                story through my photography.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className="py-20 bg-gray-900"
        initial="hidden"
        animate={scrollY > 800 ? "visible" : "hidden"}
        variants={fadeVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">My Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioItems.map((item) => (
              <div key={item.id} className="relative group">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <Image className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white font-semibold">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 bg-gray-800"
        initial="hidden"
        animate={scrollY > 1400 ? "visible" : "hidden"}
        variants={fadeVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <Camera className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Wedding Photography
              </h3>
              <p className="text-gray-300">
                Capture the magic of your special day with our professional
                wedding photography services.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <User className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Portrait Sessions</h3>
              <p className="text-gray-300">
                Showcase your personality with our expertly crafted portrait
                photography sessions.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <Camera className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Event Coverage</h3>
              <p className="text-gray-300">
                From corporate events to family gatherings, we&apos;ll document your
                special occasions.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-gray-900"
        initial="hidden"
        animate={scrollY > 2000 ? "visible" : "hidden"}
        variants={fadeVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="mt-12 flex flex-col items-center space-y-6">
            <div className="flex justify-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-gray-400 mr-2" />
                <span className="text-gray-300">+91 78189-99960</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-gray-400 mr-2" />
                <span className="text-gray-300">devmakwana338@gmail.com</span>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
              >
                <Instagram className="w-8 h-8" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
              >
                <Facebook className="w-8 h-8" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
              >
                <Twitter className="w-8 h-8" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
              >
                <Linkedin className="w-8 h-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
              >
                <Youtube className="w-8 h-8" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Dev Makwana Photography. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}