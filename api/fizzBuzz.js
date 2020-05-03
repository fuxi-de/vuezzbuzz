module.exports = (req, res) => {
  const i = req.query.input
  const output =
    i % 3 === 0 && i % 5 === 0
      ? 'fizzbuzz'
      : i % 5 === 0
        ? 'buzz'
        : i % 3 === 0
          ? 'fizz'
          : i
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json({
    body: req.body,
    output: output,
    query: req.query
  })
}
