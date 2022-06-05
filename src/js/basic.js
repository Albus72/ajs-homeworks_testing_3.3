export default function getHeroHealthStatus(heroData) {
  return heroData.sort((hero1, hero2) => hero2.health - hero1.health);
}
