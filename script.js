function handleDragStart(event) {
    const target = event.target;
    target.setAttribute('data-dragged-item', 'true');
    target.style.opacity = 0.5;
}
function handleDragEnd(e) {
    e.preventDefault();
    e.target.style.opacity = 1;
}
function handleDrop(e) {
  const target = e.target;
    const draggedItem = document.querySelector('li[data-dragged-item]');
    target.parentNode.insertBefore(draggedItem, target);
    draggedItem.removeAttribute('data-dragged-item');
}
function handleDragOver(e) {
    e.preventDefault();
}
const listItems = document.querySelectorAll('.draggable-list li');
listItems.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', e => e.preventDefault()); // Prevent default behavior
    item.addEventListener('drop', handleDrop);
    item.addEventListener('dragend', handleDragEnd);
});