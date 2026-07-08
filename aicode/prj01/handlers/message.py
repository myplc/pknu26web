from telegram import Update
from telegram.ext import ContextTypes
from services.ollama import chat


async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user_text = update.message.text
    await update.message.reply_text("생각 중...")
    reply = await chat(user_text)
    await update.message.reply_text(reply)
