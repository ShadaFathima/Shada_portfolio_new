import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 mt-20 border-t border-white/10">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-500 font-semibold">Shada Fathima</span>. All rights reserved.
      </p>
      <p className="text-xs text-gray-600 mt-2 flex justify-center items-center gap-1 mx-auto max-w-xs">
        Designed & developed with{" "}
        <Heart className="text-yellow-500 w-4 h-4 inline" /> by{" "}
        <span className="text-yellow-500">Shada Fathima</span>
      </p>
    </footer>
  );
}
