module.exports = function(
  stylesheet = event => '',
  selector = window,
  events = ['load', 'resize', 'input', 'click', 'reprocess']
) {

  function registerEvent(target, event, id, stylesheet) {

    return target.addEventListener(
      event,
      e => populateStylesheet(id, stylesheet, e)
    )

  }

  function populateStylesheet(id, stylesheet, e) {

    let tag = document.querySelector(`#jsincss-${id}`)

    if (!tag) {

      tag = document.createElement('style')
      tag.id = `jsincss-${id}`
      document.head.appendChild(tag)

    }

    const currentStyles = tag.textContent
    const generatedStyles = stylesheet(e)

    if (!currentStyles || (generatedStyles !== currentStyles)) {

      return tag.textContent = generatedStyles

    }

  }

  let id = Date.now() + Math.floor(Math.random() * 100)

  if (selector === window) {

    return events.forEach(event =>
      registerEvent(window, event, id, stylesheet)
    )

  } else {

    return document.querySelectorAll(selector).forEach(tag =>
      events.forEach(event =>
        registerEvent(tag, event, id, stylesheet)
      )
    )

  }

}
