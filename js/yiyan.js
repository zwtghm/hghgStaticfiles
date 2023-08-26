fetch('https://v1.hitokoto.cn')
  .then(response => response.json())
  .then(data => {
    typewriter(data)
  })
  .catch(console.error)