
  const open = document.querySelector('.b1');
  const open2 = document.querySelector('.b2');
  const close = document.querySelector('#closeMenu');
  const close2 = document.querySelector('#closeMenu2');
  const nav = document.querySelector('.overlay');
  const nav2 = document.querySelector('.overlay2');
  
  
  open.addEventListener('click', function(){
    nav.style.height = '50vh';
  });

  open2.addEventListener('click', function(){
    nav2.style.height = '50vh';
  });
  
  close.addEventListener('click', function(){
    nav.style.height = '0';
  });

  close2.addEventListener('click', function(){
    nav2.style.height = '0';
  });


