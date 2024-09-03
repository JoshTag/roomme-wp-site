document.querySelectorAll('.image-and-accordion__accordion-header').forEach(header => {
  header.addEventListener('click', function() {
    const accordionItem = this.parentElement;

    // Toggle the "active" class on the clicked accordion item
    accordionItem.classList.toggle('active');

    // Close other accordion items if you want only one to be open at a time
    document.querySelectorAll('.image-and-accordion__accordion-item').forEach(item => {
      if (item !== accordionItem) {
        item.classList.remove('active');
        item.querySelector('.image-and-accordion__accordion-content').style.maxHeight = null;
      }
    });

    // Adjust max-height to match content
    const content = accordionItem.querySelector('.image-and-accordion__accordion-content');
    if (accordionItem.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});
