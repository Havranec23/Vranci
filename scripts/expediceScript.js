function showContent(contentId, element) {
  // --- 1. ZOBRAZENÍ OBSAHU ---
  const contents = document.querySelectorAll('section > div');
  contents.forEach(content => {
    content.style.display = 'none';
  });
  
  const activeContent = document.getElementById(contentId);
  if (activeContent) {
    activeContent.style.display = 'block';
  }

  // --- 2. ZBARVENÍ TLAČÍTKA ---
  // Najdeme všechna <li> uvnitř aside menu
  const menuItems = document.querySelectorAll('aside ul li');
  
  // Všem položkám odebereme třídu "active"
  menuItems.forEach(item => {
    item.classList.remove('active');
  });
  
  // Kliknuté položce přidáme třídu "active"
  if (element) {
    element.classList.add('active');
  }
}