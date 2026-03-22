# PRD: DevTools Hub — 무료 온라인 개발자 도구 모음

---

## 1. Summary

DevTools Hub는 개발자와 디자이너를 위한 무료 온라인 도구 모음 웹사이트이다. JSON 포매터, Base64 인코더, UUID 생성기 등 자주 쓰는 개발 유틸리티를 빠르고 깔끔한 웹 인터페이스로 제공한다. SEO를 통해 유기적 트래픽을 확보하고, Google AdSense 광고로 수익을 창출하는 모델이다.

---

## 2. Contacts

| 이름 | 역할 | 비고 |
|------|------|------|
| sewonkim | 1인 개발자 / PM / 디자이너 | 풀스택 개발, 기획, 디자인, SEO 전담 |

---

## 3. Background

### 3.1 Context

개발자들은 매일 JSON 정리, Base64 변환, UUID 생성 같은 반복 작업을 한다. 이런 작업을 위해 매번 검색해서 온라인 도구를 찾아 쓴다. 기존 도구 사이트들은 대부분 느리고, 광고가 과하며, 디자인이 오래됐다.

### 3.2 Why Now?

- **Google AI Overviews 시대**: 콘텐츠 중심 사이트(블로그, 비교 사이트)는 AI가 답변을 대신 보여주면서 클릭률이 하락하고 있다. 반면 **도구 사이트는 AI가 대체할 수 없다** — 사용자가 직접 입력하고 결과를 받아야 하기 때문이다.
- **AI 콘텐츠 패널티 무관**: 도구 자체가 제품이므로 Google의 Helpful Content Update에 영향받지 않는다.
- **경쟁 사이트 UX 약점**: 주요 경쟁 사이트(codebeautify.org, jsonformatter.org)의 PageSpeed 점수가 60-80 수준. 최신 프레임워크로 95+를 달성하면 SEO 우위를 확보할 수 있다.

### 3.3 What Made This Possible?

- Next.js App Router + SSG로 도구별 정적 페이지 생성이 쉬워졌다.
- Vercel 무료 플랜으로 CDN, HTTPS, 배포 자동화가 비용 없이 가능하다.
- 풀스택 개발 역량으로 1인 운영이 가능하다.

---

## 4. Objective

### 4.1 목표

SEO 기반 유기적 트래픽을 확보하여 AdSense 광고 수익으로 월 $500-3,000의 안정적인 수동 소득(Passive Income)을 만든다.

### 4.2 회사/개인 이점

- 한 번 만들면 유지보수 최소화로 장기 수익 가능 (Evergreen 도구)
- 풀스택 역량을 포트폴리오로 활용 가능
- 도구 확장으로 수익 선형 성장

### 4.3 Key Results (SMART OKR)

| 기간 | 목표 (Objective) | 핵심 결과 (Key Results) |
|------|-----------------|----------------------|
| **Month 1-2** (MVP) | MVP 출시 및 SEO 기반 마련 | KR1: 도구 3개 출시, PageSpeed 95+ 달성 |
| | | KR2: Google Search Console 인덱싱 완료 |
| | | KR3: 타겟 키워드 1개 이상 Google Top 30 진입 |
| **Month 3-4** (성장) | 초기 트래픽 확보 | KR1: 도구 10개로 확장 |
| | | KR2: 월 10,000 PV 달성 |
| | | KR3: AdSense 승인 및 월 $50+ 수익 |
| **Month 5-8** (확장) | 안정적 수익 기반 구축 | KR1: 도구 30개로 확장 |
| | | KR2: 월 100,000 PV 달성 |
| | | KR3: 월 $500+ 수익 |
| **Month 9-12** (스케일) | 수익 극대화 | KR1: 도구 50개+ |
| | | KR2: 월 500,000 PV 달성 |
| | | KR3: 월 $1,000-3,000 수익 |

---

## 5. Market Segment(s)

### 5.1 Primary: 소프트웨어 개발자

- **문제**: 매일 JSON 정리, 인코딩/디코딩, ID 생성 등을 해야 하지만, 기존 도구 사이트가 느리고 광고가 많다.
- **행동 패턴**: "json formatter online" 같은 키워드를 Google에 검색하여 첫 번째 결과를 클릭한다.
- **규모**: 전 세계 소프트웨어 개발자 약 2,870만 명 (2024 Statista 기준). 이 중 다수가 매일 온라인 도구를 사용한다.

