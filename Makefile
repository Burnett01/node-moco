build:
	@"./node_modules/.bin/webpack" -p
	@echo "Project has been built"

test:
	@"./node_modules/.bin/mocha" --reporter list --compilers js:babel-register

.PHONY: build test
