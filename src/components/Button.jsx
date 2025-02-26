"use client";

export default function Button({ children, className = "" }) {
  return (
    <button
      className={`w-fit bg-secondary text-white px-4 py-2 rounded-lg shadow-lg shadow-red-500/50 transition duration-300 hover:shadow-secondary hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}
