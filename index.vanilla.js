function registerEvent(target, event, id, stylesheet) {

  return target.addEventListener(event, e => populateStylesheet(id, stylesheet))

}

function populateStylesheet(id, stylesheet) {

  let tag = document.querySelector(`#jsincss-${id}`)

  if (!tag) {

    tag = document.createElement('style')
    tag.id = `jsincss-${id}`
    document.head.appendChild(tag)

  }

  const generatedStyles = stylesheet()
  const currentStyles = tag.innerHTML

  if (!currentStyles
       || (currentStyles && generatedStyles !== currentStyles)) {

    return tag.innerHTML = generatedStyles

  }

}

export default (stylesheet, selector, events) => {

  let id = Date.now() + Math.floor(Math.random() * 100)

  selector = selector || window
  events = events || ['load', 'resize', 'input', 'click']

  if (selector === window) {

    events.forEach(event => {

      registerEvent(window, event, id, stylesheet)

    })

  } else {

    document.querySelectorAll(selector).forEach(tag => {

      events.forEach(event => {

        registerEvent(tag, event, id, stylesheet)

      })

    })

  }

}
