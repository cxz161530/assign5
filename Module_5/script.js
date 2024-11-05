var myArray = []
builtTable(myArray)

$.ajax({
    method:'GET',
    url: 'https://imaginative-kulfi-dd988d.netlify.app/project.json',
    success:function(response){
        myArray = response
        console.log(myArray)
    }
})

function buildTable(data){
    var table = document.getElementById('myTable')
    for (var i=0; i<data.length; i++){
        var row = <tr>

        
        
                  </tr>
    }
}

 

