# Setup
* Install nvm and install node version 14 (reference: https://github.com/nvm-sh/nvm#installing-and-updating)
* Install TSLint and SonarQube plugin on your IDE
* Clone the boiler plate by ```git clone https://github.com/jerwyn-rabor/swagger-boilerplate.git``` and run ```npm install```
* Install ```ts-node```, via ```npm install -g typescript ts-node```

# Filesystem
This is how the files of the framework are organized.

* ```code_templates``` - Where the code template is stored 
* ```docs``` - Holds the system documentations
* ```artisan.ts``` - Helper bash script to generate code template

# Commands

## Artisan Commands
These are the commands that can help automate the generation of the files of the framework.
* ```ts-node artisan.ts make:sequence <name>``` - Generate a sequence file
* ```ts-node artisan.ts make:swagger <name>``` - Generate a swagger files

## NPM Commands
These are some of the base npm commands that you can use on each project, you can add more custom commands through the package.json.

* ```npm run build``` - Build the swagger documentation
