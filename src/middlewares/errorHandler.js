import EErrors from "../utils/error/enum.js";
import { logger } from "../utils/error/logger.js";

const errorHandler = (error, req, res, next) => {
  const response = { success: false, error: `${error.message}` }
  logger.error(response.error);
  switch (error.code) {
    case EErrors.BAD_REQUEST_ERROR:
      return res.status(400).json(response);

    case EErrors.NOT_FOUND_ERROR:
      return res.status(404).json(response);

    case EErrors.AUTH_ERROR:
      return res.status(401).json(response);

    case EErrors.VALIDATION_ERROR:
      return res.status(403).json(response);

    default:
      return res.status(500).json(response);
  }
};

export default errorHandler;
