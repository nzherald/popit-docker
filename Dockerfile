FROM node:0.10
MAINTAINER caleb.tutty@nzherald.co.nz

# Set noninteractive mode for apt-get
ENV DEBIAN_FRONTEND noninteractive

# Update
RUN apt-get update && apt-get upgrade -y

RUN apt-get install python g++ make git \
    graphicsmagick unzip sendmail \
    ruby1.9.1 ruby1.9.1-dev

RUN git clone https://github.com/mysociety/popit /opt/popit

WORKDIR /opt/popit

RUN make node-modules

RUN sudo gem install sass --version=3.2.14 --no-rdoc --no-ri
RUN sudo gem install compass --version=0.12.2 --no-rdoc --no-ri

RUN make css

CMD ["npm", "start"]
