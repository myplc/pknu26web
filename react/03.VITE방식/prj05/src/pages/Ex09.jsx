import { useState } from "react";

const students = [
  { id: 1, name: "김한솔", score: 88 },
  { id: 2, name: "이민수", score: 92 },
  { id: 3, name: "박지영", score: 75 },
  { id: 4, name: "정민재", score: 85 },
  { id: 5, name: "최하은", score: 90 },
  { id: 6, name: "한동현", score: 78 },
  { id: 7, name: "오민정", score: 88 },
  { id: 8, name: "강준호", score: 95 },
  { id: 9, name: "윤서연", score: 82 },
  { id: 10, name: "김태우", score: 91 },
];
const Inp = () => <h2>저는 정보에요!!! 기대해봐요!</h2>;

function Ex09() {
  const [onlyPassed, setOnlyPassed] = useState(false);
  return (
    <>
      <h1>조건부 렌더링과 리스트</h1>
      <input
        type="checkbox"
        checked={onlyPassed}
        onChange={(e) => setOnlyPassed(e.target.checked)}
      />
      <label htmlFor="" className="toggle">
        합격자만 보기
      </label>
      <div>{onlyPassed && <Inp />}</div>
    </>
  );
}

export default Ex09;
