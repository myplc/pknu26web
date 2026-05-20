#!/bin/bash

# ANSI Color Codes (출력 가독성 향상)
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "==================================================="
echo " [Hadoop Cluster] 일괄 정지 스크립트 (Bash/Linux)"
echo "==================================================="
echo ""
echo "Hadoop 컨테이너 및 네트워크를 안전하게 종료합니다..."
echo ""

# docker-compose down 실행
docker-compose down

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}[성공] Hadoop 클러스터 컨테이너가 성공적으로 정지되었습니다.${NC}"
else
    echo ""
    echo -e "${RED}[오류] Hadoop 컨테이너 종료 중 문제가 발생했습니다.${NC}"
    echo "Docker Daemon이 실행 중인지 확인해 주세요."
fi

echo ""
echo "==================================================="
