
function addImage() {
    const image = new Image();

    image.src = 'rest.jpg';
    image.alt = 'Description of the image';
    const element = document.getElementById('content');
    element.appendChild(image);
}

function createList() {
    const ul = document.createElement('ul');

    // Add list items (li) to the unordered list
    const items = ['Home', 'Menu', 'Contact'];

    items.forEach((text) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText = text;
        a.href = '#';
        li.appendChild(a);
        ul.appendChild(li);

    });

    return ul;
}

function grid() {
    const element = document.getElementById('content');
    const grids = document.createElement('div');
    grids.classList.add('grid-container');

    const div1 = document.createElement('div');
    div1.innerText = 'Grid Item 1';
    div1.classList.add('item');

    const div2 = document.createElement('div');
    div2.innerText = 'Grid Item 2';
    div2.classList.add('item');

    const div3 = document.createElement('div');
    div3.innerText = 'Grid Item 3';
    div3.classList.add('item3');

    grids.appendChild(div1);
    grids.appendChild(div2);
    grids.appendChild(div3);

    element.appendChild(grids);
}

function component() {
    const element = document.getElementById('content');

    // Create a div with a custom class
    const div = document.createElement('div');
    div.classList.add('custom-div');

    // Create and add ul element to the div
    const ul = createList();
    div.appendChild(ul);

    // Add the div to the content element
    element.appendChild(div);

    grid();

    // Add the image
    addImage();
    return element;
}



export { component }
