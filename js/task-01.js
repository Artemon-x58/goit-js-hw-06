const categoriesEl = document.querySelector('#categories');
const itemsEl = categoriesEl.querySelectorAll('.item');
// Або так)
// const itemsElArray = categoriesEl.children;
// const itemsEl = [...itemsElArray]

console.log(`Number of categories: ${itemsEl.length}`);


itemsEl.forEach(el => {
    const titleEl = el.querySelector('h2').textContent;
    const itemEl = el.querySelectorAll('li').length;
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${itemEl}`);
});

