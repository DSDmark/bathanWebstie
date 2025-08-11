export function generateRandomPasswordUtil(length = 8) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "0123456789"
  const special = "@!$%^&*() +[]{};':\"\\|,.<>/?#"

  let password = ""
  password += uppercase.charAt(Math.floor(Math.random() * uppercase.length))
  password += numbers.charAt(Math.floor(Math.random() * numbers.length))
  password += special.charAt(Math.floor(Math.random() * special.length))

  const allChars = uppercase + lowercase + numbers + special
  while (password.length < length) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length))
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("")

  return password
}
