export function shuffleSongs(list) {
  if (!list.length) return;
  for (let i = list.length - 1; i >= 0; i--) {
    const randIdx = Math.floor(i * Math.random());
    [list[i], list[randIdx]] = [list[randIdx], list[i]];
  }
}
