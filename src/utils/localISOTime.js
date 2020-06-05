const localISOTime = () => {
  const now = new Date()
  const offset = now.getTimezoneOffset() * 60000

  return (new Date(+now - offset)).toISOString().slice(0, -1)
}

export default localISOTime
