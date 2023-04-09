const toggleSidebarOnMobile = () => {
  const sidebarBtn = document.getElementById('sidebarBtn')
  const sidebar = document.getElementById('sidebar')
  sidebarBtn.addEventListener('click', (e) => {
    sidebarBtn.classList.toggle('show')
    sidebar.classList.toggle('show')
  })
}

const loadProgress = () => {
  let count = document.getElementById('count')
  let counter = 0
  setInterval(() => {
    if (counter === 20) {
      clearInterval()
    } else {
      counter += 1
      count.innerHTML = counter + '%'
    }
  }, 30)
}

const collapseListItems = () => {
  const collapseItems = document.querySelectorAll('.sidebar__list_link.collapse')
  if(collapseItems) {
    collapseItems.forEach(collapseItem => {
      collapseItem.addEventListener('click', (e) => {
        e.preventDefault()
        const content = e.target.nextElementSibling
        if (e.target.classList.contains('collapsed')) {
          e.target.classList.remove('collapsed')
          content.style.maxHeight = null
        } else {
          e.target.classList.add('collapsed')
          content.style.maxHeight = content.scrollHeight + 'px'
        }
      })
    })
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  loadProgress()
  collapseListItems()
  toggleSidebarOnMobile()
});





