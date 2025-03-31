const modifiers = {
  tabItemActive: 'tabs__item--active',
  tabPanelActive: 'tabpanels__item--active',
  accordionItemOpen: 'accordion__item--open'
};

const elsTabItem = document.querySelectorAll('.tabs__item')
const elsTabPanel = document.querySelectorAll('.tabpanels__item')
const elsTabLink = document.querySelectorAll('.js-tabs-link')

const elsAccordionItem = document.querySelectorAll('.accordion__item')
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler')


function deactivateTabItems () {

  elsTabItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove(modifiers.tabItemActive);
  })
}

function deactivateTabPanels () {

  elsTabPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove(modifiers.tabPanelActive);
  })
}

function closeAccordoionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove(modifiers.accordionItemOpen)
  })
}


elsTabLink.forEach(function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    // Prevent page move
    evt.preventDefault();

    // Remove active class form tabs__item element
    deactivateTabItems ();

    // Add active class to current tabs__item
    elTabLink.parentElement.classList.add(modifiers.tabItemActive);

    // Remove active class from tabs__panels element
    deactivateTabPanels();

    // Show active tab panel
    /* const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`); */
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
    elTargetPanel.classList.add(modifiers.tabPanelActive);
  })

})

// elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
//   elAccordionItemToggler.addEventListener('click', function () {
//     closeAccordoionItems();

//     elAccordionItemToggler.closest('.accordion__item').classList.add(modifiers.accordionItemOpen);
//   })
// })

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener('click', function () {
    let parentItem = elAccordionItemToggler.closest('.accordion__item');

    // Agar allaqachon ochiq bo'lsa, yopamiz
    if (parentItem.classList.contains(modifiers.accordionItemOpen)) {
      parentItem.classList.remove(modifiers.accordionItemOpen);
    } else {
      closeAccordoionItems(); // Barcha ochiq bo‘limlarni yopish
      parentItem.classList.add(modifiers.accordionItemOpen); // Joriy bo‘limni ochish
    }
  });
});
