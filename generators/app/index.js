var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  method1() {
    this.log('method one just ran');
  }

  method2() {
    this.log('method two just ran');
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath()
    );
  }

  // Copy all dotfiles
  copyDotFiles() {
    this.fs.copy(
      this.templatePath('.*'),
      this.destinationRoot()
    );
  }
};
