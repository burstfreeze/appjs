/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
exports.id=4980,exports.ids=[4980],exports.modules={64495:function(e,t,a){!function(e){"use strict";var t="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),a="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");function i(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function r(e,t,a){var r=e+" ";switch(a){case"m":return t?"minuta":"minutę";case"mm":return r+(i(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return r+(i(e)?"godziny":"godzin");case"MM":return r+(i(e)?"miesiące":"miesięcy");case"yy":return r+(i(e)?"lata":"lat")}}e.defineLocale("pl",{months:function(e,i){return e?""===i?"("+a[e.month()]+"|"+t[e.month()]+")":/D MMMM/.test(i)?a[e.month()]:t[e.month()]:t},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:r,mm:r,h:r,hh:r,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:r,y:"rok",yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(a(30381))},31043:(e,t,a)=>{"use strict";var i=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return o.apply(this,arguments)};var r=i(a(87757)),n=i(a(48926)),s=i(a(64495));function o(){return(o=(0,n.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[s.default]);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}};