## 검색영역 클론

### 기능 구현

- [x] 사이트 검색영역 레이아웃 클론
- [x] 검색창에 키워드 검색 시 검색어 추천 (api호출)
- [x] 검색한 키워드와 일치하는 텍스트 볼드처리
- [x] 검색어가 없다면 '검색어 없음' 안내
- [x] 검색창은 키보드로 이동

      Window 컴퓨터, Mac OS에서는 사파리에서 정상 작동
      Mac OS 크롬, 웨일에서는 처음 눌렀을 때만 두번째 항목에 포커싱, 이후에는 정삭 작동

### 최적화

- [ ] API 호출별로 로컬 캐싱
- [x] 입력마다 API 호출 X -> API 호출 횟수 줄이는 전략 짜기

      setTimeout을 이용하여 마지막 이벤트 발생 후 일정시간 뒤 api를 호출하는 방식으로 호출 횟수를 줄였다. (debounce)
      즉, 입력마다 이벤트가 발생하지만 여러번 발생하는 이벤트는 다 무시하고 가장 마지막 이벤트만 실행하게 되어
      사용자가 입력을 멈추었을 때의 키워드를 API 호출하여 검색하게 된다.

- [x] API 호출할 때마다 console.info('calling api') 출력

      .env파일 생성 후 REACT_APP_SERVER_URL = http://localhost:4000/sick 작성 - 저장
