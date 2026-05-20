@echo off
:: UTF-8 인코딩 설정 (한글 깨짐 방지)
chcp 65001 > nul

echo ===================================================
echo  [Hadoop Cluster] 일괄 시작 스크립트 (Windows)
echo ===================================================
echo.
echo Hadoop 컨테이너를 백그라운드(Background)로 실행합니다...
echo.

:: docker-compose up -d 실행
docker-compose up -d

:: 에러 체크 (괄호 블록 대신 안전한 goto 문 사용)
if errorlevel 1 goto ERROR

echo.
echo [성공] Hadoop 클러스터 컨테이너가 성공적으로 시작되었습니다!
echo.
echo - HDFS Web UI: http://localhost:9870
echo - YARN Web UI: http://localhost:8088
goto END

:ERROR
echo.
echo [오류] Hadoop 클러스터 실행에 실패했습니다.
echo Docker Desktop이 켜져 있는지 확인해 주세요.

:END
echo.
echo ===================================================
pause
