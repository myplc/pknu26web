import httpx
from config import OLLAMA_BASE_URL, OLLAMA_MODEL


async def chat(user_message: str) -> str:
    url = f"{OLLAMA_BASE_URL}/api/chat"
    payload = {
        "model": OLLAMA_MODEL,
        "messages": [{"role": "user", "content": user_message}],
        "stream": False,
    }
    try:
        async with httpx.AsyncClient(timeout=60.0) as client:
            response = await client.post(url, json=payload)
            response.raise_for_status()
            data = response.json()
            return data["message"]["content"]
    except httpx.ConnectError:
        return f"Ollama 서버에 연결할 수 없습니다. ({OLLAMA_BASE_URL} 확인)"
    except httpx.TimeoutException:
        return "Ollama 응답 시간이 초과되었습니다. 잠시 후 다시 시도해 주세요."
    except Exception as e:
        return f"오류 발생: {e}"
