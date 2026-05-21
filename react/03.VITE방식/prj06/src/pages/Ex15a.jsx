import { useState, useRef } from "react";
import styles from "./Ex15a.module.css";

function Ex15a() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const positionRef = useRef(position);
  const idRef = useRef(null);

  return (
    <div className="pageCard">
      <header className="pageHeader">
        <span className="badge">예제 #15a</span>
        <h1>15a. 마우스 좌표 추적 (RequestAnimationFrame 최적화)</h1>
        <h2>브라우저 렌더링 프레임 단위로 상태 업데이트를 스케줄링하여 렌더링 성능을 극대화합니다.</h2>
      </header>

      <div
        className={styles.trackArea}
        onPointerMove={(e) => {
          // 마우스 트랙 영역 안에서의 상대 좌표를 구합니다.
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          // 💡 최신 좌표 값을 레퍼런스에 실시간 기록합니다.
          positionRef.current = { x, y };

          // 이미 스케줄링된 애니메이션 프레임이 없다면 새로 요청합니다.
          if (!idRef.current) {
            idRef.current = requestAnimationFrame(() => {
              setPosition(positionRef.current);
              idRef.current = null;
            });
          }
        }}
      >
        <span className={styles.infoBadge}>
          X: {Math.round(position.x)}px | Y: {Math.round(position.y)}px
        </span>
        <div className={styles.placeholderText}>
          ⚡ requestAnimationFrame 최적화가 적용된 마우스 트랙킹 영역입니다.
          <span>상태 변화 이벤트가 몰릴 때 디바운스 처리처럼 효율적으로 동작합니다.</span>
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

export default Ex15a;