### 5.2 Secondary: 웹 디자이너 / 프론트엔드 개발자

- **문제**: 색상 변환(HEX↔RGB), CSS 단위 변환(px↔rem), 그라데이션 생성 등이 자주 필요하다.
- **행동 패턴**: 작업 중 빠르게 검색하여 도구를 쓰고 돌아간다.

### 5.3 Tertiary: 한국어 사용 개발자

- **문제**: 한국어로 지원되는 개발자 도구 사이트가 거의 없다.
- **기회**: 한국어 시장은 경쟁이 낮아 빠르게 점유 가능하다.

### 5.4 Constraints

- 1인 개발이므로 도구 추가 속도에 한계가 있다.
- AdSense 승인까지 최소 10개 이상의 실질적 페이지와 일정 트래픽이 필요하다.
- 신규 도메인의 Domain Authority가 낮아 초기 SEO 랭킹 진입에 시간이 걸린다.

---

## 6. Value Proposition(s)

### 6.1 Customer Jobs (해결하는 작업)

| Job | 현재 대안 | DevTools Hub의 해결 방식 |
|-----|----------|------------------------|
| JSON 데이터를 빠르게 정리/검증하고 싶다 | jsonformatter.org (느림, 광고 과다) | 즉시 로딩, 깔끔한 UI, 실시간 검증 |
| Base64 인코딩/디코딩이 필요하다 | base64decode.org (기능 단순) | 텍스트 + 파일 + 이미지 Base64 통합 지원 |
| UUID를 빠르게 생성해야 한다 | uuidgenerator.net | 벌크 생성, v1/v4/v7 선택, 복사 버튼 |
| 한국어로 된 개발 도구가 필요하다 | 거의 없음 | 한국어 완벽 지원, 한국 SEO 최적화 |

### 6.2 Gains (얻는 것)

- 빠른 로딩 속도 (경쟁 사이트 대비 2-3배 빠름)
- 광고에 방해받지 않는 깔끔한 작업 환경
- 다크 모드로 눈의 피로 감소
- 오프라인에서도 사용 가능 (PWA)
- 하나의 사이트에서 모든 도구 접근

### 6.3 Pains Avoided (피하는 것)

- 느린 페이지 로딩으로 인한 작업 흐름 중단
- 과도한 광고로 인한 불쾌한 경험
- 여러 사이트를 돌아다니며 도구를 찾는 번거로움

### 6.4 경쟁 우위 (Value Curve)

| 요소 | codebeautify.org | jsonformatter.org | 10015.io | **DevTools Hub** |
|------|-----------------|------------------|----------|-----------------|
| 도구 수 | ★★★★★ | ★★★ | ★★★★ | ★★ → ★★★★ |
| 로딩 속도 | ★★ | ★★★ | ★★★ | **★★★★★** |
| UI/UX | ★★ | ★★★ | ★★★★ | **★★★★★** |
| 광고 침해도 | ★★★★★ (많음) | ★★★★ (많음) | ★★ | **★** (최소) |
| 다크 모드 | ✗ | ✗ | ✓ | **✓** |
| 한국어 | ✗ | ✗ | ✗ | **✓** |
| PWA/오프라인 | ✗ | ✗ | ✗ | **✓** |
| SEO 최적화 | ★★★★ | ★★★★★ | ★★ | **★★★★★** |

---

## 7. Solution

### 7.1 UX / User Flow

```
[사용자 여정]

1. Google에서 "json formatter online" 검색
2. DevTools Hub의 JSON Formatter 페이지 클릭 (독립 SEO 랜딩)
3. 바로 JSON 입력 영역이 보임 → 붙여넣기
4. 실시간으로 포맷팅 결과 표시
5. "Copy" 버튼으로 결과 복사
6. (선택) 다른 도구 탐색 → 사이드바/헤더 네비게이션
7. (선택) PWA 설치 → 다음부터 바로 접근
```

