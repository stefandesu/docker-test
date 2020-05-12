```bash
# docker build -t docker-test -f docker/Dockerfile .
docker build -t docker-test .
docker run --name docker-test -p 8091:8091 docker-test
```
