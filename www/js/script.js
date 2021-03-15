let tptLogin;
let tptMain;
let tptNavbar;

function showNavbar() {
  $('#navbar').removeClass('hide')
  $('#navbar').html(tptNavbar())
  $('#mySidenav').css('width', '100%')
}


function removeSpaceLeftRight(opt) {
  if (opt == 'remove') {
    $('#spaceLeft').removeClass('hide')
    $('#spaceRight').removeClass('hide')
  } else if (opt == 'add') {
    $('#spaceLeft').addClass('hide')
    $('#spaceRight').addClass('hide')
  }
}

function removeDFlex(id, col, sm, md, lg, xl) {
  $(`#${id}`).removeClass('d-flex')
}

function altCols(id) {
  $(`#${id}`).attr('class', '')
}


function getLogin(user, pass) {
  if (user == 'leandro@gmail.com' && pass == '123456') {
    // alert('Logado com sucesso!')
    removeSpaceLeftRight('add')
    $('#content').html(tptMain())
    removeDFlex('content')
    altCols('content')
    // $('#contentContainer').css('background-color', 'white')
  } else {
    // alert('Usuario e senha incorretos!')
  }
}





$.get('pages/login.html', function (r) {
  tptLogin = _.template(r);
}).done(() => {
  $('#contentLogin').removeClass('hide')
  $('#contentLogin').html(tptLogin())
})

$.get('pages/main.html', function (r) {
  tptMain = _.template(r);
})
$.get('pages/navbar.html', function (r) {
  tptNavbar = _.template(r);
})




















