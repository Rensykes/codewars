const { writeFile, readdirSync } = require('fs')

const indexGenerator = kyu => {
  const url = `https://github.com/rensykes/codewars/tree/master/${kyu}/`

  const markdown = source =>
    readdirSync(source)
      .sort((a, b) => a.localeCompare(b))
      .map((name, index) => {
        const bullet = index % 2 === 0 ? '*' : '-'
        return `${bullet} [${name}](${url}${encodeURIComponent(name)})`
      })
      .join('\n\n')

  const kyuIndex = markdown(`./${kyu}`)

  writeFile(`./lib/index/${kyu}.md`, kyuIndex, err => {
    if (err) throw err
    console.log(`${kyu.split('-').join(' ')} index generated`)
  })
}

const generateAllIndex = () => {
  const katas = ['6Kyu', '5Kyu', '4Kyu']
  katas.forEach(kata => indexGenerator(kata))
}

generateAllIndex()