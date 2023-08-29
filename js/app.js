






document.getElementById('button').addEventListener('click', function(){
    let numValue = document.getElementById('number').value
    
    if(numValue == ""){
        document.getElementById('show_result').textContent = "please enter any number";
    }else if(numValue % 2 == 0){
        document.getElementById('show_result').textContent = "The Number is Even";
    }else if(numValue % 2 == 1){
        document.getElementById('show_result').textContent = "The Number is Odd";
    }
})



