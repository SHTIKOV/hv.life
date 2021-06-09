up:
	sudo docker-compose up -d

down:
	sudo docker-compose down --remove-orphans

stop:
	sudo docker-compose stop

down-clear:
	sudo docker-compose down -v --remove-orphans