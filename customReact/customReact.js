function customRender(reactElement,container){
  // const domElement = document.createElement(reactElement.type)
  // domElement.innerHTML = reactElement.children
  // domElement.setAttribute('href',reactElement.props.href)
  // domElement.setAttribute('target',reactElement.props.target)

  // container.appendChild(domElement);

  // better code
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop]);
  }
  container.appendChild(domElement)
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target:  '_blank'
  },
  children: 'click me to visit google'
}

const mainContainer = document.getElementById('root')

// render function jo react ke element ko le aur inject krde container ke andar
customRender(reactElement,mainContainer)