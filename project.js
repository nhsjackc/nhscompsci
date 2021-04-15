onEvent("r1c1", "click", function( ) {
  if (getProperty("r1c1", "background-color") == "blue") {
    setProperty("r1c1", "background-color", "red");
  } else {
    setProperty("r1c1", "background-color", "blue");
  }
  if (getProperty("r1c2", "background-color") == "blue") {
    setProperty("r1c2", "background-color", "red");
  } else {
    setProperty("r1c2", "background-color", "blue");
  }
  if (getProperty("r2c1", "background-color") == "blue") {
    setProperty("r2c1", "background-color", "red");
  } else {
    setProperty("r2c1", "background-color", "blue");
  }
});
