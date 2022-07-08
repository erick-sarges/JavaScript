
// Nome do Aluno - nota 1 - nota 2 média -  Aprovado/ reprovado

 var nomes = ["Erick","Amanda","Diego","Kevin"];
 var notasA = [9.0, 8.0, 7.6, 5.0];
 var notasB = [ 9.5, 9.0, 5.0, 4.0];


 function media(n1,n2){

    return (n1 + n2) /2;
 };


function passou(nota){


    if( nota > 7){

        return "Aprovado";
    }
    
    else if (nota >= 6 ){

        return "Recuperaçaõ"

    }

    else{

        return "Reprovado";
    }
};


 for(index in  nomes){

    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1 , nota2);

   console.log(nomes[index] + " - " + nota1 + " - " + nota2 +  " = "+ m + " - " + passou(m));

 };

