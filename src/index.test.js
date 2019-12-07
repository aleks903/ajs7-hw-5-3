import generateShortDescription from './index.js';

test('Проверка вывод краткого состояния Bowman', () => {
  const characters = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = generateShortDescription(characters);
  const expected = '\u{1F620}Л(1) \u{2694}40 \u{1F6E1}10 \u{2764}50';

  expect(received).toBe(expected);
});

test('Проверка вывод краткого состояния Swordsman', () => {
  const characters = {
    name: 'Лучник',
    type: 'Swordsman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = generateShortDescription(characters);
  const expected = '\u{1F621}Л(1) \u{2694}40 \u{1F6E1}10 \u{2764}50';

  expect(received).toBe(expected);
});

test('Проверка вывод краткого состояния Magician', () => {
  const characters = {
    name: 'Лучник',
    type: 'Magician',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = generateShortDescription(characters);
  const expected = '\u{1F9D0}Л(1) \u{2694}40 \u{1F6E1}10 \u{2764}50';

  expect(received).toBe(expected);
});

test('Проверка вывод краткого состояния Daemon', () => {
  const characters = {
    name: 'Лучник',
    type: 'Daemon',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = generateShortDescription(characters);
  const expected = '\u{1F47F}Л(1) \u{2694}40 \u{1F6E1}10 \u{2764}50';

  expect(received).toBe(expected);
});

test('Проверка вывод краткого состояния Undead', () => {
  const characters = {
    name: 'Лучник',
    type: 'Undead',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = generateShortDescription(characters);
  const expected = '\u{1F480}Л(1) \u{2694}40 \u{1F6E1}10 \u{2764}50';

  expect(received).toBe(expected);
});

test('Проверка вывод краткого состояния Zombie', () => {
  const characters = {
    name: 'Лучник',
    type: 'Zombie',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const received = generateShortDescription(characters);
  const expected = '\u{1F9DF}Л(1) \u{2694}40 \u{1F6E1}10 \u{2764}50';

  expect(received).toBe(expected);
});
