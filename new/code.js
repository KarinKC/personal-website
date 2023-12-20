function onHamburgerIconClick() {
    const expandableElements = Array.from(document.getElementsByClassName("expandable"));
    toggleClass("expanded", expandableElements);
}

function toggleClass(cssClass, elements) {
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains(cssClass)) {
            elements[i].classList.remove(cssClass);
        } else {
            elements[i].classList.add(cssClass);
        }
    }
}