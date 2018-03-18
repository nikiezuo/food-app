var userArrary = [
    {
        name: 'restaurant1',
        catogries: 'fine dining',
        address: '3333',
        image:'img/Untitled-3-01.jpg',
    },
    {
        name: 'restaurant2',
        catogries: 'causual dining',
        address: '1111',
        image:'img/Untitled-3-01.jpg',
    },
    {
        name: 'restaurant3',
        catogries: 'fine dining',
        address: '2222',
        image:'img/Untitled-3-01.jpg',
    },

    {
        name: 'restaurant4',
        catogries: 'fine dining',
        address: '2222',
        image:'img/Untitled-3-01.jpg',
    },

    {
        name: 'restaurant1',
        catogries: 'fine dining',
        address: '3333',
        image:'img/Untitled-3-01.jpg',
    },
    {
        name: 'restaurant2',
        catogries: 'causual dining',
        address: '1111',
        image:'img/Untitled-3-01.jpg',
    },
    {
        name: 'restaurant3',
        catogries: 'fine dining',
        address: '2222',
        image:'img/Untitled-3-01.jpg',
    },

    {
        name: 'restaurant4',
        catogries: 'fine dining',
        address: '2222',
        image:'img/Untitled-3-01.jpg',
    },
];

$(document).ready(function(){
	


	for(i=0; i<userArrary.length; i++) {

		x = "<div class='restaurant'>";
		x = "<div class='info'>";
		x += "<h1>"+userArrary[i].name+"</h1>";
		x += "<h2>"+userArrary[i].catogries+"</h2>";
		x += "<p>"+userArrary[i].address+"</p>";
		x += "</div>";
		x += "</div>";

		$('.container').append(x);
		console.log( "url("+userArrary[i].image+")");
		$('.info').css("background-image", "url("+userArrary[i].image+")");

	}

	// $（.selector）.css（）


	$('#content').keyup(function(){

		$('.container').html("");
	    var c = $("#content").val().toLowerCase();;
		console.log(c);

		$.each(userArrary, function( index, value){
			if(value.name.toLowerCase().indexOf(c)>=0 || 
				value.age.toLowerCase().indexOf(c)>=0 ||
				value.school.toLowerCase().indexOf(c)>=0){
				console.log("yes");
				x = "<div class='student'>";
				x += "<div class='data'>";
				x += "<h1>"+value.name+"</h1>";
				x += "<h1>"+value.age+"</h1>";
				x += "<h1>"+value.school+"</h1>";
				x += "</div>";
				x += "<div class='tag'>";

				$.each(value.skills, function( index, value ) {
		          		x += "<span>"+value+"</span>";
				});
				
				x += "</div>";
				x += "</div>";

				$('.container').append(x);

			} else {
				$.each(value.skills, function(index, value){
					if(value.toLowerCase().indexOf(c)>=0){

						console.log("yes");
						x = "<div class='student'>";
						x += "<div class='data'>";
						x += "<h1>"+value.name+"</h1>";
						x += "<h1>"+value.age+"</h1>";
						x += "<h1>"+value.school+"</h1>";
						x += "</div>";
						x += "<div class='tag'>";

						$.each(value.skills, function( index, value ) {
				          		x += "<span>"+value+"</span>";
						});
						
						x += "</div>";
						x += "</div>";

						$('.container').append(x);

					}
				})
			}
		})
	})



});