const infoCurHero = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

export default function generateShortDescription(obj) {
  const {
    name, type, health, level, attack, defence,
  } = obj;
  let iconType;
  switch (type) {
    case 'Bowman':
      iconType = '\u{1F620}';
      break;
    case 'Swordsman':
      iconType = '\u{1F621}';
      break;
    case 'Magician':
      iconType = '\u{1F9D0}';
      break;
    case 'Daemon':
      iconType = '\u{1F47F}';
      break;
    case 'Undead':
      iconType = '\u{1F480}';
      break;
    case 'Zombie':
      iconType = '\u{1F9DF}';
      break;
    default:
      iconType = '\u{1F9DF}';
      break;
  }

  return `${iconType}${name[0]}(${level}) \u{2694}${attack} \u{1F6E1}${defence} \u{2764}${health}`;
}

console.log(generateShortDescription(infoCurHero));
