document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayMenu(data))
        .catch(error => console.error('Error fetching data:', error));
});

function displayMenu(menuData) {
    const menuContainer = document.getElementById('menu-container');

    menuData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h2');
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        if (item.imageLink) {
            const itemImage = document.createElement('img');
            itemImage.classList.add('menu-image');
            itemImage.src = item.imageLink;
            menuItem.appendChild(itemImage);
        }

        menuContainer.appendChild(menuItem);
    });
}
