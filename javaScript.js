
function handleImage(uploadedImgFile)
{
    var reader =new FileReader();
    reader.onload =function(event)
    {
        var img=new Image();
        img.onload =function()
        {
            var c = document.getElementById("myCanvas");
             var ctx = c.getContext("2d");
              var img = document.getElementById("scream");
            ctx.drawImage(img, 10, 10);
        }
        img.src= event.target.result;
    }
    reader.readAsDataURL(uploadedImgFile)
}