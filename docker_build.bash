docker build -t dbnb-reviews .
docker run -d -p 3001:3001 -v  $(pwd):/src/app --name dbnb-reviews dbnb-reviews:latest
