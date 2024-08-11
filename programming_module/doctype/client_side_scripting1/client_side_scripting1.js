// Copyright (c) 2024, gs and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Scripting1', {
	after_save: function(frm){
		frappe.msgprint(__("The full name is '{0}'",
				   [frm.doc.first_name + " " + frm.doc.middle_name + " " + frm.doc.last_name]))
	}
});
