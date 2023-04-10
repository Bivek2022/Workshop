// Smooth scrolling
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top - 100,
      },
      500,
      'linear'
    );
  });
  
  // Contact form submission
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    $('.contact-form-success').hide();
    $('.contact-form-error').hide();
    if (name == '' || email == '' || message == '') {
      $('.contact-form-error').html('Please fill in all fields.').show();
      return false;
    }
    $.ajax({
      type: 'POST',
      url: 'contact-form.php',
      data: $(this).serialize(),
      success: function(response) {
        if (response == 'success') {
          $('.contact-form-success').html('Your message has been sent.').show();
          $('#name').val('');
          $('#email').val('');
          $('#message').val('');
        } else {
          $('.contact-form-error').html('An error occurred. Please try again.').show();
        }
      },
      error: function() {
        $('.contact-form-error').html('An error occurred. Please try again.').show();
      },
    });
  });
  
  // Google Maps
  function initMap() {
    var location = { lat: 40.7128, lng: -74.006 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: location,
      disableDefaultUI: true,
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 20 }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ffffff' }, { lightness: 17 }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 18 }],
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 16 }],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 21 }],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#dedede' }, { lightness: 21 }],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{ saturation:36 }, { color: '#333333' }, { lightness: 40 }],
        },
        {
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
        },
        {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#f2f2f2' }, { lightness: 19 }],
        },
        {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [{ color: '#fefefe' }, { lightness: 20 }],
        },
        {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }],
        },
        ],
        });
        
        var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Click to see address',
        });
        
        var infowindow = new google.maps.InfoWindow({
        content: '<strong>My Address</strong><br>1234 Street<br>City, State 12345',
        });
        
        marker.addListener('click', function() {
        infowindow.open(map, marker);
        });
        }
        
        $(document).ready(function() {
        // Smooth scrolling
        $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate(
        {
        scrollTop: $($(this).attr('href')).offset().top - 100,
        },
        500,
        'linear'
        );
        });
        
        // Contact form submission
        $('#contact-form').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        $('.contact-form-success').hide();
        $('.contact-form-error').hide();
        if (name == '' || email == '' || message == '') {
        $('.contact-form-error').html('Please fill in all fields.').show();
        return false;
        }
        $.ajax({
        type: 'POST',
        url: 'contact-form.php',
        data: $(this).serialize(),
        success: function(response) {
        if (response == 'success') {
        $('.contact-form-success').html('Your message has been sent.').show();
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
        } else {
        $('.contact-form-error').html('An error occurred. Please try again.').show();
        }
        },
        error: function() {
        $('.contact-form-error').html('An error occurred. Please try again.').show();
        },
        });
        });
        
        // Google Maps
        initMap();
        });
  