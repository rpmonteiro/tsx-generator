'use strict'

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        default: 'generated-app',
        message: 'Component name: ',
        name: 'name'
      }
    ]

    return this.prompt(prompts).then((props) => {
      this.props = props
    })
  }

  writing() {
    const name = this.props.name
    this.fs.copyTpl(
      this.templatePath('component/component.tsx'),
      this.destinationPath(`src/components/${name}/${name}.tsx`),
      { name }
    )
    this.fs.copyTpl(
      this.templatePath('component/component.module.scss'),
      this.destinationPath(`src/components/${name}/${name}.module.scss`),
      { name }
    )
  }
}
