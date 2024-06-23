const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=1';

function getCatImages() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayCatImages(data);
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
        });
}

function displayCatImages(images) {
    const catImagesContainer = document.getElementById('catImages');
    images.forEach(imageData => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4', 'text-center');

        const img = document.createElement('img');
        img.src = imageData.url;
        img.classList.add('cat-image');

        colDiv.appendChild(img);
        catImagesContainer.appendChild(colDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getCatImages();

    document.getElementById('loadMore').addEventListener('click', () => {
        getCatImages();
    });
});

// function postCatImage(data) {
//     fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Image posted successfully:', data);
//     })
//     .catch(error => {
//         console.error('There was a problem posting the data:', error);
//     });
// }

// function updateCatImage(id, data) {
//     fetch(`${apiUrl}/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Image updated successfully:', data);
//     })
//     .catch(error => {
//         console.error('There was a problem updating the data:', error);
//     });
// }
