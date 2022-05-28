var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
// Necessary for the RSVP form. The default state for the form is unsubmitted
var rsvpFormSubmitted = false;

// Constants
var KEY_CODE_0 = 48;
var KEY_CODE_9 = 57;
var KEY_CODE_LEFT_ARROW = 37;
var KEY_CODE_RIGHT_ARROW = 39;
var KEY_CODE_ESCAPE = 27;
var MIN_NUMBER_OF_GUESTS = 0;
var MAX_NUMBER_OF_GUESTS = 4;

var INPUT_NAME_ID = "form_name";
var INPUT_EMAIL_ID = "form_email";
var INPUT_ATTENDEE_COUNT_ID = "form_num_additional_attendees";
var RADIO_BUTTON_ATTEND_ID = "form_will_attend";
var INPUT_PERSON_1_NAME_ID = "form_extra_1";
var INPUT_PERSON_2_NAME_ID = "form_extra_2";
var INPUT_PERSON_3_NAME_ID = "form_extra_3";
var INPUT_PERSON_4_NAME_ID = "form_extra_4";
var PERSON_ARRAY = ["",
                    INPUT_PERSON_1_NAME_ID,
                    INPUT_PERSON_2_NAME_ID,
                    INPUT_PERSON_3_NAME_ID,
                    INPUT_PERSON_4_NAME_ID,
                    ];
var BUTTON_SUBMIT_ID = "submit";

var FORM_GROUP_WILL_ATTEND_ID = "will-attend";
var FORM_GROUP_NOT_ATTEND_ID = "not-attend";

var BIO_TAB_VIEW_CLASS = "tabview";
var BIO_SEGMENTED_CONTROL_CLASS = "tablinks";
var PREVIOUS_BIO_MODAL_CONTROL_CLASS = ".previous_modal";
var NEXT_BIO_MODAL_CONTROL_CLASS = ".next_modal";
var CLOSE_BIO_MODAL_CONTROL_CLASS = ".close_modal";

/**
 * @param  {event}
 * @return {Whether or not the event's character code is a number}
 */
function isNumberKey(event) {
    // Obtaining the pressed key code
    var charCode = event.keyCode;
    if (event.which) {
        charCode = event.which;
    }

    return charCode >= KEY_CODE_0 && charCode <= KEY_CODE_9;
}

/**
 * Sanitizes the number of guests the user entered to be within the
 * predefined, acceptable range.
 * @param  {event}
 */
function sanitizeNumberOfGuests(event) {
    if (event.target.value == "") {
        // If nothing was provided, default to the minimum number of guests
        event.target.value = MIN_NUMBER_OF_GUESTS.toString();
        showFoodOptions(event);
    } else {
        var userValue = parseInt(event.target.value);

        // Ensuring the user value is within acceptable ranges, fixing it if it's not
        if (userValue < MIN_NUMBER_OF_GUESTS) {
            event.target.value = MIN_NUMBER_OF_GUESTS.toString();
            showFoodOptions(event);
        } else if (userValue > MAX_NUMBER_OF_GUESTS) {
            event.target.value = MAX_NUMBER_OF_GUESTS.toString();
            showFoodOptions(event);
        }
    }
}

function showFoodOptions(event) {
    console.log(event.target.value);
    if (event.target.value != ""
        && event.target.value >= MIN_NUMBER_OF_GUESTS
        && event.target.value <= MAX_NUMBER_OF_GUESTS) {
        // Resetting all food choice inputs to be hidden, only want to show the number that
        // the user denoted would be showing up
        for (var i = 1; i <= parseInt(MAX_NUMBER_OF_GUESTS); i++) {
            document.getElementById("person-"+i.toString()).style.display = "none";
        }

        // Showing only the number of food choice inputs the user denoted would be showing up
        for (var i = 1; i <= parseInt(event.target.value); i++) {
            console.log("showing " + "person-"+i.toString());
            document.getElementById("person-"+i.toString()).style.display = "block";
        }

        enableSubmissionButtonIfReady()
    }
    enableSubmissionButtonIfReady();
}

