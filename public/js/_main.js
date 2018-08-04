$(function(){
  $('.caret').on('mouseover', function(){
    $('.category').slideDown();
    $('#svg-one').show();
    $(this).on('mouseout',function(){
      $('.category').hide();
      $('#svg-one').hide();
    });
  });

  $('#svg-one').on('mouseover', function(){
    $(this).show();
    $('.category').show();
    $(this).on('mouseout', function(){
      $(this).hide();
    });
  });

  $('.category').on('mouseover', function(){
    $(this).show();
    $('#svg-one').show();

    $(this).on('mouseout', function(){
      $('.sub-category').hide();
      $(this).hide();
      $('#svg-one').hide();
    });

    $(this).find('li').on('mouseover', function(){
      $('.sub-category').show();
    });

    //display subcategories
    $(this).find('li').eq(0).on('mouseover', function(){
      $('.jewelery,.enter,.home,.clothing,.beauty,.accessories').hide();
      $('.electronics').show();
    });

    $(this).find('li').eq(1).on('mouseover', function(){
      $('.electronics,.enter,.home,.clothing,.beauty,.jewelery').hide();
      $('.accessories').show();
    });

    $(this).find('li').eq(2).on('mouseover', function(){
      $('.electronics,.enter,.home,.clothing,.jewelery,.accessories').hide();
      $('.beauty').show();
    });

    $(this).find('li').eq(3).on('mouseover', function(){
      $('.electronics,.enter,.home,.jewelery,.beauty,.accessories').hide();
      $('.clothing').show();
    });

    $(this).find('li').eq(4).on('mouseover', function(){
      $('.electronics,.enter,.jewelery,.clothing,.beauty,.accessories').hide();
      $('.home').show();
    });

    $(this).find('li').eq(5).on('mouseover', function(){
      $('.electronics,.jewelery,.home,.clothing,.beauty,.accessories').hide();
      $('.enter').show();
    });

    $(this).find('li').eq(6).on('mouseover', function(){
      $('.electronics,.enter,.home,.clothing,.beauty,.accessories').hide();
      $('.jewelery').show();
    });
  });


  $('.sub-category').on('mouseover', function(){
    $('.category').show();
    $(this).show();
    $('#svg-one').show();

    $(this).on('mouseout', function(){
      $('.category').hide();
      $(this).hide();
      $('#svg-one').hide();
    });
  });

  //Automatic slider
  var slideIndex = 0;
	carousel();

	function carousel() {
	    var x = $(".sec");
	    for (var i = 0; i < x.length; i++) {
	      x.eq(i).css("display","none");
	    }
	    slideIndex++;
	    if (slideIndex > x.length) {slideIndex = 1}
	    x.eq(slideIndex-1).css("display","block");
	    setTimeout(carousel, 15999);
	}

  var slideIndexOne = 0;
  carouselOne();

  function carouselOne() {
      var y = $('.sec-img');
      for (var i = 0; i < y.length; i++) {
        y.eq(i).css("display","none");
      }
      slideIndexOne++;
      if (slideIndexOne > y.length) {slideIndexOne = 1}
      y.eq(slideIndexOne-1).css("display","block").fadeOut(5000);
      setTimeout(carouselOne, 4000);
  }

  //trolley
  $('img[alt="trolley"]').on('mouseover', function(){
    $('.trolley').slideDown(300);
    $('.user').hide();
  });

  $('.trolley').on('mouseover', function(){
    $(this).show();
    $(this).on('mouseout', function(){
      $(this).hide();
    });
  });

  //Login
  $('#login').on('mouseover', function(){
    $('.login').show();
    $('.login').on('mouseover', function(){
      $('.login').show();
      $(this).on('mouseout', function(){
        $(this).hide();
      });
    });
    $(this).on('mouseout', function(){
      $('.login').hide();
    });
  });

  //Signup
  $('#signup').on('mouseover', function(){
    $('.signup').show();
    $('.signup').on('mouseover', function(){
      $('.signup').show();
      $(this).on('mouseout', function(){
        $(this).hide();
      });
    });
    $(this).on('mouseout', function(){
      $('.signup').hide();
    });
  });

  //User
  $('img[alt="user"]').on('mouseover', function(){
    $('.user').show();
    $('.trolley').hide();
    $('.user').on('mouseover', function(){
      $(this).show();
      $(this).on('mouseout', function(){
        $(this).hide();
      });
    });
  });

  //Admin Panel js
  /*$('#elec-sub,#acc-sub,#beauty-sub,#c-gender,#cl-sub,#home-sub,#general,#kitchen,#living,#enter,#games,#movies,#ent-other,#jewelery').hide();*/

  $('#category').on('click', function(){
    if ($(this).val()==="Electronics") {
      $('#elec-sub').css("display","block");
      $('#acc-sub,#beauty-sub,#c-gender,#cl-sub,#home-sub,#general,#kitchen,#living,#enter,#games,#movies,#ent-other,#jewelery').hide();
    }else if ($(this).val()==="Accessories") {
      $('#acc-sub').css("display","block");
      $('#elec-sub,#beauty-sub,#c-gender,#cl-sub,#home-sub,#general,#kitchen,#living,#enter,#games,#movies,#ent-other,#jewelery').hide();
    }else if ($(this).val()==="Beauty") {
      $('#beauty-sub').css("display","block");
      $('#elec-sub,#acc-sub,#c-gender,#cl-sub,#home-sub,#general,#kitchen,#living,#enter,#games,#movies,#ent-other,#jewelery').hide();
    }else if ($(this).val()==="Clothing") {
      $('#c-gender,#cl-sub').css("display","block");
      $('#elec-sub,#acc-sub,#beauty-sub,#home-sub,#general,#kitchen,#living,#enter,#games,#movies,#ent-other,#jewelery').hide();
    }else if ($(this).val()==="Home") {
      $('#home-sub').css("display","block");
      $('#elec-sub,#acc-sub,#beauty-sub,#c-gender,#cl-sub,#enter,#games,#movies,#ent-other,#jewelery,#general,#kitchen,#living').hide();

      $('#home-sub').on('click', function(){
        if ($(this).val()==="General") {
          $('#general').show();
          $('#kitchen,#living').hide();
        }else if ($(this).val()==="Kitchen") {
          $('#general,#living').hide();
          $('#kitchen').show();
        }else if ($(this).val()==="Living") {
          $('#kitchen,#general').hide();
          $('#living').show();
        }
      });
    }else if ($(this).val()==="Entertainment") {
      $('#enter').css("display","block");
      $('#elec-sub,#acc-sub,#beauty-sub,#c-gender,#cl-sub,#home-sub,#general,#kitchen,#living,#jewelery,#games,#movies,#ent-other').hide();

      $('#enter').on('click', function(){
        if ($(this).val()==="Games") {
          $('#movies,#ent-other').hide();
          $('#games').show();
        }else if ($(this).val()==="Movies") {
          $('#games,#ent-other').hide();
          $('#movies').show();
        }else if ($(this).val()==="Other") {
          $('#games,#movies').hide();
          $('#ent-other').show();
        }
      });
    }else if ($(this).val()==="Jewelery") {
      $('#jewelery').css("display","block");
      $('#elec-sub,#acc-sub,#beauty-sub,#c-gender,#cl-sub,#home-sub,#general,#kitchen,#living,#enter,#games,#movies,#ent-other').hide();
    }else{
      $('#elec-sub,#acc-sub,#beauty-sub,#c-gender,#cl-sub,#home-sub,#general,#kitchen,#living,#enter,#games,#movies,#ent-other,#jewelery').hide();
    }
  });

  $('.edit-options').hide();

  $('.cat-products').on('mouseover', function(){
    $(this).find('div').eq(0).show();

    $(this).find('div').eq(0).find('a').eq(1).on('click',function(){
      $('.update-form').hide();
      $(this).parent('div').next().show();
    });

    $(this).on('mouseout', function(){
      $(this).find('div').eq(0).hide();
    });
  });
  //End of admin js
});
