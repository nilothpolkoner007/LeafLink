import React from 'react';
import { ArrowRight, Sprout, Calculator } from 'lucide-react';
import Stats from './Stats';
import NewsletterForm from '../forms/NewsletterForm';
import ImpactCalculator from '../calculator/ImpactCalculator';

export default function Hero() {
  return (
    <div className="relative bg-green-50 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
          alt="Beautiful forest"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-6">
            Unite for Earth
            <br />
            <span className="text-3xl md:text-4xl text-green-700">Plant Trees & Reduce Plastic</span>
          </h1>
          
          <p className="text-xl text-green-800 mb-8">
            Join our global movement to restore Earth's green cover and combat plastic pollution. Every action counts towards a sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
              <span>Plant a Tree</span>
              <Sprout className="h-5 w-5" />
            </button>
            
            <button className="flex items-center justify-center space-x-2 bg-white text-green-700 px-8 py-3 rounded-full hover:bg-green-50 transition-colors border-2 border-green-600">
              <Calculator className="h-5 w-5" />
              <span>Calculate Impact</span>
            </button>
          </div>

          <NewsletterForm />
        </div>

        <ImpactCalculator />
      </div>
      
      <Stats />
    </div>
  );
}