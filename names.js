const pattern = new RegExp("[a-zA-Z]{1,10}")

const names = [
  "Albert Henry",
  "Domingos Bento Pereira",
  "I Gede Jemika",
  "Maulana Yavidz Iqbal",
  "Maya Asmara",
  "Mochamad Adam Fadly S",
  "Muhsin Susanto",
  "Wippy Zulkarnain"
]

const longNames = names.filter(name => {
  if (pattern.test(name)) return name
})

console.log(longNames)
