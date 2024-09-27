const resizeImage = (file, maxWidth, maxHeight, newExtension, quality = 1) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const render = new FileReader();

        render.onload = (e) => {
            img.src = e.target.result;
        };

        img.onload = () => {
            let width = img.width;
            let heigth = img.height;

            if (width > maxHeight || heigth > maxHeight) {
                if (width > heigth) {
                    heigth = Math.floor((heigth * maxWidth) / width);
                    width = maxWidth
                } else {
                    width = Math.floor((width * maxHeight) / heigth)
                    heigth = maxHeight
                }
            }

            const canvas = document.createElement('canvas');
            canvas.width = width
            canvas.height = heigth;
            const ctx = canvas.getContext('2d');

            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high'

            ctx.drawImage(img, 0, 0, width, heigth);

            canvas.toBlob((blob) => {
                const newFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + `.${newExtension}`, {
                    type: `image/${newExtension}`,
                    lastModified: file.lastModified
                });
                resolve(newFile)
            }, `image/${newExtension}`, quality)
        }

        render.onerror = reject;

        render.readAsDataURL(file)
    })
}

export { resizeImage }