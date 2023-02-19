const usersResolvers = require("./Users");
const employeesResolvers = require("./Employees");

module.exports = {
  Query: {
    ...usersResolvers.Query,
    ...employeesResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...employeesResolvers.Mutation,
  },
};
