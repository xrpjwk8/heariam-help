# Hear I am · Privacy & Support

기존 https://heariam.web.app/ 디자인을 이어받은 독립 정적 사이트입니다. 별도 빌드·JavaScript·추적 스크립트 없이 동작합니다.

## 운영 정보

- 운영 주체 및 개인정보 보호 담당자: Hear I am
- 문의 이메일: `wldnjs4046@icloud.com` (두 페이지에 메일 링크 적용)
- 시행일: 2026년 11월 6일
- 문안은 `privacy/index.html`, 고객지원 내용은 `support/index.html`에서 수정하세요.
- 문의로 받은 정보의 처리 목적·보유 기간·수탁 서비스는 실제 운영 정책에 맞춰 보완하세요.

## 확인 기준

2026-11-06 앱 원격 develop 16821d0 검토 기준. 음성 텍스트 진단 로그의 저장, 삭제 방식, 백업 및 Siri 처리 구분을 포함합니다. 출시 앱의 데이터 처리 방식이 변경되면 문안을 갱신하세요. 앱 개인정보처리방침이며, 호스팅 제공자의 웹 접속 정보 처리를 포괄하는 방침은 아닙니다.

## 로컬 미리보기

이 폴더에서 `python3 -m http.server 8765` 실행 후 `http://localhost:8765/` 접속.

## 배포

GitHub Pages: Settings → Pages → Deploy from a branch → main / (root).

기존 Firebase 사이트에 통합할 때는 **기존 사이트의 전체 소스**에 `privacy/`, `support/`, `assets/`, `styles.css`를 옮기고 경로 충돌을 확인하세요. 기존 styles.css를 덮어쓰지 말고 이 CSS를 legal.css 등으로 바꿔 페이지 참조도 수정하세요. 기존 홈페이지 하단에 `/privacy/`, `/support/` 링크를 추가하세요. 이 폴더만 기존 Firebase 사이트에 배포하면 소개 페이지가 대체되므로 그대로 덮어쓰지 마세요.

공개 폰트·로고는 기존 사용자 소유 소개 사이트에서 동일 브랜드 페이지 제작을 위해 가져왔습니다. 라이선스 권리는 각 권리자에게 있습니다.

## 문의 폼

고객지원의 문의하기 버튼은 Google Forms를 새 창에서 엽니다. 회신 이메일은 보조 연락처로 유지합니다. 폼 자체에 개인정보 수집·이용 안내 및 보유 기간을 운영 정책에 맞춰 반영해야 합니다.
