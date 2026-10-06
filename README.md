# Next Studio 공식 홈페이지

넥스트 스튜디오의 게임, 스튜디오 소개, 문의 정보를 제공하는 정적 홈페이지입니다. GitHub Pages 프로젝트 사이트(`https://oh-seungjin.github.io/NextStudio/`)에 맞춰 모든 내부 경로를 상대 경로로 작성했습니다.

## 파일 구조

- `index.html`: 회사 정보, 게임 목록, 문의, Search Console 인증 위치
- `styles.css`: 반응형 레이아웃과 접근성 스타일
- `script.js`: 모바일 메뉴만 담당하는 최소 JavaScript
- `assets/icons/`: 기존 공개 지원 페이지에서 가져온 게임 아이콘
- `.nojekyll`: GitHub Pages의 Jekyll 처리를 비활성화

게임을 추가할 때는 `index.html`의 `.game-grid`에 카드를 추가하고 공개 가능한 아이콘만 `assets/icons/`에 넣습니다. 회사명과 문의처는 `index.html`의 `#about`, `#contact`, `footer`에서 수정합니다.

## 로컬 실행

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173/`을 엽니다. 파일을 직접 열기보다 로컬 HTTP 서버로 확인하세요.

## GitHub Pages 배포

1. 홈페이지 전용 공개 저장소 `oh-seungjin/NextStudio`의 `main` 브랜치에 이 폴더를 push합니다.
2. GitHub 저장소의 **Settings → Pages**에서 **Deploy from a branch**를 선택합니다.
3. 브랜치는 **main**, 폴더는 **/(root)**로 저장합니다.
4. `https://oh-seungjin.github.io/NextStudio/`에서 `index.html`, `styles.css`, 게임 아이콘이 정상 응답하는지 확인합니다.

기존 `oh-seungjin.github.io` 저장소와 `privacy-terms` 저장소는 덮어쓰거나 공개 상태를 바꾸지 않습니다. 기존 개인정보처리방침과 지원 페이지는 이 홈페이지에서 링크만 연결합니다.

## Google Search Console 및 Play Console 인증

사이트 구현 완료와 Google의 소유권 인증 완료는 별개입니다. 실제 인증 토큰을 받기 전에는 인증 완료로 표시하지 않습니다.

1. 실제 사이트를 먼저 배포합니다.
2. Search Console에서 실제 홈페이지 주소 `https://oh-seungjin.github.io/NextStudio/`를 **URL 접두어 속성**으로 등록합니다.
3. Google이 제공한 HTML 태그를 `index.html`의 `<head>` 내 표시된 주석 바로 아래에 그대로 삽입하거나, Google이 제공한 HTML 인증 파일을 이름과 내용 변경 없이 저장소 루트에 둡니다.
4. 변경을 재배포한 뒤 Search Console에서 소유권 확인을 실행합니다.
5. Play Console에 같은 홈페이지 주소를 입력합니다.
6. Play Console에서 웹사이트 인증을 요청합니다.

이후 수정·배포에서도 인증 메타 태그 또는 인증 파일을 삭제하지 마세요. 사이트는 로그인 없이 접근 가능해야 합니다.

## 확인된 자료 출처

- 회사명·문의: 기존 공개 `privacy-terms` 페이지의 `Next Studio · 넥스트 스튜디오`, `dhalska2@gmail.com`
- 게임 설명·플랫폼: 각 로컬 게임 프로젝트의 README, 앱 설정, 공개 지원 페이지
- 아이콘: `privacy-terms` 저장소의 각 게임별 공개 아이콘
- 지원·정책 링크: `https://oh-seungjin.github.io/privacy-terms/<game>/`

`NumberLink Pulse` 저장소에는 App Store ID가 기록되어 있으나 2026-10-07 확인 시 공개 URL이 404를 반환해 다운로드 링크를 넣지 않았습니다. 출시 상태가 확인되면 실제 스토어 URL만 추가합니다.
