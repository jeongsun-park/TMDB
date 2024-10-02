# TMDB 사이트 만들기

<br />

![img](https://github.com/user-attachments/assets/2fe0a373-ddfd-42d6-802f-58c54b561b20)

<br />

### 📌프로젝트 개요
* TMDB api를 이용한 영화 및 TV프로그램 정보 제공 사이트
* Context를 이용해서 데이터 관리 하기

<br />

### 📌기능 설명
* 트렌딩 슬라이드
  * 트렌딩 api를 이용해 가져온 이미지를 Swiper사이트를 이용해 슬라이드로 출력
* 영화 리스트
  * 영화 api를 이용해 가져오기
* TV 리스트
  * TV api를 이용해 가져오기

<br />

### 📌추가될 기능
* 검색기능
  * seach api를 이용해 키워드로 영화 or TV 검색기능 
* 세부 정보
  * 클릭한 영화 or TV의 id를 가져오고 detail api를 가져와 세부정보 화면 제작

<br />
  
### 📌디렉터리 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜img.png
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜Footer.module.css
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Header.module.css
 ┃ ┗ 📂Main
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┣ 📜Card.jsx
 ┃ ┃ ┃ ┗ 📜Card.module.css
 ┃ ┃ ┣ 📂Detail
 ┃ ┃ ┃ ┗ 📜Detail.jsx
 ┃ ┃ ┣ 📂MainPage
 ┃ ┃ ┃ ┣ 📂Banner
 ┃ ┃ ┃ ┃ ┣ 📜Banner.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Banner.module.css
 ┃ ┃ ┃ ┣ 📂Search
 ┃ ┃ ┃ ┃ ┣ 📜Search.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Search.module.css
 ┃ ┃ ┃ ┣ 📂Trending
 ┃ ┃ ┃ ┃ ┣ 📂TrendingCard
 ┃ ┃ ┃ ┃ ┃ ┣ 📜TrendingCard.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜TrendingCard.module.css
 ┃ ┃ ┃ ┃ ┣ 📜Trending.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Trending.module.css
 ┃ ┃ ┃ ┣ 📜MainPage.jsx
 ┃ ┃ ┃ ┗ 📜MainPage.module.css
 ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┗ 📜Main.module.css
 ┣ 📂provider
 ┃ ┗ 📜MovieProvider.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```
