# 확장프로그램 boilerplate

## 1. Edit src/manifest.json

[ ] name
[ ] description
[ ] icons
[ ] content_scripts.matches

## 2. Edit src/pages/Content/index.js

- 타겟 페이지 동작 설정

## 3. build

1. npm run build
2. npm run start
3. [크롬] 설정 > 확장 프로그램 > 확장 프로그램 관리
4. (우측상단) 개발자 모드 ON
5. 압축해제된 확장 프로그램을 로드합니다. 👉 PATH : ./build
6. (중요!) 코드 수정후 Reload 버튼 클릭해야함
