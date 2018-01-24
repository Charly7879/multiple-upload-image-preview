<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Multiple Upload Image Preview</title>
<link type="text/css" href="bootstrap/dist/css/bootstrap.css"  rel="StyleSheet">
<script type="text/javascript" src="jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="src/js/multiple-upload.js"></script>
<link type="text/css" href="src/css/multiple-upload.css"  rel="StyleSheet">

</head>

<body>
<?php

    if(isset($_POST['enviar']) && isset($_FILES['images'])){

        $files = $_FILES['images'];
        $cantFiles = count($files);
        $name = $files["name"];
        $type = $files["type"];
        $size = $files["size"];

        if($cantFiles != 0){
            for($i = 0; $i < $cantFiles; $i++){
                if(!empty($name[$i])){
                    echo $name[$i]."<br>";
                }
            }
        }
    }

?>
<div class="container">
    <form method="post" action="<?= $_SERVER['PHP_SELF'] ?>" enctype="multipart/form-data">
	   <div class="row">
    	   <div id="multiple-upload" class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"></div>
	   </div>
        <div class="row">
            <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <input class="btn btn-primary" type="submit" name="enviar" value="Enviar">
            </div>
        </div>
    </form>
</div>
<script type="text/javascript">
    multipleUpload.init({
        containerId : 'multiple-upload',
		buttonAddText: 'Agregar +',
		linkDeleteText: 'Quitar elemento',
		inputFile : [
						{'name': 'images'},
						{'buttonText': 'Examinar'}
				    ],
		inputText : [
						{'name': 'descriptions'},
						{'placeholder': 'Descripción...'}
				    ],
		mimeType   : ['.jpeg', '.jpg', '.png', '.gif', '|images*'],
        maxSize    : 1024,
        maxUploads : 5,
    });
</script>

</body>
</html>