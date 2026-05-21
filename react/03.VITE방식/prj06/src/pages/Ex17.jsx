import { useState } from "react";
import axios from "axios";
import styles from "./Ex17.module.css";

const Ex17 = () => {
    const [sdata, setSdata] = useState({ username: "", password: "" });
    const [mydata, setMydata] = useState("");

    const handleInput = (e) => {
        setSdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const sendPost = () => {
        // 빈 필드 검증 추가
        if (!sdata.username || !sdata.password) {
            alert("⚠️ 아이디와 패스워드를 모두 입력해주세요!");
            return;
        }
        axios.post("/data", sdata).then((result) => setMydata(result.data));
    };

    return (
        <div className="pageCard">
            <header className="pageHeader">
                <span className="badge">예제 #17</span>
                <h1>17. Axios를 이용한 서버 데이터 비동기 통신</h1>
                <h2>Express API 서버와 JSON 형식의 데이터를 비동기(POST)로 주고받는 과정을 실시간 추적합니다.</h2>
            </header>

            <div className={styles.card}>
                <h3 className={styles.title}>🔐 보안 사용자 인증 전송</h3>

                <div className={styles.inputGroup}>
                    <div className={styles.inputField}>
                        <label htmlFor="sendMsg">아이디(Username)</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="sendMsg"
                            name="username"
                            placeholder="서버로 전송할 아이디를 입력하세요."
                            onChange={handleInput}
                            value={sdata.username}
                        />
                    </div>

                    <div className={styles.inputField}>
                        <label htmlFor="passWord">패스워드(Password)</label>
                        <input
                            className={styles.input}
                            type="password"
                            id="passWord"
                            name="password"
                            placeholder="패스워드를 입력하세요."
                            onChange={handleInput}
                            value={sdata.password}
                        />
                    </div>
                </div>

                <button className={styles.btnSend} onClick={sendPost}>
                    서버에 JSON 데이터 전송하기 ⚡
                </button>

                <div className={styles.statusContainer}>
                    <div className={styles.statusBox}>
                        <div className={styles.statusBoxTitle}>입력한 아이디 모니터링</div>
                        <div className={styles.statusVal}>{sdata.username || "(대기 중)"}</div>
                    </div>
                    <div className={styles.statusBox}>
                        <div className={styles.statusBoxTitle}>입력한 비밀번호 모니터링</div>
                        <div className={styles.statusVal}>
                            {sdata.password ? "•".repeat(sdata.password.length) : "(대기 중)"}
                        </div>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.responseBox}>
                    <div className={styles.responseTitle}>📡 Express API 서버 응답 메시지</div>
                    {mydata ? (
                        <div className={styles.responseVal}>{mydata}</div>
                    ) : (
                        <div className={styles.responsePlaceholder}>
                            데이터를 서버로 전송하면 실시간 응답 결과를 여기에 표시합니다.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Ex17;
