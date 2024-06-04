const posts2 = document.getElementById('posts2')
const spinner = document.getElementById('spinner-box')

$.ajax({
    type: 'GET',
    url: '/posts-json/',
    success: function(response){
        console.log(response.data)
        const data = JSON.parse(response.data)
        console.log(data)
        setTimeout(() => {
            data.forEach(element => {
                posts2.innerHTML += `${element.fields.body}<br>`
            })
            spinner.classList.add('not-visible')
        }, 2000)

        
    },
    error: function(error){
        console.log(error)
    }
})