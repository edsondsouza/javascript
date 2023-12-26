const user = {
  name: "Edson",
  age: 21
}

for (const userid in user) {
  // console.log(user[userid])
}

const languages = ["js", "py", "cpp", "rust", "go"]

for (const lang in languages) {
  // console.log(languages[lang])
}

const map = new Map()
map.set("in", "india")
map.set("us", "united states of america")
map.set("fn", "france")

for (const key in map) {
  console.log(key)
}