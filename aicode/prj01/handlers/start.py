from telegram import Update
from telegram.ext import ContextTypes


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    name = update.effective_user.first_name
    await update.message.reply_text(
        f"안녕하세요, {name}님! 봇이 시작되었습니다.\n"
        "/help 명령어로 사용법을 확인하세요."
    )


async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
        "사용 가능한 명령어:\n"
        "/start — 봇 시작\n"
        "/help  — 도움말\n"
        "\n일반 텍스트를 보내면 그대로 돌려드립니다."
    )
