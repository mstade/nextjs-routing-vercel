// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	res.statusCode = 200
  res.json({ url: req.url, query: req.query })
}
