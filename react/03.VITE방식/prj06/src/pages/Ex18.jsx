import styles from "./Ex18.module.css";

function Ex18() {
  return (
    <div className="pageCard">
      <header className="pageHeader">
        <span className="badge">예제 #18</span>
        <h1>18. useTransition 기반 동시성 렌더링 최적화</h1>
        <h2>대량의 데이터를 백그라운드 렌더링으로 돌려 UI 렉을 미연에 방지하는 기술을 배웁니다.</h2>
      </header>

      <div className={styles.card}>
        <div className={styles.icon}>🛠️</div>
        <h2 className={styles.title}>실습 예제 준비 중</h2>
        <p className={styles.desc}>
          현재 본 예제는 학생 실습용 가이드와 템플릿 준비 단계입니다.<br />
          곧이어 진행될 다음 수업 시간에 동시성(Concurrent) 최적화 예제를 다룹니다!
        </p>
        <button className={styles.glowBtn} onClick={() => alert("다음 교시에 활성화됩니다! 🚀")}>
          실습 파일 로드하기
        </button>
      </div>
    </div>
  );
}

export default Ex18;