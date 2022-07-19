$(document).ready(() => {
    $('.button--sticky').on('click', () => {
        $('.modal').show()
        // $('.button--sticky').hide()
    })

    $('.modal--back').on('click', () => {
        $('.modal').hide()
        // $('.button--sticky').show()
    })
})