/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[3501],{14985:function(e,t,a){!function(e){"use strict";function t(e,t,a,n){var r=e+" ";switch(a){case"s":return t||n?"nekaj sekund":"nekaj sekundami";case"m":return t?"ena minuta":"eno minuto";case"mm":return r+=1===e?t?"minuta":"minuto":2===e?t||n?"minuti":"minutama":e<5?t||n?"minute":"minutami":t||n?"minut":"minutami";case"h":return t?"ena ura":"eno uro";case"hh":return r+=1===e?t?"ura":"uro":2===e?t||n?"uri":"urama":e<5?t||n?"ure":"urami":t||n?"ur":"urami";case"d":return t||n?"en dan":"enim dnem";case"dd":return r+=1===e?t||n?"dan":"dnem":2===e?t||n?"dni":"dnevoma":t||n?"dni":"dnevi";case"M":return t||n?"en mesec":"enim mesecem";case"MM":return r+=1===e?t||n?"mesec":"mesecem":2===e?t||n?"meseca":"mesecema":e<5?t||n?"mesece":"meseci":t||n?"mesecev":"meseci";case"y":return t||n?"eno leto":"enim letom";case"yy":return r+=1===e?t||n?"leto":"letom":2===e?t||n?"leti":"letoma":e<5?t||n?"leta":"leti":t||n?"let":"leti"}}e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(a(30381))},12404:(e,t,a)=>{"use strict";var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return o.apply(this,arguments)};var r=n(a(87757)),s=n(a(48926)),u=n(a(14985));function o(){return(o=(0,s.default)(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[u.default]);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);