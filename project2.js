var clicks = 0;
var upgrade = 1;
var price = upgrade * (upgrade / 2) * 10;
setProperty("counter", "text", clicks);
setProperty("shop", "text", "upgrade: " + price);
onEvent("button", "click", function( ) {
  clicks = clicks + upgrade;
  setProperty("counter", "text", clicks);
});
onEvent("upgrade", "click", function( ) {
  if (clicks >= price) {
    upgrade = upgrade * 2;
    clicks = clicks - price;
    setProperty("counter", "text", clicks);
  }
  price = upgrade * (upgrade / 2) * 10;
  setProperty("shop", "text", "upgrade: " + price);
});
