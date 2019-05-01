install:
	docker-compose build
	docker-compose run labcontrol-php composer install
	docker-compose run labcontrol-php cp .env.example .env
	docker-compose run labcontrol-php php artisan key:generate
	docker-compose run labcontrol-node npm install

run:
	docker-compose up

db:
	docker-compose run labcontrol-php php artisan migrate
	docker-compose run labcontrol-php php artisan db:seed

enter-php:
	docker exec -it labcontrol-php bash

enter-node:
	docker exec -it labcontrol-node bash

enter-database:
	docker exec -it labcontrol-database bash

enter-web:
	docker exec -it labcontrol-web bash
