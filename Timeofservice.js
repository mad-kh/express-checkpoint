const Timeofservice = (req, res, next) => {
  let day = new Date().getDay();
  let hour = new Date().getHours();

  if (hour < 8 || hour > 20 || day == 0 || day == 6) {
    res.sendFile(`${__dirname}/views/closed.html`);
  } else {
    next();
  }
};

module.exports = { Timeofservice };
