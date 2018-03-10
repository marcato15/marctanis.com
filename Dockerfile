FROM blendmarketing/webpack
MAINTAINER Marc Tanis "marc@blendimc.com"

RUN npm install --global gatsby-cli
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN cd /app && yarn install

COPY . /app

EXPOSE 80
CMD gatsby develop --host 0.0.0.0 --port 80
