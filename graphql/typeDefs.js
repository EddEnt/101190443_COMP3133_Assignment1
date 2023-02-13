const { gql } = require("apollo-server");

module.exports = gql`

  """
  ! means required field
  getEmployee returns one employee by ID
  getAllEmployees returns all employees

  """
  # ! means required field

  type Employee {
    first_name: String
    last_name: String
    email: String
    gender: String
    salary: Float
  }

  input EmployeeInput {
    first_name: String
    last_name: String
    email: String
    gender: String
    salary: Float
  }

  type Query {
    getEmployee(ID: ID!): Employee!  
    getAllEmployees(): [Employee]  
  }

  type Mutation {
    createEmployee(employeeInput: EmployeeInput): Employee!
    updateEmployee(ID: ID!, employeeInput: EmployeeInput): Employee!
    deleteEmployee(ID: ID!): Boolean
  }
`;
