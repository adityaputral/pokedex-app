type ElementType =
  | 'grass'
  | 'poison'
  | 'fire'
  | 'water'
  | 'bug'
  | 'normal'
  | 'electric'
  | 'ground';

export default function typeToColorMapper(type: ElementType): string {
  const mapper = {
    grass: 'green',
    poison: 'purple',
    fire: 'red',
    water: 'blue',
    bug: 'bug',
    normal: 'grey',
    electric: 'yellow',
    ground: 'brown'
  };

  return mapper[type];
}
