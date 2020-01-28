const formatTime = require('../client/formatTime');

test('formatTime', () => expect(formatTime(0)).toBe('0:00'));
test('formatTime', () => expect(formatTime(1)).toBe('0:01'));
test('formatTime', () => expect(formatTime(60)).toBe('1:00'));
test('formatTime', () => expect(formatTime(61)).toBe('1:01'));
test('formatTime', () => expect(formatTime(599)).toBe('9:59'));
test('formatTime', () => expect(formatTime(600)).toBe('10:00'));
test('formatTime', () => expect(formatTime(3599)).toBe('59:59'));
test('formatTime', () => expect(formatTime(3600)).toBe('1:00:00'));
test('formatTime', () => expect(formatTime(3601)).toBe('1:00:01'));
test('formatTime', () => expect(formatTime(8542)).toBe('2:22:22'));
test('formatTime', () => expect(formatTime(120813)).toBe('33:33:33'));

test('formatTime', () => expect(formatTime(0.4)).toBe('0:00'));
test('formatTime', () => expect(formatTime(0.6)).toBe('0:01'));
test('formatTime', () => expect(formatTime(59.6)).toBe('1:00'));
test('formatTime', () => expect(formatTime(60.1)).toBe('1:00'));
