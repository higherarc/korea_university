'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Menu */}
          <div>
            <div className="bg-gray-700 rounded-lg p-4 mb-6">
              <h4 className="text-lg font-bold mb-4 text-center">QUICK MENU</h4>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/logo/footer-logo.png"
                  alt="고려대학교 생명과학대학 생명공학부 생명정보학전공"
                  width={200}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">연락처</h4>
            <div className="space-y-2 text-sm">
              <p>주소: 서울특별시 성북구 안암로 145 고려대학교</p>
              <p>전화: 02-3290-3114</p>
              <p>팩스: 02-3290-3115</p>
              <p>이메일: info@korea.ac.kr</p>
            </div>

            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                이메일무단수집거부
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 Korea University Institute for Health and Social Affairs on Korean Peninsula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
