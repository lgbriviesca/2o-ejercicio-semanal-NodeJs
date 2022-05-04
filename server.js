const { app } = require('./app');

const { Repair } = require('./models/repairModel');
const { User } = require('./models/userModel');

const { db } = require('./utils/database');

db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

// Establish models relations
// 1 User <----> Many repairs
// User.hasMany(Repair, { foreignKey: 'userId' });
User.hasMany(Repair);
Repair.belongsTo(User);

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Segundo ejercicio semanal is running on port: ${PORT}`);
});
