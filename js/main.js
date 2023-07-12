let fecha = new Date();

function businessHours(hourNumber){
    if(hourNumber>=9 && hourNumber<=18){
        return true;
    }else{
        return false;
    }
}

console.log(businessHours());

function getDayNumber(janFirstDayNumber, yearDayNumber){
    let dayOfTheWeek = (janFirstDayNumber+(yearDayNumber-1))&7;
    

    if(dayOfTheWeek==0){
        return false;
    }else if(dayOfTheWeek==1){
        return true;
    }else if(dayOfTheWeek==2){
        return true;
    }else if(dayOfTheWeek==3){
        return true;
    }else if(dayOfTheWeek==4){
        return true;
    }else if(dayOfTheWeek==5){
        return true;
    }else if(dayOfTheWeek==6){
        return false;
    }
}

function laboralDay(a, b){
    let comp =getDayNumber(0, a);
    
    if(comp && businessHours(b)){
        return true;
    }else{
       return false;
    }

}

function chicharronera(a,b,c){
    

    if((b**2-4*a*c)<0){
        return "la raiz cuadrada es negativa";
    }else{
        let resultado1 = ((-1*b)+Math.sqrt((b**2)-(4*a*c)))/(2*a);
        let resultado2 = ((-1*b)-Math.sqrt((b**2)-(4*a*c)))/(2*a);

        return "x1: "+resultado1+" x2: "+resultado2;
    }
}