```
[페이지 레이아웃 — 도구 페이지]

┌─────────────────────────────────────────────┐
│  Logo    [도구 카테고리 Nav]    🌙 다크모드  │
├─────────────────────────────────────────────┤
│                                             │
│  H1: JSON Formatter & Validator             │
│  설명: JSON 데이터를 보기 좋게 정리합니다    │
│                                             │
│  ┌──────────────┐  ┌──────────────┐         │
│  │              │  │              │         │
│  │   INPUT      │→ │   OUTPUT     │         │
│  │   (textarea) │  │   (결과)     │         │
│  │              │  │              │         │
│  └──────────────┘  └──────────────┘         │
│                                             │
│  [Format] [Validate] [Minify] [Copy] [Clear]│
│                                             │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│  📋 관련 도구: Base64 | UUID | Hash         │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│                                             │
│  💡 사용 가이드 (SEO 콘텐츠)                 │
│  "JSON이란? JSON을 왜 포맷팅하나요?..."      │
│                                             │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│  [광고 영역 — 도구 아래, 콘텐츠 영역]         │
│                                             │
├─────────────────────────────────────────────┤
│  Footer: About | Privacy | Sitemap | © 2026 │
└─────────────────────────────────────────────┘
```

```
[페이지 레이아웃 — 홈페이지]

┌─────────────────────────────────────────────┐
│  Logo    [도구 카테고리 Nav]    🌙 다크모드  │
├─────────────────────────────────────────────┤
│                                             │
│  H1: Free Online Developer Tools            │
│  서브: 빠르고 깔끔한 개발자 도구 모음         │
│                                             │
│  🔍 도구 검색 (Search bar)                   │
│                                             │
│  [카테고리별 도구 그리드]                     │
│                                             │
│  📝 Formatters      🔄 Converters           │
│  ├ JSON Formatter   ├ Hex to RGB            │
│  ├ SQL Formatter    ├ Timestamp Converter    │
│  └ HTML Formatter   └ CSV to JSON           │
│                                             │
│  🔐 Encoders        🎲 Generators           │
│  ├ Base64           ├ UUID Generator         │
│  ├ URL Encoder      ├ Hash Generator         │
│  └ JWT Decoder      └ Password Generator     │
│                                             │
│  🧪 Testers                                 │
│  ├ Regex Tester                             │
│  └ Cron Tester                              │
│                                             │
├─────────────────────────────────────────────┤
│  Footer: About | Privacy | Sitemap | © 2026 │
└─────────────────────────────────────────────┘
```

### 7.2 Key Features

#### MVP (Month 1-2): 핵심 도구 3개 + 인프라

**F1: JSON Formatter & Validator**
- JSON 입력 → 자동 포맷팅 (들여쓰기 2/4 탭 선택)
- 실시간 문법 검증 → 에러 위치 하이라이트
- Minify (압축) 기능
- JSON → CSV, YAML 변환 (확장 기능)
- 파일 업로드/다운로드
- 복사 버튼 (클립보드)
- 타겟 키워드: json formatter online, json beautifier, json validator

**F2: Base64 Encoder/Decoder**
- 텍스트 → Base64 인코딩/디코딩
- 파일 → Base64 변환
- 이미지 → Base64 Data URI 변환 (미리보기 포함)
- 실시간 변환 (입력하면 바로 결과)
- 타겟 키워드: base64 decode, base64 encode, base64 image decoder

**F3: UUID Generator**
- UUID v4 (랜덤) 생성 — 기본
- UUID v1 (타임스탬프 기반) 지원
- 벌크 생성 (1-100개 한 번에)
- 대문자/소문자/하이픈 유무 옵션
- 복사 버튼
- 타겟 키워드: uuid generator, uuid v4 generator, bulk uuid generator

**F0: 공통 인프라**
- 반응형 레이아웃 (모바일/태블릿/데스크톱)
- 다크 모드 (시스템 설정 연동 + 수동 토글)
- PWA 매니페스트 + 서비스 워커 (오프라인 지원)
- SEO 기본: sitemap.xml, robots.txt, 구조화 데이터
- 각 도구별 독립 URL (/tools/json-formatter, /tools/base64, /tools/uuid)
- 한국어/영어 i18n 지원 (/ko/tools/..., /en/tools/...)
- Google Analytics 4 + Google Search Console 연동
- About, Privacy Policy, Contact 페이지 (AdSense 신청 요건)

#### Phase 2 (Month 3-4): 도구 10개 확장

