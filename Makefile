install:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry-run

run:
	bin/gendiff.js

