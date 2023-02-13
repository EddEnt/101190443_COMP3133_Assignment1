const Employees = require("../models/Employees");

module.exports = {
  Query: {
    async getEmployees(_, { ID }) {
      return await Employees.findById(ID);
    },
    async getAllEmployees() {
      return await Employees.find().sort({ createdAt: 1 });
    },
  },
  Mutation: {
    async createEmployee(
      _,
      { employeeInput: { first_name, last_name, email, gender, salary } }
    ) {
      const createdEmployee = new Employees({
        first_name: first_name,
        last_name: last_name,
        email: email,
        gender: gender,
        salary: salary,
      });

      const result = await createdEmployee.save(); //Saves employee to MongoDB database

      return {
        id: result.id,
        ...result._doc,
      };
    },

    async deleteEmployee(_, { ID }) {
      const sucessfulDeletion = (await Employees.findByIdAndDelete({ _id: ID }))
        .deletedCount;
      return sucessfulDeletion; //Returns true if employee was deleted, false if not deleted
    },

    async updateEmployee(_, { ID, employeeInput: { ...Employees } }) {
      const sucessfulUpdate = await Employees.findByIdAndUpdate(
        ID,
        { ...Employees },
        { new: true }
      );
      return sucessfulUpdate;
    },
  },
};