| # | 도구 | 타겟 키워드 | 개발 난이도 |
|---|------|-----------|-----------|
| 4 | Timestamp Converter | unix timestamp converter, epoch converter | ★☆☆ |
| 5 | Hash Generator (MD5/SHA) | md5 hash generator, sha256 online | ★☆☆ |
| 6 | Color Converter | hex to rgb, rgb to hex, color picker | ★★☆ |
| 7 | URL Encoder/Decoder | url encode online, url decode | ★☆☆ |
| 8 | Regex Tester | regex tester, regex101 alternative | ★★★ |
| 9 | Cron Expression Generator | cron expression generator, crontab guru | ★★☆ |
| 10 | CSV ↔ JSON Converter | csv to json, json to csv converter | ★★☆ |

#### Phase 3 (Month 5-8): 도구 30개 확장

| # | 도구 | 타겟 키워드 |
|---|------|-----------|
| 11 | JWT Decoder | jwt decoder, jwt token generator |
| 12 | SQL Formatter | sql formatter online, sql beautifier |
| 13 | px ↔ rem Converter | px to rem converter |
| 14 | Diff Checker | diff checker online, text compare |
| 15 | Lorem Ipsum Generator | lorem ipsum generator |
| 16 | chmod Calculator | chmod calculator |
| 17 | HTTP Status Code Reference | http status codes list |
| 18 | HTML Formatter | html formatter, html beautifier |
| 19 | JavaScript Beautifier | javascript beautifier |
| 20 | YAML ↔ JSON Converter | yaml to json, json to yaml |
| 21-30 | 추가 도구 | 트래픽 데이터 기반 선정 |

#### Phase 4 (Month 9-12): 프리미엄 기능

- API 제공 (Rate-limited free tier + 유료 플랜)
- 벌크 처리 기능 (파일 일괄 변환)
- 사용자 설정 저장 (로그인 없이 localStorage)
- 커뮤니티 요청 도구 추가

### 7.3 Technology

| 레이어 | 기술 | 선택 이유 |
|--------|------|----------|
| **프레임워크** | Next.js 15 (App Router) | SSG로 정적 페이지 생성 → 빠른 로딩, SEO 최적화 |
| **스타일링** | Tailwind CSS v4 | 빠른 UI 개발, 다크 모드 내장, 번들 사이즈 최소 |
| **호스팅** | Vercel (Free Plan) | 자동 CDN, HTTPS, CI/CD, 무료 |
| **도메인** | 미정 (예: devtools.kr, toolhub.dev) | ~$10-15 |
| **분석** | Google Analytics 4 + Search Console | 무료, SEO 모니터링 필수 |
| **광고** | Google AdSense | 가장 보편적, 자동 광고 최적화 |
| **i18n** | next-intl 또는 next-i18next | 한국어/영어 경로 기반 라우팅 |
| **PWA** | next-pwa 또는 Serwist | 오프라인 지원, 앱 설치 |
| **코드 에디터** | CodeMirror 6 또는 Monaco Editor | JSON/SQL 등 구문 강조 필요 시 |

### 7.4 Assumptions

| # | 가정 | 검증 상태 | 비고 |
|---|------|---------|------|
| 1 | 사용자들이 설치 없이 웹 도구를 선호한다 | ✅ 검증됨 | 경쟁 사이트 트래픽이 이를 증명 |
| 2 | 도구별 독립 SEO 페이지가 랭킹에 유리하다 | 🟡 부분 검증 | 경쟁 사이트 구조 분석 결과 지지 |
| 3 | PageSpeed 95+가 SEO 랭킹에 실질적 도움이 된다 | 🟡 부분 검증 | Google Core Web Vitals 기준 |
| 4 | KD 30 이하 키워드에서 신규 사이트가 8주 내 Top 10 진입 가능하다 | ❌ 미검증 | MVP 출시 후 검증 필요 |
| 5 | 도구 사이트의 AdSense RPM이 $3 이상이다 | ❌ 미검증 | 광고 적용 후 검증 필요 |
| 6 | 한국어 시장에서 개발자 도구 SEO 경쟁이 낮다 | 🟡 부분 검증 | 키워드 리서치 결과 지지 |
| 7 | 도구당 1-2일 개발이 가능하다 | ❌ 미검증 | MVP 개발 시 검증 |

---

## 8. Release

### 8.1 MVP (v1.0) — Week 1-3

**포함 (In Scope)**:
- JSON Formatter & Validator
- Base64 Encoder/Decoder
- UUID Generator
- 홈페이지 (도구 리스트)
- 다크 모드
- 한국어/영어 지원
- SEO 기본 세팅 (sitemap, robots.txt, 구조화 데이터, 메타 태그)
- About, Privacy Policy 페이지
- Google Analytics 4, Search Console 연동
- 반응형 디자인 (모바일 대응)

