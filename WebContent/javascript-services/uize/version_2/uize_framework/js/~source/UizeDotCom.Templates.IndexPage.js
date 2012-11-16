/*
	This is an automatically generated module, compiled from the JavaScript template file:
		UizeDotCom.Templates.IndexPage.js.jst
*/

/*ScruncherSettings Mappings="=" LineCompacting="TRUE"*/

Uize.module ({
	name:'UizeDotCom.Templates.IndexPage',
	required:[
		'UizeDotCom.Templates.Footer'
	],
	builder:function () {
		var _package = function () {};

		/*** Public Static Methods ***/
			_package.process = function (input) {
				var output = [];
				output.push ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">','\r\n<html xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n	<title>',input .title,' | UIZE JavaScript Framework</title>\r\n	<meta name="keywords" content="UIZE JavaScript Framework"/>\r\n	<meta name="description" content="',input .description,'"/>\r\n	<link rel="alternate" type="application/rss+xml" title="UIZE JavaScript Framework - Latest News" href="http://www.uize.com/latest-news.rss"/>\r\n	<link rel="stylesheet" href="css/page.css"/>\r\n	<link rel="stylesheet" href="css/page.simpledoc.css"/>\r\n	<link rel="stylesheet" href="css/page.index.css"/>\r\n</head>\r\n\r\n<body>\r\n\r\n<script type="text/javascript" src="js/Uize.js"></script>\r\n\r\n<h1 class="document-title">\r\n	<a id="page-homeLink" href="index.html" title="UIZE JavaScript Framework home"></a>\r\n	',input .title,'\r\n</h1>\r\n\r\n<div class="main">\r\n\r\n<div class="preamble">\r\n	',input .description,'\r\n	',input .extraPreambleContent,'\r\n</div>\r\n\r\n<ul id="page-index">');

					for (var fileNo = -1, files = input.files, filesLength = files.length; ++fileNo < filesLength;) {
						var file = files [fileNo];

				output.push ('\r\n	<li><a href="',file.path,'">',file.title,'</a><span class="arrow">&nbsp;</span><br/><div>',file.description,'</div></li>');
				 } 
				output.push ('\r\n</ul>\r\n\r\n</div>\r\n\r\n<script type="text/javascript">\r\n\r\nUize.module ({\r\n	required:[\r\n		\'UizeDotCom.Page.Doc.library\',\r\n		\'UizeDotCom.Page.Index\'\r\n	],\r\n	builder:function () {(window.page = new UizeDotCom.Page.Index).wireUi ()}\r\n});\r\n\r\n</script>\r\n\r\n</body></html>\r\n');
				return output.join ('');
			};

		/*** Public Static Properties ***/
			_package.input = {};

		return _package;
	}
});

