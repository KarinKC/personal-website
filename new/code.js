function onHamburgerIconClick() {
    const expandableElements = Array.from(document.getElementsByClassName("expandable"));
    toggleClass("expanded", expandableElements);
}

function toggleClass(cssClass, elements) {
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains(cssClass)) {
            elements[i].classList.remove(cssClass);
            changeStatusBarColor(false)
        } else {
            elements[i].classList.add(cssClass);
            changeStatusBarColor(true)
        }
    }
}

function changeStatusBarColor(isNavbarExpanded) {
    if (isNavbarExpanded) {
        color = getComputedStyle(document.documentElement).getPropertyValue("--color-brown")
    } else {
        color = "white"
    }
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  color);
}