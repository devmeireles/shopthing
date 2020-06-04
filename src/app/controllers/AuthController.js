const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

const AuthService = require('../services/AuthService');

exports.register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    if (await AuthService.checkUserMailExists(email)) return res.status(400).send({ error: 'User already exists' });

    if (await AuthService.checkUserNameExists(username)) return res.status(400).send({ error: 'Username already exists' });

    if (password.length < 6) return res.status(400).send({ error: 'Password too short' });

    const user = await AuthService.createUser(req.body);
    user.password = undefined;

    return res.status(200).json(
      {
        succes: true,
        data: {
          user,
          token: generateToken({ id: user.id }),
        },
      },
    );
  } catch (err) {
    return res.status(400).send({ error: err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await AuthService.checkUserByPassword(email);

  if (!user || !await bcrypt.compare(password, user.password)) return res.status(400).send({ error: 'Invalid login data' });

  user.password = undefined;

  return res.send({
    user,
    token: generateToken({ id: user.id }),
  });
};
