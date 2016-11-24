$( document ).ready(function() {
    var array = [
                    ["Audi", "RS6","3.0", "2010" ],
                    ["Opel", "Omega","2.8", "1980"],
                    ["BMW", "M1","3.0", "2016"],
                    ["Nissan", "GTR","3.8", "2009"],
                    ["Volvo", "C70","2.5", "2005"],

                ];
//console.log(array[0][0] ,array[1][0]);
    for (var i = 0; i < array.length; i++) {
        var html = "<tr><td>"  + array[i][0] + "</td> <td>"  + array[i][1] + "</td> <td>"  + array[i][2] + "</td> <td>" + array[i][3] + "</td></tr>"  ;
        $('.content table').append(html);
        //console.log("marka: "  + array[i][0] + " modelis: "  + array[i][1] + " motora tilpums: "  + array[i][2] "Izlaiduma Gads: "  + array[i][3] + " );
    }

});