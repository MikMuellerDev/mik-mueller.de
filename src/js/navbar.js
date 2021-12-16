function addNavbarListItem(list, href, html) {
    const listItem = document.createElement('li')
    const link = document.createElement('a')
    link.setAttribute('href', href)
    link.innerHTML = html
    listItem.appendChild(link)
    list.appendChild(listItem)
}


addLoadEvent(function () {
    let navbar = document.getElementsByTagName('nav');
    if (!navbar) {
        return
    }
    navbar = navbar[0]

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', 'nav-checkbox')
    navbar.appendChild(checkbox)

    const navbarList = document.createElement('div')
    navbarList.setAttribute('id', 'navbar-list')
    const list = document.createElement('ul')

    addNavbarListItem(
        list,
        '/',
        '<i class="fas fa-home"></i>' +
        '<span class="vertical-align">Home</span>'
    )

    addNavbarListItem(
        list,
        '/about',
        '<i class="fas fa-male" style="padding-right: 0.6em;"></i>' +
        '<span class="vertical-align">About</span>'
    )

    addNavbarListItem(
        list,
        '/projects',
        '<i class="fas fa-server"></i>' +
        '<span class="vertical-align">Projects</span>'
    )

    navbarList.appendChild(list)
    navbar.appendChild(navbarList)

    const hamburgerLabel = document.createElement('label')
    hamburgerLabel.setAttribute('for', 'nav-checkbox')

    const hamburgerContent = document.createElement('div')
    hamburgerContent.setAttribute('id', 'hamburger-content')

    const hamburgerLine = document.createElement('div')
    hamburgerLine.setAttribute('id', 'hamburger-middle')

    hamburgerContent.appendChild(hamburgerLine)
    hamburgerLabel.appendChild(hamburgerContent)
    navbar.appendChild(hamburgerLabel)
})
