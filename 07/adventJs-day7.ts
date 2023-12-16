function drawGift(size, symbol) {
  let result = '';

  // Drawing the top of the gift
  for (let i = size - 1; i >= 0; i--) {
      const spaces = ' '.repeat(i);
      const sides = '#'.repeat(size - i);
      const top = '#'.repeat(i + 1);
      result += `${spaces}${top}${symbol.repeat(2 * (size - i) - 1)}${sides}\n`;
  }

  // Drawing the bottom of the gift
  for (let i = 1; i < size; i++) {
      const spaces = ' '.repeat(i);
      const sides = '#'.repeat(size - i);
      const bottom = '#'.repeat(size - i);
      result += `${spaces}${bottom}${symbol.repeat(2 * i - 1)}${sides}\n`;
  }

  // Adding a newline at the end
  result += '\n';

  return result;
}