# 2025 복면코치왕 웹사이트

- 페이지: `index.html`(소개·신청), `progress.html`(진행상황), `archive.html`(작년 콘텐츠)
- 리소스: `assets/styles.css`, `assets/app.js`
- 데이터: `data/progress.json`, `data/videos.json`

## 업데이트 방법
- 진행상황: `data/progress.json`의 `items` 배열에 새 객체 추가
  - 필드: `date`(YYYY-MM-DD), `week`(숫자) 또는 `milestone`(문자), `title`, `summary`, 선택 `links`, `media`, `tags`
- 작년 영상: `data/videos.json`의 `videos` 배열에 새 객체 추가
  - 필드: `title`, `youtubeId`, 선택 `description`, `date`(YYYY-MM-DD), `tags`
- 신청 폼 링크: `index.html`의 `#apply` 섹션에서 수정

## 로컬 확인
- `index.html` 더블클릭 또는 간단 서버로 열기

## 배포
- 정적 호스팅(GitHub Pages/Netlify/Vercel/S3 등)에 업로드

