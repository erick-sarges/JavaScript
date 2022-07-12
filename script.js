
// Nome do Aluno - nota 1 + nota 2  + nota 3 + nota 4 + nota 5 - média = Conseguiu / Lista de espera / Não foi dessa vez.

var alunos = [ "Erick","Amanda","Kevin","Toff","Diego"];
 var notas1 = [9.0, 8.5, 7.6, 5.6, 9.5];
 var notas2 = [10, 9.0, 9.5, 4.0, 8.5];
 var notas3 = [8.0, 9.5, 5.6, 3.0, 10];
 var notas4 = [7.0, 9.0, 9.5, 3.5, 7.0];
 var notas5 = [9.0, 8.5, 7.5, 1.0, 9.5];


 function media(n1, n2, n3, n4, n5){

        return (n1 + n2 + n3 + n4 + n5) * 5;

 };


function resultado(nota){

        if( nota >= 200){

                return "Parabéns a bolsa é sua";
        
        }

        else if( nota >= 100){

                return "Você está na lista de spera";
        }

        else{

                return "Você não obteve nota suficiente para essa vaga";
        }

};

for( index in alunos){

        var a = notas1[index];
        var b = notas2[index];
        var c = notas3[index];
        var d = notas4[index];
        var e = notas5[index];

        var nota = media(a,b,c,d,e);

        console.log(alunos[index] + " - " + a + " + " + b + " + " + c + " + " + d + " + " + e + " = " + nota + " => " + resultado(nota));

        

};


