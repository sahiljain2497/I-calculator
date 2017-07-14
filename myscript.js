$(document).ready(function(){
    document.getElementById('res').innerHTML='';
    var eq=[];
    console.log(eq);
   
    $(".one").click(function(){
        $(".res").append(1);
        eq.push(1);
        console.log(eq);
    });
    
    $(".two").click(function(){
        $(".res").append(2);
        eq.push(2);
    });
    
    $(".three").click(function(){
        $(".res").append(3);
        eq.push(3);
    });
    
    $(".four").click(function(){
        $(".res").append(4);
        eq.push(4);
    });
    
    $(".five").click(function(){
        $(".res").append(5);
        eq.push(5);
    });
    
    $(".six").click(function(){
        $(".res").append(6);
        eq.push(6);
    });
    
    $(".seven").click(function(){
        $(".res").append(7);
        eq.push(7);
    });
    
    $(".eight").click(function(){
        $(".res").append(8);
        eq.push(8);
    });
    
    $(".nine").click(function(){
        $(".res").append(9);
        eq.push(9);
    });
    
    $(".zero").click(function(){
        $(".res").append(0);
        eq.push(0);
    });
    
    $(".dot").click(function(){
        $(".res").append('.');
        eq.push('.');
    });
    
    //functions in use
    $(".plus").click(function(){
        //$(".res").append(+);
        if(eq[eq.length-1]=='+' || eq[eq.length-1]=='-' || eq[eq.length-1]=='/' || eq[eq.length-1]=='*'){
            eq.pop();
            eq.push('+');   
        }
        else{
            eq.push('+');    
        }
         $('.res').html(' ');
        console.log(eq);
    });
        
    $(".minus").click(function(){
        //$(".res").append(-);
        if(eq[eq.length-1]=='+' || eq[eq.length-1]=='-' || eq[eq.length-1]=='/' || eq[eq.length-1]=='*'){
            eq.pop();
            eq.push('-');   
        }else{
            eq.push('-');    
        }
        console.log(eq);
         $('.res').html(' ');
    });
        
    $(".divide").click(function(){
           if(eq[eq.length-1]=='+' || eq[eq.length-1]=='-' || eq[eq.length-1]=='/' || eq[eq.length-1]=='*'){
            eq.pop();
            eq.push('/');   
        }else{
            eq.push('/');    
        }
        console.log(eq);
         $('.res').html(' ');
    });
        
    $(".multiply").click(function(){
            if(eq[eq.length-1]=='+' || eq[eq.length-1]=='-' || eq[eq.length-1]=='/' || eq[eq.length-1]=='*'){
            eq.pop();
            eq.push('*');   
        }else{
            eq.push('*');    
        }
        console.log(eq);
         $('.res').html(' ');
    
    });
    
    $(".percent").click(function(){
        //$(".res").append(*);
        eq.push('*');
        eq.push(0.01);
         $('.res').html(' ');
    });
    
     $(".plus-minus").click(function(){
            /*eq.push('*');
            eq.push(-1);*/
            var final = eq.join('');
            var ans = eval(final);
            ans=ans.toFixed(7);
            ans=ans*-1;
            $('.res').html(" ");
            $('.res').append(ans);
        console.log(eq);
        
    });
    
    $(".ac").click(function(){
        eq.length=0;
        $('.res').html(" ");
        console.log(eq);
    });
    
    $('.equal').click(function(){
        var final = eq.join('');
        var ans = eval(final);
        ans=ans.toFixed(7);
        $('.res').html(" ");
        $('.res').append(ans);
   });
        
});