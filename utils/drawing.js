const paths = (svg, path, i) => {
  let node = document.createElement('svg')

  node.path = path
  node.paths = path[i]
  node = svg

  node.forEach((path, index) => {
    console.log(path, index)
  })
}

export default paths
