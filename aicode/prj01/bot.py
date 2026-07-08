from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, filters

from config import TOKEN
from handlers.start import start, help_command
from handlers.message import echo


def main() -> None:
    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    print("봇 시작됨. 종료하려면 Ctrl+C")
    app.run_polling()


if __name__ == "__main__":
    main()
