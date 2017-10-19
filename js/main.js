// javascript code of controlling

// var filename = "../data/2012-12-01.csv";
var filename = "../data/test.csv";
var index = -1;

var labels = [];
var select_flag = false;

d3.csv(filename, function(data){
	// click button and display image
    var len = data.length;

	document.getElementById('img_next').onclick = function(){

        if(select_flag){
            if( (index+1)<len ){
                // load next image
                var src = data[index+1].url;
                document.getElementById('my_img').src = src;
                // load image info
                document.getElementById('div_info_title').innerHTML = data[index+1].title;
                document.getElementById('div_info_desc').innerHTML = data[index+1].description;
                document.getElementById('div_info_tag').innerHTML = data[index+1].tag;

                // save previous label
                var label = document.getElementById("label_select").value;
                labels.push(label);

                index++;
                select_flag = false;
            }
            else{
                // save last label
                var label = document.getElementById("label_select").value;
                labels.push(label);
                labels.shift();

                document.getElementById('my_img').src = "../img/end-img.png";
                alert("Last Image!");
                console.log(labels);

                // save labels
                var str = JSON.stringify(labels);
                var blob = new Blob([str], {type: "text/plain;charset=utf-8"});
                saveAs(blob, "data.json");

            }
            

        }
        else{
            alert("choose the label!");
        }
		
    }

});


function imgError(image) {
    image.onerror = "";
    image.src = "/img/not-found.png";
    return true;
}


function selectLabel(){
    select_flag = true;
}


// upload to github

