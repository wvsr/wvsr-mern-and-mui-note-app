const notFound = (req, res, next) => {
  const error = new Error(`not found - ${req.origianlUrl}`)
  res.json(404)
  next(error)
}

const errorHandler = (err, req, res, next) => {
  const status = res.statusCode == 200 ? 500 : res.statusCode
  res.status(status)
  res.json({
    message: err.message,
    stack: (process.env.NODE_ENV = 'production' ? null : res.stack),
  })
}
