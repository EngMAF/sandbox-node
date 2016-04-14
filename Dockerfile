FROM ubuntu:14.04

MAINTAINER Maks

RUN apt-get update \
&&	apt-get --assume-yes install \
	build-essential \
 	python-software-properties \
 	software-properties-common \
 	zip \
 	supervisor \
 	nano \
	git \
	curl \
	nginx

#install php7
RUN curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash - \
&&	apt-get install -y nodejs

RUN npm install -g nodemon

COPY conf/supervisord.conf /etc/supervisor/conf.d/
