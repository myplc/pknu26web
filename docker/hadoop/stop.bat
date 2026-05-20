@echo off
:: UTF-8 인코딩 설정 (한글 깨짐 방지)
chcp 65001 > nul

echo ===================================================
echo  [Hadoop Cluster] 일괄 정지 스크립트 (Windows)
echo ===================================================
echo.
echo Hadoop 컨테이너 및 네트워크를 안전하게 종료합니다...
echo.

:: docker-compose down 실행
docker-compose down

:: 에러 체크 (괄호 블록 대신 안전한 goto 문 사용)
if errorlevel 1 goto ERROR

echo.
echo [성공] Hadoop 클러스터 컨테이너가 성공적으로 정지되었습니다.
goto END

:ERROR
echo.
echo [오류] Hadoop 컨테이너 종료 중 문제가 발생했습니다.
echo Docker Desktop이 켜져 있는지 확인해 주세요.

:END
echo.
echo ===================================================
pause
