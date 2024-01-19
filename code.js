
/**
 * Executed when HTML is rendered.
 * It happens immediately and it does not wait for the whole page to load.
 */
function onStart() {
    setupCarousels()
}

/**
 * Executed when the body onLoad hook is executed.
 * It happens just when all the resources have been loaded.
 */
function onLoad() {
    // Empty for now.
    
}

function onHamburgerIconClick() {
    toggleNavbarExpansion()
}

function onNavContainerClick() {
    toggleNavbarExpansion()
}

function toggleNavbarExpansion() {
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

// ---------------------------------------
// Carousels setup
// ---------------------------------------

function setupCarousels() {
    const carousels = Array.from(document.getElementsByClassName("carousel"))

    for (i=0; i<carousels.length; i++) {
        const carousel = carousels[i]
        const carouselImageCount = carousel.children.length
        const carouselContainer = carousel.parentElement

        const carouselIndicators = document.createElement('div')
        populateCarouselIndicators(carouselIndicators, carouselImageCount)
        carouselContainer.appendChild(carouselIndicators)

        setupScrollHandler(carousel, carouselIndicators)
    }
}
var scriptElement = document.currentScript
function configureCarouselIndicatorImage(img, isHighlighted) {
    const CAROUSEL_INDICATOR_EMPTY_SRC = new URL('resources/circle-empty.svg', scriptElement.src)
    const CAROUSEL_INDICATOR_FULL_SRC = new URL('resources/circle-full.svg', scriptElement.src)

    img.src = isHighlighted ? CAROUSEL_INDICATOR_FULL_SRC : CAROUSEL_INDICATOR_EMPTY_SRC
    img.alt = isHighlighted ? "Full circle" : "Empty circle"
}

function populateCarouselIndicators(carouselIndicators, carouselImageCount) {
    carouselIndicators.classList = ['carousel-buttons']
    for (j=0; j<carouselImageCount; j++) {
        const img = document.createElement('img')
        const isHighlighted = j == 0
        configureCarouselIndicatorImage(img, isHighlighted)
        carouselIndicators.appendChild(img)
    }
}

function setupScrollHandler(carousel, carouselIndicators) {
    carousel.addEventListener('scroll', () => {
        const indicatorIndex = Math.round(carousel.scrollLeft / carousel.clientWidth)
        for (k=0; k<carouselIndicators.children.length; k++) {
            const img = carouselIndicators.children[k]
            const isHighlighted = k == indicatorIndex
            configureCarouselIndicatorImage(img, isHighlighted)
        }
    })
}