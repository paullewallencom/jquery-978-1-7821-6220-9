function ParseFile(file) {
	$("#messages").html(
		"<p>File information: <strong><br>" +
		"</strong> type: <strong>" + file.type + "<br>" +
		"</strong> size: <strong>" + file.size + 
		"</strong> bytes</p>"
	);

	if (file.type.indexOf("image") == 0) {
		var reader = new FileReader();
		reader.onload = function(e) {
			$("#messages").prepend(
				"<br>Image:<br><strong>" + file.name + "</strong><br />" +
				'<img class="preview" src="' + e.target.result + '" /></p>'
			);
		}
		reader.readAsDataURL(file);
	}
}

function UploadFile(file) {
	$("#progress").progressbar();
	
	var xhr = new XMLHttpRequest();	
    xhr.upload.onprogress = function updateProgress(e) {
		var fileloaded = (e.loaded / e.total);
		$("#progress").progressbar("value", Math.round(fileloaded * 100));
    }

	xhr.upload.onload = function() {
		$("#progress").progressbar("value", 100);
	}		    

	xhr.open("POST", $("#upload").action, true);
	xhr.setRequestHeader("X_FILENAME", file.name);
	xhr.send(file);
}