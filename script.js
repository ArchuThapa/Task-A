document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.getElementById('scrollContainer');

  function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');

    const profilePic = document.createElement('div');
    profilePic.classList.add('profile-pic');

    const content = document.createElement('div');
    content.classList.add('content');

    const title = document.createElement('div');
    title.classList.add('title');

    const line1 = document.createElement('div');
    line1.classList.add('line');

    const line2 = document.createElement('div');
    line2.classList.add('line', 'short');

    content.append(title, line1, line2);
    card.append(profilePic, content);

    return card;
  }

  for (let i = 0; i < 10; i++) {
    scrollContainer.appendChild(createCard());
  }

  const cards = document.querySelectorAll('.card');

  function updateFocusedCard() {
    const containerCenter = scrollContainer.scrollTop + scrollContainer.clientHeight / 2;

    cards.forEach((card) => {
      const cardCenter = card.offsetTop + card.offsetHeight / 2;
      card.classList.toggle('focused', Math.abs(containerCenter - cardCenter) < card.offsetHeight / 2);
    });
  }

  updateFocusedCard();
  scrollContainer.addEventListener('scroll', updateFocusedCard);

  let isDragging = false;
  let startY, startScrollTop;

  function handleDragStart(e) {
    isDragging = true;
    startY = e.pageY;
    startScrollTop = scrollContainer.scrollTop;
    scrollContainer.style.cursor = 'grabbing';
  }

  function handleDragMove(e) {
    if (!isDragging) return;
    const diff = e.pageY - startY;
    scrollContainer.scrollTop = startScrollTop - diff;
  }

  function handleDragEnd() {
    isDragging = false;
    scrollContainer.style.cursor = 'grab';
    updateFocusedCard();
  }

  cards.forEach((card) => card.addEventListener('mousedown', handleDragStart));
  window.addEventListener('mousemove', handleDragMove);
  window.addEventListener('mouseup', handleDragEnd);
});
