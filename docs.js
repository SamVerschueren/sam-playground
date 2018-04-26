'use strict';
const fs = require('fs');

const html = `
<!DOCTYPE html>
<html>
<body>
	Hello world!
</body>
</html>
`;

try {
	fs.mkdirSync('docs');
} catch (_) {
	// Do nothing
}

fs.writeFileSync('docs/index.html', html);
