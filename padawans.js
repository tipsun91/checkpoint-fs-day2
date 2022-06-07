const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'UTF-8').match(/^(.+)$/gm);
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'UTF-8').match(/^(\d+\.?\d+)$/gm).map((i) => Number(i));
}

function getStats() {
  let padawans = getPadawanNames();
  let lightsaberScores = getLightsaberScores();

  let stats = [];
  for (let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], lightsaberScores[i]]);
  }

  return stats;
}

function writeStats() {
  let stats = getStats();
  stats = stats.map(
    (i) => i.join(' ')
  );
  fs.writeFileSync('./data/stats.txt', stats.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
