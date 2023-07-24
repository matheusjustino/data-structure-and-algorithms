function fibonacci(n) {
  const fibTable = new Array(n + 1).fill(null);

  function fibHelper(k) {
    if (k <= 1) {
      return k;
    }

    if (fibTable[k] !== null) {
      return fibTable[k];
    }

    fibTable[k] = fibHelper(k - 1) + fibHelper(k - 2);
    return fibTable[k];
  }

  return fibHelper(n);
}
