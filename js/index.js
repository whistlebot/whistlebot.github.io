/*Add random pastel color themes to Holder.js */

function customThemes() {

  var customTheme = {};
  var numThemes = 200;

  for (var i = 0; i < numThemes; i++) {
    customTheme["pastel" + i] = {
      background: getRandomPastel(),
      foreground: "#4E4E54"
    };
  }
  return customTheme;
}

getRandomPastel = function() {
  var hue = Math.floor(Math.random() * 360);
  return 'hsl(' + hue + ', 85%, 80.5%)';
};

Holder.run({
  themes: customThemes()
});