$(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    loop:false,
    center:true,
    URLhashListener:true,
    lazyload: true,
    autoWidth:true,
  });

  owl.on('changed.owl.carousel', function(event) {
    const id = $(".owl-item")[event.item.index]?.firstChild?.getAttribute('data-hash');
    const currentActiveTab = $(".tab-pane.active.show");
    currentActiveTab.removeClass('active show');    
    $(`#${id}-tab`).addClass('active show');
  })
});


