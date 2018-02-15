build:
	@"./node_modules/.bin/babel" lib -d dist
	@echo "Project has been built"

test:
	@"./node_modules/.bin/mocha" --reporter list --compilers js:babel-register

.PHONY: build test
