/* eslint-disable no-undef */
import SailorMoon from './../src/sailor-moon.js';

describe('SailorMoon', () => {
  test('should create a Sailor moon player object', ()=>{
    const sailorMoon = new SailorMoon();
    expect(sailorMoon.name).toEqual("Serena Tsukino");
    expect(sailorMoon.weapons).toEqual(["Moon Tiara", "Crescent Moon Wand"]);
    expect(sailorMoon.tagline).toEqual("In the name of the moon, I'll punish you.");
    expect(sailorMoon.hitPoints).toEqual(100);
  });
  test('should return 5 damage.', ()=>{
    const sailorMoon = new SailorMoon();
    expect(sailorMoon.moonTiaraMagic()).toEqual(5);
  });
  test('should return 10 damage', ()=>{
    const sailorMoon = new SailorMoon();
    expect(sailorMoon.moonHealingActivation()).toEqual(10);
  });
  test('should return 20 damage and "critical" message', () => {
    const sailorMoon = new SailorMoon();
    expect(sailorMoon.cosmicMoonPower()).toEqual("critical 20 damage");
  });
});