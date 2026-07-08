# Telegram Bot 프로젝트 계획

## 프로젝트 구조

```
prj01/
├── PLAN.md           # 이 파일 (계획서)
├── .env              # API 토큰 보관 (git 제외)
├── .env.example      # API 토큰 템플릿 (git 포함)
├── .gitignore
├── requirements.txt  # 의존 패키지 목록
├── config.py         # 환경변수 로드
├── bot.py            # 봇 메인 진입점
└── handlers/
    ├── __init__.py
    ├── start.py      # /start, /help 명령어
    └── message.py    # 일반 메시지 처리
```

## 기술 스택

| 항목 | 선택 |
|------|------|
| 언어 | Python 3.10+ |
| 라이브러리 | `python-telegram-bot` v21 (async) |
| 환경변수 관리 | `python-dotenv` |

## 설정 방법 (사용자 가이드)

1. `.env.example`을 복사하여 `.env` 생성
2. `.env` 안의 `TELEGRAM_BOT_TOKEN`에 BotFather에서 발급받은 토큰 입력
3. 패키지 설치: `pip install -r requirements.txt`
4. 실행: `python bot.py`

## 구현 기능 (기본)

- `/start` — 봇 시작 인사 메시지
- `/help` — 명령어 목록 안내
- 일반 텍스트 메시지 에코(echo) 응답

## 확장 예정 기능 (추후)

- 사용자 명령어 추가
- 외부 API 연동 (날씨, 번역 등)
- 데이터베이스 연동 (사용자 상태 저장)

## 파일별 역할

### `.env`
```
TELEGRAM_BOT_TOKEN=여기에_토큰_입력
```

### `config.py`
- `python-dotenv`로 `.env` 로드
- 토큰 미설정 시 명확한 오류 메시지 출력

### `bot.py`
- `ApplicationBuilder`로 봇 인스턴스 생성
- 핸들러 등록 후 `run_polling()` 실행

### `handlers/`
- 기능별로 핸들러를 분리하여 유지보수 용이

## 주의 사항

- `.env` 파일은 절대 git에 커밋하지 않음 (`.gitignore`에 포함)
- 토큰이 없으면 봇이 시작되지 않도록 명시적 검증 추가
