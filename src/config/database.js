module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'root123',
  database: 'goBarberBD',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
