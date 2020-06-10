const checkMillionDollarIdea = (req, res, next) => {
  const numWeeks = req.body.numWeeks;
  const weeklyRevenue = req.body.weeklyRevenue;
  const totalRevenue = Number(numWeeks) * Number(weeklyRevenue);
  if (
    !numWeeks ||
    !weeklyRevenue ||
    isNaN(totalRevenue) ||
    totalRevenue < 1000000
  ) {
    res.sendStatus(400);
  } else {
    next();
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;

// 1) is a function takes three arguments
// 2) sends a 400 error if the total yield is less than one million dollars
// 3) calls next for ideas that will yield at least one million dollars
// 4) sends a 400 error if numWeeks or weeklyRevenue is not supplied
// 5) sends a 400 error if numWeeks or weeklyRevenue is an invalid string
// 6) is used in a POST /api/ideas route to reject insufficiently profitable ideas