/**
 * Checks all required form inputs to see if they're all provided.
 * If they are, then the submission button is enabled. If they're not,
 * then the submission button is disabled.
 * @param  {event}
 */
function enableSubmissionButtonIfReady(event) {
    if (document.querySelector('input[name="will_attend"]:checked').value !== "yes") {
        console.log("RESET");
        document.getElementById(INPUT_PERSON_1_NAME_ID).value = "";
        document.getElementById("person-1").style.display = "none";
        document.getElementById(INPUT_PERSON_2_NAME_ID).value = "";
        document.getElementById("person-2").style.display = "none";
        document.getElementById(INPUT_PERSON_3_NAME_ID).value = "";
        document.getElementById("person-3").style.display = "none";
        document.getElementById(INPUT_PERSON_4_NAME_ID).value = "";
        document.getElementById("person-4").style.display = "none";
        document.getElementById(INPUT_ATTENDEE_COUNT_ID).value = "0";
        document.getElementById("form_message").placeholder = "If you want, feel free to leave us a note here, we'd appreciate hearing from you!";
        document.getElementById("form_message").value = "";
    } else {
        document.getElementById("form_message").placeholder = "Have anything you want to tell us?";
        document.getElementById("form_message").value = "";
    }

    if (document.getElementById(INPUT_NAME_ID).value != ""
     && document.getElementById(INPUT_EMAIL_ID).value != "") {
        if (document.getElementById(RADIO_BUTTON_ATTEND_ID).checked) {
            var attendeeCount = document.getElementById(INPUT_ATTENDEE_COUNT_ID).value;
            for (var i = 1; i <= attendeeCount; i++) {
                if (document.getElementById(PERSON_ARRAY[i]).value == "") {
                    document.getElementById(BUTTON_SUBMIT_ID).disabled = true;
                    return;
                }
            }
            document.getElementById(BUTTON_SUBMIT_ID).disabled = false;
        } else {
            document.getElementById(BUTTON_SUBMIT_ID).disabled = false;
        }
    } else {
        document.getElementById(BUTTON_SUBMIT_ID).disabled = true;
    }
}

var myCalendar = createCalendar({
    options: {
        class: '',
        id: ''
    },
    data: {
        title: "Marc & Khary's Wedding",
        start: new Date('May 21, 2022 17:00'),
        end: new Date('May 21, 2022 23:00'),
        address: '99 South 17th Street, Philadelphia, PA 19103',
        description: "Ceremony: 5pm, Reception: 6pm - 11pm, www.marcandkai.wedding"
    }
});

/**
 * Shows/hides two different form groups depending on whether or not
 * the user can attend the wedding. After all, we can't have people
 * that can't make it choosing what they want to eat!
 */
$(document).ready(function(){
    $('input[type=radio]').click(function() {
        if (this.value === 'no') {
            document.getElementById(FORM_GROUP_WILL_ATTEND_ID).style.display = "none";
            document.getElementById(FORM_GROUP_NOT_ATTEND_ID).style.display = "block";
        } else {
            document.getElementById(FORM_GROUP_WILL_ATTEND_ID).style.display = "block";
            document.getElementById(FORM_GROUP_NOT_ATTEND_ID).style.display = "none";
        }
    });

    $('#rsvp').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        $('#rsvp *').fadeOut(500);
        $('.fade-me').animate({opacity:0});

        $('#rsvp').prepend('Processing, please wait...');

        try {
            if (MD5($('#form_invite_code').val()) !== '537b62e8f5c5a873bca8132021d87dec') {
                document.getElementById("rsvp").innerHTML = "<strong>Sorry!</strong> Your invite code is incorrect.";
            } else {
                document.getElementById("rsvp").innerHTML = "If the form was still active, your RSVP would have been sent.";
            }
        } catch (error) {
            document.getElementById("rsvp").innerHTML = '<strong>Sorry!</strong> There is some issue with the server.';
        }
    });

    $('#add-to-cal').html(myCalendar);
});