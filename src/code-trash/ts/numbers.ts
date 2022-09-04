function arrangeCoins(n: number): number {
  if (n === 1) return 1;

  let rows = 0;
  let coinsSpent = 0;

  for (let i = 1; i < n; ++i) {
    if (coinsSpent + i > n) break;

    ++rows;
    coinsSpent += i;
  }

  return rows;
}
