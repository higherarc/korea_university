'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-600 text-white text-sm py-2">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 flex justify-end space-x-4">
          <Link href="#" className="hover:text-blue-300">Home</Link>
          <span>|</span>
          <Link href="#" className="hover:text-blue-300">로그인</Link>
          <span>|</span>
          <Link href="#" className="hover:text-blue-300">KUPID</Link>
          <span>|</span>
          <Link href="#" className="hover:text-blue-300">Sitemap</Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between py-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <Image
                src="/images/logo/logo.svg"
                alt="고려대학교 한반도보건사회연구소"
                width={400}
                height={120}
                className="object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="#" className="text-lg font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors">
                소개
              </Link>
              <Link href="#" className="text-lg font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors">
                연구
              </Link>
              <Link href="#" className="text-lg font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors">
                데이터허브
              </Link>
              <Link href="#" className="text-lg font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors">
                소통
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="block w-full h-0.5 bg-gray-600"></span>
                <span className="block w-full h-0.5 bg-gray-600"></span>
                <span className="block w-full h-0.5 bg-gray-600"></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 border-t">
              <nav className="flex flex-col space-y-2 pt-4">
                <Link href="#" className="text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">
                  소개
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">
                  연구
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">
                  데이터허브
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">
                  소통
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
