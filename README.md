```bash
docker build -t docker-test -f docker/Dockerfile .
docker run --name docker-test -p 8091:8091 docker-test
```
