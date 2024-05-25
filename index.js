const btn_1 = document.getElementById('btn_post1');
const btn_2 = document.getElementById('btn_post2');
const btn_3 = document.getElementById('btn_post3');

const btn_close_inside = document.getElementById('btn_close');

const btn_footer = document.getElementById('btn_callback');
const btn_close_window = document.getElementById('send_client');

 btn_1.addEventListener('click', function(){
     const dialog = document.getElementById('dialog_auth');
     if (dialog.style.display === 'none') {
         dialog.style.display = 'flex';
     }else{
         dialog.style.display = 'none';
     }  
 })

 btn_2.addEventListener('click', function(){
    const dialog = document.getElementById('dialog_auth');
    if (dialog.style.display === 'none') {
        dialog.style.display = 'flex';
    }else{
        dialog.style.display = 'none';
    }  
})

btn_3.addEventListener('click', function(){
    const dialog = document.getElementById('dialog_auth');
    if (dialog.style.display === 'none') {
        dialog.style.display = 'flex';
    }else{
        dialog.style.display = 'none';
    }  
})
btn_footer.addEventListener('click', function(){
    const dialog = document.getElementById('dialog_auth');
    if (dialog.style.display === 'none') {
        dialog.style.display = 'flex';
    }else{
        dialog.style.display = 'none';
    }
})

btn_close_window.addEventListener('click', function(){
    const dialog = document.getElementById('dialog_auth');
    dialog.style.display = 'none';
})
btn_close_inside.addEventListener('click', function(){
    const dialog = document.getElementById('dialog_auth');
    dialog.style.display = 'none';
})