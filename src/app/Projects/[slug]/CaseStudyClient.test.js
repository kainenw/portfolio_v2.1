const test = require('node:test');
const assert = require('node:assert/strict');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

test('sanitizes malicious prototype embeds', () => {
  const malicious = '<img src="#" onerror="alert(1)"><script>alert(1)</script>';
  const clean = DOMPurify.sanitize(malicious);
  assert.ok(!clean.includes('<script'));
  assert.ok(!/onerror=/i.test(clean));
});

test('sanitizes dangerous image input', () => {
  const dirty = '<img src=x onerror=alert(1) />';
  const clean = DOMPurify.sanitize(dirty);
  assert.ok(!/onerror=/i.test(clean));
  assert.ok(!/alert\(1\)/i.test(clean));
});
