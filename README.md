# Garena Test
- Open hosts file `sudo nano /etc/hosts`
    - Add new line `127.0.0.1       earth.garena.test`
    - Save and quit the file
- Install PHP dependencies `docker run --rm -v $(pwd):/app composer install`
- Install Javascript dependencies and compile assets `npm install && npm run dev`
- Spin up docker containers `docker-compose up -d`
- Copy env file `cp .env.example .env`
- Generate Laravel app key `docker-compose exec app php artisan key:generate`
- Open in browser `http://earth.garena.test`