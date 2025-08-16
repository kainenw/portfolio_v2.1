const test = require('node:test');
const assert = require('node:assert/strict');
const DOMPurify = require('../../../lib/dompurify.js').default;

test('sanitizes malicious prototype embeds', () => {
  const malicious = '<img src="#" onerror="alert(1)"><script>alert(1)</script>';
  const clean = DOMPurify.sanitize(malicious);
  assert.ok(!clean.includes('<script'));
  assert.ok(!/onerror=/i.test(clean));
});
