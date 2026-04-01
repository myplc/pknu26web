# 응용2
import requests as req
url = "https://api4.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
res = req.get(url).text
btc = res[29:34]
won = str(int(btc)*1450)
print( won[:1]+ '억 '+ won[1:5]+ '만 ' + won[5:] + '원') # -> 1억 1389만 6050원