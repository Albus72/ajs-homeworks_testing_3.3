const heroData = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function getHeroHealthStatus(heroData) {
  return heroData.sort((hero1, hero2) => hero2.health - hero1.health);
}

getHeroHealthStatus(heroData);
