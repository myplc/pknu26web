import { useState, useMemo } from "react";
import styles from "./Ex14.module.css";

const ShowState = ({ num, text }) => {
  const lag = () => {
    console.warn("과도한 연산 실행중...");
    let x = 0;
    for (let i = 0; i < 1000 * 1000 * 1000; i++) {
      x += i;
    }
    return x;
  };

  const calc = useMemo(() => lag(), [text]);

  return (
    <div className={styles.resultSection}>
      <h3>📊 렌더링 상태 및 연산 결과</h3>
      <div className={styles.resultGrid}>
        <div className={styles.resultCard}>
          <span className={styles.resultLabel}>렉 유발 (10억 루프 연산)</span>
          <span className={`${styles.resultVal} ${styles.resultValCalc}`}>{calc.toLocaleString()}</span>
        </div>
        <div className={styles.resultCard}>
          <span className={styles.resultLabel}>숫자 상태값</span>
          <span className={`${styles.resultVal} ${styles.resultValNum}`}>{num}</span>
        </div>
        <div className={styles.resultCard}>
          <span className={styles.resultLabel}>문자 상태값</span>
          <span className={`${styles.resultVal} ${styles.resultValText}`}>{text || "입력 없음"}</span>
        </div>
      </div>
    </div>
  );
};

function Ex14() {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="pageCard">
      <header className="pageHeader">
        <span className="badge">예제 #14</span>
        <h1>14. useMemo() & 렌더링 최적화</h1>
        <h2>복잡한 고부하 연산의 메모이제이션을 통해 불필요한 재렌더링 렉을 유발하지 않도록 방지합니다.</h2>
      </header>

      <div className={styles.cardGrid}>
        <div className={styles.controlCard}>
          <h3>🔢 숫자 제어 (최적화 확인용)</h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            숫자 상태를 변경할 때는 무거운 연산이 실행되지 않아 즉각 반응합니다.
          </p>
          <div className={styles.btnGroup}>
            <button className={`${styles.btn} ${styles.btnIncrease}`} onClick={() => setNum((prev) => prev + 1)}>
              + 증가
            </button>
            <button className={`${styles.btn} ${styles.btnDecrease}`} onClick={() => setNum((prev) => prev - 1)}>
              - 감소
            </button>
          </div>
        </div>

        <div className={styles.controlCard}>
          <h3>✍️ 글자 변경 (렉 유발용)</h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            글자를 변경하면 <code>useMemo</code>의 의존성 배열에 따라 무거운 연산이 재실행되어 타자 입력을 차단하는 렉이 발생합니다.
          </p>
          <input
            className={styles.input}
            type="text"
            placeholder="글자를 입력하여 렉을 유도해보세요."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
      </div>

      <ShowState num={num} text={text} />

      <div className={styles.alertBox}>
        💡 <strong>실험 안내</strong>: 글자 변경 인풋창에 타이핑을 할 때는 브라우저가 버벅거리는 렉(UI 블로킹) 현상이 발생합니다. 
        반면, 숫자 증가/감소 버튼을 누를 때는 10억 번의 연산 루프가 무시(useMemo 캐싱)되어 즉각적으로 화면이 업데이트되는 차이를 체험할 수 있습니다.
      </div>
    </div>
  );
}

export default Ex14;

