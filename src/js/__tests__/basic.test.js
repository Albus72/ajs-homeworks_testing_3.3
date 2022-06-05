import getHeroHealthStatus from '../basic';

test('should health', () => {
  const heroDataSorted = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const heroData = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  expect(getHeroHealthStatus(heroData)).toEqual(heroDataSorted);
});
