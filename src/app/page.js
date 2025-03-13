"use client";
import Image from "next/image";
import Logo from "../assets/logo.jpg";
import LandingImg from "../assets/job2.jpg";
import { useState } from "react";
import { Menu } from "lucide-react"; // For the hamburger menu icon
import Link from "next/link";
import {Button } from "../../components/ui/button";
import links from "../../utils/links";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <main className="h-screen flex flex-col ">
      {/* Header Section */}
      <header className="max-w-6xl  px-4 sm:px-8 py-6 flex items-center justify-between cursor-pointer">
      <div className="flex items-center space-x-3">
          <Image
            className="w-14 h-auto"
            src={Logo}
            alt="Job Tracker Logo"
          />
          <span className="text-xl font-bold text-sky-700">
            YOU TRACK
          </span>
        </div>

        {/* Navbar for larger screens */}
        <nav className="hidden md:flex items-center space-x-6">
          <button className="text-gray-800 font-semibold hover:text-gray-600">Log In</button>
          <button className="text-gray-800 font-semibold hover:text-gray-600">Sign Up</button>
        </nav>

        {/* Hamburger Menu for smaller screens */}
        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg p-4">
          <ul className="space-y-4">
            <li>
              <button className="text-gray-800 font-semibold hover:text-gray-600">Log In</button>
            </li>
            <li>
              <button className="text-gray-800 font-semibold hover:text-gray-600">Sign Up</button>
            </li>
          </ul>
        </nav>
      )}

      {/* Landing Section */}
      <section className=" flex-grow grid lg:grid-cols-2 items-center max-w-6xl mx-auto px-4 sm:px-8 ">
        {/* Main Text */}
        <div className="text-center lg:text-left">
          <h1 className=" capitalize text-3xl lg:text-6xl font-extrabold text-700 mb-4">
            Stay on Top of Your Job Applications
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Simplify your job search process. Track applications, stay organized, and never miss an update again.
          </p>
          {/* <button className="bg-sky-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
          </button> */}
          <Button  className="mt-4" asChild>
          <Link href="/add-job" >Start Tracking Now</Link>
          </Button>

          
        </div>

        {/* Landing Image (Visible on larger screens) */}
        <Image
          src={LandingImg}
          alt="landing"
          className="rounded-sm shadow-lg hidden lg:block"
        />
      </section>
    </main>
  );
}
