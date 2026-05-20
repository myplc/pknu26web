#!/bin/bash

# ANSI Color Codes (출력 가독성 향상)
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "==================================================="
echo " [Hadoop Cluster] 일괄 시작 스크립트 (Bash/Linux)"
echo "==================================================="
echo ""
echo "Hadoop 컨테이너를 백그라운드(Background)로 실행합니다..."
echo ""

# docker-compose up -d 실행
docker-compose up -d

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}[성공] Hadoop 클러스터 컨테이너가 성공적으로 시작되었습니다!${NC}"
    echo ""
    echo -e "- HDFS Web UI: ${GREEN}http://localhost:9870${NC}"
    echo -e "- YARN Web UI: ${GREEN}http://localhost:8088${NC}"
else
    echo ""
    echo -e "${RED}[오류] Hadoop 클러스터 실행에 실패했습니다.${NC}"
    echo "Docker Daemon이 실행 중인지 확인해 주세요."
fi

echo ""
echo "==================================================="
