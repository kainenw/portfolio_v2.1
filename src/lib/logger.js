const isProduction = process.env.NODE_ENV === 'production';

const logger = {
  log: (...args) => {
    if (!isProduction) {
      console.log(...args);
    }
  },
  error: (...args) => {
    if (!isProduction) {
      console.error(...args);
    }
  },
};

export default logger;

