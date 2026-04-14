const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to DB for seeding Admin');

    await Admin.deleteMany({}); // Clear old admins

    const admin = new Admin({
      email: 'admin@fluidhr.com',
      password: '123123123123Man@',
      role: 'admin',
      profile: { firstName: 'System', lastName: 'Admin' }
    });

    await admin.save();
    console.log('🚀 Admin seeded in the NEW ADMIN FOLDER!');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();
