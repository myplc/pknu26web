import styles from "./Ex19.module.css";

function Ex19() {
  return (
    <div className="pageCard">
      <header className="pageHeader">
        <span className="badge">예제 #19</span>
        <h1>19. Product Activation (정밀 UI 제어와 상태 기계)</h1>
        <h2>다중 입력상자 포커스 라우팅, 서버 로딩 상태 시퀀스 및 상태 머신을 다룹니다.</h2>
      </header>

      <div className={styles.card}>
        <div className={styles.icon}>🔑</div>
        <h2 className={styles.title}>정밀 제어 실습 준비 중</h2>
        <p className={styles.desc}>
          본 실습 예제는 정밀 포커스 및 라이선스 정적 상태 머신 흐름을 구현합니다.<br />
          곧이어 시작될 다음 교시 실습 가이드를 기대해 주세요!
        </p>
        <button className={styles.glowBtn} onClick={() => alert("다음 교시에 활성화됩니다! 🔑")}>
          라이선스 키 활성화하기
        </button>
      </div>
    </div>
  );
}

export default Ex19;