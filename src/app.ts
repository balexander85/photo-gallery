const container: HTMLElement | any = document.getElementById("app");


const showPhoto = (): void => {
    let output: string = `
        <div class="card">
            <h3>Photo</h3>
            <div>Hi from app.ts!</div>
        </div>
    `
    container.innerHTML += output
}

const showGallery = (): void => {
    for (let i = 1; i <= 24; i++) {
        showPhoto()
    }
}

showGallery()
