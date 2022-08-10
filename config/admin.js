module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6e2f625eda6c6e7a799b65a87bcaa079'),
  },
});
