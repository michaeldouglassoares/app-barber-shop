import jwt from 'jsonwebtoken';

import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async function (req, res, next) {

  const authHeader = req.headers.authorization.split(' ')[1];
  if (!authHeader) {
    return res.status(401).json({ status: false });
  }
  try {

    const decoded = await promisify(jwt.verify)(authHeader, authConfig.secret);

    req.userId = decoded.params.id;
    req.admin = decoded.params.admin;
    return next();
  } catch (err) {
    return res.status(401).json({ status: false });
  }
}