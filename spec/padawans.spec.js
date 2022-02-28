const fs = require('fs');
const {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
} = require('../padawans');

describe('Статистика о падаванах', () => {
  it('getPadawanNames возвращает список падаванов из файла `data/padawans.txt`', () => {
    const names = getPadawanNames();
    expect(names).toEqual(['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani']);
  });
  it('getPadawanScores возвращает оценки владения световым мечом из файла `data/scores.txt`', () => {
    const names = getLightsaberScores();
    expect(names).toEqual([99.9, 92, 87, 82]);
  });
  it('getStats возвращает таблицу соответствия падавана и оценки владения световым мечом', () => {
    const stats = getStats();
    expect(stats).toEqual([
      ['Revan', 99.9],
      ['Bastila Shan', 92],
      ['Jolee Bindo', 87],
      ['Juhani', 82],
    ]);
  });
  it('writeStats сохраняет статистику в файл `data/stats.txt`', () => {
    const stats = getStats();
    writeStats(stats);
    const data = fs.readFileSync('data/stats.txt', 'utf8');
    expect(data).toBe('Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82');
  });
});
