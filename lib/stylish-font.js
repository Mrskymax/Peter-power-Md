// @ts-nocheck
var style = new StyleText();
style.tools.creepify.options.maxHeight = 10;
function createMap(_0x46213b) {
  var _0x2664ae = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var _0x1c384e = 0;
  var _0x380042 = {};
  for (var _0x1743e2 of _0x46213b) {
    _0x380042[_0x2664ae[_0x1c384e]] = _0x1743e2;
    _0x1c384e++;
  }
  return JSON.stringify(_0x380042);
}
const mangaCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "卂",
  b: "乃",
  c: "匚",
  d: "ᗪ",
  e: "乇",
  f: "千",
  g: "ᘜ",
  h: "卄",
  i: "|",
  j: "ﾌ",
  k: "Ҝ",
  l: "ㄥ",
  m: "爪",
  n: "几",
  o: "ㄖ",
  p: "卩",
  q: "Ҩ",
  r: "尺",
  s: "丂",
  t: "ㄒ",
  u: "ㄩ",
  v: "ᐯ",
  w: "山",
  x: "乂",
  y: "ㄚ",
  z: "乙",
  A: "卂",
  B: "乃",
  C: "匚",
  D: "ᗪ",
  E: "乇",
  F: "千",
  G: "ᘜ",
  H: "卄",
  I: "|",
  J: "ﾌ",
  K: "Ҝ",
  L: "ㄥ",
  M: "爪",
  N: "几",
  O: "ㄖ",
  P: "卩",
  Q: "Ҩ",
  R: "尺",
  S: "丂",
  T: "ㄒ",
  U: "ㄩ",
  V: "ᐯ",
  W: "山",
  X: "乂",
  Y: "ㄚ",
  Z: "乙"
};
const ladybugCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ꍏ",
  b: "ꌃ",
  c: "ꏳ",
  d: "ꀷ",
  e: "ꏂ",
  f: "ꎇ",
  g: "ꁅ",
  h: "ꀍ",
  i: "ꀤ",
  j: "꒻",
  k: "ꀘ",
  l: "꒒",
  m: "ꎭ",
  n: "ꈤ",
  o: "ꂦ",
  p: "ᖘ",
  q: "ꆰ",
  r: "ꋪ",
  s: "ꌚ",
  t: "꓄",
  u: "ꀎ",
  v: "꒦",
  w: "ꅐ",
  x: "ꉧ",
  y: "ꌩ",
  z: "ꁴ",
  A: "ꍏ",
  B: "ꌃ",
  C: "ꏳ",
  D: "ꀷ",
  E: "ꏂ",
  F: "ꎇ",
  G: "ꁅ",
  H: "ꀍ",
  I: "ꀤ",
  J: "꒻",
  K: "ꀘ",
  L: "꒒",
  M: "ꎭ",
  N: "ꈤ",
  O: "ꂦ",
  P: "ᖘ",
  Q: "ꆰ",
  R: "ꋪ",
  S: "ꌚ",
  T: "꓄",
  U: "ꀎ",
  V: "꒦",
  W: "ꅐ",
  X: "ꉧ",
  Y: "ꌩ",
  Z: "ꁴ"
};
const runesCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ል",
  b: "ጌ",
  c: "ር",
  d: "ዕ",
  e: "ቿ",
  f: "ቻ",
  g: "ኗ",
  h: "ዘ",
  i: "ጎ",
  j: "ጋ",
  k: "ጕ",
  l: "ረ",
  m: "ጠ",
  n: "ክ",
  o: "ዐ",
  p: "የ",
  q: "ዒ",
  r: "ዪ",
  s: "ነ",
  t: "ፕ",
  u: "ሁ",
  v: "ሀ",
  w: "ሠ",
  x: "ሸ",
  y: "ሃ",
  z: "ጊ",
  A: "ል",
  B: "ጌ",
  C: "ር",
  D: "ዕ",
  E: "ቿ",
  F: "ቻ",
  G: "ኗ",
  H: "ዘ",
  I: "ጎ",
  J: "ጋ",
  K: "ጕ",
  L: "ረ",
  M: "ጠ",
  N: "ክ",
  O: "ዐ",
  P: "የ",
  Q: "ዒ",
  R: "ዪ",
  S: "ነ",
  T: "ፕ",
  U: "ሁ",
  V: "ሀ",
  W: "ሠ",
  X: "ሸ",
  Y: "ሃ",
  Z: "ጊ"
};
const serif_BCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "𝐚",
  b: "𝐛",
  c: "𝐜",
  d: "𝐝",
  e: "𝐞",
  f: "𝐟",
  g: "𝐠",
  h: "𝐡",
  i: "𝐢",
  j: "𝐣",
  k: "𝐤",
  l: "𝐥",
  m: "𝐦",
  n: "𝐧",
  o: "𝐨",
  p: "𝐩",
  q: "𝐪",
  r: "𝐫",
  s: "𝐬",
  t: "𝐭",
  u: "𝐮",
  v: "𝐯",
  w: "𝐰",
  x: "𝐱",
  y: "𝐲",
  z: "𝐳",
  A: "𝐀",
  B: "𝐁",
  C: "𝐂",
  D: "𝐃",
  E: "𝐄",
  F: "𝐅",
  G: "𝐆",
  H: "𝐇",
  I: "𝐈",
  J: "𝐉",
  K: "𝐊",
  L: "𝐋",
  M: "𝐌",
  N: "𝐍",
  O: "𝐎",
  P: "𝐏",
  Q: "𝐐",
  R: "𝐑",
  S: "𝐒",
  T: "𝐓",
  U: "𝐔",
  V: "𝐕",
  W: "𝐖",
  X: "𝐗",
  Y: "𝐘",
  Z: "𝐙"
};
const serif_BICharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "𝒂",
  b: "𝒃",
  c: "𝒄",
  d: "𝒅",
  e: "𝒆",
  f: "𝒇",
  g: "𝒈",
  h: "𝒉",
  i: "𝒊",
  j: "𝒋",
  k: "𝒌",
  l: "𝒍",
  m: "𝒎",
  n: "𝒏",
  o: "𝒐",
  p: "𝒑",
  q: "𝒒",
  r: "𝒓",
  s: "𝒔",
  t: "𝒕",
  u: "𝒖",
  v: "𝒗",
  w: "𝒘",
  x: "𝒙",
  y: "𝒚",
  z: "𝒛",
  A: "𝑨",
  B: "𝑩",
  C: "𝑪",
  D: "𝑫",
  E: "𝑬",
  F: "𝑭",
  G: "𝑮",
  H: "𝑯",
  I: "𝑰",
  J: "𝑱",
  K: "𝑲",
  L: "𝑳",
  M: "𝑴",
  N: "𝑵",
  O: "𝑶",
  P: "𝑷",
  Q: "𝑸",
  R: "𝑹",
  S: "𝑺",
  T: "𝑻",
  U: "𝑼",
  V: "𝑽",
  W: "𝑾",
  X: "𝑿",
  Y: "𝒀",
  Z: "𝒁"
};
const serif_ICharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "𝑎",
  b: "𝑏",
  c: "𝑐",
  d: "𝑑",
  e: "𝑒",
  f: "𝑓",
  g: "𝑔",
  h: "ℎ",
  i: "𝑖",
  j: "𝑗",
  k: "𝑘",
  l: "𝑙",
  m: "𝑚",
  n: "𝑛",
  o: "𝑜",
  p: "𝑝",
  q: "𝑞",
  r: "𝑟",
  s: "𝑠",
  t: "𝑡",
  u: "𝑢",
  v: "𝑣",
  w: "𝑤",
  x: "𝑥",
  y: "𝑦",
  z: "𝑧",
  A: "𝐴",
  B: "𝐵",
  C: "𝐶",
  D: "𝐷",
  E: "𝐸",
  F: "𝐹",
  G: "𝐺",
  H: "𝐻",
  I: "𝐼",
  J: "𝐽",
  K: "𝐾",
  L: "𝐿",
  M: "𝑀",
  N: "𝑁",
  O: "𝑂",
  P: "𝑃",
  Q: "𝑄",
  R: "𝑅",
  S: "𝑆",
  T: "𝑇",
  U: "𝑈",
  V: "𝑉",
  W: "𝑊",
  X: "𝑋",
  Y: "𝑌",
  Z: "𝑍"
};
const wingdingsCharMap = {
  0: "📁︎",
  1: "📂︎",
  2: "📄︎",
  3: "🗏︎",
  4: "🗐︎",
  5: "🗄︎",
  6: "⌛︎",
  7: "🖮︎",
  8: "🖰︎",
  9: "🖲︎",
  "!": "✏︎",
  "\"": "✂︎",
  "#": "✁︎",
  $: "👓︎",
  "%": "🕭︎",
  "&": "🕮︎",
  "'": "🕯︎",
  "(": "🕿︎",
  ")": "✆︎",
  "*": "🖂︎",
  "+": "🖃︎",
  ",": "📪︎",
  "-": "📫︎",
  ".": "📬︎",
  "/": "📭︎",
  ":": "🖳︎",
  ";": "🖴︎",
  "<": "🖫︎",
  "=": "🖬︎",
  ">": "✇︎",
  "?": "✍︎",
  A: "✌︎",
  B: "👌︎",
  C: "👍︎",
  D: "👎︎",
  E: "☜︎",
  F: "☞︎",
  G: "☝︎",
  H: "☟︎",
  I: "✋︎",
  J: "☺︎",
  K: "😐︎",
  L: "☹︎",
  M: "💣︎",
  N: "☠︎",
  O: "⚐︎",
  P: "🏱︎",
  Q: "✈︎",
  R: "☼︎",
  S: "💧︎",
  T: "❄︎",
  U: "🕆︎",
  V: "✞︎",
  W: "🕈︎",
  X: "✠︎",
  Y: "✡︎",
  Z: "☪︎",
  "[": "☯︎",
  "\\": "ॐ︎",
  "]": "☸︎",
  "^": "♈︎",
  _: "♉︎",
  "`": "♊︎",
  a: "♋︎",
  b: "♌︎",
  c: "♍︎",
  d: "♎︎",
  e: "♏︎",
  f: "♐︎",
  g: "♑︎",
  h: "♒︎",
  i: "♓︎",
  j: "🙰",
  k: "🙵",
  l: "●︎",
  m: "⭕︎",
  n: "■︎",
  o: "□︎",
  p: "◻︎",
  q: "❑︎",
  r: "🌟︎",
  s: "⬧︎",
  t: "⧫︎",
  u: "◆︎",
  v: "❖︎",
  w: "⬥︎",
  x: "⌧︎",
  y: "⍓︎",
  z: "⌘︎",
  "{": "❀︎",
  "|": "✿︎",
  "}": "❝︎",
  "~": "❞︎",
  "": "▯︎",
  "€": "⓪︎",
  "": "①︎",
  "‚": "②︎",
  ƒ: "③︎",
  "„": "④︎",
  "…": "⑤︎",
  "†": "⑥︎",
  "‡": "⑦︎",
  ˆ: "⑧︎",
  "‰": "⑨︎",
  Š: "⑩︎",
  "‹": "⓿︎",
  Œ: "❶︎",
  "": "❷︎",
  Ž: "❸︎",
  "": "❹︎",
  "": "❺︎",
  "‘": "❻︎",
  "’": "❼︎",
  "“": "❽︎",
  "”": "❾︎",
  "•": "❿︎",
  "–": "◻︎",
  "—": "◻︎",
  "˜": "◻︎",
  "™": "◻︎",
  š: "◻︎",
  "›": "◻︎",
  œ: "◻︎",
  "": "◻︎",
  ž: "·︎",
  Ÿ: "•︎",
  "¡": "○︎",
  "¢": "⭕︎",
  "£": "◻︎",
  "¤": "🔅︎",
  "¥": "◎︎",
  "¦": "◻︎",
  "§": "▪︎",
  "¨": "◻︎",
  "©": "◻︎",
  ª: "✦︎",
  "«": "★︎",
  "¬": "✶︎",
  "®": "✹︎",
  "¯": "✵︎",
  "°": "◻︎",
  "±": "⌖︎",
  "²": "⟡︎",
  "³": "⌑︎",
  "´": "◻︎",
  µ: "✪︎",
  "¶": "✰︎",
  "·": "🕐︎",
  "¸": "🕑︎",
  "¹": "🕒︎",
  º: "🕓︎",
  "»": "🕔︎",
  "¼": "🕕︎",
  "½": "🕖︎",
  "¾": "🕗︎",
  "¿": "🕘︎",
  À: "🕙︎",
  Á: "🕚︎",
  Â: "🕛︎",
  Ã: "◻︎",
  Ä: "◻︎",
  Å: "◻︎",
  Æ: "◻︎",
  Ç: "◻︎",
  È: "◻︎",
  É: "◻︎",
  Ê: "◻︎",
  Ë: "◻︎",
  Ì: "◻︎",
  Í: "◻︎",
  Î: "◻︎",
  Ï: "◻︎",
  Ð: "◻︎",
  Ñ: "◻︎",
  Ò: "◻︎",
  Ó: "◻︎",
  Ô: "◻︎",
  Õ: "⌫︎",
  Ö: "⌦︎",
  "×": "◻︎",
  Ø: "➢︎",
  Ù: "◻︎",
  Ú: "◻︎",
  Û: "◻︎",
  Ü: "➲︎",
  Ý: "◻︎",
  Þ: "◻︎",
  ß: "◻︎",
  à: "◻︎",
  á: "◻︎",
  â: "◻︎",
  ã: "◻︎",
  ä: "◻︎",
  å: "◻︎",
  æ: "◻︎",
  ç: "◻︎",
  è: "➔︎",
  é: "◻︎",
  ê: "◻︎",
  ë: "◻︎",
  ì: "◻︎",
  í: "◻︎",
  î: "◻︎",
  ï: "⇦︎",
  ð: "⇨︎",
  ñ: "⇧︎",
  ò: "⇩︎",
  ó: "⬄︎",
  ô: "⇳︎",
  õ: "⬀︎",
  ö: "⬁︎",
  "÷": "⬃︎",
  ø: "⬂︎",
  ù: "▭︎",
  ú: "▫︎",
  û: "✗︎",
  ü: "✓︎",
  ý: "☒︎",
  þ: "☑︎",
  ÿ: "◻︎"
};
const vaporwaveCharMap = {
  " ": "　",
  "`": "`",
  1: "１",
  2: "２",
  3: "３",
  4: "４",
  5: "５",
  6: "６",
  7: "７",
  8: "８",
  9: "９",
  0: "０",
  "-": "－",
  "=": "＝",
  "~": "~",
  "!": "！",
  "@": "＠",
  "#": "＃",
  $: "＄",
  "%": "％",
  "^": "^",
  "&": "＆",
  "*": "＊",
  "(": "（",
  ")": "）",
  _: "_",
  "+": "＋",
  q: "ｑ",
  w: "ｗ",
  e: "ｅ",
  r: "ｒ",
  t: "ｔ",
  y: "ｙ",
  u: "ｕ",
  i: "ｉ",
  o: "ｏ",
  p: "ｐ",
  "[": "[",
  "]": "]",
  "\\": "\\",
  Q: "Ｑ",
  W: "Ｗ",
  E: "Ｅ",
  R: "Ｒ",
  T: "Ｔ",
  Y: "Ｙ",
  U: "Ｕ",
  I: "Ｉ",
  O: "Ｏ",
  P: "Ｐ",
  "{": "{",
  "}": "}",
  "|": "|",
  a: "ａ",
  s: "ｓ",
  d: "d"
};
const sparrowCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "Δ",
  b: "β",
  c: "C",
  d: "D",
  e: "Σ",
  f: "Ғ",
  g: "G",
  h: "H",
  i: "I",
  j: "J",
  k: "Ҝ",
  l: "L",
  m: "M",
  n: "Π",
  o: "Ω",
  p: "P",
  q: "Q",
  r: "R",
  s: "S",
  t: "T",
  u: "U",
  v: "∇",
  w: "Ш",
  x: "X",
  y: "Ψ",
  z: "Z",
  A: "Δ",
  B: "β",
  C: "C",
  D: "D",
  E: "Σ",
  F: "Ғ",
  G: "G",
  H: "H",
  I: "I",
  J: "J",
  K: "Ҝ",
  L: "L",
  M: "M",
  N: "Π",
  O: "Ω",
  P: "P",
  Q: "Q",
  R: "R",
  S: "S",
  T: "T",
  U: "U",
  V: "∇",
  W: "Ш",
  X: "X",
  Y: "Ψ",
  Z: "Z"
};
const typewriterCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "𝚊",
  b: "𝚋",
  c: "𝚌",
  d: "𝚍",
  e: "𝚎",
  f: "𝚏",
  g: "𝚐",
  h: "𝚑",
  i: "𝚒",
  j: "𝚓",
  k: "𝚔",
  l: "𝚕",
  m: "𝚖",
  n: "𝚗",
  o: "𝚘",
  p: "𝚙",
  q: "𝚚",
  r: "𝚛",
  s: "𝚜",
  t: "𝚝",
  u: "𝚞",
  v: "𝚟",
  w: "𝚠",
  x: "𝚡",
  y: "𝚢",
  z: "𝚣",
  A: "𝙰",
  B: "𝙱",
  C: "𝙲",
  D: "𝙳",
  E: "𝙴",
  F: "𝙵",
  G: "𝙶",
  H: "𝙷",
  I: "𝙸",
  J: "𝙹",
  K: "𝙺",
  L: "𝙻",
  M: "𝙼",
  N: "𝙽",
  O: "𝙾",
  P: "𝙿",
  Q: "𝚀",
  R: "𝚁",
  S: "𝚂",
  T: "𝚃",
  U: "𝚄",
  V: "𝚅",
  W: "𝚆",
  X: "𝚇",
  Y: "𝚈",
  Z: "𝚉"
};
const analuciaCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ꪖ",
  b: "᥇",
  c: "ᥴ",
  d: "ᦔ",
  e: "ꫀ",
  f: "ᠻ",
  g: "ᧁ",
  h: "ꫝ",
  i: "𝓲",
  j: "𝓳",
  k: "𝘬",
  l: "ꪶ",
  m: "ꪑ",
  n: "ꪀ",
  o: "ꪮ",
  p: "ρ",
  q: "𝘲",
  r: "𝘳",
  s: "𝘴",
  t: "𝓽",
  u: "ꪊ",
  v: "ꪜ",
  w: "᭙",
  x: "᥊",
  y: "ꪗ",
  z: "ɀ",
  A: "ꪖ",
  B: "᥇",
  C: "ᥴ",
  D: "ᦔ",
  E: "ꫀ",
  F: "ᠻ",
  G: "ᧁ",
  H: "ꫝ",
  I: "𝓲",
  J: "𝓳",
  K: "𝘬",
  L: "ꪶ",
  M: "ꪑ",
  N: "ꪀ",
  O: "ꪮ",
  P: "ρ",
  Q: "𝘲",
  R: "𝘳",
  S: "𝘴",
  T: "𝓽",
  U: "ꪊ",
  V: "ꪜ",
  W: "᭙",
  X: "᥊",
  Y: "ꪗ",
  Z: "ɀ"
};
function listall(_0x2c92d3) {
  _0x2c92d3 = _0x2c92d3.trim();
  if (_0x2c92d3 === "") {
    return "";
  }
  var _0x2fd24e = [];
  _0x2fd24e.push(tiny(_0x2c92d3));
  _0x2fd24e.push(flip(_0x2c92d3));
  _0x2fd24e.push(roundsquares(_0x2c92d3));
  _0x2fd24e.push(squares(_0x2c92d3));
  _0x2fd24e.push(mirror(_0x2c92d3));
  _0x2fd24e.push(bubbles(_0x2c92d3));
  _0x2fd24e.push(strikeThrough(_0x2c92d3));
  _0x2fd24e.push(tildeStrikeThrough(_0x2c92d3));
  _0x2fd24e.push(slashThrough(_0x2c92d3));
  _0x2fd24e.push(underline(_0x2c92d3));
  _0x2fd24e.push(doubleUnderline(_0x2c92d3));
  _0x2fd24e.push(heartsBetween(_0x2c92d3));
  _0x2fd24e.push(arrowBelow(_0x2c92d3));
  _0x2fd24e.push(crossAboveBelow(_0x2c92d3));
  _0x2fd24e.push(wingdings(_0x2c92d3));
  _0x2fd24e.push(vaporwave(_0x2c92d3));
  _0x2fd24e.push(sparrow(_0x2c92d3));
  _0x2fd24e.push(manga(_0x2c92d3));
  _0x2fd24e.push(ladybug(_0x2c92d3));
  _0x2fd24e.push(runes(_0x2c92d3));
  _0x2fd24e.push(serif_B(_0x2c92d3));
  _0x2fd24e.push(serif_BI(_0x2c92d3));
  _0x2fd24e.push(serif_I(_0x2c92d3));
  _0x2fd24e.push(analucia(_0x2c92d3));
  _0x2fd24e.push(typewriter(_0x2c92d3));
  _0x2fd24e.push(textstyle1(_0x2c92d3));
  _0x2fd24e.push(textstyle2(_0x2c92d3));
  _0x2fd24e.push(textstyle3(_0x2c92d3));
  _0x2fd24e.push(textstyle4(_0x2c92d3));
  _0x2fd24e.push(textstyle5(_0x2c92d3));
  _0x2fd24e.push(textstyle6(_0x2c92d3));
  _0x2fd24e.push(textstyle7(_0x2c92d3));
  _0x2fd24e.push(textstyle8(_0x2c92d3));
  _0x2fd24e.push(textstyle9(_0x2c92d3));
  _0x2fd24e.push(textstyle10(_0x2c92d3));
  _0x2fd24e.push(textstyle11(_0x2c92d3));
  _0x2fd24e.push(textstyle12(_0x2c92d3));
  _0x2fd24e.push(textstyle13(_0x2c92d3));
  _0x2fd24e.push(textstyle14(_0x2c92d3));
  _0x2fd24e.push(textstyle15(_0x2c92d3));
  _0x2fd24e.push(textstyle16(_0x2c92d3));
  _0x2fd24e.push(textstyle17(_0x2c92d3));
  _0x2fd24e.push(textstyle18(_0x2c92d3));
  _0x2fd24e.push(textstyle19(_0x2c92d3));
  _0x2fd24e.push(textstyle20(_0x2c92d3));
  _0x2fd24e.push(textstyle21(_0x2c92d3));
  _0x2fd24e.push(textstyle22(_0x2c92d3));
  _0x2fd24e.push(textstyle23(_0x2c92d3));
  _0x2fd24e.push(textstyle24(_0x2c92d3));
  _0x2fd24e.push(textstyle25(_0x2c92d3));
  _0x2fd24e.push(textstyle26(_0x2c92d3));
  _0x2fd24e.push(textstyle27(_0x2c92d3));
  _0x2fd24e.push(textstyle28(_0x2c92d3));
  _0x2fd24e.push(textstyle29(_0x2c92d3));
  _0x2fd24e.push(textstyle30(_0x2c92d3));
  _0x2fd24e.push(textstyle31(_0x2c92d3));
  _0x2fd24e.push(textstyle32(_0x2c92d3));
  _0x2fd24e.push(textstyle33(_0x2c92d3));
  return _0x2fd24e;
}
function flip(_0xf6a82b) {
  return style.tools.flip.encode(_0xf6a82b);
}
function roundsquares(_0x490b9d) {
  return style.tools.roundsquares.encode(_0x490b9d);
}
function squares(_0x40976a) {
  return style.tools.squares.encode(_0x40976a);
}
function mirror(_0x3f5dc8) {
  return style.tools.mirror.encode(_0x3f5dc8);
}
function creepify(_0x1cff59) {
  return style.tools.creepify.encode(_0x1cff59);
}
function bubbles(_0x1ebe09) {
  return style.tools.bubbles.encode(_0x1ebe09);
}
function strikeThrough(_0xd3a44c) {
  return _0xd3a44c.split("").join("̶") + "̶";
}
function tildeStrikeThrough(_0x331687) {
  return _0x331687.split("").join("̴") + "̴";
}
function underline(_0x155300) {
  return _0x155300.split("").join("̲") + "̲";
}
function doubleUnderline(_0x10ec89) {
  return _0x10ec89.split("").join("̳") + "̳";
}
function slashThrough(_0x32ae0f) {
  return _0x32ae0f.split("").join("̷") + "̷";
}
function heartsBetween(_0x1110ea) {
  return _0x1110ea.split("").join("♥");
}
function arrowBelow(_0x3e53b2) {
  return _0x3e53b2.split("").join("͎") + "͎";
}
function crossAboveBelow(_0x5b3eb4) {
  return _0x5b3eb4.split("").join("͓̽") + "͓̽";
}
function manga(_0x35b349) {
  return _0x35b349.split("").map(function (_0x144be6) {
    if (mangaCharMap[_0x144be6]) {
      return mangaCharMap[_0x144be6];
    } else {
      return _0x144be6;
    }
  }).join("");
}
const textstyle1chrmap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ค",
  b: "๖",
  c: "¢",
  d: "໓",
  e: "ē",
  f: "f",
  g: "ງ",
  h: "h",
  i: "i",
  j: "ว",
  k: "k",
  l: "l",
  m: "๓",
  n: "ຖ",
  o: "໐",
  p: "p",
  q: "๑",
  r: "r",
  s: "Ş",
  t: "t",
  u: "น",
  v: "ง",
  w: "ຟ",
  x: "x",
  y: "ฯ",
  z: "ຊ",
  A: "ค",
  B: "๖",
  C: "¢",
  D: "໓",
  E: "ē",
  F: "f",
  G: "ງ",
  H: "h",
  I: "i",
  J: "ว",
  K: "k",
  L: "l",
  M: "๓",
  N: "ຖ",
  O: "໐",
  P: "p",
  Q: "๑",
  R: "r",
  S: "Ş",
  T: "t",
  U: "น",
  V: "ง",
  W: "ຟ",
  X: "x",
  Y: "ฯ",
  Z: "ຊ"
};
function textstyle1(_0x195831) {
  return _0x195831.split("").map(function (_0xb657bc) {
    if (textstyle1chrmap[_0xb657bc]) {
      return textstyle1chrmap[_0xb657bc];
    } else {
      return _0xb657bc;
    }
  }).join("");
}
const textstyle2chrmap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ą",
  b: "ც",
  c: "ƈ",
  d: "ɖ",
  e: "ɛ",
  f: "ʄ",
  g: "ɠ",
  h: "ɧ",
  i: "ı",
  j: "ʝ",
  k: "ƙ",
  l: "Ɩ",
  m: "ɱ",
  n: "ŋ",
  o: "ơ",
  p: "℘",
  q: "զ",
  r: "ཞ",
  s: "ʂ",
  t: "ɬ",
  u: "ų",
  v: "۷",
  w: "ῳ",
  x: "ҳ",
  y: "ყ",
  z: "ʑ",
  A: "ą",
  B: "ც",
  C: "ƈ",
  D: "ɖ",
  E: "ɛ",
  F: "ʄ",
  G: "ɠ",
  H: "ɧ",
  I: "ı",
  J: "ʝ",
  K: "ƙ",
  L: "Ɩ",
  M: "ɱ",
  N: "ŋ",
  O: "ơ",
  P: "℘",
  Q: "զ",
  R: "ཞ",
  S: "ʂ",
  T: "ɬ",
  U: "ų",
  V: "۷",
  W: "ῳ",
  X: "ҳ",
  Y: "ყ",
  Z: "ʑ"
};
function textstyle2(_0x508f75) {
  return _0x508f75.split("").map(function (_0x74b60e) {
    if (textstyle2chrmap[_0x74b60e]) {
      return textstyle2chrmap[_0x74b60e];
    } else {
      return _0x74b60e;
    }
  }).join("");
}
const textstyle3chrmap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ﾑ",
  b: "乃",
  c: "ᄃ",
  d: "り",
  e: "乇",
  f: "ｷ",
  g: "ム",
  h: "ん",
  i: "ﾉ",
  j: "ﾌ",
  k: "ズ",
  l: "ﾚ",
  m: "ﾶ",
  n: "刀",
  o: "の",
  p: "ｱ",
  q: "ゐ",
  r: "尺",
  s: "丂",
  t: "ｲ",
  u: "ひ",
  v: "√",
  w: "W",
  x: "ﾒ",
  y: "ﾘ",
  z: "乙",
  A: "ﾑ",
  B: "乃",
  C: "ᄃ",
  D: "り",
  E: "乇",
  F: "ｷ",
  G: "ム",
  H: "ん",
  I: "ﾉ",
  J: "ﾌ",
  K: "ズ",
  L: "ﾚ",
  M: "ﾶ",
  N: "刀",
  O: "の",
  P: "ｱ",
  Q: "ゐ",
  R: "尺",
  S: "丂",
  T: "ｲ",
  U: "ひ",
  V: "√",
  W: "W",
  X: "ﾒ",
  Y: "ﾘ",
  Z: "乙"
};
function textstyle3(_0x4c61df) {
  return _0x4c61df.split("").map(function (_0x1e082f) {
    if (textstyle3chrmap[_0x1e082f]) {
      return textstyle3chrmap[_0x1e082f];
    } else {
      return _0x1e082f;
    }
  }).join("");
}
const textstyle4chrmap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "卂",
  b: "乃",
  c: "匚",
  d: "ᗪ",
  e: "乇",
  f: "千",
  g: "Ꮆ",
  h: "卄",
  i: "丨",
  j: "ﾌ",
  k: "Ҝ",
  l: "ㄥ",
  m: "爪",
  n: "几",
  o: "ㄖ",
  p: "卩",
  q: "Ɋ",
  r: "尺",
  s: "丂",
  t: "ㄒ",
  u: "ㄩ",
  v: "ᐯ",
  w: "山",
  x: "乂",
  y: "ㄚ",
  z: "乙",
  A: "卂",
  B: "乃",
  C: "匚",
  D: "ᗪ",
  E: "乇",
  F: "千",
  G: "Ꮆ",
  H: "卄",
  I: "丨",
  J: "ﾌ",
  K: "Ҝ",
  L: "ㄥ",
  M: "爪",
  N: "几",
  O: "ㄖ",
  P: "卩",
  Q: "Ɋ",
  R: "尺",
  S: "丂",
  T: "ㄒ",
  U: "ㄩ",
  V: "ᐯ",
  W: "山",
  X: "乂",
  Y: "ㄚ",
  Z: "乙"
};
function textstyle4(_0x9af47e) {
  return _0x9af47e.split("").map(function (_0x59f876) {
    if (textstyle4chrmap[_0x59f876]) {
      return textstyle4chrmap[_0x59f876];
    } else {
      return _0x59f876;
    }
  }).join("");
}
const textstyle5chrmap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "🄰",
  b: "🄱",
  c: "🄲",
  d: "🄳",
  e: "🄴",
  f: "🄵",
  g: "🄶",
  h: "🄷",
  i: "🄸",
  j: "🄹",
  k: "🄺",
  l: "🄻",
  m: "🄼",
  n: "🄽",
  o: "🄾",
  p: "🄿",
  q: "🅀",
  r: "🅁",
  s: "🅂",
  t: "🅃",
  u: "🅄",
  v: "🅅",
  w: "🅆",
  x: "🅇",
  y: "🅈",
  z: "🅉",
  A: "🄰",
  B: "🄱",
  C: "🄲",
  D: "🄳",
  E: "🄴",
  F: "🄵",
  G: "🄶",
  H: "🄷",
  I: "🄸",
  J: "🄹",
  K: "🄺",
  L: "🄻",
  M: "🄼",
  N: "🄽",
  O: "🄾",
  P: "🄿",
  Q: "🅀",
  R: "🅁",
  S: "🅂",
  T: "🅃",
  U: "🅄",
  V: "🅅",
  W: "🅆",
  X: "🅇",
  Y: "🅈",
  Z: "🅉"
};
function textstyle5(_0x10347b) {
  return _0x10347b.split("").map(function (_0x557906) {
    if (textstyle5chrmap[_0x557906]) {
      return textstyle5chrmap[_0x557906];
    } else {
      return _0x557906;
    }
  }).join("");
}
const textstyle6chrmap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "Ꮧ",
  b: "Ᏸ",
  c: "ፈ",
  d: "Ꮄ",
  e: "Ꮛ",
  f: "Ꭶ",
  g: "Ꮆ",
  h: "Ꮒ",
  i: "Ꭵ",
  j: "Ꮰ",
  k: "Ꮶ",
  l: "Ꮭ",
  m: "Ꮇ",
  n: "Ꮑ",
  o: "Ꭷ",
  p: "Ꭾ",
  q: "Ꭴ",
  r: "Ꮢ",
  s: "Ꮥ",
  t: "Ꮦ",
  u: "Ꮼ",
  v: "Ꮙ",
  w: "Ꮗ",
  x: "ጀ",
  y: "Ꭹ",
  z: "ፚ",
  A: "Ꮧ",
  B: "Ᏸ",
  C: "ፈ",
  D: "Ꮄ",
  E: "Ꮛ",
  F: "Ꭶ",
  G: "Ꮆ",
  H: "Ꮒ",
  I: "Ꭵ",
  J: "Ꮰ",
  K: "Ꮶ",
  L: "Ꮭ",
  M: "Ꮇ",
  N: "Ꮑ",
  O: "Ꭷ",
  P: "Ꭾ",
  Q: "Ꭴ",
  R: "Ꮢ",
  S: "Ꮥ",
  T: "Ꮦ",
  U: "Ꮼ",
  V: "Ꮙ",
  W: "Ꮗ",
  X: "ጀ",
  Y: "Ꭹ",
  Z: "ፚ"
};
function textstyle6(_0xc32a5e) {
  return _0xc32a5e.split("").map(function (_0x772a51) {
    if (textstyle6chrmap[_0x772a51]) {
      return textstyle6chrmap[_0x772a51];
    } else {
      return _0x772a51;
    }
  }).join("");
}
const textstyle7chrmap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ᗩ",
  b: "ᗷ",
  c: "ᑕ",
  d: "ᗪ",
  e: "E",
  f: "ᖴ",
  g: "G",
  h: "ᕼ",
  i: "I",
  j: "ᒍ",
  k: "K",
  l: "ᒪ",
  m: "ᗰ",
  n: "ᑎ",
  o: "O",
  p: "ᑭ",
  q: "ᑫ",
  r: "ᖇ",
  s: "ᔕ",
  t: "T",
  u: "ᑌ",
  v: "ᐯ",
  w: "ᗯ",
  x: "᙭",
  y: "Y",
  z: "ᘔ",
  A: "ᗩ",
  B: "ᗷ",
  C: "ᑕ",
  D: "ᗪ",
  E: "E",
  F: "ᖴ",
  G: "G",
  H: "ᕼ",
  I: "I",
  J: "ᒍ",
  K: "K",
  L: "ᒪ",
  M: "ᗰ",
  N: "ᑎ",
  O: "O",
  P: "ᑭ",
  Q: "ᑫ",
  R: "ᖇ",
  S: "ᔕ",
  T: "T",
  U: "ᑌ",
  V: "ᐯ",
  W: "ᗯ",
  X: "᙭",
  Y: "Y",
  Z: "ᘔ"
};
function textstyle7(_0x43b5c9) {
  return _0x43b5c9.split("").map(function (_0x2e9881) {
    if (textstyle7chrmap[_0x2e9881]) {
      return textstyle7chrmap[_0x2e9881];
    } else {
      return _0x2e9881;
    }
  }).join("");
}
const textstyle8chrmap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ǟ",
  b: "ɮ",
  c: "ƈ",
  d: "ɖ",
  e: "ɛ",
  f: "ʄ",
  g: "ɢ",
  h: "ɦ",
  i: "ɨ",
  j: "ʝ",
  k: "ӄ",
  l: "ʟ",
  m: "ʍ",
  n: "ռ",
  o: "օ",
  p: "ք",
  q: "զ",
  r: "ʀ",
  s: "ֆ",
  t: "ȶ",
  u: "ʊ",
  v: "ʋ",
  w: "ա",
  x: "Ӽ",
  y: "ʏ",
  z: "ʐ",
  A: "ǟ",
  B: "ɮ",
  C: "ƈ",
  D: "ɖ",
  E: "ɛ",
  F: "ʄ",
  G: "ɢ",
  H: "ɦ",
  I: "ɨ",
  J: "ʝ",
  K: "ӄ",
  L: "ʟ",
  M: "ʍ",
  N: "ռ",
  O: "օ",
  P: "ք",
  Q: "զ",
  R: "ʀ",
  S: "ֆ",
  T: "ȶ",
  U: "ʊ",
  V: "ʋ",
  W: "ա",
  X: "Ӽ",
  Y: "ʏ",
  Z: "ʐ"
};
function textstyle8(_0x401edd) {
  return _0x401edd.split("").map(function (_0x22c748) {
    if (textstyle8chrmap[_0x22c748]) {
      return textstyle8chrmap[_0x22c748];
    } else {
      return _0x22c748;
    }
  }).join("");
}
const textstyle9chrmap = {
  0: "𝟶",
  1: "𝟷",
  2: "𝟸",
  3: "𝟹",
  4: "𝟺",
  5: "𝟻",
  6: "𝟼",
  7: "𝟽",
  8: "𝟾",
  9: "𝟿",
  a: "𝚊",
  b: "𝚋",
  c: "𝚌",
  d: "𝚍",
  e: "𝚎",
  f: "𝚏",
  g: "𝚐",
  h: "𝚑",
  i: "𝚒",
  j: "𝚓",
  k: "𝚔",
  l: "𝚕",
  m: "𝚖",
  n: "𝚗",
  o: "𝚘",
  p: "𝚙",
  q: "𝚚",
  r: "𝚛",
  s: "𝚜",
  t: "𝚝",
  u: "𝚞",
  v: "𝚟",
  w: "𝚠",
  x: "𝚡",
  y: "𝚢",
  z: "𝚣",
  A: "𝙰",
  B: "𝙱",
  C: "𝙲",
  D: "𝙳",
  E: "𝙴",
  F: "𝙵",
  G: "𝙶",
  H: "𝙷",
  I: "𝙸",
  J: "𝙹",
  K: "𝙺",
  L: "𝙻",
  M: "𝙼",
  N: "𝙽",
  O: "𝙾",
  P: "𝙿",
  Q: "𝚀",
  R: "𝚁",
  S: "𝚂",
  T: "𝚃",
  U: "𝚄",
  V: "𝚅",
  W: "𝚆",
  X: "𝚇",
  Y: "𝚈",
  Z: "𝚉"
};
function textstyle9(_0x50bd7b) {
  return _0x50bd7b.split("").map(function (_0x3311ea) {
    if (textstyle9chrmap[_0x3311ea]) {
      return textstyle9chrmap[_0x3311ea];
    } else {
      return _0x3311ea;
    }
  }).join("");
}
const textstyle10chrmap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "𝙖",
  b: "𝙗",
  c: "𝙘",
  d: "𝙙",
  e: "𝙚",
  f: "𝙛",
  g: "𝙜",
  h: "𝙝",
  i: "𝙞",
  j: "𝙟",
  k: "𝙠",
  l: "𝙡",
  m: "𝙢",
  n: "𝙣",
  o: "𝙤",
  p: "𝙥",
  q: "𝙦",
  r: "𝙧",
  s: "𝙨",
  t: "𝙩",
  u: "𝙪",
  v: "𝙫",
  w: "𝙬",
  x: "𝙭",
  y: "𝙮",
  z: "𝙯",
  A: "𝘼",
  B: "𝘽",
  C: "𝘾",
  D: "𝘿",
  E: "𝙀",
  F: "𝙁",
  G: "𝙂",
  H: "𝙃",
  I: "𝙄",
  J: "𝙅",
  K: "𝙆",
  L: "𝙇",
  M: "𝙈",
  N: "𝙉",
  O: "𝙊",
  P: "𝙋",
  Q: "𝙌",
  R: "𝙍",
  S: "𝙎",
  T: "𝙏",
  U: "𝙐",
  V: "𝙑",
  W: "𝙒",
  X: "𝙓",
  Y: "𝙔",
  Z: "𝙕"
};
function textstyle10(_0x3f195e) {
  return _0x3f195e.split("").map(function (_0x46df38) {
    if (textstyle10chrmap[_0x46df38]) {
      return textstyle10chrmap[_0x46df38];
    } else {
      return _0x46df38;
    }
  }).join("");
}
const textstyle11chrmap = {
  0: "𝟬",
  1: "𝟭",
  2: "𝟮",
  3: "𝟯",
  4: "𝟰",
  5: "𝟱",
  6: "𝟲",
  7: "𝟳",
  8: "𝟴",
  9: "𝟵",
  a: "𝗮",
  b: "𝗯",
  c: "𝗰",
  d: "𝗱",
  e: "𝗲",
  f: "𝗳",
  g: "𝗴",
  h: "𝗵",
  i: "𝗶",
  j: "𝗷",
  k: "𝗸",
  l: "𝗹",
  m: "𝗺",
  n: "𝗻",
  o: "𝗼",
  p: "𝗽",
  q: "𝗾",
  r: "𝗿",
  s: "𝘀",
  t: "𝘁",
  u: "𝘂",
  v: "𝘃",
  w: "𝘄",
  x: "𝘅",
  y: "𝘆",
  z: "𝘇",
  A: "𝗔",
  B: "𝗕",
  C: "𝗖",
  D: "𝗗",
  E: "𝗘",
  F: "𝗙",
  G: "𝗚",
  H: "𝗛",
  I: "𝗜",
  J: "𝗝",
  K: "𝗞",
  L: "𝗟",
  M: "𝗠",
  N: "𝗡",
  O: "𝗢",
  P: "𝗣",
  Q: "𝗤",
  R: "𝗥",
  S: "𝗦",
  T: "𝗧",
  U: "𝗨",
  V: "𝗩",
  W: "𝗪",
  X: "𝗫",
  Y: "𝗬",
  Z: "𝗭"
};
function textstyle11(_0x2aadf7) {
  return _0x2aadf7.split("").map(function (_0x5074e4) {
    if (textstyle11chrmap[_0x5074e4]) {
      return textstyle11chrmap[_0x5074e4];
    } else {
      return _0x5074e4;
    }
  }).join("");
}
const textstyle12chrmap = {
  0: "𝟎",
  1: "𝟏",
  2: "𝟐",
  3: "𝟑",
  4: "𝟒",
  5: "𝟓",
  6: "𝟔",
  7: "𝟕",
  8: "𝟖",
  9: "𝟗",
  a: "𝐚",
  b: "𝐛",
  c: "𝐜",
  d: "𝐝",
  e: "𝐞",
  f: "𝐟",
  g: "𝐠",
  h: "𝐡",
  i: "𝐢",
  j: "𝐣",
  k: "𝐤",
  l: "𝐥",
  m: "𝐦",
  n: "𝐧",
  o: "𝐨",
  p: "𝐩",
  q: "𝐪",
  r: "𝐫",
  s: "𝐬",
  t: "𝐭",
  u: "𝐮",
  v: "𝐯",
  w: "𝐰",
  x: "𝐱",
  y: "𝐲",
  z: "𝐳",
  A: "𝐀",
  B: "𝐁",
  C: "𝐂",
  D: "𝐃",
  E: "𝐄",
  F: "𝐅",
  G: "𝐆",
  H: "𝐇",
  I: "𝐈",
  J: "𝐉",
  K: "𝐊",
  L: "𝐋",
  M: "𝐌",
  N: "𝐍",
  O: "𝐎",
  P: "𝐏",
  Q: "𝐐",
  R: "𝐑",
  S: "𝐒",
  T: "𝐓",
  U: "𝐔",
  V: "𝐕",
  W: "𝐖",
  X: "𝐗",
  Y: "𝐘",
  Z: "𝐙"
};
function textstyle12(_0x2cfd93) {
  return _0x2cfd93.split("").map(function (_0x491b2d) {
    if (textstyle12chrmap[_0x491b2d]) {
      return textstyle12chrmap[_0x491b2d];
    } else {
      return _0x491b2d;
    }
  }).join("");
}
const textstyle13chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "𝘢",
  b: "𝘣",
  c: "𝘤",
  d: "𝘥",
  e: "𝘦",
  f: "𝘧",
  g: "𝘨",
  h: "𝘩",
  i: "𝘪",
  j: "𝘫",
  k: "𝘬",
  l: "𝘭",
  m: "𝘮",
  n: "𝘯",
  o: "𝘰",
  p: "𝘱",
  q: "𝘲",
  r: "𝘳",
  s: "𝘴",
  t: "𝘵",
  u: "𝘶",
  v: "𝘷",
  w: "𝘸",
  x: "𝘹",
  y: "𝘺",
  z: "𝘻",
  A: "𝘈",
  B: "𝘉",
  C: "𝘊",
  D: "𝘋",
  E: "𝘌",
  F: "𝘍",
  G: "𝘎",
  H: "𝘏",
  I: "𝘐",
  J: "𝘑",
  K: "𝘒",
  L: "𝘓",
  M: "𝘔",
  N: "𝘕",
  O: "𝘖",
  P: "𝘗",
  Q: "𝘘",
  R: "𝘙",
  S: "𝘚",
  T: "𝘛",
  U: "𝘜",
  V: "𝘝",
  W: "𝘞",
  X: "𝘟",
  Y: "𝘠",
  Z: "𝘡"
};
function textstyle13(_0x25d9c5) {
  return _0x25d9c5.split("").map(function (_0x56ac37) {
    if (textstyle13chrmap[_0x56ac37]) {
      return textstyle13chrmap[_0x56ac37];
    } else {
      return _0x56ac37;
    }
  }).join("");
}
const textstyle14chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "α",
  b: "Ⴆ",
  c: "ƈ",
  d: "ԃ",
  e: "ҽ",
  f: "ϝ",
  g: "ɠ",
  h: "ԋ",
  i: "ι",
  j: "ʝ",
  k: "ƙ",
  l: "ʅ",
  m: "ɱ",
  n: "ɳ",
  o: "σ",
  p: "ρ",
  q: "ϙ",
  r: "ɾ",
  s: "ʂ",
  t: "ƚ",
  u: "υ",
  v: "ʋ",
  w: "ɯ",
  x: "x",
  y: "ყ",
  z: "ȥ",
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  H: "H",
  I: "I",
  J: "J",
  K: "K",
  L: "L",
  M: "M",
  N: "N",
  O: "O",
  P: "P",
  Q: "Q",
  R: "R",
  S: "S",
  T: "T",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "Z"
};
function textstyle14(_0x242d75) {
  return _0x242d75.split("").map(function (_0x5ce867) {
    if (textstyle14chrmap[_0x5ce867]) {
      return textstyle14chrmap[_0x5ce867];
    } else {
      return _0x5ce867;
    }
  }).join("");
}
const textstyle15chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "₳",
  b: "฿",
  c: "₵",
  d: "Đ",
  e: "Ɇ",
  f: "₣",
  g: "₲",
  h: "Ⱨ",
  i: "ł",
  j: "J",
  k: "₭",
  l: "Ⱡ",
  m: "₥",
  n: "₦",
  o: "Ø",
  p: "₱",
  q: "Q",
  r: "Ɽ",
  s: "₴",
  t: "₮",
  u: "Ʉ",
  v: "V",
  w: "₩",
  x: "Ӿ",
  y: "Ɏ",
  z: "Ⱬ",
  A: "₳",
  B: "฿",
  C: "₵",
  D: "Đ",
  E: "Ɇ",
  F: "₣",
  G: "₲",
  H: "Ⱨ",
  I: "ł",
  J: "J",
  K: "₭",
  L: "Ⱡ",
  M: "₥",
  N: "₦",
  O: "Ø",
  P: "₱",
  Q: "Q",
  R: "Ɽ",
  S: "₴",
  T: "₮",
  U: "Ʉ",
  V: "V",
  W: "₩",
  X: "Ӿ",
  Y: "Ɏ",
  Z: "Ⱬ"
};
function textstyle15(_0x3df05c) {
  return _0x3df05c.split("").map(function (_0x529888) {
    if (textstyle15chrmap[_0x529888]) {
      return textstyle15chrmap[_0x529888];
    } else {
      return _0x529888;
    }
  }).join("");
}
const textstyle16chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "å",
  b: "ß",
  c: "¢",
  d: "Ð",
  e: "ê",
  f: "£",
  g: "g",
  h: "h",
  i: "ï",
  j: "j",
  k: "k",
  l: "l",
  m: "m",
  n: "ñ",
  o: "ð",
  p: "þ",
  q: "q",
  r: "r",
  s: "§",
  t: "†",
  u: "µ",
  v: "v",
  w: "w",
  x: "x",
  y: "¥",
  z: "z",
  A: "Ä",
  B: "ß",
  C: "Ç",
  D: "Ð",
  E: "È",
  F: "£",
  G: "G",
  H: "H",
  I: "Ì",
  J: "J",
  K: "K",
  L: "L",
  M: "M",
  N: "ñ",
  O: "Ö",
  P: "þ",
  Q: "Q",
  R: "R",
  S: "§",
  T: "†",
  U: "Ú",
  V: "V",
  W: "W",
  X: "×",
  Y: "¥",
  Z: "Z"
};
function textstyle16(_0x1fbe1e) {
  return _0x1fbe1e.split("").map(function (_0x24feaa) {
    if (textstyle16chrmap[_0x24feaa]) {
      return textstyle16chrmap[_0x24feaa];
    } else {
      return _0x24feaa;
    }
  }).join("");
}
const textstyle17chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "α",
  b: "в",
  c: "¢",
  d: "∂",
  e: "є",
  f: "ƒ",
  g: "g",
  h: "н",
  i: "ι",
  j: "נ",
  k: "к",
  l: "ℓ",
  m: "м",
  n: "η",
  o: "σ",
  p: "ρ",
  q: "q",
  r: "я",
  s: "ѕ",
  t: "т",
  u: "υ",
  v: "ν",
  w: "ω",
  x: "χ",
  y: "у",
  z: "z",
  A: "α",
  B: "в",
  C: "¢",
  D: "∂",
  E: "є",
  F: "ƒ",
  G: "g",
  H: "н",
  I: "ι",
  J: "נ",
  K: "к",
  L: "ℓ",
  M: "м",
  N: "η",
  O: "σ",
  P: "ρ",
  Q: "q",
  R: "я",
  S: "ѕ",
  T: "т",
  U: "υ",
  V: "ν",
  W: "ω",
  X: "χ",
  Y: "у",
  Z: "z"
};
function textstyle17(_0x5a3d6f) {
  return _0x5a3d6f.split("").map(function (_0x2966be) {
    if (textstyle17chrmap[_0x2966be]) {
      return textstyle17chrmap[_0x2966be];
    } else {
      return _0x2966be;
    }
  }).join("");
}
const textstyle18chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "Λ",
  b: "B",
  c: "ᄃ",
  d: "D",
  e: "Σ",
  f: "F",
  g: "G",
  h: "Ή",
  i: "I",
  j: "J",
  k: "K",
  l: "ᄂ",
  m: "M",
  n: "П",
  o: "Ө",
  p: "P",
  q: "Q",
  r: "Я",
  s: "Ƨ",
  t: "Ƭ",
  u: "Ц",
  v: "V",
  w: "Щ",
  x: "X",
  y: "Y",
  z: "Z",
  A: "Λ",
  B: "B",
  C: "ᄃ",
  D: "D",
  E: "Σ",
  F: "F",
  G: "G",
  H: "Ή",
  I: "I",
  J: "J",
  K: "K",
  L: "ᄂ",
  M: "M",
  N: "П",
  O: "Ө",
  P: "P",
  Q: "Q",
  R: "Я",
  S: "Ƨ",
  T: "Ƭ",
  U: "Ц",
  V: "V",
  W: "Щ",
  X: "X",
  Y: "Y",
  Z: "Z"
};
function textstyle18(_0x3584fe) {
  return _0x3584fe.split("").map(function (_0x4f0fa0) {
    if (textstyle18chrmap[_0x4f0fa0]) {
      return textstyle18chrmap[_0x4f0fa0];
    } else {
      return _0x4f0fa0;
    }
  }).join("");
}
const textstyle19chrmap = {
  "0": "⊘",
  "1": "𝟙",
  "2": "ϩ",
  "3": "Ӡ",
  "4": "५",
  "5": "Ƽ",
  "6": "Ϭ",
  "7": "7",
  "8": "𝟠",
  "9": "९",
  a: "ą",
  b: "ҍ",
  c: "ç",
  d: "ժ",
  e: "ҽ",
  f: "ƒ",
  g: "ց",
  h: "հ",
  i: "ì",
  j: "ʝ",
  k: "ҟ",
  l: "Ӏ",
  m: "ʍ",
  n: "ղ",
  o: "օ",
  p: "ք",
  q: "զ",
  r: "ɾ",
  s: "ʂ",
  t: "է",
  u: "մ",
  v: "ѵ",
  w: "ա",
  x: "×",
  y: "վ",
  z: "Հ",
  A: "Ⱥ",
  B: "β",
  C: "↻",
  D: "Ꭰ",
  E: "Ɛ",
  F: "Ƒ",
  G: "Ɠ",
  H: "Ƕ",
  I: "į",
  J: "ل",
  K: "Ҡ",
  L: "Ꝉ",
  M: "Ɱ",
  N: "ហ",
  O: "ට",
  P: "φ",
  Q: "Ҩ",
  R: "འ",
  S: "Ϛ",
  T: "Ͳ",
  U: "Ա",
  V: "Ỽ",
  W: "చ",
  X: "ჯ",
  Y: "Ӌ",
  Z: "ɀ"
};
function textstyle19(_0x7c912d) {
  return _0x7c912d.split("").map(function (_0x5be886) {
    if (textstyle19chrmap[_0x5be886]) {
      return textstyle19chrmap[_0x5be886];
    } else {
      return _0x5be886;
    }
  }).join("");
}
const textstyle20chrmap = {
  "0": "₀",
  "1": "₁",
  "2": "₂",
  "3": "₃",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "₇",
  "8": "₈",
  "9": "₉",
  a: "ₐ",
  b: "b",
  c: "c",
  d: "d",
  e: "ₑ",
  f: "f",
  g: "g",
  h: "ₕ",
  i: "ᵢ",
  j: "ⱼ",
  k: "ₖ",
  l: "ₗ",
  m: "ₘ",
  n: "ₙ",
  o: "ₒ",
  p: "ₚ",
  q: "q",
  r: "ᵣ",
  s: "ₛ",
  t: "ₜ",
  u: "ᵤ",
  v: "ᵥ",
  w: "w",
  x: "ₓ",
  y: "y",
  z: "z",
  A: "ₐ",
  B: "B",
  C: "C",
  D: "D",
  E: "ₑ",
  F: "F",
  G: "G",
  H: "ₕ",
  I: "ᵢ",
  J: "ⱼ",
  K: "ₖ",
  L: "ₗ",
  M: "ₘ",
  N: "ₙ",
  O: "ₒ",
  P: "ₚ",
  Q: "Q",
  R: "ᵣ",
  S: "ₛ",
  T: "ₜ",
  U: "ᵤ",
  V: "ᵥ",
  W: "W",
  X: "ₓ",
  Y: "Y",
  Z: "Z"
};
function textstyle20(_0x1bcf44) {
  return _0x1bcf44.split("").map(function (_0x19fc08) {
    if (textstyle20chrmap[_0x19fc08]) {
      return textstyle20chrmap[_0x19fc08];
    } else {
      return _0x19fc08;
    }
  }).join("");
}
const textstyle21chrmap = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  a: "ᵃ",
  b: "ᵇ",
  c: "ᶜ",
  d: "ᵈ",
  e: "ᵉ",
  f: "ᶠ",
  g: "ᵍ",
  h: "ʰ",
  i: "ⁱ",
  j: "ʲ",
  k: "ᵏ",
  l: "ˡ",
  m: "ᵐ",
  n: "ⁿ",
  o: "ᵒ",
  p: "ᵖ",
  q: "q",
  r: "ʳ",
  s: "ˢ",
  t: "ᵗ",
  u: "ᵘ",
  v: "ᵛ",
  w: "ʷ",
  x: "ˣ",
  y: "ʸ",
  z: "ᶻ",
  A: "ᴬ",
  B: "ᴮ",
  C: "ᶜ",
  D: "ᴰ",
  E: "ᴱ",
  F: "ᶠ",
  G: "ᴳ",
  H: "ᴴ",
  I: "ᴵ",
  J: "ᴶ",
  K: "ᴷ",
  L: "ᴸ",
  M: "ᴹ",
  N: "ᴺ",
  O: "ᴼ",
  P: "ᴾ",
  Q: "Q",
  R: "ᴿ",
  S: "ˢ",
  T: "ᵀ",
  U: "ᵁ",
  V: "ⱽ",
  W: "ᵂ",
  X: "ˣ",
  Y: "ʸ",
  Z: "ᶻ"
};
function textstyle21(_0x2d407d) {
  return _0x2d407d.split("").map(function (_0x523eea) {
    if (textstyle21chrmap[_0x523eea]) {
      return textstyle21chrmap[_0x523eea];
    } else {
      return _0x523eea;
    }
  }).join("");
}
const textstyle22chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "ค",
  b: "๒",
  c: "ς",
  d: "๔",
  e: "є",
  f: "Ŧ",
  g: "ﻮ",
  h: "ђ",
  i: "เ",
  j: "ן",
  k: "к",
  l: "ɭ",
  m: "๓",
  n: "ภ",
  o: "๏",
  p: "ק",
  q: "ợ",
  r: "г",
  s: "ร",
  t: "Շ",
  u: "ย",
  v: "ש",
  w: "ฬ",
  x: "א",
  y: "ץ",
  z: "չ",
  A: "ค",
  B: "๒",
  C: "ς",
  D: "๔",
  E: "є",
  F: "Ŧ",
  G: "ﻮ",
  H: "ђ",
  I: "เ",
  J: "ן",
  K: "к",
  L: "ɭ",
  M: "๓",
  N: "ภ",
  O: "๏",
  P: "ק",
  Q: "ợ",
  R: "г",
  S: "ร",
  T: "Շ",
  U: "ย",
  V: "ש",
  W: "ฬ",
  X: "א",
  Y: "ץ",
  Z: "չ"
};
function textstyle22(_0x10a050) {
  return _0x10a050.split("").map(function (_0x4c4272) {
    if (textstyle22chrmap[_0x4c4272]) {
      return textstyle22chrmap[_0x4c4272];
    } else {
      return _0x4c4272;
    }
  }).join("");
}
;
const textstyle23chrmap = {
  "0": "𝟘",
  "1": "𝟙",
  "2": "𝟚",
  "3": "𝟛",
  "4": "𝟜",
  "5": "𝟝",
  "6": "𝟞",
  "7": "𝟟",
  "8": "𝟠",
  "9": "𝟡",
  a: "𝕒",
  b: "𝕓",
  c: "𝕔",
  d: "𝕕",
  e: "𝕖",
  f: "𝕗",
  g: "𝕘",
  h: "𝕙",
  i: "𝕚",
  j: "𝕛",
  k: "𝕜",
  l: "𝕝",
  m: "𝕞",
  n: "𝕟",
  o: "𝕠",
  p: "𝕡",
  q: "𝕢",
  r: "𝕣",
  s: "𝕤",
  t: "𝕥",
  u: "𝕦",
  v: "𝕧",
  w: "𝕨",
  x: "𝕩",
  y: "𝕪",
  z: "𝕫",
  A: "𝔸",
  B: "𝔹",
  C: "ℂ",
  D: "𝔻",
  E: "𝔼",
  F: "𝔽",
  G: "𝔾",
  H: "ℍ",
  I: "𝕀",
  J: "𝕁",
  K: "𝕂",
  L: "𝕃",
  M: "𝕄",
  N: "ℕ",
  O: "𝕆",
  P: "ℙ",
  Q: "ℚ",
  R: "ℝ",
  S: "𝕊",
  T: "𝕋",
  U: "𝕌",
  V: "𝕍",
  W: "𝕎",
  X: "𝕏",
  Y: "𝕐",
  Z: "ℤ"
};
function textstyle23(_0x389749) {
  return _0x389749.split("").map(function (_0x45f84d) {
    if (textstyle23chrmap[_0x45f84d]) {
      return textstyle23chrmap[_0x45f84d];
    } else {
      return _0x45f84d;
    }
  }).join("");
}
;
const textstyle24chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "𝖆",
  b: "𝖇",
  c: "𝖈",
  d: "𝖉",
  e: "𝖊",
  f: "𝖋",
  g: "𝖌",
  h: "𝖍",
  i: "𝖎",
  j: "𝖏",
  k: "𝖐",
  l: "𝖑",
  m: "𝖒",
  n: "𝖓",
  o: "𝖔",
  p: "𝖕",
  q: "𝖖",
  r: "𝖗",
  s: "𝖘",
  t: "𝖙",
  u: "𝖚",
  v: "𝖛",
  w: "𝖜",
  x: "𝖝",
  y: "𝖞",
  z: "𝖟",
  A: "𝕬",
  B: "𝕭",
  C: "𝕮",
  D: "𝕯",
  E: "𝕰",
  F: "𝕱",
  G: "𝕲",
  H: "𝕳",
  I: "𝕴",
  J: "𝕵",
  K: "𝕶",
  L: "𝕷",
  M: "𝕸",
  N: "𝕹",
  O: "𝕺",
  P: "𝕻",
  Q: "𝕼",
  R: "𝕽",
  S: "𝕾",
  T: "𝕿",
  U: "𝖀",
  V: "𝖁",
  W: "𝖂",
  X: "𝖃",
  Y: "𝖄",
  Z: "𝖅"
};
function textstyle24(_0x59bdfe) {
  return _0x59bdfe.split("").map(function (_0x1fdbc3) {
    if (textstyle24chrmap[_0x1fdbc3]) {
      return textstyle24chrmap[_0x1fdbc3];
    } else {
      return _0x1fdbc3;
    }
  }).join("");
}
;
const textstyle25chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "🅰",
  b: "🅱",
  c: "🅲",
  d: "🅳",
  e: "🅴",
  f: "🅵",
  g: "🅶",
  h: "🅷",
  i: "🅸",
  j: "🅹",
  k: "🅺",
  l: "🅻",
  m: "🅼",
  n: "🅽",
  o: "🅾",
  p: "🅿",
  q: "🆀",
  r: "🆁",
  s: "🆂",
  t: "🆃",
  u: "🆄",
  v: "🆅",
  w: "🆆",
  x: "🆇",
  y: "🆈",
  z: "🆉",
  A: "🅰",
  B: "🅱",
  C: "🅲",
  D: "🅳",
  E: "🅴",
  F: "🅵",
  G: "🅶",
  H: "🅷",
  I: "🅸",
  J: "🅹",
  K: "🅺",
  L: "🅻",
  M: "🅼",
  N: "🅽",
  O: "🅾",
  P: "🅿",
  Q: "🆀",
  R: "🆁",
  S: "🆂",
  T: "🆃",
  U: "🆄",
  V: "🆅",
  W: "🆆",
  X: "🆇",
  Y: "🆈",
  Z: "🆉"
};
function textstyle25(_0x92602a) {
  return _0x92602a.split("").map(function (_0x4ca4ca) {
    if (textstyle25chrmap[_0x4ca4ca]) {
      return textstyle25chrmap[_0x4ca4ca];
    } else {
      return _0x4ca4ca;
    }
  }).join("");
}
;
const textstyle26chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "𝓪",
  b: "𝓫",
  c: "𝓬",
  d: "𝓭",
  e: "𝓮",
  f: "𝓯",
  g: "𝓰",
  h: "𝓱",
  i: "𝓲",
  j: "𝓳",
  k: "𝓴",
  l: "𝓵",
  m: "𝓶",
  n: "𝓷",
  o: "𝓸",
  p: "𝓹",
  q: "𝓺",
  r: "𝓻",
  s: "𝓼",
  t: "𝓽",
  u: "𝓾",
  v: "𝓿",
  w: "𝔀",
  x: "𝔁",
  y: "𝔂",
  z: "𝔃",
  A: "𝓐",
  B: "𝓑",
  C: "𝓒",
  D: "𝓓",
  E: "𝓔",
  F: "𝓕",
  G: "𝓖",
  H: "𝓗",
  I: "𝓘",
  J: "𝓙",
  K: "𝓚",
  L: "𝓛",
  M: "𝓜",
  N: "𝓝",
  O: "𝓞",
  P: "𝓟",
  Q: "𝓠",
  R: "𝓡",
  S: "𝓢",
  T: "𝓣",
  U: "𝓤",
  V: "𝓥",
  W: "𝓦",
  X: "𝓧",
  Y: "𝓨",
  Z: "𝓩"
};
function textstyle26(_0x528c4f) {
  return _0x528c4f.split("").map(function (_0x5cffbb) {
    if (textstyle26chrmap[_0x5cffbb]) {
      return textstyle26chrmap[_0x5cffbb];
    } else {
      return _0x5cffbb;
    }
  }).join("");
}
;
const textstyle27chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "𝔞",
  b: "𝔟",
  c: "𝔠",
  d: "𝔡",
  e: "𝔢",
  f: "𝔣",
  g: "𝔤",
  h: "𝔥",
  i: "𝔦",
  j: "𝔧",
  k: "𝔨",
  l: "𝔩",
  m: "𝔪",
  n: "𝔫",
  o: "𝔬",
  p: "𝔭",
  q: "𝔮",
  r: "𝔯",
  s: "𝔰",
  t: "𝔱",
  u: "𝔲",
  v: "𝔳",
  w: "𝔴",
  x: "𝔵",
  y: "𝔶",
  z: "𝔷",
  A: "𝔄",
  B: "𝔅",
  C: "ℭ",
  D: "𝔇",
  E: "𝔈",
  F: "𝔉",
  G: "𝔊",
  H: "ℌ",
  I: "ℑ",
  J: "𝔍",
  K: "𝔎",
  L: "𝔏",
  M: "𝔐",
  N: "𝔑",
  O: "�",
  P: "𝔓",
  Q: "𝔔",
  R: "ℜ",
  S: "𝔖",
  T: "𝔗",
  U: "𝔘",
  V: "𝔙",
  W: "𝔚",
  X: "𝔛",
  Y: "𝔜",
  Z: "ℨ"
};
function textstyle27(_0x1e907b) {
  return _0x1e907b.split("").map(function (_0x49e1b7) {
    if (textstyle27chrmap[_0x49e1b7]) {
      return textstyle27chrmap[_0x49e1b7];
    } else {
      return _0x49e1b7;
    }
  }).join("");
}
;
const textstyle28chrmap = {
  "0": "０",
  "1": "１",
  "2": "２",
  "3": "３",
  "4": "４",
  "5": "５",
  "6": "６",
  "7": "７",
  "8": "８",
  "9": "９",
  a: "ａ",
  b: "ｂ",
  c: "ｃ",
  d: "ｄ",
  e: "ｅ",
  f: "ｆ",
  g: "ｇ",
  h: "ｈ",
  i: "ｉ",
  j: "ｊ",
  k: "ｋ",
  l: "ｌ",
  m: "ｍ",
  n: "ｎ",
  o: "ｏ",
  p: "ｐ",
  q: "ｑ",
  r: "ｒ",
  s: "ｓ",
  t: "ｔ",
  u: "ｕ",
  v: "ｖ",
  w: "ｗ",
  x: "ｘ",
  y: "ｙ",
  z: "ｚ",
  A: "Ａ",
  B: "Ｂ",
  C: "Ｃ",
  D: "Ｄ",
  E: "Ｅ",
  F: "Ｆ",
  G: "Ｇ",
  H: "Ｈ",
  I: "Ｉ",
  J: "Ｊ",
  K: "Ｋ",
  L: "Ｌ",
  M: "Ｍ",
  N: "Ｎ",
  O: "Ｏ",
  P: "Ｐ",
  Q: "Ｑ",
  R: "Ｒ",
  S: "Ｓ",
  T: "Ｔ",
  U: "Ｕ",
  V: "Ｖ",
  W: "Ｗ",
  X: "Ｘ",
  Y: "Ｙ",
  Z: "Ｚ"
};
function textstyle28(_0x2e4164) {
  return _0x2e4164.split("").map(function (_0x2baed2) {
    if (textstyle28chrmap[_0x2baed2]) {
      return textstyle28chrmap[_0x2baed2];
    } else {
      return _0x2baed2;
    }
  }).join("");
}
;
const textstyle29chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "𝒂",
  b: "𝒃",
  c: "𝒄",
  d: "𝒅",
  e: "𝒆",
  f: "𝒇",
  g: "𝒈",
  h: "𝒉",
  i: "𝒊",
  j: "𝒋",
  k: "𝒌",
  l: "𝒍",
  m: "𝒎",
  n: "𝒏",
  o: "𝒐",
  p: "𝒑",
  q: "𝒒",
  r: "𝒓",
  s: "𝒔",
  t: "𝒕",
  u: "𝒖",
  v: "𝒗",
  w: "𝒘",
  x: "𝒙",
  y: "𝒚",
  z: "𝒛",
  A: "𝑨",
  B: "𝑩",
  C: "𝑪",
  D: "𝑫",
  E: "𝑬",
  F: "𝑭",
  G: "𝑮",
  H: "𝑯",
  I: "𝑰",
  J: "𝑱",
  K: "𝑲",
  L: "𝑳",
  M: "𝑴",
  N: "𝑵",
  O: "𝑶",
  P: "𝑷",
  Q: "𝑸",
  R: "𝑹",
  S: "𝑺",
  T: "𝑻",
  U: "𝑼",
  V: "𝑽",
  W: "𝑾",
  X: "𝑿",
  Y: "𝒀",
  Z: "𝒁"
};
function textstyle29(_0x2a927a) {
  return _0x2a927a.split("").map(function (_0x5d60d3) {
    if (textstyle29chrmap[_0x5d60d3]) {
      return textstyle29chrmap[_0x5d60d3];
    } else {
      return _0x5d60d3;
    }
  }).join("");
}
;
const textstyle30chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "𝛥",
  b: "𝐵",
  c: "𝐶",
  d: "𝐷",
  e: "𝛯",
  f: "𝐹",
  g: "𝐺",
  h: "𝛨",
  i: "𝛪",
  j: "𝐽",
  k: "𝛫",
  l: "𝐿",
  m: "𝛭",
  n: "𝛮",
  o: "𝛩",
  p: "𝛲",
  q: "𝑄",
  r: "𝑅",
  s: "𝑆",
  t: "𝑇",
  u: "𝑈",
  v: "𝛻",
  w: "𝑊",
  x: "𝛸",
  y: "𝑌",
  z: "𝛧",
  A: "𝛥",
  B: "𝐵",
  C: "𝐶",
  D: "𝐷",
  E: "𝛯",
  F: "𝐹",
  G: "𝐺",
  H: "𝛨",
  I: "𝛪",
  J: "𝐽",
  K: "𝛫",
  L: "𝐿",
  M: "𝛭",
  N: "𝛮",
  O: "𝛩",
  P: "𝛲",
  Q: "𝑄",
  R: "𝑅",
  S: "𝑆",
  T: "𝑇",
  U: "𝑈",
  V: "𝛻",
  W: "𝑊",
  X: "𝛸",
  Y: "𝑌",
  Z: "𝛧"
};
function textstyle30(_0xfbaf3f) {
  return _0xfbaf3f.split("").map(function (_0x2b32ff) {
    if (textstyle30chrmap[_0x2b32ff]) {
      return textstyle30chrmap[_0x2b32ff];
    } else {
      return _0x2b32ff;
    }
  }).join("");
}
;
const textstyle31chrmap = {
  "0": "𝟬",
  "1": "𝟭",
  "2": "𝟮",
  "3": "𝟯",
  "4": "𝟰",
  "5": "𝟱",
  "6": "𝟲",
  "7": "𝟳",
  "8": "𝟴",
  "9": "𝟵",
  a: "𝞓",
  b: "𝞑",
  c: "𝘾",
  d: "𝘿",
  e: "𝞢",
  f: "𝙁",
  g: "𝙂",
  h: "𝞖",
  i: "𝞘",
  j: "𝙅",
  k: "𝞙",
  l: "𝙇",
  m: "𝞛",
  n: "𝞜",
  o: "𝞗",
  p: "𝞠",
  q: "𝙌",
  r: "𝞒",
  s: "𝙎",
  t: "𝙏",
  u: "𝙐",
  v: "𝝯",
  w: "𝙒",
  x: "𝞦",
  y: "𝙔",
  z: "𝙕",
  A: "𝞓",
  B: "𝞑",
  C: "𝘾",
  D: "𝘿",
  E: "𝞢",
  F: "𝙁",
  G: "𝙂",
  H: "𝞖",
  I: "𝞘",
  J: "𝙅",
  K: "𝞙",
  L: "𝙇",
  M: "𝞛",
  N: "𝞜",
  O: "𝞗",
  P: "𝞠",
  Q: "𝙌",
  R: "𝞒",
  S: "𝙎",
  T: "𝙏",
  U: "𝙐",
  V: "𝝯",
  W: "𝙒",
  X: "𝞦",
  Y: "𝙔",
  Z: "𝙕"
};
function textstyle31(_0x45f379) {
  return _0x45f379.split("").map(function (_0x322ede) {
    if (textstyle31chrmap[_0x322ede]) {
      return textstyle31chrmap[_0x322ede];
    } else {
      return _0x322ede;
    }
  }).join("");
}
;
const textstyle32chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "𝚫",
  b: "𝚩",
  c: "𝐂",
  d: "𝐃",
  e: "𝚵",
  f: "𝐅",
  g: "𝐆",
  h: "𝚮",
  i: "𝚰",
  j: "𝐉",
  k: "𝐊",
  l: "𝐋",
  m: "𝚳",
  n: "𝚴",
  o: "𝚯",
  p: "𝚸",
  q: "𝐐",
  r: "𝚪",
  s: "𝐒",
  t: "𝚻",
  u: "𝐔",
  v: "𝛁",
  w: "𝐖",
  x: "𝚾",
  y: "𝐘",
  z: "𝚭",
  A: "𝚫",
  B: "𝚩",
  C: "𝐂",
  D: "𝐃",
  E: "𝚵",
  F: "𝐅",
  G: "𝐆",
  H: "𝚮",
  I: "𝚰",
  J: "𝐉",
  K: "𝐊",
  L: "𝐋",
  M: "𝚳",
  N: "𝚴",
  O: "𝚯",
  P: "𝚸",
  Q: "𝐐",
  R: "𝚪",
  S: "𝐒",
  T: "𝚻",
  U: "𝐔",
  V: "𝛁",
  W: "𝐖",
  X: "𝚾",
  Y: "𝐘",
  Z: "𝚭"
};
function textstyle32(_0x5e9e09) {
  return _0x5e9e09.split("").map(function (_0x12d1f7) {
    if (textstyle32chrmap[_0x12d1f7]) {
      return textstyle32chrmap[_0x12d1f7];
    } else {
      return _0x12d1f7;
    }
  }).join("");
}
;
const textstyle33chrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "ᗩ",
  b: "ᗷ",
  c: "ᑕ",
  d: "ᗞ",
  e: "ᗴ",
  f: "ᖴ",
  g: "Ꮐ",
  h: "ᕼ",
  i: "Ꮖ",
  j: "ᒍ",
  k: "Ꮶ",
  l: "し",
  m: "ᗰ",
  n: "ᑎ",
  o: "ᝪ",
  p: "ᑭ",
  q: "ᑫ",
  r: "ᖇ",
  s: "ᔑ",
  t: "Ꭲ",
  u: "ᑌ",
  v: "ᐯ",
  w: "ᗯ",
  x: "᙭",
  y: "Ꭹ",
  z: "Ꮓ",
  A: "ᗩ",
  B: "ᗷ",
  C: "ᑕ",
  D: "ᗞ",
  E: "ᗴ",
  F: "ᖴ",
  G: "Ꮐ",
  H: "ᕼ",
  I: "Ꮖ",
  J: "ᒍ",
  K: "Ꮶ",
  L: "し",
  M: "ᗰ",
  N: "ᑎ",
  O: "ᝪ",
  P: "ᑭ",
  Q: "ᑫ",
  R: "ᖇ",
  S: "ᔑ",
  T: "Ꭲ",
  U: "ᑌ",
  V: "ᐯ",
  W: "ᗯ",
  X: "᙭",
  Y: "Ꭹ",
  Z: "Ꮓ"
};
function textstyle33(_0x6b64a4) {
  return _0x6b64a4.split("").map(function (_0x4565a2) {
    if (textstyle33chrmap[_0x4565a2]) {
      return textstyle33chrmap[_0x4565a2];
    } else {
      return _0x4565a2;
    }
  }).join("");
}
;
const tinyChrmap = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  a: "ᴀ",
  b: "ʙ",
  c: "ᴄ",
  d: "ᴅ",
  e: "ᴇ",
  f: "ꜰ",
  g: "ɢ",
  h: "ʜ",
  i: "ɪ",
  j: "ᴊ",
  k: "ᴋ",
  l: "ʟ",
  m: "ᴍ",
  n: "ɴ",
  o: "ᴏ",
  p: "ᴘ",
  q: "ϙ",
  r: "ʀ",
  s: "ꜱ",
  t: "ᴛ",
  u: "ᴜ",
  v: "ᴠ",
  w: "ᴡ",
  x: "x",
  y: "ʏ",
  z: "ᴢ",
  A: "A",
  B: "ʙ",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  H: "H",
  I: "I",
  J: "J",
  K: "K",
  L: "L",
  M: "M",
  N: "N",
  O: "O",
  P: "P",
  Q: "Q",
  R: "R",
  S: "S",
  T: "T",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "Z"
};
function tiny(_0x2ff0d9) {
  return _0x2ff0d9.split("").map(function (_0x2640b0) {
    if (tinyChrmap[_0x2640b0]) {
      return tinyChrmap[_0x2640b0];
    } else {
      return _0x2640b0;
    }
  }).join("");
}
;
function ladybug(_0x4108f2) {
  return _0x4108f2.split("").map(function (_0x284418) {
    if (ladybugCharMap[_0x284418]) {
      return ladybugCharMap[_0x284418];
    } else {
      return _0x284418;
    }
  }).join("");
}
function runes(_0xf72d74) {
  return _0xf72d74.split("").map(function (_0x3c1372) {
    if (runesCharMap[_0x3c1372]) {
      return runesCharMap[_0x3c1372];
    } else {
      return _0x3c1372;
    }
  }).join("");
}
function serif_B(_0x9e7f4f) {
  return _0x9e7f4f.split("").map(function (_0x544930) {
    if (serif_BCharMap[_0x544930]) {
      return serif_BCharMap[_0x544930];
    } else {
      return _0x544930;
    }
  }).join("");
}
function serif_BI(_0x451a18) {
  return _0x451a18.split("").map(function (_0x22ce9c) {
    if (serif_BICharMap[_0x22ce9c]) {
      return serif_BICharMap[_0x22ce9c];
    } else {
      return _0x22ce9c;
    }
  }).join("");
}
function serif_I(_0x4079ac) {
  return _0x4079ac.split("").map(function (_0x531c47) {
    if (serif_ICharMap[_0x531c47]) {
      return serif_ICharMap[_0x531c47];
    } else {
      return _0x531c47;
    }
  }).join("");
}
function wingdings(_0x919ebd) {
  return _0x919ebd.split("").map(function (_0x463c5d) {
    if (wingdingsCharMap[_0x463c5d]) {
      return wingdingsCharMap[_0x463c5d];
    } else {
      return _0x463c5d;
    }
  }).join("");
}
function vaporwave(_0x39adc4) {
  return _0x39adc4.split("").map(function (_0x10f1f2) {
    if (vaporwaveCharMap[_0x10f1f2]) {
      return vaporwaveCharMap[_0x10f1f2];
    } else {
      return _0x10f1f2;
    }
  }).join("");
}
function sparrow(_0x19aeac) {
  return _0x19aeac.split("").map(function (_0x28ed2f) {
    if (sparrowCharMap[_0x28ed2f]) {
      return sparrowCharMap[_0x28ed2f];
    } else {
      return _0x28ed2f;
    }
  }).join("");
}
function typewriter(_0x39fc27) {
  return _0x39fc27.split("").map(function (_0x5af4d5) {
    if (typewriterCharMap[_0x5af4d5]) {
      return typewriterCharMap[_0x5af4d5];
    } else {
      return _0x5af4d5;
    }
  }).join("");
}
function analucia(_0xad74ca) {
  return _0xad74ca.split("").map(function (_0x46cba1) {
    if (analuciaCharMap[_0x46cba1]) {
      return analuciaCharMap[_0x46cba1];
    } else {
      return _0x46cba1;
    }
  }).join("");
}
function StyleText() {
  this.tools = {
    flip: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },
      encode: function (_0x4c61a1) {
        var _0x1c475c = [];
        var _0xe651d3;
        for (var _0x3c9e85 = 0, _0x1d9124 = _0x4c61a1.length; _0x3c9e85 < _0x1d9124; _0x3c9e85++) {
          _0xe651d3 = _0x4c61a1.charAt(_0x3c9e85);
          if (_0x3c9e85 > 0 && (_0xe651d3 == "̤" || _0xe651d3 == "̗" || _0xe651d3 == "̖" || _0xe651d3 == "̮")) {
            _0xe651d3 = this.map[_0x4c61a1.charAt(_0x3c9e85 - 1) + _0xe651d3];
            _0x1c475c.pop();
          } else {
            _0xe651d3 = this.map[_0xe651d3];
            if (typeof _0xe651d3 == "undefined") {
              _0xe651d3 = _0x4c61a1.charAt(_0x3c9e85);
            }
          }
          _0x1c475c.push(_0xe651d3);
        }
        return _0x1c475c.reverse().join("");
      },
      decode: function (_0x22e373) {
        var _0x2060b7 = [];
        var _0x5e2cd3;
        for (var _0x553e2b = 0, _0x17d8b4 = _0x22e373.length; _0x553e2b < _0x17d8b4; _0x553e2b++) {
          _0x5e2cd3 = _0x22e373.charAt(_0x553e2b);
          if (_0x553e2b > 0 && (_0x5e2cd3 == "̤" || _0x5e2cd3 == "̗" || _0x5e2cd3 == "̖" || _0x5e2cd3 == "̮")) {
            _0x5e2cd3 = this.map[_0x22e373.charAt(_0x553e2b - 1) + _0x5e2cd3];
            _0x2060b7.pop();
          } else {
            _0x5e2cd3 = this.map[_0x5e2cd3];
            if (typeof _0x5e2cd3 == "undefined") {
              _0x5e2cd3 = _0x22e373.charAt(_0x553e2b);
            }
          }
          _0x2060b7.push(_0x5e2cd3);
        }
        return _0x2060b7.reverse().join("");
      },
      map: {
        a: "ɐ",
        b: "q",
        c: "ɔ",
        d: "p",
        e: "ǝ",
        f: "ɟ",
        g: "ɓ",
        h: "ɥ",
        i: "ı",
        j: "ɾ",
        k: "ʞ",
        l: "l",
        m: "ɯ",
        n: "u",
        r: "ɹ",
        t: "ʇ",
        v: "ʌ",
        w: "ʍ",
        y: "ʎ",
        A: "∀",
        B: "ᙠ",
        C: "Ɔ",
        D: "ᗡ",
        E: "Ǝ",
        F: "Ⅎ",
        G: "⅁",
        J: "ſ",
        K: "⋊",
        L: "˥",
        M: "W",
        P: "Ԁ",
        Q: "Ό",
        R: "ᴚ",
        T: "⊥",
        U: "∩",
        V: "Λ",
        Y: "⅄",
        1: "⇂",
        2: "ᄅ",
        3: "Ɛ",
        4: "ㄣ",
        5: "ގ",
        6: "9",
        7: "ㄥ",
        "&": "⅋",
        ".": "˙",
        "\"": "„",
        ";": "؛",
        "[": "]",
        "(": ")",
        "{": "}",
        "?": "¿",
        "!": "¡",
        "'": ",",
        "<": ">",
        "‾": "_",
        "¯": "_",
        "‿": "⁀",
        "⁅": "⁆",
        "∴": "∵",
        "\r": "\n",
        ß: "ᙠ",
        "̈": "̤",
        ä: "ɐ̤",
        ö: "o̤",
        ü: "n̤",
        Ä: "∀̤",
        Ö: "O̤",
        Ü: "∩̤",
        "´": " ̗",
        é: "ǝ̗",
        á: "ɐ̗",
        ó: "o̗",
        ú: "n̗",
        É: "Ǝ̗",
        Á: "∀̗",
        Ó: "O̗",
        Ú: "∩̗",
        "`": " ̖",
        è: "ǝ̖",
        à: "ɐ̖",
        ò: "o̖",
        ù: "n̖",
        È: "Ǝ̖",
        À: "∀̖",
        Ò: "O̖",
        Ù: "∩̖",
        "^": " ̮",
        ê: "ǝ̮",
        â: "ɐ̮",
        ô: "o̮",
        û: "n̮",
        Ê: "Ǝ̮",
        Â: "∀̮",
        Ô: "O̮",
        Û: "∩̮"
      }
    },
    mirror: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },
      encode: function (_0x5dbbbd) {
        var _0x1bc293 = [];
        var _0x312f57;
        var _0x5e38d0 = [];
        for (var _0x23125c = 0, _0x1d48cf = _0x5dbbbd.length; _0x23125c < _0x1d48cf; _0x23125c++) {
          _0x312f57 = _0x5dbbbd.charAt(_0x23125c);
          if (_0x23125c > 0 && (_0x312f57 == "̈" || _0x312f57 == "̀" || _0x312f57 == "́" || _0x312f57 == "̂")) {
            _0x312f57 = this.map[_0x5dbbbd.charAt(_0x23125c - 1) + _0x312f57];
            _0x1bc293.pop();
          } else {
            _0x312f57 = this.map[_0x312f57];
            if (typeof _0x312f57 == "undefined") {
              _0x312f57 = _0x5dbbbd.charAt(_0x23125c);
            }
          }
          if (_0x312f57 == "\n") {
            _0x5e38d0.push(_0x1bc293.reverse().join(""));
            _0x1bc293 = [];
          } else {
            _0x1bc293.push(_0x312f57);
          }
        }
        _0x5e38d0.push(_0x1bc293.reverse().join(""));
        return _0x5e38d0.join("\n");
      },
      decode: function (_0x3632ae) {
        var _0x17778c = [];
        var _0x57a5a2;
        var _0x4eed67 = [];
        for (var _0x27d28d = 0, _0x5ec24b = _0x3632ae.length; _0x27d28d < _0x5ec24b; _0x27d28d++) {
          _0x57a5a2 = _0x3632ae.charAt(_0x27d28d);
          if (_0x27d28d > 0 && (_0x57a5a2 == "̈" || _0x57a5a2 == "̀" || _0x57a5a2 == "́" || _0x57a5a2 == "̂")) {
            _0x57a5a2 = this.map[_0x3632ae.charAt(_0x27d28d - 1) + _0x57a5a2];
            _0x17778c.pop();
          } else {
            _0x57a5a2 = this.map[_0x57a5a2];
            if (typeof _0x57a5a2 == "undefined") {
              _0x57a5a2 = _0x3632ae.charAt(_0x27d28d);
            }
          }
          if (_0x57a5a2 == "\n") {
            _0x4eed67.push(_0x17778c.reverse().join(""));
            _0x17778c = [];
          } else {
            _0x17778c.push(_0x57a5a2);
          }
        }
        _0x4eed67.push(_0x17778c.reverse().join(""));
        return _0x4eed67.join("\n");
      },
      map: {
        a: "ɒ",
        b: "d",
        c: "ɔ",
        e: "ɘ",
        f: "Ꮈ",
        g: "ǫ",
        h: "ʜ",
        j: "ꞁ",
        k: "ʞ",
        l: "|",
        n: "ᴎ",
        p: "q",
        r: "ɿ",
        s: "ꙅ",
        t: "ƚ",
        y: "ʏ",
        z: "ƹ",
        B: "ᙠ",
        C: "Ɔ",
        D: "ᗡ",
        E: "Ǝ",
        F: "ꟻ",
        G: "Ꭾ",
        J: "Ⴑ",
        K: "⋊",
        L: "⅃",
        N: "Ͷ",
        P: "ꟼ",
        Q: "Ọ",
        R: "Я",
        S: "Ꙅ",
        Z: "Ƹ",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        "&": "",
        ";": "",
        "[": "]",
        "(": ")",
        "{": "}",
        "?": "⸮",
        "<": ">",
        ä: "ɒ̈",
        ß: "ᙠ",
        "´": "`",
        é: "ɘ̀",
        á: "ɒ̀",
        ó: "ò",
        ú: "ù",
        É: "Ǝ̀",
        Á: "À",
        Ó: "Ò",
        Ú: "Ù",
        "`": "´",
        è: "ɘ́",
        à: "ɒ́",
        È: "Ǝ́",
        ê: "ɘ̂",
        â: "ɒ̂",
        Ê: "Ǝ̂",
        Ø: "ᴓ",
        ø: "ᴓ"
      }
    },
    creepify: {
      init: function () {
        for (var _0x3ed76f = 768; _0x3ed76f <= 789; _0x3ed76f++) {
          this.diacriticsTop.push(String.fromCharCode(_0x3ed76f));
        }
        for (var _0x3ed76f = 790; _0x3ed76f <= 819; _0x3ed76f++) {
          if (_0x3ed76f != 794 && _0x3ed76f != 795) {
            this.diacriticsBottom.push(String.fromCharCode(_0x3ed76f));
          }
        }
        this.diacriticsTop.push(String.fromCharCode(794));
        this.diacriticsTop.push(String.fromCharCode(795));
        for (var _0x3ed76f = 820; _0x3ed76f <= 824; _0x3ed76f++) {
          this.diacriticsMiddle.push(String.fromCharCode(_0x3ed76f));
        }
        for (var _0x3ed76f = 825; _0x3ed76f <= 828; _0x3ed76f++) {
          this.diacriticsBottom.push(String.fromCharCode(_0x3ed76f));
        }
        for (var _0x3ed76f = 829; _0x3ed76f <= 836; _0x3ed76f++) {
          this.diacriticsTop.push(String.fromCharCode(_0x3ed76f));
        }
        this.diacriticsTop.push(String.fromCharCode(836));
        this.diacriticsBottom.push(String.fromCharCode(837));
        this.diacriticsTop.push(String.fromCharCode(838));
        this.diacriticsBottom.push(String.fromCharCode(839));
        this.diacriticsBottom.push(String.fromCharCode(840));
        this.diacriticsBottom.push(String.fromCharCode(841));
        this.diacriticsTop.push(String.fromCharCode(842));
        this.diacriticsTop.push(String.fromCharCode(843));
        this.diacriticsTop.push(String.fromCharCode(844));
        this.diacriticsBottom.push(String.fromCharCode(845));
        this.diacriticsBottom.push(String.fromCharCode(846));
        this.diacriticsTop.push(String.fromCharCode(848));
        this.diacriticsTop.push(String.fromCharCode(849));
        this.diacriticsTop.push(String.fromCharCode(850));
        this.diacriticsBottom.push(String.fromCharCode(851));
        this.diacriticsBottom.push(String.fromCharCode(852));
        this.diacriticsBottom.push(String.fromCharCode(853));
        this.diacriticsBottom.push(String.fromCharCode(854));
        this.diacriticsTop.push(String.fromCharCode(855));
        this.diacriticsTop.push(String.fromCharCode(856));
        this.diacriticsBottom.push(String.fromCharCode(857));
        this.diacriticsBottom.push(String.fromCharCode(858));
        this.diacriticsTop.push(String.fromCharCode(859));
        this.diacriticsBottom.push(String.fromCharCode(860));
        this.diacriticsTop.push(String.fromCharCode(861));
        this.diacriticsTop.push(String.fromCharCode(861));
        this.diacriticsBottom.push(String.fromCharCode(863));
        this.diacriticsTop.push(String.fromCharCode(864));
        this.diacriticsTop.push(String.fromCharCode(865));
      },
      encode: function (_0x182934) {
        var _0x5556dd = "";
        var _0x9c2e83;
        for (i in _0x182934) {
          _0x9c2e83 = _0x182934[i];
          if (this.options.middle) {
            _0x9c2e83 += this.diacriticsMiddle[Math.floor(Math.random() * this.diacriticsMiddle.length)];
          }
          if (this.options.top) {
            var _0x518b07 = this.diacriticsTop.length - 1;
            for (var _0x44447e = 0, _0x3e2ff9 = this.options.maxHeight - Math.random() * (this.options.randomization / 100 * this.options.maxHeight); _0x44447e < _0x3e2ff9; _0x44447e++) {
              _0x9c2e83 += this.diacriticsTop[Math.floor(Math.random() * _0x518b07)];
            }
          }
          if (this.options.bottom) {
            var _0x507009 = this.diacriticsBottom.length - 1;
            for (var _0x44447e = 0, _0x3e2ff9 = this.options.maxHeight - Math.random() * (this.options.randomization / 100 * this.options.maxHeight); _0x44447e < _0x3e2ff9; _0x44447e++) {
              _0x9c2e83 += this.diacriticsBottom[Math.floor(Math.random() * _0x507009)];
            }
          }
          _0x5556dd += _0x9c2e83;
        }
        return _0x5556dd;
      },
      decode: function (_0x45cbee) {
        var _0x2bae43 = "";
        var _0x59f449;
        for (i in _0x45cbee) {
          _0x59f449 = _0x45cbee[i].charCodeAt(0);
          if (_0x59f449 < 768 || _0x59f449 > 865) {
            _0x2bae43 += _0x45cbee[i];
          }
        }
        return _0x2bae43;
      },
      diacriticsTop: [],
      diacriticsMiddle: [],
      diacriticsBottom: [],
      options: {
        top: true,
        middle: true,
        bottom: true,
        maxHeight: 15,
        randomization: 100
      }
    },
    bubbles: {
      init: function () {
        for (var _0x35d6c1 = 49; _0x35d6c1 <= 57; _0x35d6c1++) {
          this.map[String.fromCharCode(_0x35d6c1)] = String.fromCharCode(_0x35d6c1 + 9263);
        }
        this.map["0"] = "⓪";
        for (var _0x35d6c1 = 65; _0x35d6c1 <= 90; _0x35d6c1++) {
          this.map[String.fromCharCode(_0x35d6c1)] = String.fromCharCode(_0x35d6c1 + 9333);
        }
        for (var _0x35d6c1 = 97; _0x35d6c1 <= 122; _0x35d6c1++) {
          this.map[String.fromCharCode(_0x35d6c1)] = String.fromCharCode(_0x35d6c1 + 9327);
        }
        for (_0x35d6c1 in this.map) {
          this.mapInverse[this.map[_0x35d6c1]] = _0x35d6c1;
        }
      },
      encode: function (_0x53a2d9) {
        var _0x5f0bcd = "";
        var _0x10b579;
        var _0x21a512 = true;
        for (i in _0x53a2d9) {
          _0x10b579 = this.map[_0x53a2d9[i]];
          if (typeof _0x10b579 == "undefined") {
            if (_0x53a2d9[i].charCodeAt(0) >= 33) {
              _0x10b579 = _0x53a2d9[i] + String.fromCharCode(8413);
              if (!_0x21a512) {
                _0x10b579 = String.fromCharCode(8239) + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(8239) + _0x10b579;
              }
            } else {
              _0x10b579 = _0x53a2d9[i];
            }
          }
          _0x5f0bcd += _0x10b579;
          _0x21a512 = _0x10b579 == "\n";
        }
        return _0x5f0bcd;
      },
      decode: function (_0x20479c) {
        var _0x4d3c5f = "";
        var _0x1d8088;
        var _0x6c626c = "";
        for (i in _0x20479c) {
          _0x1d8088 = this.mapInverse[_0x20479c[i]];
          _0x4d3c5f += typeof _0x1d8088 == "undefined" ? _0x20479c[i] : _0x1d8088;
        }
        for (i in _0x4d3c5f) {
          _0x1d8088 = _0x4d3c5f[i].charCodeAt(0);
          if (_0x1d8088 != 160 && _0x1d8088 != 8239 && _0x1d8088 != 8413) {
            _0x6c626c += _0x4d3c5f[i];
          }
        }
        return _0x6c626c;
      },
      map: {},
      mapInverse: {}
    },
    squares: {
      init: function () {},
      encode: function (_0x331a98) {
        var _0x210eb9 = "";
        var _0x51c2c9;
        var _0x3406f6 = true;
        for (i in _0x331a98) {
          if (_0x331a98[i].charCodeAt(0) >= 33) {
            _0x51c2c9 = _0x331a98[i] + String.fromCharCode(8414);
            if (!_0x3406f6) {
              _0x51c2c9 = String.fromCharCode(8239) + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(8239) + _0x51c2c9;
            }
          } else {
            _0x51c2c9 = _0x331a98[i];
          }
          _0x210eb9 += _0x51c2c9;
          _0x3406f6 = _0x51c2c9 == "\n";
        }
        return _0x210eb9;
      },
      decode: function (_0x202946) {
        var _0xce01b0 = "";
        var _0x5efcf1;
        for (i in _0x202946) {
          _0x5efcf1 = _0x202946[i].charCodeAt(0);
          if (_0x5efcf1 != 160 && _0x5efcf1 != 8239 && _0x5efcf1 != 8414) {
            _0xce01b0 += _0x202946[i];
          }
        }
        return _0xce01b0;
      }
    },
    roundsquares: {
      init: function () {},
      encode: function (_0xf92002) {
        var _0x4db8e8 = "";
        var _0x3562c1;
        var _0x103b22 = true;
        for (i in _0xf92002) {
          if (_0xf92002[i].charCodeAt(0) >= 33) {
            _0x3562c1 = _0xf92002[i] + String.fromCharCode(8419);
            if (!_0x103b22) {
              _0x3562c1 = String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(160) + _0x3562c1;
            }
          } else {
            _0x3562c1 = _0xf92002[i];
          }
          _0x4db8e8 += _0x3562c1;
          _0x103b22 = _0x3562c1 == "\n";
        }
        return _0x4db8e8;
      },
      decode: function (_0x20d02f) {
        var _0x22875a = "";
        var _0x591d3c;
        for (i in _0x20d02f) {
          _0x591d3c = _0x20d02f[i].charCodeAt(0);
          if (_0x591d3c != 160 && _0x591d3c != 8239 && _0x591d3c != 8419) {
            _0x22875a += _0x20d02f[i];
          }
        }
        return _0x22875a;
      }
    },
    bent: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },
      encode: function (_0x2bd8c6) {
        var _0x4961a6 = "";
        var _0x131715;
        for (var _0x173688 = 0, _0x37dfe5 = _0x2bd8c6.length; _0x173688 < _0x37dfe5; _0x173688++) {
          _0x131715 = this.map[_0x2bd8c6.charAt(_0x173688)];
          if (typeof _0x131715 == "undefined") {
            _0x131715 = _0x2bd8c6.charAt(_0x173688);
          }
          _0x4961a6 += _0x131715;
        }
        return _0x4961a6;
      },
      decode: function (_0x47e0cc) {
        var _0x259ad8 = "";
        var _0x3991b0;
        for (var _0x3f7895 = 0, _0x5b733e = _0x47e0cc.length; _0x3f7895 < _0x5b733e; _0x3f7895++) {
          _0x3991b0 = this.map[_0x47e0cc.charAt(_0x3f7895)];
          if (typeof _0x3991b0 == "undefined") {
            _0x3991b0 = _0x47e0cc.charAt(_0x3f7895);
          }
          _0x259ad8 += _0x3991b0;
        }
        return _0x259ad8;
      },
      map: {
        a: "ą",
        b: "ҍ",
        c: "ç",
        d: "ժ",
        e: "ҽ",
        f: "ƒ",
        g: "ց",
        h: "հ",
        i: "ì",
        j: "ʝ",
        k: "ҟ",
        l: "Ӏ",
        m: "ʍ",
        n: "ղ",
        o: "օ",
        p: "ք",
        q: "զ",
        r: "ɾ",
        s: "ʂ",
        t: "է",
        u: "մ",
        v: "ѵ",
        w: "ա",
        x: "×",
        y: "վ",
        z: "Հ",
        A: "Ⱥ",
        B: "β",
        C: "↻",
        D: "Ꭰ",
        E: "Ɛ",
        F: "Ƒ",
        G: "Ɠ",
        H: "Ƕ",
        I: "į",
        J: "ل",
        K: "Ҡ",
        L: "Ꝉ",
        M: "Ɱ",
        N: "ហ",
        O: "ට",
        P: "φ",
        Q: "Ҩ",
        R: "འ",
        S: "Ϛ",
        T: "Ͳ",
        U: "Ա",
        V: "Ỽ",
        W: "చ",
        X: "ჯ",
        Y: "Ӌ",
        Z: "ɀ",
        0: "⊘",
        1: "������",
        2: "ϩ",
        3: "Ӡ",
        4: "५",
        5: "Ƽ",
        6: "Ϭ",
        7: "7",
        8: "������",
        9: "९",
        "&": "⅋",
        "(": "{",
        ")": "}",
        "{": "(",
        "}": ")",
        ä: "ą̈",
        ö: "օ̈",
        ü: "մ̈",
        Ä: "Ⱥ̈",
        Ö: "ට̈",
        Ü: "Ա̈",
        é: "ҽ́",
        á: "ą́",
        ó: "օ́",
        ú: "մ́",
        É: "Ɛ́",
        Á: "Ⱥ́",
        Ó: "ට́",
        Ú: "Ա́",
        è: "ҽ̀",
        à: "ą̀",
        ò: "օ̀",
        ù: "մ̀",
        È: "Ɛ̀",
        À: "Ⱥ̀",
        Ò: "ට̀",
        Ù: "Ա̀",
        ê: "ҽ̂",
        â: "ą̂",
        ô: "օ̂",
        û: "մ̂",
        Ê: "Ɛ̂",
        Â: "Ⱥ̂",
        Ô: "ට̂",
        Û: "Ա̂"
      }
    },
    tiny: {
      init: function () {
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
      },
      encode: function (_0x13b7f9) {
        var _0x5122af = "";
        var _0x5da8da;
        _0x13b7f9 = _0x13b7f9.toUpperCase();
        for (var _0xacc3c = 0, _0x510054 = _0x13b7f9.length; _0xacc3c < _0x510054; _0xacc3c++) {
          _0x5da8da = this.map[_0x13b7f9.charAt(_0xacc3c)];
          if (typeof _0x5da8da == "undefined") {
            _0x5da8da = _0x13b7f9.charAt(_0xacc3c);
          }
          _0x5122af += _0x5da8da;
        }
        return _0x5122af;
      },
      decode: function (_0x23cbe1) {
        var _0x191cae = "";
        var _0x115ec1;
        for (var _0xceab33 = 0, _0x265950 = _0x23cbe1.length; _0xceab33 < _0x265950; _0xceab33++) {
          _0x115ec1 = this.map[_0x23cbe1.charAt(_0xceab33)];
          if (typeof _0x115ec1 == "undefined") {
            _0x115ec1 = _0x23cbe1.charAt(_0xceab33);
          }
          _0x191cae += _0x115ec1;
        }
        return _0x191cae;
      },
      map: {
        A: "ᴀ",
        B: "ʙ",
        C: "ᴄ",
        D: "ᴅ",
        E: "ᴇ",
        F: "ꜰ",
        G: "ɢ",
        H: "ʜ",
        I: "ɪ",
        J: "ᴊ",
        K: "ᴋ",
        L: "ʟ",
        M: "ᴍ",
        N: "ɴ",
        O: "ᴏ",
        P: "ᴘ",
        Q: "Q",
        R: "ʀ",
        S: "ꜱ",
        T: "ᴛ",
        U: "ᴜ",
        V: "ᴠ",
        W: "ᴡ",
        X: "x",
        Y: "ʏ",
        Z: "ᴢ"
      }
    }
  };
  for (i in this.tools) {
    this.tools[i].init();
  }
  this.getHTML = function (_0x2287a6) {
    var _0x1b9ebf = "";
    var _0x24371e;
    var _0x47dcad = true;
    var _0x3e622d = 0;
    var _0x1f9ccc = 0;
    for (var _0x4a2746 = 0, _0x2e443d = _0x2287a6.length; _0x4a2746 < _0x2e443d; _0x4a2746++) {
      _0x24371e = _0x2287a6.charCodeAt(_0x4a2746);
      if (_0x24371e == 10 || _0x24371e == 13) {
        _0x1b9ebf += "<br>\n";
        _0x47dcad = true;
      } else if (_0x24371e == 32) {
        if (_0x47dcad) {
          _0x1b9ebf += " ";
          _0x47dcad = false;
        } else {
          _0x1b9ebf += "&nbsp;";
          _0x47dcad = true;
        }
      } else {
        if (_0x24371e >= 55296 && _0x24371e <= 56319) {
          _0x3e622d = _0x24371e;
          _0x1f9ccc = 0;
        } else if (_0x3e622d > 0) {
          if (_0x24371e >= 56320 && _0x24371e <= 57343) {
            _0x1f9ccc = (_0x3e622d - 55296) * 1024 + (_0x24371e - 56320) + 65536;
          }
          _0x3e622d = 0;
        } else {
          _0x1f9ccc = _0x24371e;
        }
        if (_0x1f9ccc != 0) {
          _0x1b9ebf += "&#x" + _0x1f9ccc.toString(16) + ";";
          _0x47dcad = true;
        }
      }
    }
    return _0x1b9ebf;
  };
}
module.exports = {
  StyleText: new StyleText(),
  randomStyle: _0xea2a4f => {
    let _0x1cc2cc = listall(_0xea2a4f);
    return _0x1cc2cc[Math.floor(Math.random() * _0x1cc2cc.length)];
  },
  listall: listall,
  strikeThrough: strikeThrough,
  wingdings: wingdings,
  vaporwave: vaporwave,
  typewriter: typewriter,
  analucia: analucia,
  tildeStrikeThrough: tildeStrikeThrough,
  underline: underline,
  doubleUnderline: doubleUnderline,
  slashThrough: slashThrough,
  sparrow: sparrow,
  heartsBetween: heartsBetween,
  arrowBelow: arrowBelow,
  crossAboveBelow: crossAboveBelow,
  creepify: creepify,
  bubbles: bubbles,
  mirror: mirror,
  squares: squares,
  roundsquares: roundsquares,
  flip: flip,
  tiny: tiny,
  createMap: createMap,
  serif_I: serif_I,
  manga: manga,
  ladybug: ladybug,
  runes: runes,
  serif_B: serif_B,
  serif_BI: serif_BI,
  serif_I: serif_I,
  textstyle1: textstyle1,
  textstyle2: textstyle2,
  textstyle3: textstyle3,
  textstyle4: textstyle4,
  textstyle5: textstyle5,
  textstyle6: textstyle6,
  textstyle7: textstyle7,
  textstyle8: textstyle8,
  textstyle9: textstyle9,
  textstyle10: textstyle10,
  textstyle11: textstyle11,
  textstyle12: textstyle12,
  textstyle13: textstyle13,
  textstyle14: textstyle14,
  textstyle15: textstyle15,
  textstyle16: textstyle16,
  textstyle17: textstyle17,
  textstyle18: textstyle18,
  textstyle19: textstyle19,
  textstyle20: textstyle20,
  textstyle21: textstyle21,
  textstyle22: textstyle22,
  textstyle23: textstyle23,
  textstyle24: textstyle24,
  textstyle25: textstyle25,
  textstyle26: textstyle26,
  textstyle27: textstyle27,
  textstyle28: textstyle28,
  textstyle29: textstyle29,
  textstyle30: textstyle30,
  textstyle31: textstyle31,
  textstyle32: textstyle32,
  textstyle33: textstyle33
};
