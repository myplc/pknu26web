import { useState } from "react";
import styles from "./Ex15.module.css";

function Ex15() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="pageCard">
      <header className="pageHeader">
        <span className="badge">예제 #15</span>
        <h1>15. 마우스 좌표 추적 (기본 렌더링)</h1>
        <h2>마우스 포인터가 움직일 때마다 실시간으로 컴포넌트의 좌표 상태를 갱신합니다.</h2>
      </header>

      <div
        className={styles.trackArea}
        onPointerMove={(e) => {
          // 마우스 트랙 영역 안에서의 상대 좌표를 구합니다.
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setPosition({ x, y });
        }}
      >
        <span className={styles.infoBadge}>
          X: {Math.round(position.x)}px | Y: {Math.round(position.y)}px
        </span>
        <div className={styles.placeholderText}>
          🖱️ 이 회색 박스 영역 안에서 마우스를 부드럽게 움직여 보세요!
          <span>포인터가 반짝이는 글로잉 오라 서클로 변경되어 따라다닙니다.</span>
        </div>

        {/* 글로잉 마우스 포인터 */}
        <div
          className={styles.pointer}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Ex15;

