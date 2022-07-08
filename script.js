
// Nome do Aluno - nota 1 - nota 2 média -  Aprovado/ reprovado

 var nomes = ["Erick","Amanda","Diego","Kevin"];
 var notasA = [9.0, 8.0, 7.6, 7.0];
 var notasB = [ 9.5, 9.0, 8.5, 8.0];

 function media(n1,n2){

    return (n1 + n2) /2;
 };
function passou(media){

    var resultado = "Reprovado";

    if( media > 7){

        return "Aprovado";
    }
    else{

        return "Reprovado";
    }
};


 for(index in  nomes){

    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1 , nota2);

   console.log(nomes[index] + " - " + nota1 + " - " + nota2 +  " - "+ m + " - " + passou(m));

 };

