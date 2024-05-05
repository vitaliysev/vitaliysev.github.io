let cur_index = 0;
    document.querySelectorAll('.information__gallery-photo').forEach((img, index) =>{
        img.onclick = () => {
          document.querySelector('.pop-up').style.display = 'flex';
          document.querySelector('.pop-up__image').src = img.getAttribute('src');
          cur_index = index;
          new_navigation();
        }
    });
    document.querySelector('.pop-up__close').onclick = () => {
        document.querySelector('.pop-up').style.display = 'none';
    }
    document.querySelector('.pop-up__next').onclick = () => {
        console.log(cur_index);
        cur_index++;
        document.querySelector('.pop-up__image').src = document.querySelectorAll('.information__gallery-photo')[cur_index].src;
        new_navigation();
    }
    document.querySelector('.pop-up__prev').onclick = () => {
        console.log(cur_index);
        cur_index--;
        document.querySelector('.pop-up__image').src = document.querySelectorAll('.information__gallery-photo')[cur_index].src;
        new_navigation();
    }
    function new_navigation() {
         if (cur_index == 0) {
             document.querySelector('.pop-up__prev').style.display = 'none';
         } else {
             document.querySelector('.pop-up__prev').style.display = '';
         }
         if (cur_index == document.querySelectorAll('.information__gallery-photo').length - 1) {
             document.querySelector('.pop-up__next').style.display = 'none';
         } else {
             document.querySelector('.pop-up__next').style.display = '';
         }
    }