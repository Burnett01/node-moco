
test:
	@"./node_modules/.bin/mocha" --reporter list --compilers js:babel-register

.PHONY: test
