/*
	This is an automatically generated module, compiled from the JavaScript template file:
		Uize.Templates.ColorInfo.js.jst
*/

/*ScruncherSettings Mappings="=" LineCompacting="TRUE"*/

Uize.module ({
	name:'Uize.Templates.ColorInfo',
	builder:function () {
		var _package = function () {};

		/*** Public Static Methods ***/
			_package.process = function (input) {
				var output = [];
				/* Module Meta Data
					type: Template
					importance: 1
					codeCompleteness: 100
					testCompleteness: 0
					docCompleteness: 100
				*/
				/*?
					Introduction
						The =Uize.Templates.ColorInfo= module generates HTML that can be used for instances of the =Uize.Widget.ColorInfo= class.

						*DEVELOPERS:* `Chris van Rensburg`

						The =Uize.Templates.ColorInfo= module is a JavaScript Template Module that is automatically generated by a build script from a companion =Uize.Templates.ColorInfo.js.jst= JavaScript Template (.jst) file.

					Public Static Methods
						Uize.Templates.ColorInfo.process
							Returns a string, being the generated HTML that is to be used by an instance of the =Uize.Widget.ColorInfo= class (or subclass).

							SYNTAX
							..............................................................
							widgetHtmlSTR = Uize.Templates.ColorInfo.process (inputOBJ);
							..............................................................

							The value of the =inputOBJ= parameter should be an object of the form...

							........................
							{
								idPrefix: idPrefixSTR
							}
							........................

							idPrefix
								A string, specifying the value of the =idPrefix= set-get property of the widget instance that uses this module to generate its HTML.

					Public Static Properties
						Uize.Templates.ColorInfo.input
							An object, describing the allowed properties of the =inputOBJ= parameter of the =Uize.Templates.ColorInfo.process= static method.
				*/
				output.push ('<div id="',input. idPrefix,'" class="colorInfo">\r\n	<div id="',input. idPrefix,'-value" class="colorInfoTitle"></div>\r\n	<div id="',input. idPrefix,'-swatch" class="colorInfoSwatch"></div>\r\n	<div class="subheader">As a background</div>\r\n	<div id="',input. idPrefix,'-asBackground" class="colorInfoAsBg">\r\n		<span style="color:#fff;">white text</span>&nbsp;&nbsp;\r\n		<span style="color:#000;">black text</span>\r\n	</div>\r\n	<div class="subheader">As a text color</div>\r\n	<div id="',input. idPrefix,'-asForeground" class="colorInfoAsColor">\r\n		<div class="onWhite"></div>\r\n		<div class="onBlack"></div>\r\n		<div style="position:relative; width:100%;">on white&nbsp;&nbsp;&nbsp;&nbsp;on black</div>\r\n	</div>\r\n</div>\r\n\r\n');
				return output.join ('');
			};

		/*** Public Static Properties ***/
			_package.input = {
				idPrefix:'string'
			};

		return _package;
	}
});

