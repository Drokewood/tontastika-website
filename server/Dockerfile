FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Installiert alle Abhängigkeiten aus package.json
# `npm install` liest package.json und lädt ALLE Dependencies automatisch runter
# Express, dotenv, cors usw. werden in node_modules/ installiert
# SHORTCUT: Statt einzeln `npm install express`, `npm install cors` etc.
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 5000

# Start application
CMD ["npm", "run", "dev"]
