let popup = document.querySelector('.gallery');
let cur_index = 0;
    document.querySelectorAll('.information__gallery-photo').forEach((img, index) =>{
        img.onclick = () => {
          popup.style.display = 'flex';
          document.querySelector('.gallery__image').src = img.getAttribute('src');
          cur_index = index;
          new_navigation();
        }
    });

    popup.addEventListener('click', function(event) {
        if (!event.target.closest('.gallery__prev') && !event.target.closest('.gallery__next') && !event.target.closest('.gallery__image') && popup.style.display == 'flex') {
            popup.style.display = 'none';
        }
    });
    document.querySelector('.gallery__next').onclick = () => {
        console.log(cur_index);
        cur_index++;
        document.querySelector('.gallery__image').src = document.querySelectorAll('.information__gallery-photo')[cur_index].src;
        new_navigation();
    }
    document.querySelector('.gallery__prev').onclick = () => {
        console.log(cur_index);
        cur_index--;
        document.querySelector('.gallery__image').src = document.querySelectorAll('.information__gallery-photo')[cur_index].src;
        new_navigation();
    }
    function new_navigation() {
         if (cur_index == 0) {
             document.querySelector('.gallery__prev').style.display = 'none';
         } else {
             document.querySelector('.gallery__prev').style.display = '';
         }
         if (cur_index == document.querySelectorAll('.information__gallery-photo').length - 1) {
             document.querySelector('.gallery__next').style.display = 'none';
         } else {
             document.querySelector('.gallery__next').style.display = '';
         }
    }
