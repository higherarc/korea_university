'use client';

import Link from 'next/link';

const ContentSections = () => {
  const notices = [
    {
      id: 1,
      title: '2025학년도 1학기 뇌인지과학습 과목 신설...',
      date: '2024.12.15'
    },
    {
      id: 2,
      title: '2024년 2학기 뇌인지과학 실습 과목 신청 안...',
      date: '2024.11.20'
    },
    {
      id: 3,
      title: '2024년 1학기 뇌인지과학 실습 과목 온라인...',
      date: '2024.10.18'
    },
    {
      id: 4,
      title: '2023학년도 제2학기 융합전공정책 시행 안내',
      date: '2024.09.25'
    }
  ];

  const galleryItems = [
    {
      id: 1,
      title: '2022.10.19 (수) 12-1시 뇌과학과 초청강연...',
      date: '2022.10.19'
    },
    {
      id: 2,
      title: '10월 5일 수요일 12시 뇌과학과 초청 강연 - F...',
      date: '2022.10.05'
    },
    {
      id: 3,
      title: '9월 21일 수요일 뇌과학과 초청강연',
      date: '2022.09.21'
    },
    {
      id: 4,
      title: '6월 22일 (수) 2022년 1학기 뇌과학과 공동...',
      date: '2022.06.22'
    }
  ];

  const publications = [
    {
      id: 1,
      title: '외국대학 이슈 학업 인정 절차에 대해',
      subtitle: '뇌인지과학융합전공에 진입 전 수강한 과목의...'
    },
    {
      id: 2,
      title: '신리학과 I 융합학과와 등록 포함한 특정 학과...',
      subtitle: '교육전공포털 보면 일반생활역학연구원 전공...'
    },
    {
      id: 3,
      title: '고등과정포털 보면 일반생활역학연구원 전공...',
      subtitle: '신리학과 I 융합학과와 등록 포함한 특정 학과...'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 공지사항 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 section-title">공지사항</h3>
              <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                더보기 +
              </Link>
            </div>
            <ul className="space-y-4">
              {notices.map((notice) => (
                <li key={notice.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                  <Link href="#" className="block hover:text-blue-600 transition-colors">
                    <p className="text-sm text-gray-700 line-clamp-2 mb-1">
                      {notice.title}
                    </p>
                    <p className="text-xs text-gray-500">{notice.date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 갤러리 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 section-title">갤러리</h3>
              <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                더보기 +
              </Link>
            </div>
            <ul className="space-y-4">
              {galleryItems.map((item) => (
                <li key={item.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                  <Link href="#" className="block hover:text-blue-600 transition-colors">
                    <p className="text-sm text-gray-700 line-clamp-2 mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 정기간행물 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 section-title">정기간행물</h3>
              <Link href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                더보기 +
              </Link>
            </div>
            <ul className="space-y-4">
              {publications.map((pub) => (
                <li key={pub.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                  <Link href="#" className="block hover:text-blue-600 transition-colors">
                    <p className="text-sm font-medium text-gray-800 mb-1">
                      {pub.title}
                    </p>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {pub.subtitle}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSections;
