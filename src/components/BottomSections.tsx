'use client';

import Image from 'next/image';
import Link from 'next/link';

const BottomSections = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 구성원 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg card-hover">
            <div className="relative h-64">
              <Image
                src="/images/content/members.jpg"
                alt="구성원"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <h3 className="text-2xl font-bold mb-2">구성원</h3>
                  <p className="text-sm opacity-90">연구진 소개</p>
                </div>
              </div>
            </div>
            <Link href="#" className="absolute inset-0 z-10">
              <span className="sr-only">구성원 페이지로 이동</span>
            </Link>
          </div>

          {/* 연구 현황 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg card-hover">
            <div className="relative h-64">
              <Image
                src="/images/content/research.jpg"
                alt="연구 현황"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <h3 className="text-2xl font-bold mb-2">연구 현황</h3>
                  <p className="text-sm opacity-90">진행중인 연구</p>
                </div>
              </div>
            </div>
            <Link href="#" className="absolute inset-0 z-10">
              <span className="sr-only">연구 현황 페이지로 이동</span>
            </Link>
          </div>

          {/* 미래 예측 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg card-hover">
            <div className="relative h-64">
              <Image
                src="/images/content/future.jpg"
                alt="미래 예측"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <h3 className="text-2xl font-bold mb-2">미래 예측</h3>
                  <p className="text-sm opacity-90">한반도 미래 전망</p>
                </div>
              </div>
            </div>
            <Link href="#" className="absolute inset-0 z-10">
              <span className="sr-only">미래 예측 페이지로 이동</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSections;
