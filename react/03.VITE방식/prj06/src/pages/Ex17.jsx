import { createContext, useContext, useState, useEffect } from "react";
import styles from "./Ex17.module.css";

// ==========================================
// 1. [Custom Hook] useLocalStorage
// 상태를 브라우저의 localStorage와 동기화하는 커스텀 훅입니다.
// ==========================================
function useLocalStorage(key, initialValue) {
  // 초기 상태를 가져오는 함수 (지연 초기화 사용)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // 저장된 값이 있으면 JSON 파싱, 없으면 초기값 반환
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`localStorage에서 key "${key}"를 가져오는 중 오류 발생:`, error);
      return initialValue;
    }
  });

  // 상태가 바뀔 때마다 localStorage를 업데이트하는 useEffect
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`localStorage에 key "${key}"를 설정하는 중 오류 발생:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// ==========================================
// 2. [Context] 생성 (createContext)
// 자식 컴포넌트들에게 전역적으로 주입될 테마 컨텍스트
// ==========================================
const ThemeContext = createContext();

// ==========================================
// 3. [Context Provider] 컴포넌트 정의
// 전역 상태(테마)를 관리하고 하위 컴포넌트들에게 공급(Provide)합니다.
// ==========================================
function AppThemeProvider({ children }) {
  // 테마 상태를 커스텀 훅 useLocalStorage를 통해 관리 (새로고침해도 보존)
  const [theme, setTheme] = useLocalStorage("theme_preference", "dark");
  const [user, setUser] = useLocalStorage("user_profile", {
    name: "홍길동 학생",
    role: "수강생",
    id: "pknu_2026",
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const updateUsername = (newName) => {
    setUser((prev) => ({ ...prev, name: newName }));
  };

  // 자식 컴포넌트에 넘겨줄 Context Value 객체 구성
  const value = {
    theme,
    toggleTheme,
    user,
    updateUsername,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// ==========================================
// 4. 하위 컴포넌트들 (Deeply Nested Components)
// Prop Drilling 없이 최하단 자식이 직접 Context를 구독하여 소비(Consume)합니다.
// ==========================================

// 헤더 네비게이션바 컴포넌트 (Context 소비)
function Navbar() {
  const { theme, user } = useContext(ThemeContext);
  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <div className={styles.logo}>🏫 PKNU 2026 L-System</div>
      <div className={styles.userInfo}>
        <span className={styles.userBadge}>{user.role}</span>
        <strong>{user.name}</strong> 님 환영합니다.
      </div>
    </nav>
  );
}

// 대시보드 사이드바 컴포넌트 (Context 소비)
function Sidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <aside className={`${styles.sidebar} ${styles[theme]}`}>
      <div className={styles.menuItem}>📊 대시보드 홈</div>
      <div className={styles.menuItem}>📚 나의 강의실</div>
      <div className={styles.menuItem}>📅 수업 캘린더</div>
      <div className={styles.menuItem}>⚙️ 환경 설정</div>
      <button className={styles.themeToggleBtn} onClick={toggleTheme}>
        {theme === "light" ? "🌙 다크 모드로 변경" : "☀️ 라이트 모드로 변경"}
      </button>
    </aside>
  );
}

// 대시보드 메인 콘텐츠 영역 (프로필 편집 및 전역 변화 시각화)
function MainContent() {
  const { theme, user, updateUsername } = useContext(ThemeContext);

  return (
    <div className={`${styles.content} ${styles[theme]}`}>
      <header className={styles.contentHeader}>
        <h2>📈 마이 교육 대시보드 (전역 상태 테스트)</h2>
        <p>이 화면의 상태(테마, 이름)는 <code>useContext</code> 및 커스텀 훅으로 작동하며, 새로고침해도 유지됩니다.</p>
      </header>

      {/* 카드 레이아웃 */}
      <div className={styles.dashboardGrid}>
        <div className={styles.dashboardCard}>
          <h3>💡 실시간 전역 테마 상태</h3>
          <p>현재 상태: <strong className={styles.themeName}>{theme.toUpperCase()}</strong></p>
          <div className={styles.themePreview}>
            <div className={styles.themeIndicator}></div>
            <span>컴포넌트 트리 하단의 모든 영역이 테마 변동에 따라 일괄 디자인 반영됩니다.</span>
          </div>
        </div>

        <div className={styles.dashboardCard}>
          <h3>✍️ 실시간 이름 변경 (Context 데이터 바인딩)</h3>
          <p>Navbar 및 환영 문구가 실시간으로 갱신됩니다.</p>
          <div className={styles.inputGroup}>
            <label htmlFor="user-name-input">이름 수정:</label>
            <input
              id="user-name-input"
              type="text"
              value={user.name}
              onChange={(e) => updateUsername(e.target.value)}
              placeholder="변경할 이름을 입력하세요."
              className={styles.nameInput}
            />
          </div>
        </div>
      </div>

      {/* 모의 차트 섹션 */}
      <section className={styles.chartSection}>
        <h3>📚 학습 참여 트렌드 (CSS 차트 예제)</h3>
        <div className={styles.barChart}>
          <div className={styles.chartCol} style={{ height: "65%" }}><span className={styles.barLabel}>03월 (65%)</span></div>
          <div className={styles.chartCol} style={{ height: "80%" }}><span className={styles.barLabel}>04월 (80%)</span></div>
          <div className={styles.chartCol} style={{ height: "95%" }}><span className={styles.barLabel}>현재 (95%)</span></div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// 5. Ex17 메인 엔트리 컴포넌트
// 공급자(Provider)로 감싸고 전체 레이아웃을 표현합니다.
// ==========================================
function Ex17() {
  return (
    // 💡 Provider로 자식 트리를 감싸 전역 Context 상태의 유효 범위를 지정합니다.
    <AppThemeProvider>
      <div className={styles.appContainer}>
        {/* 상단 소개글 */}
        <section className={styles.introHeader}>
          <span className={styles.badge}>수업용 예제 #17</span>
          <h1>17. useContext & 커스텀 훅 (useLocalStorage)</h1>
          <p>
            부모 컴포넌트에서 깊은 자식 컴포넌트까지 Props를 일일이 전달(Prop Drilling)하지 않고,{" "}
            <strong>Context API</strong>를 통해 전역 상태를 공유합니다. 또한, 자주 쓰이는 영구저장 기능을 <strong>커스텀 훅</strong>으로 묶어 재사용합니다.
          </p>
        </section>

        {/* 대시보드 레이아웃 */}
        <div className={styles.dashboardLayout}>
          <Navbar />
          <div className={styles.dashboardBody}>
            <Sidebar />
            <MainContent />
          </div>
        </div>

        {/* 하단 학습 가이드 */}
        <footer className={styles.educationalInfo}>
          <h3>💡 핵심 학습 포인트</h3>
          <ul>
            <li>
              <strong>Context API의 가치</strong>: <code>createContext</code>로 생성된 컨텍스트는 수십 개의 컴포넌트 깊이에 위치한 어떤 자식이라도 <code>useContext()</code> 호출 한 번만으로 직관적으로 필요한 정보만 쏙쏙 뽑아올 수 있게 해줍니다.
            </li>
            <li>
              <strong>커스텀 훅 (Custom Hooks)</strong>: 상태 관리(<code>useState</code>)와 부수 효과(<code>useEffect</code>)가 결합된 정형화된 로직(예: localStorage 동기화)을 <code>useLocalStorage</code>라는 함수 형태로 선언하여, 다른 컴포넌트나 코드에서도 완벽히 재활용 가능하게 추출해냅니다.
            </li>
            <li>
              <strong>상태 전파와 리렌더링</strong>: <code>Provider</code>의 <code>value</code>가 변경되면, 해당 컨텍스트를 구독(<code>useContext</code>)하는 하위 모든 컴포넌트들이 자동으로 감지하여 동적으로 새로운 화면으로 리렌더링됩니다.
            </li>
          </ul>
        </footer>
      </div>
    </AppThemeProvider>
  );
}

export default Ex17;
