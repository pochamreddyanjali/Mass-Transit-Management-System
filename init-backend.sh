#!/bin/bash

# Get Project Name
project_name=$1

if [ -z "$project_name" ]; then
	echo "❌ Project name required!"
	echo "Usage: ./new-express.sh my-project-name"
	exit 1
fi

# Create folder and initialize project
mkdir "$project_name"
cd "$project_name"
npm init -y

# Install common dependencies
npm install express mongoose cookie-parser cors dotenv mongoose-aggregate-paginate-v2 bcrypt jsonwebtoken
npm install -D nodemon

# Create basic file structure
touch .env
echo "node_modules" > .gitignore

mkdir public
mkdir public/temp
touch public/temp/.gitkeep

mkdir src
cd src
touch index.js
touch app.js
mkdir controllers db middlewares models routes utils

cd ..

# Add start scripts
npx json -I -f package.json -e '
this.scripts = {
	"start": "node src/index.js",
	"dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js",
}'

# Print final message
echo "✅ Project '$project_name' setup complete!"
