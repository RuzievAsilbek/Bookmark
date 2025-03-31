const elsTabItem = document.querySelectorAll('.tabs__item')
const elsTabPanel = document.querySelectorAll('.tabpanels__item')
const elsTabLink = document.querySelectorAll('.js-tabs-link')

const elsAccordionItem = document.querySelectorAll('.accordion__item')
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler')


function deactivateTabItems () {

  elsTabItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs__item--active');
  })
}

function deactivateTabPanels () {

  elsTabPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tabpanels__item--active');
  })
}

function closeAccordoionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove('accordion__item--open')
  })
}


elsTabLink.forEach(function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    // Prevent page move
    evt.preventDefault();

    // Remove active class form tabs__item element
    deactivateTabItems ();

    // Add active class to current tabs__item
    elTabLink.parentElement.classList.add('tabs__item--active');

    // Remove active class from tabs__panels element
    deactivateTabPanels();

    // Show active tab panel
    /* const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`); */
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
    elTargetPanel.classList.add('tabpanels__item--active');
  })

})

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener('click', function () {
    closeAccordoionItems();

    elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
  })
})