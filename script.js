function changeImage() {
    const qualitySelect = document.getElementById('qualitySelect');
    const qualityImage = document.getElementById('qualityImage');
    const selectedQuality = qualitySelect.value;

    // Mapping between quality and image file name
    const qualityImageMap = {
        '144p': 'images/144p.png',
        '240p': 'images/240p.png',
        '480p': 'images/480p.png',
        '720p': 'images/720p.png',
        '1080p': ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png']
    };

    // If 1080p is selected, cycle through images
    if (selectedQuality === '1080p') {
        let index = 0;
        const images = qualityImageMap[selectedQuality];

        function showNextImage() {
            if (index < images.length) {
                qualityImage.src = images[index];
                index++;
                setTimeout(showNextImage, 1000); // Change image every 1 second
            }
        }

        showNextImage();
    } else {
        // Change image source based on selected quality
        qualityImage.src = qualityImageMap[selectedQuality];
    }
}
