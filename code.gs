//Open any Sheet go to option extention > Appscript 
//Go to editor file Code (Shown with <> symbol in left side)
//Click + on libraries, add this script ID  (Copy/paste)     1NFPQwb65ywFSNwA8L_ldkCabBqk3Bqo_t0uimtvH3_9UUi_H3BD73BHC
//select version 2, click ok , you should see AutoMails under library name
// Click code.gs file and Copy paste this entire content (including this instructutions)
//Save it with Icon above, go back to your sheet Tab and reload the sheet, 
//Going forward more features will be added, suggest us the same at https://gentlereminder.in/


function onOpen() {
  AutoMails.menu();
}

function addLicenses() {
  AutoMails.addLicenses();
}

function viewLicenses() {
  AutoMails.viewLicenses();
}

function setupEditConfiguration() {
  AutoMails.setupEditConfiguration();
}

function sendTestEmail() {
  AutoMails.sendTestEmail();
}

function sendEmailNow() {
  AutoMails.sendEmailNow();
}


function openContactWebsite() {
  AutoMails.openContactWebsite(); // Includes detailed guide and link to contact us if any help required
}

function openCredits() {
  AutoMails.openCredits();
}

function showReleaseNotes() {
  AutoMails.showReleaseNotes();
}

function getRemainingDailyQuota() {
  return MailApp.getRemainingDailyQuota();
}

function saveFormData(formData) {
  AutoMails.saveFormData(formData);
}

function scheduleDailyEmails() {
  var triggerId = PropertiesService.getDocumentProperties().getProperty('DailyAuto');

  if (triggerId) {
    var message = 'Automation already exists. Your mail will be sent daily at 11 AM.';
    AutoMails.showPopup(message, "https://gentlereminder.in/", 500, 250, "Info");
    return; // Exit the function if the trigger already exists
  }

  // Use the provided userTimeZone or default to the library owner's script time zone if not provided
  var timeZone = Session.getScriptTimeZone();

  var trigger = ScriptApp.newTrigger('sendEmailNow')
      .timeBased()
      .atHour(11)  //  change this number as per your comfortable time, currently it is 11 AM, you can enter 0 -24 (full      numbers only, like 12.5 will not work)
      .everyDays(1)
      .inTimezone(timeZone)
      .create();

  PropertiesService.getDocumentProperties().setProperty('DailyAuto', trigger.getUniqueId());

  var message = 'Daily email automation set up successfully. Your mail will be sent daily at 11 AM.';
  AutoMails.showPopup(message, "https://gentlereminder.in/", 500, 250, "Successful!");
}


function triggerEmailOnNewEntry() {
  var docProperties = PropertiesService.getDocumentProperties();
  var triggerId = docProperties.getProperty('FormAuto');

  // Check if the trigger already exists
  if (triggerId) {
	var message = 'Form submission automation already exists.';
    AutoMails.showPopup(message, "https://gentlereminder.in/", 500, 250, "Info");
    return; // Exit the function if the trigger already exists
  }

  try {
    // Attempt to get the associated form for the active spreadsheet
    var formUrl = SpreadsheetApp.getActiveSpreadsheet().getFormUrl();
    if (!formUrl) throw new Error('Form URL not found.'); // Throw an error if form URL is not found

    var form = FormApp.openById(formUrl.match(/[-\w]{25,}/)[0]);

    // Create a new form submit trigger
    var trigger = ScriptApp.newTrigger('sendEmailNow')
        .forForm(form)
        .onFormSubmit()
        .create();

    // Save the new trigger's ID in document properties
    docProperties.setProperty('FormAuto', trigger.getUniqueId());

	var message = 'Form submission automation set up successfully. Email will be sent on each new form entry.';
    AutoMails.showPopup(message, "https://gentlereminder.in/", 500, 250, "Successful!");
  } catch (e) {
    // Log a message if the form is not linked or any other error occurs
    if (e.message.includes('Form URL not found.')) {
		var message = 'The sheet does not appear to be linked to a form. This option is for sheets where form responses are recorded.';
		AutoMails.showPopup(message, "https://gentlereminder.in/", 500, 250, "Info");
    }
	else{
		var message = 'Error setting up form submission automation';
		AutoMails.showPopup(message, "https://gentlereminder.in/", 500, 250, "Oops!");
	}
  }
}

function removeAutomation() {
  // Get all triggers in the current project
  var allTriggers = ScriptApp.getProjectTriggers();

  // Loop through all triggers
  for (var i = 0; i < allTriggers.length; i++) {
    // If the trigger is for the sendEmailNow function, delete it
    if (allTriggers[i].getHandlerFunction() === 'sendEmailNow') {
      ScriptApp.deleteTrigger(allTriggers[i]);
    }
  }

  // Access the document's properties
  var docProperties = PropertiesService.getDocumentProperties();

  // Delete the 'FormAuto' and 'DailyAuto' properties if they exist
  docProperties.deleteProperty('FormAuto');
  docProperties.deleteProperty('DailyAuto');

  var message = 'All automation related to sendEmailNow has been removed.\n You can still receive form entries and data from other sources, this would just stop Automated mails Which you can setup again whenever needed';
    AutoMails.showPopup(message, "https://gentlereminder.in/", 500, 250, "Successful!");
}
