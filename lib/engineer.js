const employee = require("./employee.js");

class engineer extends employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.gitHub;
  }
  getRole() {
    return this.role;
  }
}

module.exports = engineer;
