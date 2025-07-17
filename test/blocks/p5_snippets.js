// Utility functions
const utils = {
  getCenterOfTile: (x, y) => ({
    x: 100 * x + 50,
    y: 100 * y + 50
  })
};

export const snippets = {
  plant: (x, y) => {
    return `\n
    {
      sketch.textSize(32);
      sketch.textAlign(sketch.CENTER, sketch.CENTER);
      plantingSound.currentTime = 0;
      plantingSound.play().catch(err => console.log('Audio play failed:', err));
      sketch.text('🌱', 100 * ${x} + 50, 100 * ${y} + 50);
    }\n
  `;
  },

  harvest: (x, y) => {
    return `\n
    {
      sketch.fill(sketch.color('#9e6d30'));
      sketch.noStroke();
      sketch.rectMode(sketch.CENTER);
      harvestingSound.currentTime = 0;
      harvestingSound.play().catch(err => console.log('Audio play failed:', err));
      sketch.rect(100 * ${x} + 50, 100 * ${y} + 50, 98, 98);
    }\n
  `;
  },

  water: (x, y) => {
    return `\n
    {
      sketch.fill(sketch.color('#7c4807'));
      sketch.noStroke();
      sketch.rectMode(sketch.CENTER);
      let posX = 100 * ${x} + 50;
      let posY = 100 * ${y} + 50;
      let pixelColor = sketch.get(posX, posY);
      let targetColor = sketch.color('#9e6d30');
      if (sketch.red(pixelColor) !== sketch.red(targetColor) ||
          sketch.green(pixelColor) !== sketch.green(targetColor) ||
          sketch.blue(pixelColor) !== sketch.blue(targetColor)) {
        sketch.rect(posX, posY, 98, 98);
        sketch.textSize(32);
        sketch.textAlign(sketch.CENTER, sketch.CENTER);
        sketch.text('🌱', posX, posY);
      } else {
        sketch.rect(posX, posY, 98, 98);
      }
      wateringSound.currentTime = 0;
      wateringSound.play().catch(err => console.log('Audio play failed:', err));
    }\n
  `;
  }
};

export { utils };