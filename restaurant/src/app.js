
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
        a.href = `${text.toLowerCase()}`;
        a.dataset.tabId = text.toLowerCase();
        a.classList.add('tab');
        li.appendChild(a);
        ul.appendChild(li);


        a.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.dataset.tabId;
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });

    });

    return ul;
}

function grid() {
    const image1 = new Image();

    image1.src = 'burger.jpeg';
    image1.alt = 'burger image';
    image1.classList.add('img1');

    const image2 = new Image();
    image2.src = 'chiken.jpeg';
    image2.alt = 'burger image';
    image2.classList.add('img2');
    const element = document.getElementById('content');
    const grids = document.createElement('div');
    grids.classList.add('grid-container');

    const div1 = document.createElement('div');
    div1.innerText = 'Grid Item 1';
    div1.classList.add('item');
    div1.appendChild(image1);
    const div2 = document.createElement('div');
    div2.innerText = 'Grid Item keita';
    div2.classList.add('item');
    div2.appendChild(image2);

    const div3 = document.createElement('div');
    div3.innerText = 'BURGER KING POP EYES';
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
