# 정제하기 (국제우주정거장 인공위성 실시간 위치)
import requests as req
import webbrowser as wb

# 위성위치
url = "http://api.open-notify.org/iss-now.json"
# 탑승자 명단
url2 = "http://api.open-notify.org/astros.json"

result = req.get(url).json()
lat = result['iss_position']['latitude'] # 위도
lon = result['iss_position']['longitude'] # 경도

human_num = req.get(url2).json()["number"]

url = f"https://www.google.com/maps?q={lat},{lon}"
print(f"현재 {human_num}명이 탑승한 인공위성(국제우주정거장) 위치를 열겠습니다.위도:{lat}, 경도:{lon}")
wb.open(url)