function update_listener(tag) {
        tag.off('click')
        $(tag).on('click', function() {
            const textDecoration = $(this).css('text-decoration')
            
            if (textDecoration.includes('none')) {
                $(this).addClass('post-it-done')
                $(this).next('p').addClass('post-it-done')
            } else {
                $(this).removeClass('post-it-done')
                $(this).next('p').removeClass('post-it-done')
            }
        })
    }

$(document).ready(function(){
    const form = $('.task-container ul li form');
    let postIt_titles_tags = $('.post-it h1');

    update_listener(postIt_titles_tags);

    form.on('submit', function(e) {
        e.preventDefault();

        const nameTask = form.find('input').val();
        const descTask = form.find('textarea').val().trim();

        const newTask = $('<li class="post-it" style="display: none;" ></li>')
        $(`
            <h1> ${nameTask}</h1>
            <p> ${descTask}</p>
            <button type="reset">×</button>
        `).appendTo(newTask);
        
        $(newTask).appendTo('.task-container ul');

        $(newTask).fadeIn(200)

        postIt_titles_tags = $('.post-it h1')
        update_listener(postIt_titles_tags);
        
        form.find('input').val('');
        form.find('textarea').val('');
    });


    $('.task-container ul').on('click', 'button[type="reset"]', function () {
        $(this).closest('.post-it').fadeOut(200)
    });

    
});
