
  const open = document.querySelector('.b1');
  const open2 = document.querySelector('.b2');
  const open3 = document.querySelector('.b3');
  const open4 = document.querySelector('.b4');
  const open5 = document.querySelector('.b5');
  const close = document.querySelector('#closeMenu');
  const close2 = document.querySelector('#closeMenu2');
  const close3 = document.querySelector('#closeMenu3');
  const close4 = document.querySelector('#closeMenu4');
  const close5 = document.querySelector('#closeMenu5');
  const nav = document.querySelector('.overlay');
  const nav2 = document.querySelector('.overlay2');
  const nav3 = document.querySelector('.overlay3');
  const nav4 = document.querySelector('.overlay4');
  const nav5 = document.querySelector('.overlay5');
  
  
  open.addEventListener('click', function(){
    nav.style.height = '50vh';
  });

  open2.addEventListener('click', function(){
    nav2.style.height = '50vh';
  });

  open3.addEventListener('click', function(){
    nav3.style.height = '50vh';
  });

  open4.addEventListener('click', function(){
    nav4.style.height = '50vh';
  });

  open5.addEventListener('click', function(){
    nav5.style.height = '50vh';
  });
  
  close.addEventListener('click', function(){
    nav.style.height = '0';
  });

  close2.addEventListener('click', function(){
    nav2.style.height = '0';
  });

  close3.addEventListener('click', function(){
    nav3.style.height = '0';
  });

  close4.addEventListener('click', function(){
    nav4.style.height = '0';
  });

  close5.addEventListener('click', function(){
    nav5.style.height = '0';
  });

  


