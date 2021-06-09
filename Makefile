up:
	docker-compose up -d

down:
	docker-compose down --remove-orphans

stop:
	docker-compose stop

down-clear:
	docker-compose down -v --remove-orphans