const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  return data.trim().split('\n');
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8');
  return data.trim().split('\n').map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((x, i) => [x, scores[i]]);
}

function writeStats(stats) {
  fs.writeFileSync('data/stats.txt', stats.map((x) => x.join(' ')).join('\n'), 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
