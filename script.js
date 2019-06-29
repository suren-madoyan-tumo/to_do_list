$(document).ready(function (){
	$('#list-items').html(localStorage.getItem('listItems'));
    $('.add-items').submit(function(event){
        event.preventDefault();
        var item=$('#todo-list-item').val();
        if (item){
            var itemsNumber = $('#list-items .row').length+1;
            $('#list-items').append('<div class="row">' +
                                        '<div class="col alert alert-primary">' +
                                            '<div class="custom-control custom-switch">' +
                                                '<input type="checkbox" class="custom-control-input" id="customSwitch'+itemsNumber+'">' +
                                                '<label class="custom-control-label" for="customSwitch'+itemsNumber+'">'+item+'</label>' +
                                                '<button type="button" class="close" aria-label="Close">' +
                                                    '<span aria-hidden="true">&times;</span>' +
                                                '</button>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>');

            localStorage.setItem('listItems',$('#list-items').html());
            localStorage.setItem('itemsNumber',parseInt($('#list-items .row').length));
            $('#todo-list-item').val('');
        }
    });
    $(document).on('click', '.close', function () {
        $(this).closest('.row').remove();
        localStorage.setItem('listItems',$('#list-items').html());
        localStorage.setItem('itemsNumber',parseInt($('#list-items .row').length));
    });
    $(document).on('change','.custom-control-input', function () {
        $(this).closest('.alert').toggleClass('alert-light').toggleClass('alert-primary');
        if($(this).attr('checked')){
            $(this).removeAttr('checked');
            $(this).next('label').css('text-decoration','none');
        } else {
            $(this).attr('checked','checked');
            $(this).next('label').css('text-decoration','line-through');
        }
        localStorage.setItem('listItems',$('#list-items').html());
    });
});