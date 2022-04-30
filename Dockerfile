FROM node

WORKDIR /app

COPY node-project/package*.json ./
RUN npm ci

COPY node-project/ ./

EXPOSE 80
CMD ["npm", "start"]