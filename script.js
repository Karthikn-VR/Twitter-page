document.querySelectorAll('.fa-thumbs-up').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.style.color = 'rgb(36, 163, 217)';
    });
});

document.querySelectorAll('.fa-thumbs-down').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.style.color = 'black';
    });
});

document.querySelectorAll('.follow-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = 'Following';
    });
});

function showSection(sectionId, content) {
    const sections = ['post-container', 'pic-section', 'following-section', 'followers-section', 'fav-section'];
    sections.forEach(id => {
        const element = document.getElementById(id) || document.querySelector(`.${id}`);
        if (element) element.style.display = 'none';
    });

    let section = document.getElementById(sectionId);
    if (!section) {
        section = document.createElement('div');
        section.id = sectionId;
        section.innerHTML = content;
        document.querySelector('.posts').appendChild(section);
    } else {
        section.style.display = 'block';
    }
}

function Posts() {
    document.querySelector('.post-container').style.display = 'block';
    showSection('post-container', '');
}

function Photos() {
    showSection('pic-section', `
        <div class="gallery">
            <img src="./imgs/cap.png" alt="Captain America">
            <img src="./imgs/iron.png" alt="Iron Man">
            <img src="./imgs/thor.png" alt="Thor">
            <img src="./imgs/hulk.png" alt="Hulk">
            <img src="./imgs/loki.png" alt="Loki">
        </div>
    `);
}

function Following() {
    showSection('following-section', '<p>Following</p>');
}

function Followers() {
    showSection('followers-section', '<p>List of Followers...</p>');
}

function Favorites() {
    showSection('fav-section', '<p>Favorite People...</p>');
}