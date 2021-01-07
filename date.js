//jshint esversion: 6

exports.getDate = function () {
  //0-6 = Sunday-Saturday
  const today = new Date();
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
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