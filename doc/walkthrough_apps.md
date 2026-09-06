# Walkthrough - 심플 앱 목록 페이지 (apps.html) 제작 완료

사용자의 요청에 따라, 포트폴리오 스타일과 분리된 **표/카드 행 형식의 심플 앱 다운로드 목록 페이지(`apps.html`)**를 제작 완료하였습니다.

## 주요 구현 사항

1. **레이아웃 구조**:
   - **좌측**: `assets/icons/` 폴더의 앱별 정품 아이콘(둥근 모서리 + 그림자 효과) + 앱 이름 + 간단한 핵심 태그
   - **우측**: 공식 **[App Store 다운로드]** 뱃지 및 **[Google Play 다운로드]** 뱃지 버튼 배치
   - PC/태블릿/모바일 기기 크기에 맞춰 자연스럽게 반응하는 반응형 테이블/카드 리스트 디자인

2. **다국어(i18n) 지원**:
   - 5개 언어(`EN`, `한`, `日`, `简`, `繁`) 원클릭 전환 스위처 제공
   - 접속 시 브라우저 설정 로케일 또는 저장된 언어 자동 감지
   - 앱스토어 및 구글 플레이 뱃지 링크가 각 국가/언어별 공식 스토어 링크와 자동 연동

3. **등록된 앱 8종**:
   - 🌸 **블룸믹스 크러시 (Bloomix Crush)** (iOS / Android)
   - ✝️ **쉬운 성경 (Easy Read Bible)** (iOS / Android)
   - 🎮 **2048 퍼즐 (Bloomix 2048)** (Android)
   - 📖 **쉬운 독서 (ReadEase: Easy Reading)** (iOS / Android)
   - ☸️ **쉬운 불경 (Easy Sutra)** (iOS / Android)
   - ⚡ **공과금 기록 (Utility Log: Secure Bill)** (iOS / Android)
   - 📊 **내 평가 기록 (My Eval Record)** (iOS / Android)
   - 📔 **내 경조사 장부 (My Event Ledger)** (iOS / Android)

---
- 생성 파일: [apps.html](file:///c:/development/blacklun77.github.io/apps.html)
- 계획 문서: [implementation_plan_apps.md](file:///c:/development/blacklun77.github.io/doc/implementation_plan_apps.md)
