// WebFC Core Functions
// Copyright (c) 2012+ WebFC 
// https://github.com/StarDriver/WebFC

// Init (when Page loads)
$("body").ready(function() {
	WFC.Page.load("login");
});

WFC = {
	"Page": {
		"load": function(Name, Destination) {
			$.post("core.php", { "Action": "Page.load", "Par1": Name },
				function(Return) {
					$(Destination).html(Return);
				}
			);
		}
	}
}