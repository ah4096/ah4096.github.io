// Thank dikiogres
$(document).ready(function () {

    // Fetching data from the API using AJAX
    $.ajax({
        url: 'https://api-berita-indonesia.vercel.app/antara/politik/',
        method: 'GET',
        success: function (data) {
            displayContent(data);
        },
        error: function (error) {
            console.error("Error ", error);
        }
    });

    function displayContent(news) {
        let output = '';

        $.each(news, function (key, posts) {
            output += `
                <div class="col-md-4 mb-3 d-flex">
                    <img src="${post.thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body shadow d-flex flex-column">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.Description}</p>
                        <a href="${post.link}" class="btn">Lihat Selengkapnya</a>
                    </div>
                </div>
            `;
        });

        $('#newsList').html(output);
    }
});
