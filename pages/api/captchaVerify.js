
export default async function CaptchaVerify(req, res) {

  const token = JSON.parse(req.body).response

  try {
    const result = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: `secret={process.env.SECRET_KEY}&response=${token}`,
    })
    const data = await result.json()
    res.status(200).send(data)
  } catch (err) {
    res.status(400).send(err)
  }
}
