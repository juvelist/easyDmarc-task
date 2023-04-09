// open search list
const toggleSelectInput = () => {
  const selectBtn = document.getElementById('selectBtn')
  if(selectBtn) {
    selectBtn.addEventListener('click', (e) => {
      e.target.classList.toggle('collapsed')
    })
  }
}

// sidebar toggle on mobile view
const toggleSidebarOnMobile = () => {
  const sidebarBtn = document.getElementById('sidebarBtn')
  const sidebar = document.getElementById('sidebar')
  if(sidebarBtn && sidebar) {
    sidebarBtn.addEventListener('click', (e) => {
      sidebarBtn.classList.toggle('show')
      sidebar.classList.toggle('show')
    })
  }
}

// progress load animation
const loadProgress = () => {
  let count = document.getElementById('count')
  let counter = 0
  if(count) {
    setInterval(() => {
      if (counter === 20) {
        clearInterval()
      } else {
        counter += 1
        count.innerHTML = counter + '%'
      }
    }, 30)
  }
}

// collapse sidebar item list
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

// appear animation
animationStart = () => {
  var features = document.querySelectorAll('.appear-item')
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry){
      if(entry.intersectionRatio > 0) {
        entry.target.classList.add('appear')
      }
    })
  })
  features.forEach(function(feature) {
    observer.observe(feature)
  })
}

window.addEventListener("DOMContentLoaded", (event) => {
  loadProgress()
  collapseListItems()
  toggleSidebarOnMobile()
  toggleSelectInput()
  window.requestAnimationFrame(animationStart)
});

