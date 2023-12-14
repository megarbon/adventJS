function cyberReindeer(road: string, time: number): string[] {
  const roadArray: string[] = road.split("");
  const barriers: number[] = [];
  let sledPosition: number = 0;

  for (let i = 0; i < time; i++) {
    const currentRoad = roadArray[sledPosition];

    if (currentRoad === "*") {
      // The barrier is open, sled advances
      sledPosition++;
    } else if (currentRoad === "|") {
      // Barrier encountered, sled stops
      barriers.push(sledPosition);
    } else {
      // Regular road, sled advances
      sledPosition++;
    }
  }

  const result: string[] = [];
  for (let i = 0; i < roadArray.length; i++) {
    if (barriers.includes(i)) {
      result.push(roadArray[i]);
    } else {
      result.push(roadArray[i] === "S" ? "S" : ".");
    }
  }

  return result;
}

const road = "S..|...|..";
const time = 10;
const result = cyberReindeer(road, time);
console.log(result);
