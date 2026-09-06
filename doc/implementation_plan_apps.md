# Implementation Plan - 심플 앱 목록 페이지 (apps.html) 제작

사용자의 요청에 따라 복잡한 포트폴리오 스타일이 아닌, 좌측에 앱 아이콘 및 명칭, 우측에 스토어 다운로드 버튼(App Store, Google Play)이 배치된 심플하고 직관적인 표(테이블/카드 리스트) 형식의 `apps.html` 페이지를 제작합니다.

## User Review Required
> [!NOTE]
> - `apps.html`은 독립된 단일 페이지로 생성되어 기존 `index.html`에 영향을 주지 않습니다.
> - 사용자가 `assets/icons/` 폴더에 배치한 8개의 앱 아이콘을 자동으로 연동합니다.
> - 5개 언어(한국어, 영어, 일본어, 중국어 간체/번체) 언어 스위처 및 공식 스토어 뱃지가 포함됩니다.

## Proposed Changes

### Web Application

#### [NEW] [apps.html](file:///c:/development/blacklun77.github.io/apps.html)
- **모던하고 세련된 심플 UI**:
  - 다크 테마 기반의 글래스모피즘(Glassmorphism) 카드/테이블 레이아웃
  - 반응형 디자인(PC에서는 가로형 테이블/행 구조, 모바일에서는 유연한 행 배치)
- **헤더 영역**:
  - 심플한 타이틀("My Apps" / "출시 앱 목록") 및 언어 선택 버튼(EN / 한 / 日 / 简 / 繁)
- **앱 리스트 (총 8종)**:
  1. **블룸믹스 크러시 (Bloomix Crush)** -> `assets/icons/bloomix_crush_app_icon.png` (iOS / Android)
  2. **쉬운 성경 (Easy Read Bible)** -> `assets/icons/easy_read_bible_app_icon.png` (iOS / Android)
  3. **2048 퍼즐 (Bloomix 2048)** -> `assets/icons/bloomix2048_app_icon.png` (Android)
  4. **쉬운 독서 (ReadEase: Easy Reading)** -> `assets/icons/easy_read_book_app_icon.png` (iOS / Android)
  5. **쉬운 불경 (Easy Sutra)** -> `assets/icons/easy_sutra_app_icon.png` (iOS / Android)
  6. **공과금 기록 (Utility Log)** -> `assets/icons/utility_log_app_icon.png` (iOS / Android)
  7. **내 평가 기록 (My Eval Record)** -> `assets/icons/my_eval_record_app_icon.png` (iOS / Android)
  8. **내 경조사 장부 (My Event Ledger)** -> `assets/icons/my_money_log_app_icon.png` (iOS / Android)

## Verification Plan
1. `apps.html` 파일 생성 확인
2. 브라우저 subagent 또는 정적 검증을 통해 레이아웃 및 이미지 링크가 정확한지 확인
