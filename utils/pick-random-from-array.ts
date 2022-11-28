export function pickRandomFromArray(list: unknown[]) {
  const index = Math.floor(Math.random() * (list.length - 1));

  return list[index]
}
