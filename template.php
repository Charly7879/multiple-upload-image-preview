<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Multiple Upload Image Preview - Template</title>
<link type="text/css" href="bootstrap/dist/css/bootstrap.css"  rel="StyleSheet">
<script type="text/javascript" src="jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="bootstrap/dist/js/bootstrap.min.js"></script>
<link type="text/css" href="src/css/multiple-upload.css" rel="StyleSheet">

</head>

<body>

<div class="container">
    <form method="post" action="<?= $_SERVER['PHP_SELF'] ?>" enctype="multipart/form-data">
	   <div class="row">
    	   <div id="multiple-upload" class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
		       <div class="container">
			       <div class="body">
                       <ul id="container">
                	       <li>
						       <p class="delete">
							       <a class="text-primary" href="javascript:void(0)">Delete element</a>
							   </p>
							   <div class="input-file input-group">
							       <input type="text" name="fileName" disabled="true" class="form-control">
								   <span class="input-group-btn">
                                       <div class="btn inputFileButton">
                                           <span class="glyphicon glyphicon-folder-open"></span>
                                           <span>Browse</span>
                                           <input type="file" id="file_1" name="images" accept=".jpeg, .jpg, .png, .gif|images*">
                                       </div>
                                   </span>
                               </div>
                          </li>
						  <li>
						       <div class="image-preview">
							       <img src="src/images/colourback_4005.jpg">
								   <div class="mask" style="display: none;">
                            	       <p>colourback_4005.jpg</p>
                	                   <div class="tools">
            	                	       <a class="change" href="javascript:void(0)" title="Change file"><i class="fa fa-pencil">Change</i></a>
        	                               <a class="delete" href="javascript:void(0)" title="Delete file"><i class="fa fa-times">Delete</i></a>
    	                              </div>
                                   </div>
							   </div>
							   <div class="input-file input-group">
							   <input type="text" name="description" placeholder="Descripción..." class="form-control">
                               </div>
                          </li>
						  <li>
						      <div class="image-preview">
							      <img src="src/images/colourback_4006.jpg">
								  <div class="mask">
								      <p>Picture with description</p>
                	                  <div class="tools">
									      <a href="javascript:void(0)" title="Change file"><i class="fa fa-pencil">Change</i></a>
        	                              <a href="javascript:void(0)" title="Delete file"><i class="fa fa-times">Delete</i></a>
    	                              </div>
                                  </div>
							  </div>
							  <div class="input-file input-group">
							      <input type="text" name="description" placeholder="Descripción..." class="form-control">
                              </div>
                          </li>
						  <li>
						      <div class="image-preview">
							      <img src="src/images/colourback_4014.jpg">
								  <div class="mask">
								      <p>Picture without description</p>
                	                  <div class="tools">
									      <a href="javascript:void(0)" title="Change file"><i class="fa fa-pencil">Change</i></a>
        	                              <a href="javascript:void(0)" title="Delete file"><i class="fa fa-times">Delete</i></a>
    	                              </div>
                                  </div>
							  </div>
							  <div class="input-file input-group">
							       <input type="text" name="fileName" disabled="true" class="form-control">
								   <span class="input-group-btn">
                                       <div class="btn inputFileButton">
                                           <span class="glyphicon glyphicon-folder-open"></span>
                                           <span>Browse</span>
                                           <input type="file" id="file_1" name="images" accept=".jpeg, .jpg, .png, .gif|images*">
                                       </div>
                                   </span>
                               </div>
                          </li>
                       </ul>
                   </div>
                   <div class="footer">
                       <input class="btn btn-primary" type="button" name="add" value="Add +">
		           </div>
			   </div>
           </div>
	   </div>
        <div class="row">
            <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <input class="btn btn-primary" type="submit" name="enviar" value="Send">
            </div>
        </div>
    </form>
</div>

</body>
</html>