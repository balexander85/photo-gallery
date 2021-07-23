const container: HTMLElement | any = document.getElementById("app");

const showGallery = (): void => {
    let output: string = `
        <div>Gallery</div>
        <div>Hi from app.ts!</div>
    `
    container.innerHTML += output
}

showGallery()
