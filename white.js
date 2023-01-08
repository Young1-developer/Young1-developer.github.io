const second_interval = 5000;

let text = document.getElementById('text');
let main_text = 0;
let texts = ['you are welcome ,Nice to meet you!.im usama','everyone has his own route',
'in the world everything is qoute',
'people change some time'    
];

function textchange(){
    text.innerHTML = texts[main_text];
    main_text ++;

    if(main_text >= texts.length){
        main_text = 0;
    }
}

setInterval(textchange,second_interval);