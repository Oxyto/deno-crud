export function getShuffleArray(list: string[]) {
  const newList = Array.from(list)

  newList.sort(() => 0.5 - Math.random())
  return newList
}
