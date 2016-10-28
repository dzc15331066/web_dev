   
   (function initTable(){
        $("table").find("tr").not("tr:first").each(function(i,element){
            if($(element).index()%2==1){
                $(element).addClass("alternate");
                
            }
        });
    })();
    $("table").find("tr:first").children("th,td").constructor.prototype.changeTableHead = function(){
        if($(this).hasClass("ascend")){
            $(this).removeClass("ascend");
            $(this).addClass("descend");
            sortTR($(this).parents("table"),$(this).index(),"descend");
          }else{
            if($(this).hasClass("descend")){
                $(this).removeClass("descend");
            }
            $(this).addClass("ascend");
            sortTR($(this).parents("table"),$(this).index(),"ascend");
          }
    }
    $("table").find("tr:first").children("th,td").click(function(){
          $(this).changeTableHead();
          $("table").find("tr:first").children("th,td").not(this).removeChangeTableHead();
        }
    );
    $("table").find("tr:first").children("td,th").constructor.prototype.removeChangeTableHead = function(){
        if($(this).hasClass("ascend")){
            $(this).removeClass("ascend");
        }
        if($(this).hasClass("descend")){
            $(this).removeClass("descend");
        }
    };
    function sortTR(table,column,order){
        var sortedTR = [];
        var str = _.sortBy($(table).find("tr").not("tr:first"),function(n)
        {
            var val = $($(n).children("td")[column]).text();
            if($.isNumeric(val)){
                val = +val;
            }
            return val;
        });
        if(order=="descend"){
            str.reverse();
        }
        _(str).forEach(function(n){
            sortedTR.push($(n).html());
        }).value();
        $(table).find("tr").not("tr:first").each(function(i,element){
            if(i<str.length){
                $(element).html(sortedTR[i]);
            }  
         }
         );
    };
