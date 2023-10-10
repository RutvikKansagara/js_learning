

exports.getCurrentDate = function () {
    return new Date();
  };
  
  exports.getCurrentMonth = function () {
    return new Date().getMonth() + 1; // Adding 1 because months are zero-based
  };
  
  exports.getCurrentDayOfMonth = function () {
    return new Date().getDate();
  };
  
  exports.getCurrentDayOfWeek = function () {
    return new Date().getDay();
  };
  
  exports.formatDate = function () {
    return new Date().toLocaleDateString();
  };
  
  