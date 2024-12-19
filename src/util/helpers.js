export function shuffleSongs(list) {
  if (!list.length) return;
  for (let i = list.length - 1; i >= 0; i--) {
    const randIdx = Math.floor(i * Math.random());
    [list[i], list[randIdx]] = [list[randIdx], list[i]];
  }
}

export function formatTime(rawTime) {
  rawTime = rawTime === undefined ? 0 : rawTime;
  const minutes = `${Math.floor(rawTime / 60)}`;
  let seconds = `${Math.round(rawTime % 60)}`;
  if (seconds.length < 2) seconds = '0' + seconds;
  return minutes + ':' + seconds;
}