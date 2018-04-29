const path = require("path")
const globby = require("globby")
const fs = require("fs")

const basePath = path.resolve(__dirname)
const templatesPath = path.resolve(basePath, "__templates__")

module.exports = plop => {
  plop.setGenerator("component", {
    description: "create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name"
      }
    ],
    actions: [
      {
        type: "addMany",
        destination: "./src/components/{{name}}",
        base: path.resolve(templatesPath, "component"),
        templateFiles: path.resolve(templatesPath, "component", "*.hbs")
      },
      async answers => {
        const { name } = answers
        const paths = await globby(
          path.resolve(templatesPath, "component", "*.hbs")
        )
        const results = paths.map(file => {
          const fileName = path.basename(file)
          const newFileName = fileName
            .replace(/(.hbs)$/, "")
            .replace(/^(Component)/, name)
          fs.renameSync(
            path.resolve("src", "components", name, fileName),
            path.resolve("src", "components", name, newFileName)
          )
          return `Rename ${fileName} -> ${newFileName}`
        })
        return `${paths.length} files renamed:\n${results.join("\n")}`
      }
    ]
  })
}
