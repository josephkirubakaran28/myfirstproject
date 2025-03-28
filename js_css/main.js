

/* Dark and light theme toggle */

let themeToggle = document.getElementById('theme-toggle');
let root = document.documentElement;

themeToggle.addEventListener("click", () => {
    root.style.setProperty('--bg-color', "#ffffff");
    root.style.setProperty('--primary-color', "#000000");
    root.style.setProperty('--box-gradient', "#ffffff");
    root.style.setProperty('--card-bg', "#ffffff");
    root.style.setProperty('--card-body-bg', "#ffffff");
  });

/* basic hide and show */
/*create dashboard section*/
$(".dashboard-name .btn-success").on('click', function() {
    let blkcheck = false;
    if(!blkcheck){
      $(".dashboard-name").addClass("hide-this");
      $(".dashboard-widget").removeClass("hide-this");
      blkcheck = true;
    }
  });

  $(".dashboard-widget .btn-outline-back").on('click', function() {
    let blkcheck = false;
    if(!blkcheck){
      $(".dashboard-widget").addClass("hide-this");
      $(".dashboard-name").removeClass("hide-this");
      blkcheck = true;
    }
  });
/* create dashboard section ends */

/*create dashboard section*/
$(".bank-list .btn-success").on('click', function() {
    let blkcheck = false;
    if(!blkcheck){
      $(".bank-list").addClass("hide-this");
      $(".bank-details").removeClass("hide-this");
      blkcheck = true;
    }
  });

  $(".bank-details .btn-outline-back").on('click', function() {
    let blkcheck = false;
    if(!blkcheck){
      $(".bank-details").addClass("hide-this");
      $(".bank-list").removeClass("hide-this");
      blkcheck = true;
    }
  });
/* create dashboard section ends */
/* Appointment section select doctor from list */

// document.querySelectorAll('.doc-list-item').forEach(litem => {
//     litem.addEventListener('click', () => {
//     document.querySelectorAll('.doc-list-item').forEach(litemin => {
//       litemin.classList.remove('active');
//     });
//      litem.classList.add('active');
//     });
//   });
/*select bank item list ends */

let disableBtn = document.querySelector('.bank-list .btn-success');

document.querySelectorAll('.bank-list-item').forEach(listitem => {
    listitem.addEventListener('click', ()=> {
        document.querySelectorAll('.bank-list-item').forEach(checkitem => {
            checkitem.classList.remove('active');
        });
        listitem.classList.add('active');
        disableBtn.disabled = false;
    });
    
});

document.querySelectorAll('.chevron').forEach(accord => {
  let blckcheck = false;
  accord.addEventListener('click', () => {
      const titlecount = accord.dataset.forListing;
      const contactive = document.querySelector(`.nav-submenu[data-listing="${titlecount}"]`);

      if(!blckcheck) {
          accord.classList.remove("collapsed");
          contactive.classList.add("show");
          blckcheck = true;
          } else {
            accord.classList.add("collapsed");
            contactive.classList.remove("show");
            blckcheck = false;
          }
  });
});