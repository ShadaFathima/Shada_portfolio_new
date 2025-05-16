import React from "react";
import { Code } from "lucide-react";
import FloatingNav from "./FloatingNav";
export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-black text-white relative min-h-screen">
      <div className="text-center mb-16">
        <Code className="text-yellow-500 w-10 h-10 mx-auto mb-4" />
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          A glimpse into what I've built, explored, and crafted.
        </p>
      </div>
      <FloatingNav />

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Venue Booking System */}
        <div className="bg-white/10 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-yellow-400">Venue Booking System </h3>
          <p className="text-gray-300 mt-2">
            A full-stack B2B platform for managing venue reservations and client registrations. Built using <span className="text-yellow-500">React.js</span> for the frontend and <span className="text-yellow-500">Python Django</span> for the backend, it enables businesses to register their profiles, manage venue listings, handle bookings, and track reservations in real-time. The system supports user roles, authentication, and secure data handling.
          </p>
        </div>

        {/* ECG Variation Detection */}
        <div className="bg-white/10 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-yellow-400">ECG Variation Detection</h3>
          <p className="text-gray-300 mt-2">
            A machine learning project focused on detecting abnormal variations in ECG signals. Developed using <span className="text-yellow-500">Python, Pandas, NumPy, Matplotlib, and Scikit-learn</span>, the system processes real ECG datasets, applies peak detection, extracts features, and trains classification models to assist in early cardiac anomaly detection.
          </p>
        </div>
      </div>
    </section>
  );
}
