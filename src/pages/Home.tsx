import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="text-center space-y-8 max-w-2xl">
        <h1 className="text-6xl md:text-7xl font-bold text-white animate-glow font-heading">
          Launching Soon
        </h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          Get ready for the next generation of digital experiences. 
          Join us on this exciting journey into the future.
        </p>
        <button className="group px-8 py-3 rounded-full bg-button-primary text-white font-medium 
          transition-all duration-300 hover:bg-button-hover hover:scale-105 
          hover:shadow-[0_0_30px_rgba(110,58,255,0.5)] active:scale-95
          flex items-center justify-center space-x-2">
          <span>Join Now</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      
      {/* Decorative Planets */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-primary/20 
        blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-secondary/20 
        blur-3xl animate-float-delayed"></div>
    </main>
  );
}

export default Home;