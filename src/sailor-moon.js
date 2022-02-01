export default function SailorMoon(){
  this.name = "Serena Tsukino";
  this.weapons = ["Moon Tiara", "Crescent Moon Wand"];
  this.tagline = "In the name of the moon, I'll punish you.";
  this.hitPoints = 100;
}

SailorMoon.prototype.moonTiaraMagic = function (){
  this.damage = 5;
  return this.damage;
};

SailorMoon.prototype.moonHealingActivation = function (){
  this.damage = 10;
  return this.damage;
};

SailorMoon.prototype.cosmicMoonPower = function (){
  this.damage = 20;
  return "critical " + this.damage + " damage";
};
