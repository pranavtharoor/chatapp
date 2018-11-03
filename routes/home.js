exports.init = (req, res) => {
  if (req.session.key)
    res.sendSuccess({
      loggedIn: true,
      userDetails: {
        name: req.session.key.name,
        email: req.session.key.email,
        type: req.session.key.type
      }
    });
  else
    res.sendSuccess({
      loggedIn: false
    });
};
