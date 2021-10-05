export const getWindDirection = (deg: number | null | undefined) => {
  if (deg) {
    let val = Math.floor(deg / 22.5 + 0.5);
    let directions = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];

    return directions[val % 16];
  }

  return;
};
