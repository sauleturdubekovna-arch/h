/*let input = document.getElementById('photo_name')
const api = 'TushV4DbSp3IWEiOMrlULn9nffv9-azaAU4G9d4SkzQ'
const get = async () =>{
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${photo_name.value}&client_id=${api}`)
    const data = await res.json()
    console.log(data)
}*/
const get1 = document.getElementById('photo_name');
const api = 'TushV4DbSp3IWEiOMrlULn9nffv9-azaAU4G9d4SkzQ'

const get = async () => {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${get1.value}&client_id=${api}`);
    const data = await res.json();
    renderphoto(data.results);
};
const renderphoto = (photos) => {
    photos.forEach(element => {
        let img = document.createElement('img');
        img.src = element.urls.small;
        document.body.append(img);
    });
};