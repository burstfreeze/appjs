/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
exports.id=5965,exports.ids=[5965],exports.modules={64249:function(e,r,t){!function(e){"use strict";var r="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),t="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");function s(e){return e>1&&e<5}function n(e,r,t,n){var a=e+" ";switch(t){case"s":return r||n?"pár sekúnd":"pár sekundami";case"ss":return r||n?a+(s(e)?"sekundy":"sekúnd"):a+"sekundami";case"m":return r?"minúta":n?"minútu":"minútou";case"mm":return r||n?a+(s(e)?"minúty":"minút"):a+"minútami";case"h":return r?"hodina":n?"hodinu":"hodinou";case"hh":return r||n?a+(s(e)?"hodiny":"hodín"):a+"hodinami";case"d":return r||n?"deň":"dňom";case"dd":return r||n?a+(s(e)?"dni":"dní"):a+"dňami";case"M":return r||n?"mesiac":"mesiacom";case"MM":return r||n?a+(s(e)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":return r||n?"rok":"rokom";case"yy":return r||n?a+(s(e)?"roky":"rokov"):a+"rokmi"}}e.defineLocale("sk",{months:r,monthsShort:t,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(t(30381))},84171:(e,r,t)=>{"use strict";var s=t(95318);Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){return[n.default,null,null]};var n=s(t(64249))}};