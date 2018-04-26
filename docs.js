'use strict';
const fs = require('fs');
const pkg = require('./package.json');

const html = `
<!DOCTYPE html>
<html>
<body>
	Hello world!<br />
	<small>${pkg.version}</small>
</body>
</html>
`;

try {
	fs.mkdirSync('docs');
} catch (_) {
	// Do nothing
}

fs.writeFileSync('docs/index.html', html);
