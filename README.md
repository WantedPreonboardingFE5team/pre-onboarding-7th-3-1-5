# 원티드 프리온보딩 프론트엔드 - Week 3-1

원티드 프리온보딩 **프론트엔드 5팀**입니다.<br>
해당 레포지토리는 원티드 프리온보딩 5차 과제로 검색창 구현 및 검색어 추천 기능 구현한 웹 사이트입니다.<br>
해당 프로젝트에서는 멘토님이 제공한 api를 사용하였습니다.

## 📅 프로젝트 기간

기간 : 2022년 11월 9일 ~ 2022년 11월 10일

## 👥 팀원 소개
| 이름 | github |
| --- | --- |
| 류승연 (팀장) | https://github.com/seungyeon-rr |
| 차혜인 (부팀장) | https://github.com/hyeincha |
| 박지현 | https://github.com/hyoniiii |
| 배창현 | https://github.com/baechanghyeon |
| 이원준 | https://github.com/dldnjswns31 |
| 임연주 | https://github.com/yeondooo |
| 지재영 | https://github.com/jaeyeong815 |

## 🛠 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <br>

  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> 
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
  <br>
</div>

## 🏁 프로젝트 실행 방법

1. root폴더에 .env 파일을 생성합니다.

```
  REACT_APP_SERVER_URL=http://localhost:4000/sick
```

2. 의존성 패키지를 설치합니다.

```
$ npm install
```

3. 프로젝트를 실행합니다.

```
$ npm start
```

- 현재 repository를 클론한 뒤, 위 순서대로 입력하면 localhost:3000 포트에서 해당 코드가 실행됩니다.

## 🔗 배포 링크

[배포링크](http://preonboarding-3-1.s3-website.ap-northeast-2.amazonaws.com/)

- 해당 프로젝트는 AWS S3로 배포하였습니다.

## 💻 서버 실행 방법

[저장소 링크](https://github.com/walking-sunset/assignment-api_7th)

## 🔰 사용한 패키지와 버전
```
    "react-icons": "^4.6.0",
    "react-router-dom": "^6.4.3",
    "react-spinners": "^0.13.6",
    "recoil": "^0.7.6",
    "styled-components": "^5.3.6",
    "styled-reset": "^4.4.2",
    "typescript": "^4.8.2",
 ```
 
 <details>
<summary>사용한 패키지 간략한 설명</summary>
<div markdown="1">

- react-icons : 아이콘 적용<br>
- eslint : 팀원간 코드 컨벤션 통일<br>
- react-spinners : 스피너<br>
- recoil : 전역 상태 관리<br>
- styled-components : 스타일 적용<br>
- styled-reset : 스타일 초기화<br>
- typescript: 타입 스크립트<br>

</div>
</details>

## 📦 파일 구조

<details>
<summary>파일 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜index.ts
 ┣ 📂components
 ┃ ┣ 📂Recommend
 ┃ ┃ ┣ 📜Loading.tsx
 ┃ ┃ ┣ 📜NoRecommendList.tsx
 ┃ ┃ ┣ 📜Recommend.style.ts
 ┃ ┃ ┣ 📜Recommend.tsx
 ┃ ┃ ┗ 📜RecommendList.tsx
 ┃ ┗ 📂Search
 ┃ ┃ ┣ 📜Search.style.ts
 ┃ ┃ ┗ 📜Search.tsx
 ┣ 📂pages
 ┃ ┗ 📜SearchPage.tsx
 ┣ 📂recoil
 ┃ ┗ 📜searchState.ts
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyles.ts
 ┣ 📂types
 ┃ ┗ 📜illness.d.ts
 ┣ 📂utils
 ┃ ┗ 📜getSessionStorage.ts
 ┣ 📜App.tsx
 ┣ 📜Router.tsx
 ┗ 📜index.tsx
```
</div>
</details>

## ❗️ 필수 요구사항

아래 사이트의 검색영역을 클론하기 - [한국임상정보](https://clinicaltrialskorea.com/)
    
| 페이지 | API 연결 및 기능 |
| --- | --- |
| 검색 기능 | ✅ 사용자가 입력한 텍스트와 일치하는 부분 볼드처리<br> ✅ 검색어가 없을 시 “검색어 없음” 표출<br> ✅ 키보드만으로 추천 검색어들로 이동 가능하도록 구현<br> |
| API 최적화 | ✅ API 호출별로 로컬 캐싱 구현<br>✅ 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행<br>✅  API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정<br> |
| 조건 | ✅ 언어 : JavaScript / TypeScript (가급적 선택)<br> ✅ 전역 상태관리 라이브러리(Redux 등, 단, 캐싱 기능이 포함되지 않은 것으로 제한)<br> ✅ 스타일 관련 라이브러리(styled-components, emotion, UI kit 등)<br> ✅ HTTP Client(axios 등) |

<br>

## 이벤트 제어 함수 (debounce vs throttle)

## 1. API 호출 최적화


### API 로컬 캐싱 (Session Storage)
![ca](https://user-images.githubusercontent.com/28972561/201145027-ddb44511-b426-4e9b-b9a6-3cf02247cd6c.gif)
1. 브라우저를 종료할 때 따로 데이터를 삭제해주지 않아도 됩니다.
2. 페이지 새로고침 시에도 데이터가 남아있습니다. 
- `Local Storage` 로 관리시에는 브라우저를 종료한 후에도 정보가 영구적으로 유지되고, 로컬에 `객체로 관리`시에는 새로고침 시에 캐싱 데이터가 리셋되기 때문에, 해당 방법을 선택하지 않았습니다.

### 이벤트 제어 방법 (디바운스 vs 쓰로틀)
![debo](https://user-images.githubusercontent.com/28972561/201144953-4b2f69a7-b25f-4783-9a24-0d0a0edbebe7.gif)
- 디바운스(debounce) : 연속적으로 이벤트가 발생할 시 이를 그룹화하여 특정 시간이 지난 뒤 마지막 이벤트만 실행합니다.
- 쓰로틀(throttle) : 이벤트를 일정 주기마다 실행하게끔 합니다. 즉 이벤트는 주기당 한번 발생하게 됩니다.

```jsx
const debounce = setTimeout(
      () =>
        keyword &&
        fetchSearchData(keyword).then((result) => {
          const sliceData = result.slice(0, 10);
          setRecommendList(sliceData);
          setIsLoading(false);
        }),
      500,
    );
    return () => clearInterval(debounce);
  }, [keyword, setRecommendList, indexReset]);
