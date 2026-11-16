import { glue } from '../src/i18n';
import { test, expect } from 'vitest';
test('glue', () => {
  const nb = '\u00a0';
  expect(glue('Ниже 2 500 футов')).toBe(`Ниже 2${nb}500${nb}футов`);
  expect(glue('count 5 s then 10 ft (SIM 4-1)')).toBe(`count 5${nb}s then 10${nb}ft (SIM${nb}4-1)`);
  expect(glue('the 3 seats')).toBe('the 3 seats');
  expect(glue('5 secondes, 2 minutes')).toBe('5 secondes, 2 minutes');
  expect(glue('за 5 с, на 30 м выше')).toBe(`за 5${nb}с, на 30${nb}м выше`);
});
