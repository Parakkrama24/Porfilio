import React from "react";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className="bg-black mt-5 py-8 px-4 sm:px-6 lg:px-8 pt-5">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold mb-2 text-white">Contact</h2>
          <p className="text-lg text-gray-600">Feel free to reach out!</p>
        </div>
        <ul className="space-y-4">
          <li className="flex items-center justify-center space-x-3">
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email icon"
              className="w-6 h-6"
            />
            <a
              href="mailto:parakkramdasanyaka.4@gmail.com"
              className="text-blue-500 hover:underline"
            >
              parakkramdasanyaka.4@gmail.com
            </a>
          </li>
          <li className="flex items-center justify-center space-x-3">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
              className="w-6 h-6"
            />
            <a
              href="https://www.linkedin.com/in/parakkrama-dasanayaka-2a43b5216"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/Parakkrama Dasanayaka
            </a>
          </li>
          <li className="flex items-center justify-center space-x-3">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
              className="w-6 h-6"
            />
            <a
              href="https://github.com/Parakkrama24"
              className="text-blue-500 hover:underline"
            >
              github.com/Parakkrama24
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
