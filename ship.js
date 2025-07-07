function Ship(length, hits = 0) {
  if (length <= 0) return;

  const hit = () => {
    hits++;
    return hits;
  };

  return {
    hit,
    isSunk,
  };
}

module.exports = Ship;
