export function getShuffleArray(list: string[]) {
  const newList = [...list]

  newList.sort(() => 0.5 - Math.random())
  return newList
}
