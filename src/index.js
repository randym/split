document.cookie = 'favorite={"name":"penut-butter"}; again=asdf'
document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    document.body.innerHTML = `<pre><blink><marquee direction="down">${JSON.stringify(
      document.cookie.split(/;\s*/),
      null,
      2,
    )}</marquee></blink></pre>`
  }
}
