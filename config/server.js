


module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd0de94e662dbf3451e66e942b6fb7848'),
       url: '/admi',
          
    },
  },
});
