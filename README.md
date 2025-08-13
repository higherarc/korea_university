# 한반도보건사회연구소 웹사이트

고려대학교 한반도보건사회연구소의 공식 웹사이트입니다.

## 프로젝트 구조

```
korea_university/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── HeroSection.tsx
│       ├── ContentSections.tsx
│       ├── BottomSections.tsx
│       └── Footer.tsx
└── public/
    └── images/
        ├── logo/          # 로고 이미지
        ├── slider/        # 메인 슬라이더 이미지
        └── content/       # 콘텐츠 이미지
```

## 이미지 파일 안내

다음 이미지 파일들을 해당 폴더에 추가해주세요:

### 로고 이미지 (public/images/logo/)
- `ku-logo.png` - 고려대학교 로고 (60x60px 권장)
- `footer-logo.png` - 푸터용 로고 (200x60px 권장)

### 슬라이더 이미지 (public/images/slider/)
- `main-building.jpg` - 메인 건물 이미지 (1920x600px 권장)
- `research-facility.jpg` - 연구시설 이미지 (1920x600px 권장)
- `conference.jpg` - 컨퍼런스 이미지 (1920x600px 권장)

### 콘텐츠 이미지 (public/images/content/)
- `members.jpg` - 구성원 섹션 이미지 (400x300px 권장)
- `research.jpg` - 연구현황 섹션 이미지 (400x300px 권장)
- `future.jpg` - 미래예측 섹션 이미지 (400x300px 권장)

## 시작하기

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm run dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- **이미지 슬라이더**: 자동 재생 및 네비게이션 기능
- **모던 UI/UX**: Tailwind CSS를 사용한 깔끔한 디자인
- **접근성**: 스크린 리더 및 키보드 네비게이션 지원

## 기술 스택

- **Next.js 15** - React 프레임워크
- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 CSS 프레임워크
- **ESLint** - 코드 품질 관리

## 배포

1. 프로덕션 빌드:
```bash
npm run build
```

2. 프로덕션 서버 실행:
```bash
npm run start
```