
var event, ok;

var ans = {};
   
firstQuestion();
switch (event) {
    case 1: 
        // ans.first=1;
        secondQuestion();
        switch (event) {
            case 1:
                ans.second=1; 
                forthQuestion();

                break;
            case 2:
                ans.second=2; 
                forthQuestion();

                break;
            case -1: 
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: 
    ans.first=2;
        thirdQuestion();
        switch (event) {
            case 1: 
            ans.third=1;
                forthQuestion()

                break;
            case 2: 
            ans.third=2;
                forthQuestion();

                break;
            case -1: 
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: 
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }

	return true;
    
}

function firstQuestion(){
    do {
        ok = false;
        event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
       
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    ans.first=event;
}

function secondQuestion() {
    do {
        ok = false;
        event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.b0, event);
        }
    } while (!ok);
    ans.second=event;
}

function thirdQuestion(){
    do {
        ok = false;
        event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.c0, event);
        }
    } while (!ok);
    ans.third=event;
}

function forthQuestion(){
    do {
        ok = false;
        event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.d0, event);
        }
    } while (!ok);
    ans.forth=event;
}



console.log(ans);