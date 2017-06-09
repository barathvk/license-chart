const fs = require('fs')
const moment = require('./lib/moment.min')
const data = []
const max = 1000
const days = 30
const start = moment().add(-1 * days, 'days')
const now = moment()
let d = start
const random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
while (now - d > 0) {
  var m = random(max*0.95, max)
  var m = max
  data.push({
    Time: d.unix(),
    Max: m,
    Consumed: random(m*0.3, m*0.8)
  })
  d = d.add(15, 'minutes')
}
let csv = 'Time,Max,Consumed'
data.map(d => {
  csv += `\n${d.Time},${d.Max},${d.Consumed}`
})
fs.writeFileSync('./data.csv', csv, 'utf-8')
console.log(`Process complete: ${data.length} records created`)