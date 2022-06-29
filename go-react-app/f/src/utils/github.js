const utilsGithub = () => {
  const header = document.body.querySelector('.App-header')

  if (document.getElementById('github-repo')) return

  header.insertAdjacentHTML(
    'afterBegin',
    '<a id="github-repo" href="https://github.com/mugiwarafx/fullstackopen-part12" target="_blank" rel="noopener">Github 🏳️‍🌈</a>'
  )
}

export default utilsGithub
