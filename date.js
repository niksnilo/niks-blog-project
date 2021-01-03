//jshint esversion: 6

exports.getDate = function () {
  //0-6 = Sunday-Saturday
  const today = new Date();
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return today.toLocaleDateString("en-US", options);
  // let dayName = today.toLocaleDateString("en-US", { weekday: "long" });
};

exports.getDay = function () {
  //0-6 = Sunday-Saturday
  const today = new Date();
  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
  // let dayName = today.toLocaleDateString("en-US", { weekday: "long" });
};

exports.getYear = function () {
  //0-6 = Sunday-Saturday
  const year = new Date();
  const options = {
    year: "numeric",
  };

  return year.toLocaleDateString("en-US", options);
  // let dayName = today.toLocaleDateString("en-US", { weekday: "long" });
};