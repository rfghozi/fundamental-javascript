<!DOCTYPE html>
<html lang="en">
<head>
    <title>Belajar Ajax</title>
    <script src="jquery-3.5.1.min.js"></script>
</head>

<body>

    <button id="panggil-ajax">Panggil Ajax</button>
    <div id="tampilkan-data"></div>

    <script type="text/javascript">
        $(document).ready(function(){
            $("#panggil-ajax").click(function(){
                $.ajax({
                    method: "POST", 
                    url: "keluarkan-data.php",
                    data: "nama=Romzi&umur=23",
                    success : function(data){
                        $("#tampilkan-data").html(data);
                    }
                });
            });
        });
    </script>
    
</body>
</html>