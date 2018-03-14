const vowels = ['a', 'e', 'i', 'o', 'u'];

const translate = s => {
  if (vowels.includes(s[0])) return s + 'way';
  const f = Array.from(s).findIndex(x => vowels.includes(x));
  return s.slice(f) + s.slice(0, f) + 'ay';
};
