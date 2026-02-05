const multiply = require('././app');
const assert = require('assert');

try {
    assert.strictEqual(multiply(2, 3), 6);
    console.log("Success");
} catch (err) {
    console.error("Fail");
    process.exit(1);
}
