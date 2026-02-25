  function switchCase(key) {
    switch (key) {
      case "value1":
        return "Value 1";
      case "value2":
        return "Value 2";
      default:
        return "Default value";
    }
  }
  switchCase("value1"); // Output: "Value 1"
  switchCase("value2"); // Output: "Value 2"
  switchCase("value3"); // Output: "Default value"
