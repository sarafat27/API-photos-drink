const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}
loadPhotos();
const displayPhotos = (photos) => {
    const container = document.getElementById('container');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadDetail(${photo.id})" class="card">
                <img src="${photo.thumbnailUrl}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                </div>
            </div>
        `;
        container.appendChild(div)
    })
}
const loadDetail = id => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data))
}
const displayDetail = photo => {
    const showDetail = document.getElementById('show-detail');
    const h1 = document.createElement('h1');
    h1.innerText = `${photo.title}`;
    showDetail.appendChild(h1)
}