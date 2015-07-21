jQuery(function($) {
  $(document).on('page:fetch',   function() { NProgress.start(); $('.site-heading, #content').addClass('animated fadeOutUp'); });
  $(document).on('page:receive', function() { NProgress.set(0.5); });
  $(document).on('page:change',  function() { NProgress.done(); $('.site-heading, #content').addClass('animated fadeInDown');  });
  $(document).on('page:restore', function() { NProgress.remove(); });
  
  $('[data-toggle="tooltip"]').tooltip();
});

NProgress.configure({
  showSpinner: false,
  ease: 'ease',
  speed: 1500
});



