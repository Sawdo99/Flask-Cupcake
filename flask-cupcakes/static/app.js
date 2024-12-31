async function fetchCupcakes() {
    const response = await axios.get('/api/cupcakes');
    const cupcakes = response.data.cupcakes;
    for (let cupcake of cupcakes) {
        $('#cupcake-list').append(`<li>${cupcake.flavor} (${cupcake.size})</li>`);
    }
}

$('#cupcake-form').on('submit', async function (e) {
    e.preventDefault();
    const flavor = $('#flavor').val();
    const size = $('#size').val();
    const rating = $('#rating').val();
    const image = $('#image').val();

    const response = await axios.post('/api/cupcakes', {
        flavor,
        size,
        rating,
        image: image || undefined
    });

    const newCupcake = response.data.cupcake;
    $('#cupcake-list').append(`<li>${newCupcake.flavor} (${newCupcake.size})</li>`);
});

$(fetchCupcakes);
