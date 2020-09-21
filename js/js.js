function openNav() {
  document.getElementById("mySidenav").style.width = "150px";
  document.getElementById("openNav").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  setTimeout(function() { document.getElementById("openNav").style.display = "inline";}, 300);
}

function fixSkillsWidth() {
  var skillbarWrap = $('#skillbar-wrap');
  if ($window.width() >= 977 && $window.width() < 1200) {
      skillbarWrap.appendTo('#about .container .row');
      skillbarWrap.addClass('col-12');
  } else {
      skillbarWrap.removeClass('col-12');
      skillbarWrap.appendTo('#aboutRight');
  }
}

var filtersGroup = $('#filters-group', '#portfolio');
        filtersGroup.on('click', function (e) {
            if ($(e.target).is('a')) {
                var $this = $(e.target);
                var filterValue = $this.attr('data-filter');
                // use filterFn if matches value
                portfolioItems.isotope({filter: filterValue});
            }
            return false;
        });