```

쓰로틀 방법은 일정시간마다 이벤트를 발생시키기에 완성되지 않은 단어 또한 데이터 요청을 할 수 있습니다. 이는 리소스 낭비라고 생각되어 사용자가 특정 단어를 입력하고 나서 시간이 지나면 데이터 요청을 할 수 있도록 디바운스 방법을 선택했습니다.

## 2. ⌨️ 키보드만으로 추천 검색어 리스트로 이동 가능하도록 구현
![1](https://user-images.githubusercontent.com/28972561/201142321-aa4ce71f-a733-49dc-8146-16a6157547e5.gif)
1. `recoil`을 사용하여 상태 관리를 했습니다.
2. `Input` 태그에 `onKeyDown` 이벤트 핸들러를 이용하여 눌리는 키를 추적
3. 아래 방향, 위 방향을 추적하기 위해 `event.key`가 `ArrowDown`과 `ArrowUp`일 때의 이벤트를 다룸
4. 검색창에 포커싱이 위치해있을 때의 기본 `index`는 -1이고, 아래 버튼을 누르면 `index + 1`, 위 버튼을 누르면 `index -1`이 됨
5. `Input`이 존재하는 `Search.tsx`파일에서 `useSetRecoilState()`을 사용하여 `index`변화를 감지
6. `index`가 필요한 `RecommendList.tsx`파일에서 `useRecoilValue()`를 사용하여 `index`사용
    1. `Input`에 새로운 검색 키워드를 감지하여 api를 새로 호출할 시 `index`를 초기화하기 위해
    api를 호출하고 있는 `RecommendList.tsx`파일에서 `useResetRecoilState()`을 사용하여 초기값으로 `reset`
    
## 3. 검색 사이트 레이아웃
![4](https://user-images.githubusercontent.com/28972561/201143679-2e12c35f-d976-428f-ac1b-7739d0f24603.gif)