**제외 (Out of Scope)**:
- AdSense (트래픽 확보 후 신청)
- PWA 오프라인 모드 (v1.1)
- API 제공 (Phase 4)
- 사용자 로그인/설정 저장
- 댓글/피드백 기능

### 8.2 v1.1 — Week 4-6

- PWA 매니페스트 + 서비스 워커
- 도구 4-7개 추가 (Timestamp, Hash, Color, URL Encoder)
- 내부 링크 구조 강화
- 사용 가이드 콘텐츠 (각 도구별 SEO 보조 텍스트)
- 광고 최적화를 위한 A/B 테스트 준비

### 8.3 v1.2 — Week 7-10

- AdSense 신청 및 적용
- 도구 8-10개 추가 (Regex, Cron, CSV↔JSON)
- 광고 배치 A/B 테스트
- 백링크 확보 전략 실행 (개발자 커뮤니티 공유)

### 8.4 릴리즈 타임라인 요약

```
Week 1-2   │ 프로젝트 세팅 + MVP 도구 3개 개발
Week 3     │ v1.0 출시 → Google 인덱싱 시작
Week 4     │ SEO 중간점검 (인덱싱, 초기 노출)
Week 4-6   │ v1.1 출시 (도구 7개, PWA)
Week 6     │ AdSense 신청
Week 7-10  │ v1.2 출시 (도구 10개, 광고 적용)
Week 8     │ Go/No-Go 결정 (SEO 성과 기반)
Week 10    │ 스케일업 또는 피벗 결정
```

### 8.5 성공/실패 기준

| 시점 | 성공 (Go) | 부분 성공 (Iterate) | 실패 (Pivot) |
|------|-----------|-------------------|-------------|
| **8주차** | 1개+ 키워드 Top 10 | 1개+ 키워드 Top 20 | 모든 키워드 Top 50 밖 |
| **10주차** | 월 $50+ 수익 | RPM $1-3 | RPM $1 미만 |

### 8.6 피벗 옵션

실패 시 다음 대안을 순서대로 검토한다:
1. 한국어 전용 시장으로 축소 (경쟁 낮음)
2. 니치 변경: 개발자 → 디자이너/마케터 도구
3. 치트시트/레퍼런스와 하이브리드
4. 수익 모델 변경: 광고 → 제휴 마케팅 또는 SaaS

---

## Appendix

### A. 키워드 리서치 결과

상세 키워드 리스트는 별도 문서 참조:
→ `keyword-research-seo-tools.md` (P1 키워드 27개, 전체 60개+)

### B. Discovery Plan

상세 디스커버리 플랜은 별도 문서 참조:
→ `discovery-plan-seo-tools.md`

### C. 경쟁 사이트 벤치마크

| 사이트 | 월간 방문 | PageSpeed | 광고 수준 | DA |
|--------|----------|-----------|----------|-----|
| jsonformatter.org | 2.5-3.5M | 60-70 | 높음 | 높음 |
| base64decode.org | ~1M+ | 70-80 | 중간 | 중간 |
| codebeautify.org | ~5M+ | 50-65 | 매우 높음 | 높음 |
| 10015.io | ~300K | 80-85 | 낮음 | 낮음 |
| smalldev.tools | ~200K | 75-80 | 낮음 | 낮음 |

### D. SEO 체크리스트

MVP 출시 전 반드시 확인:
- [ ] 각 도구별 독립 URL (/tools/json-formatter)
- [ ] title, description 메타 태그 (도구별 고유)
- [ ] Open Graph + Twitter Card 메타 태그
- [ ] 구조화 데이터 (SoftwareApplication 또는 WebApplication schema)
- [ ] sitemap.xml 자동 생성
- [ ] robots.txt 설정
- [ ] canonical URL 설정
- [ ] hreflang 태그 (한국어/영어)
- [ ] PageSpeed Insights 95+ 확인
- [ ] Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] 모바일 친화성 테스트
- [ ] Google Search Console 등록 + 사이트맵 제출
- [ ] Google Analytics 4 설치

---

*문서 버전: v1.0*
*생성일: 2026-03-22*
*다음 업데이트: MVP 출시 후 (v1.1에서 실제 데이터 반영)*
