const EmployeeUser = require('../models/EmployeeUser');
const HR = require('../models/HR');
const Manager = require('../models/Manager');

// @desc    Get all personnel (Employees, Managers, and HR)
// @route   GET /api/employees
// @access  Private/Admin
exports.getEmployees = async (req, res) => {
  try {
    // 📡 Fetching from all personnel nodes
    const [employees, managers, hr] = await Promise.all([
      EmployeeUser.find({}).select('-password'),
      Manager.find({}).select('-password'),
      HR.find({}).select('-password')
    ]);

    // 🧬 Synthesize into one master directory
    const allPersonnel = [...employees, ...managers, ...hr];
    
    res.json(allPersonnel);
  } catch (error) {
    console.error('🔥 Fetch Personnel Error:', error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update employee status/profile
// @route   PUT /api/employees/:id
// @access  Private/Admin
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, department, jobTitle, role } = req.body;

    // Determine correct collection based on role
    let Model;
    switch(role?.toLowerCase()) {
      case 'hr': Model = HR; break;
      case 'manager': Model = Manager; break;
      default: Model = EmployeeUser;
    }

    const employee = await Model.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Personnel node not found' });
    }

    if (firstName) employee.profile.firstName = firstName;
    if (lastName) employee.profile.lastName = lastName;
    if (department) employee.department = department; // Matching your model structure
    
    await employee.save();
    res.json({ message: 'Personnel updated successfully', employee });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete employee
// @route   DELETE /api/employees/:id
// @access  Private/Admin
exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.query; // Expecting role for collection selection

    let Model;
    switch(role?.toLowerCase()) {
      case 'hr': Model = HR; break;
      case 'manager': Model = Manager; break;
      default: Model = EmployeeUser;
    }

    const employee = await Model.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Personnel node not found' });
    }

    await employee.deleteOne();
    res.json({ message: 'Personnel node removed from matrix' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
