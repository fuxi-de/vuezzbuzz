module.exports = (req, res) => {
  // const i = this.input
  // this.output =
  //   i % 3 === 0 && i % 5 === 0
  //     ? 'fizzbuzz'
  //     : i % 5 === 0
  //       ? 'buzz'
  //       : i % 3 === 0
  //         ? 'fizz'
  //         : i
  res.header('Access-Control-Allow-Origin', '*')
  res.json({
    body: req.body,
    query: req.query
  })
}
