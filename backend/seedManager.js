const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Manager = require('./models/Manager');

dotenv.config();

const seedManager = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to DB for seeding Manager');

    await Manager.deleteMany({}); // Clear old Managers

    const manager = new Manager({
      email: 'manager@fluidhr.com',
      password: 'managerpassword123',
      role: 'manager',
      profile: { firstName: 'Manager', lastName: 'Lead' }
    });

    await manager.save();
    console.log('🚀 Manager seeded in the NEW MANAGER FOLDER!');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedManager();
