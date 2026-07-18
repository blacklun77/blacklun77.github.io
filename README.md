# 📱 blacklun's Portfolio
> **Secure, Local-first, and Data-Driven Mobile Solutions.**

안녕하세요, 사용자의 데이터를 안전하게 관리하고 시각화하는 앱 개발자 **blacklun**입니다.  
저는 복잡한 데이터를 직관적인 차트로 보여주면서도, 모든 정보를 기기 내부에 암호화하여 저장하며, 사용자 경험과 성능을 극대화하는 개발 철학을 실천하고 있습니다.

---

## 🛠 Tech Stack

### Framework & Language
- ![Flutter](https://img.shields.io/badge/Flutter-%2302569B.svg?style=flat&logo=Flutter&logoColor=white) 
- ![Dart](https://img.shields.io/badge/Dart-%230175C2.svg?style=flat&logo=dart&logoColor=white)

### State Management
- **Riverpod (3.x)**: AsyncNotifier 기반의 고도화된 선언형 상태 관리 및 반응형 데이터 동기화
- **Provider (ChangeNotifier)**: 단방향 데이터 흐름을 기반으로 한 독립적인 비즈니스 로직 격리

### Database & Security
- **SQLite (SQLCipher & sqlite3mc)**: 기기 내 로컬 데이터베이스의 AES-256 하드웨어 수준 암호화
- **Hive (AES-256)**: OS 하드웨어 보안 스토리지(`flutter_secure_storage`) 연동 기반 암호화 캐싱 및 빠른 Key-Value 저장소
- **Authenticated Asset Encryption**: gzip 압축 후 AES-256-GCM 알고리즘 및 HMAC-SHA256 디지털 서명 기반 에셋 무결성 검증
- **Local-first Architecture**: 백그라운드 화면 보호(Security Overlay), 임시 파일 즉각 파기(FileLifecycleService), 오프라인 우선의 독립적 데이터 제어

### DevOps & Tools
- **CI/CD**: Codemagic, GitHub Actions
- **Backend (Remote Control)**: Firebase Remote Config (HTTPS 화이트리스트 및 불변 상태 하드닝 래퍼 적용)

---

## 🚀 Featured Projects

### 1. 내 평가 기록 (My Eval Record)
- **Description**: 개인 성과 지표 관리 및 시각화 솔루션
- **Key Features**: 
  - 라인 차트 추이 분석 및 최고/최저 성과점 자동 하이라이트 (TalkBack/VoiceOver 무장애 차트 지원)
  - Clean Architecture 기반 UseCase 계층 캡슐화 및 Dart 3 Sealed Classes 패턴 매칭을 통한 상태 통제
  - 안드로이드 Impeller 엔진 명시 도입 및 햅틱/암묵적 애니메이션(Implicit Animations)을 통한 프리미엄 UX
  - SQLCipher 로컬 DB 암호화, 독립적인 `AchievementSanitizer` (XSS 방어), 백그라운드 블러 화면 보호 적용
- **Link**: [iOS App Store](https://apps.apple.com/app/my-eval-record/id6759724181) | [Google Play Store](https://play.google.com/store/apps/details?id=com.ks.my_eval_record)

### 2. 내 경조사 장부 (My Event Ledger)
- **Description**: 축의금, 조의금 등 다양한 경조사 비용을 한눈에 기록하고 관리하는 장부 앱
- **Key Features**: 
  - 금액 입력 퀵 버튼, 통계 대시보드 및 문화권(로케일) 맞춤 수입/지출 자동 색상 시스템
  - 데이터의 오입력을 원천 차단하는 수정 화면 내 고정 필드 뱃지 UI 분리 설계
  - Android 백업 우회 차단(`allowBackup=false` 및 exclude 규칙) 및 민감 로그 차단
  - CSV 백업 및 복원 기능 탑재, 백그라운드 즉각 블러 보안 오버레이 적용
- **Link**: [iOS App Store](https://apps.apple.com/app/%EB%82%B4-%EA%B2%BD%EC%A1%B0%EC%82%AC-%EC%9E%A5%EB%B6%80/id6759233404) | [Google Play Store](https://play.google.com/store/apps/details?id=com.ks.mymoneylog)

### 3. 공과금 기록 (Utility Log)
- **Description**: 전기, 수도, 가스 등 월별 공과금 사용량 및 비용을 관리하는 분석 앱
- **Key Features**: 
  - **온디바이스 OCR 기능 (Privacy-First)**: 카메라로 영수증/지로 용지를 촬영해 금액과 사용량 자동 추출
  - 카테고리별 통계 리포트 시각화 및 고해상도 PDF 리포트 생성/공유
  - CSV 데이터 백업/복원 시 생성되는 모든 임시 파일을 안전하게 파기하는 통합 생명주기 관리
  - 전역 에러 핸들러와 UIHelper를 통한 릴리즈 Red Screen 차단 및 자가 진단 피드백 제공
- **Link**: [iOS App Store](https://apps.apple.com/app/%EA%B3%B5%EA%B3%BC%EA%B8%88-%EA%B8%B0%EB%A1%9D/id6760272670) | [Google Play Store](https://play.google.com/store/apps/details?id=com.ks.utility_log)

### 4. 쉬운 불경 (Easy Sutra)
- **Description**: 반야심경, 금강경 등 대승 불교 경전을 오프라인 환경에서 공부할 수 있는 리딩 플랫폼
- **Key Features**: 
  - 결정론적 `group_id` 및 Row 분리형 다국어 스키마 구조로 DB 재설치 시에도 북마크와 메모를 완벽히 유지
  - **지연 시딩 (Lazy Seeding)** 및 O(1) 파일 접근 최적화 번들을 통한 앱 초기 실행 속도 비약적 향상
  - OS 내장 TTS 기반 끊김 없는 연속 독송, 탭-투-리드(Tap-to-Read) 및 100px 임계값 기반 스마트 이어읽기(Resume)
  - SQLite FTS5 풀텍스트 엔진을 활용한 실시간 고속 본문 검색
- **Link**: [iOS App Store](https://apps.apple.com/app/easy-sutra/id6761761924) | [Google Play Store](https://play.google.com/store/apps/details?id=com.easysutra.app)

### 5. 쉬운 독서 (ReadEase: Easy Reading)
- **Description**: 고전 문학 및 다양한 서적을 오프라인 환경에서 쾌적하게 읽고 메모하는 프리미엄 독서 앱
- **Key Features**: 
  - **지능형 계층적 시딩(Hierarchical Seeding)** 기법을 도입하여 본문 데이터 저장 공간을 최대 83% 절감
  - 완독 도서 수, 진행률 시각화 대시보드 및 100% 완독 달성 시 🏆 배지를 부여하는 성취 통계 제공
  - Sealed Class 기반 타입 안전 카테고리 관리 및 평소엔 본문에 집중하는 Pull-to-Reveal 필터 UI
  - AdMob 지능형 전면 광고 및 완독 시 흐름을 방해하지 않는 축하 동영상 광고(Video Interstitial) 탑재
- **Link**: [iOS App Store](https://apps.apple.com/app/readease-easy-reading/id6766005685) | [Google Play Store](https://play.google.com/store/apps/details?id=com.easyreadbook.app)

### 6. 쉬운 성경 (Easy Read Bible)
- **Description**: 다양한 성경 번역본을 오프라인에서 병렬로 대조해 읽고 묵상하는 프리미엄 성경 앱
- **Key Features**: 
  - **매일 묵상하는 오늘의 말씀 (Daily Verse)**: 햅틱 피드백을 동반한 마이크로 인터랙션 새로고침 및 실시간 다국어 동적 연동
  - 태블릿 등 대화면 기기를 지원하는 번역문/원문 상하 분할 보기 (Split-View) 및 단락별 심층 해설(Commentary)
  - 6개 국어 다국어 지원(한국어, 영어, 일본어, 중국어 3종) 및 미지원 로케일 접속 시 영어(en) 자동 Fallback
  - gzip+AES-256-GCM 암호화 에셋 패키징 및 디지털 서명(`manifest.sig`) 무결성 런타임 검증
- **Link**: [iOS App Store](https://apps.apple.com/app/easy-read-bible/id6770253137) | [Google Play Store](https://play.google.com/store/apps/details?id=com.easyreadbible.app)

### 7. 2048 퍼즐 게임 (Bloomix2048)
- **Description**: 정통 2048 룰에 귀여운 '이모지 진화 체인' 모드를 더한 반응형 퍼즐 게임
- **Key Features**: 
  - **글로벌 독창적 이모지 모드**: 동물(알🐣->드래곤🐉), 에너지(불꽃🔥->초신성💥) 체인 테마 탑재
  - 3×3부터 6×6까지 동적 그리드 최적화 및 뷰포트 비율에 맞춘 적응형 슬라이딩 애니메이션 연출
  - **자가 치유 부트스트랩 (Self-healing)**: 암호키 매칭 실패 등 DB 손상 시 파일을 리셋해 복원하는 예외 복구
  - 7회 연속 탭 시 실행되는 보조용 이스터 에그: 스마트 오토 플레이(Auto Play) 기능
- **Link**: [Google Play Store](https://play.google.com/store/apps/details?id=com.bloomix2048.app)

---

## 🔒 Security Philosophy
1. **Zero Server Transmission (Local-first)**: 사용자의 어떠한 개인 데이터도 서버로 수집하거나 전송하지 않고 전적으로 기기 내에 격리 관리합니다.
2. **Robust Multi-layer Encryption**: SQLCipher(SQLite) 및 Hive AES-256 암호화를 사용하며, 보안 키는 OS 수준 하드웨어 보안 스토리지(Keystore/Keychain)에 안전하게 소스 보호합니다.
3. **Data Integrity & Decoy Defense**: 에셋 파일의 디지털 서명 검증을 통한 무결성 런타임 확인 및 허니팟 지능형 방어로 무단 소스 분석 시도를 완벽히 차단합니다.
4. **Data Mobility**: CSV 백업/복원 및 PDF 리포팅 등 사용자가 자신의 정보에 대한 통제권을 보장합니다.

---

## 📫 Contact
- **Email**: [blacklun.yoo@gmail.com](mailto:blacklun.yoo@gmail.com)
- **Github**: [blacklun77.github.io](https://blacklun77.github.io/)

---
© 2026 blacklun. Built with Flutter.
