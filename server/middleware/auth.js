module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  // TEMP: will replace with JWT later
  if (!token || token !== 'admin-secret') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};
