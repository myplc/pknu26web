import { useState, useEffect } from "react";
import mystyle from "./Ex13.module.css";
import spin from "/src/assets/spinner.gif";
const url = "https://jsonplaceholder.typicode.com/posts?_limit=20";

function Ex13() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  };

  /* 로딩화면 테스트 */
  useEffect(() => {
    const tid = setTimeout(() => {
      console.log("테스트: 스피너를 위한 3초 대기");
      getData();
    }, 3000);

    return () => {
      clearTimeout(tid);
      console.log("언마운트 타이머 정리!");
    };
  }, []);

  return (
    <div className="pageCard">
      <header className="pageHeader">
        <span className="badge">예제 #13</span>
        <h1>13. fetch API & 스피너 로딩 처리</h1>
        <h2>JSONPlaceholder에서 데이터를 비동기로 페치하고 로딩 스피너를 표시합니다.</h2>
      </header>

      {data.length ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {data.map((v, i) => {
            return (
              <div className={mystyle.line} key={v.id}>
                <span className={mystyle.listIndex}>{String(i + 1).padStart(2, '0')}</span>
                <span>{v.title}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={mystyle.loadingContainer}>
          <img className={mystyle.spinnerImg} src={spin} alt="로딩중..." />
          <p className={mystyle.loadingText}>서버에서 안전하게 데이터를 불러오는 중입니다...</p>
        </div>
      )}
    </div>
  );
}

export default Ex13;

