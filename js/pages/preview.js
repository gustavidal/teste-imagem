import { renderizarPagina } from "../main.js"

export function criarPreview () {
    const container = document.createElement('form')



    const previewContainer = document.createElement('div')
    previewContainer.classList.add('preview-container')

    const previewInput = document.createElement('input')
    previewInput.id = "preview-input"
    previewInput.classList.add('preview-input')
    previewInput.type = "file"
    previewInput.accept = "image/*"

    const previewLabel = document.createElement('label')
    previewLabel.classList.add('preview-label')
    previewLabel.htmlFor = "preview-input"

    const previewImage = document.createElement('img')
    previewImage.id = "preview-image"
    previewImage.classList.add('preview-image')
    previewImage.src = "./img/upload-icon.svg"

    previewContainer.append(previewInput, previewLabel, previewImage)



    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('button-container')

    const uploadButton = document.createElement('button')
    uploadButton.classList.add('button')
    uploadButton.type = "button"
    uploadButton.id = "upload-button"
    uploadButton.textContent = "Salvar"
    
    const cancelButton = document.createElement('button')
    cancelButton.classList.add('button')
    cancelButton.type = "button"
    cancelButton.textContent = "Cancelar"
    cancelButton.onclick = () => renderizarPagina('login')

    buttonContainer.append(uploadButton, cancelButton)



    container.append(previewContainer, buttonContainer)

    return container
}