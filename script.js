document.getElementById('calculate').addEventListener('click',function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;    //Porcentagem por isso divide por 100
    const time = document.getElementById('time').value;

    //Formula juros compostos
    const total = value * (1+fee)**time;

    document.getElementById('total').innerHTML = ("R$ "+ total.toFixed(2).replace('.',','));  

    //"2" para aparecer apenas duas casas depois da vírgula, e "replace" de ponto para vírgula. 

})