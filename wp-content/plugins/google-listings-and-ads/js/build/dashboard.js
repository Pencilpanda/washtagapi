"use strict";(globalThis.webpackChunkgoogle_listings_and_ads=globalThis.webpackChunkgoogle_listings_and_ads||[]).push([[945],{4731:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ye});var n=a(1609),s=a(6087),l=a(7723),o=a(8846),i=a(6476),r=a(7892),g=a(2047),d=a(1638),c=a(1787),m=a(7374);var u=a(6473);const p=e=>{const{trackEventReportId:t}=e,a=(()=>{const e=(0,i.getQuery)(),{period:t,compare:a,before:n,after:s}=(0,m.getDateParamsFromQuery)(e),{primary:l,secondary:o}=(0,m.getCurrentDates)(e);return{period:t,compare:a,before:n,after:s,primaryDate:l,secondaryDate:o}})();return(0,n.createElement)(o.DateRangeFilterPicker,{dateQuery:a,onRangeSelect:e=>{t&&(0,u.ce)("gla_datepicker_update",{report:t,...e}),(0,i.updateQueryString)(e)},isoDateFormat:"YYYY-MM-DD"})};var _=a(3905),E=a(7419),y=a(5128),h=a(7143),A=a(6520),C=a(7615),b=a(2775);function v(e){const t=(0,b.A)();return(0,h.useSelect)((a=>{const{getDashboardPerformance:n}=a(A.Ui),s=n(e,t,"primary"),l=n(e,t,"secondary");let o=null;const i=s.loaded&&l.loaded;return i&&s.data&&l.data&&(o=(0,C.bM)(s.data,l.data)),{loaded:i,data:o}}),[e,t])}const f=({loaded:e,data:t,children:a,noDataMessage:s})=>{let l;return l=e?t?(0,n.createElement)(o.SummaryList,null,(()=>a(t))):(0,n.createElement)("div",{className:"gla-summary-card__body"},(0,n.createElement)("p",null,s.body),(0,n.createElement)(r.A,{eventName:s.eventName,eventProps:{context:"dashboard",href:s.link},href:s.link,target:"_blank",isSmall:!0,isSecondary:!0},s.buttonLabel)):(0,n.createElement)(o.SummaryListPlaceholder,{numberOfItems:2}),l};var k=a(6427),S=a(6459);const w=({title:e,children:t})=>(0,n.createElement)(k.Card,{className:"gla-summary-card"},(0,n.createElement)(k.CardHeader,{size:"medium"},(0,n.createElement)(S.A,{variant:"title-small"},e)),t);var N=a(1378),P=a(2391);const R=({adsAccount:e})=>{const t=e.sub_account||e.status===_.Wn.DISCONNECTED;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("p",null,t?(0,l.__)("Create your first campaign and get $500 in ad credit*","google-listings-and-ads"):(0,l.__)("Create your first campaign","google-listings-and-ads")),(0,n.createElement)(P.A,{eventProps:{context:"add-paid-campaign-promotion"}}))},G=function(){const{googleAdsAccount:e}=(0,N.A)();return(0,n.createElement)("div",{className:"gla-summary-card__body"},e?(0,n.createElement)(R,{adsAccount:e}):(0,n.createElement)(o.Spinner,null))},F={precision:0},I=()=>{const e=(0,y.A)(F),{data:t,loaded:a}=v(_.k1);return(0,n.createElement)(f,{loaded:a,data:t,noDataMessage:{body:(0,l.__)("We're having trouble loading this data. Try again later, or track your performance in Google Merchant Center.","google-listings-and-ads"),link:"https://merchants.google.com/mc/reporting/dashboard",eventName:"gla_google_mc_link_click",buttonLabel:(0,l.__)("Open Google Merchant Center","google-listings-and-ads")}},(t=>[(0,n.createElement)(o.SummaryNumber,{key:"1",label:(0,l.__)("Clicks","google-listings-and-ads"),value:e(t.clicks.value),prevValue:e(t.clicks.prevValue),delta:t.clicks.delta}),(0,n.createElement)(o.SummaryNumber,{key:"2",label:(0,l.__)("Total Spend","google-listings-and-ads"),value:(0,l.__)("Free","google-listings-and-ads"),delta:null})]))},T=()=>{const{formatAmount:e}=(0,E.A)(),{data:t,loaded:a}=v(_.Mx);return(0,n.createElement)(f,{loaded:a,data:t,noDataMessage:{body:(0,l.__)("We're having trouble loading this data. Try again later, or track your performance in Google Ads.","google-listings-and-ads"),link:"https://ads.google.com/",eventName:"gla_google_ads_link_click",buttonLabel:(0,l.__)("Open Google Ads","google-listings-and-ads")}},(t=>[(0,n.createElement)(o.SummaryNumber,{key:"1",label:(0,l.__)("Total Sales","google-listings-and-ads"),value:e(t.sales.value,!0),prevValue:e(t.sales.prevValue,!0),delta:t.sales.delta}),(0,n.createElement)(o.SummaryNumber,{key:"2",label:(0,l.__)("Total Spend","google-listings-and-ads"),value:e(t.spend.value,!0),prevValue:e(t.spend.prevValue,!0),delta:t.spend.delta})]))};function M(){const{adsSetupComplete:e}=_.Th;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(w,{title:(0,l.__)("Performance (Free Listing)","google-listings-and-ads")},(0,n.createElement)(I,null)),(0,n.createElement)(w,{title:(0,l.__)("Performance (Paid Campaigns)","google-listings-and-ads")},e?(0,n.createElement)(T,null):(0,n.createElement)(G,null)))}var D=a(9457),Q=a(4270);const q=a.p+"images/js/src/dashboard/campaign-creation-success-guide/c4325f35cdc65f85a7c1.header.svg",x="create-another-campaign",L="confirm";function O({onGuideRequestClose:e=()=>{}}){(0,s.useEffect)((()=>{(0,u.ce)("gla_modal_open",{context:_.K4.CAMPAIGN_CREATION_SUCCESS})}),[]);const t=(0,s.useCallback)((t=>e(t,"dismiss")),[e]);return(0,n.createElement)(D.A,{className:"gla-campaign-creation-success-guide",onRequestClose:t,buttons:[(0,n.createElement)(r.A,{key:"0",isTertiary:!0,"data-action":x,onClick:e},(0,l.__)("Create another campaign","google-listings-and-ads")),(0,n.createElement)(r.A,{key:"1",isPrimary:!0,"data-action":L,onClick:e},(0,l.__)("Got it","google-listings-and-ads"))]},(0,n.createElement)("div",{className:"gla-campaign-creation-success-guide__header-image"},(0,n.createElement)("img",{src:q,alt:(0,l.__)("Drawing of a person who successfuly launched a campaign","google-listings-and-ads"),width:"413",height:"160"})),(0,n.createElement)(Q.A,{title:(0,l.__)("You've set up a paid Performance Max Campaign!","google-listings-and-ads")},(0,s.createInterpolateElement)((0,l.__)("You can pause or edit your campaign at any time. For best results, we recommend allowing your campaign to run for at least 14 days without pausing or editing. <link>Learn more about Performance Max technology.</link>","google-listings-and-ads"),{link:(0,n.createElement)(Q.i,{href:"https://support.google.com/google-ads/answer/10724817",context:"campaign-creation-performance-max"})})))}var H=a(6942),B=a.n(H),K=a(8237),$=a(8582);const Z=e=>{const{programId:t,onRequestClose:a}=e,[o,i]=(0,s.useState)(!1),g=(0,$.j)(),d=()=>{o||a()};return(0,n.createElement)(D.A,{className:"gla-remove-program-modal",title:(0,l.__)("Permanently Remove?","google-listings-and-ads"),isDismissible:!o,buttons:[(0,n.createElement)(r.A,{key:"keep",isSecondary:!0,disabled:o,onClick:d},(0,l.__)("Keep Campaign","google-listings-and-ads")),(0,n.createElement)(r.A,{key:"remove",isPrimary:!0,isDestructive:!0,loading:o,onClick:()=>{i(!0),g.deleteAdsCampaign(t).then((()=>a())).catch((()=>i(!1)))}},(0,l.__)("Remove Campaign","google-listings-and-ads"))],onRequestClose:d},(0,n.createElement)("p",null,(0,l.__)("Results typically improve with time with Google’s paid ad campaigns. Removing a paid ad campaign will result in the loss of any optimisations learned from those campaigns.","google-listings-and-ads")),(0,n.createElement)("p",null,(0,l.__)("Once a campaign is removed, it cannot be re-enabled.","google-listings-and-ads")))},U=e=>{const{programId:t}=e,[a,o]=(0,s.useState)(!1);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.A,{isDestructive:!0,isLink:!0,onClick:()=>{o(!0)}},(0,l.__)("Remove","google-listings-and-ads")),a&&(0,n.createElement)(Z,{programId:t,onRequestClose:()=>{o(!1)}}))};var Y=a(3666);const V=({programId:e,onRequestClose:t})=>(0,n.createElement)(D.A,{className:"gla-edit-program-prompt-modal",title:(0,l.__)("Before you edit…","google-listings-and-ads"),buttons:[(0,n.createElement)(r.A,{key:"no",isSecondary:!0,onClick:()=>{t()}},(0,l.__)("Don't edit","google-listings-and-ads")),(0,n.createElement)(r.A,{key:"yes",isPrimary:!0,onClick:()=>{const t=e===_.Q?(0,Y.$n)():(0,Y.Q4)(e);(0,i.getHistory)().push(t),(0,u.ce)("gla_dashboard_edit_program_click",{programId:e,url:t})}},(0,l.__)("Continue to edit","google-listings-and-ads"))],onRequestClose:t},(0,n.createElement)("p",null,(0,l.__)("Results typically improve with time with Google’s Free Listing and paid ad campaigns.","google-listings-and-ads")),(0,n.createElement)("p",null,(0,l.__)("Editing will result in the loss of any optimisations learned over time.","google-listings-and-ads")),(0,n.createElement)("p",null,(0,l.__)("We recommend allowing your programs to run for at least 14 days after set up, without pausing or editing, for optimal performance.","google-listings-and-ads")));var j=a(6494);const z=e=>{const{className:t,programId:a,...s}=e;return(0,n.createElement)(j.A,{button:(0,n.createElement)(r.A,{...s,isLink:!0,className:B()(t)},(0,l.__)("Edit","google-listings-and-ads")),modal:(0,n.createElement)(V,{programId:a})})};var W=a(1209),J=a(6734),X=a(5847),ee=a(3741);const te=e=>{const{onPauseCampaign:t=()=>{},onRequestClose:a}=e;return(0,n.createElement)(D.A,{className:"gla-pause-program-modal",title:(0,l.__)("Before you pause…","google-listings-and-ads"),buttons:[(0,n.createElement)(r.A,{key:"1",isSecondary:!0,onClick:()=>{a()}},(0,l.__)("Keep Active","google-listings-and-ads")),(0,n.createElement)(r.A,{key:"2",isPrimary:!0,onClick:()=>{t()}},(0,l.__)("Pause Campaign","google-listings-and-ads"))],onRequestClose:a},(0,n.createElement)("p",null,(0,l.__)("Results typically improve with time with Google’s paid ad campaigns. If you pause, your products won’t be shown to people looking for what you offer.","google-listings-and-ads")),(0,n.createElement)("p",null,(0,l.__)("Pausing a paid ad campaign will result in the loss of any optimisations learned from those campaigns.","google-listings-and-ads")))};var ae=a(2118);const ne=e=>{const{program:t}=e,[a,l]=(0,s.useState)(t.active),[o,i]=(0,s.useState)(!1),{updateAdsCampaign:r}=(0,$.j)();return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(ae.A,{checked:a,onChange:e=>{!1!==e?(l(e),r(t.id,{status:"enabled"})):i(!0)}}),o&&(0,n.createElement)(te,{programId:t.id,onPauseCampaign:()=>{i(!1),l(!1),r(t.id,{status:"paused"})},onRequestClose:()=>{i(!1)}}))};var se=a(9039);const le=()=>(0,n.createElement)(se.A,{text:(0,l.__)("Free listings cannot be paused through WooCommerce. Go to Google Merchant Center for advanced settings.","google-listings-and-ads")},(0,n.createElement)(ae.A,{checked:!0,disabled:!0}));var oe=a(9788);const ie="gla-all-programs-table-card",re="gla-campaign-edit-button",ge=[{key:"title",label:(0,l.__)("Program","google-listings-and-ads"),isLeftAligned:!0,required:!0},{key:"country",label:(0,l.__)("Country","google-listings-and-ads"),isLeftAligned:!0},{key:"dailyBudget",label:(0,l.__)("Daily budget","google-listings-and-ads")},{key:"enabled",label:(0,l.__)("Enabled","google-listings-and-ads")},{key:"actions",label:"",required:!0}];function de({countryCodes:e,countryNameMap:t}){const[a]=e;return(0,n.createElement)("span",null,t[a],e.length>=2&&(0,l.sprintf)(
// translators: %d: number of countries, with minimum value of 1.
// translators: %d: number of countries, with minimum value of 1.
(0,l.__)(" + %d more","google-listings-and-ads"),e.length-1))}const ce=e=>{const t=(0,i.getQuery)(),{formatAmount:a}=(0,E.A)(),{data:s}=(0,X.A)(),{data:o}=(0,W.A)(),r=(0,J.A)();if(!s||!o)return(0,n.createElement)(ee.A,null);let g=null;if(o.filter((({type:e})=>e===_.$g)).length){const e=`.${ie} .${re}`;g=(0,n.createElement)(oe.A,{referenceElementCssSelector:e})}const d=[{id:_.Q,title:(0,l.__)("Free listings","google-listings-and-ads"),dailyBudget:(0,l.__)("Free","google-listings-and-ads"),country:(0,n.createElement)(de,{countryCodes:s,countryNameMap:r}),active:!0,disabledEdit:!1},...o.map((e=>({id:e.id,title:e.name,dailyBudget:a(e.amount,!0),country:(0,n.createElement)(de,{countryCodes:e.displayCountries,countryNameMap:r}),active:"enabled"===e.status,disabledEdit:e.type!==_.$g})))],c=(0,n.createElement)(K.A,{className:ie,title:(0,l.__)("Programs","google-listings-and-ads"),actions:(0,n.createElement)(P.A,{eventProps:{context:"programs-table-card"}}),headers:ge,rowKey:e=>e[0].id,rows:d.map((e=>{const t=e.id===_.Q,a=B()({[re]:!t&&!e.disabledEdit});return[{display:e.title,id:e.id.toString()},{display:e.country},{display:e.dailyBudget},{display:t?(0,n.createElement)(le,null):(0,n.createElement)(ne,{program:e})},{display:(0,n.createElement)("div",{className:"program-actions"},(0,n.createElement)(z,{className:a,programId:e.id,disabled:e.disabledEdit}),e.id!==_.Q&&(0,n.createElement)(U,{programId:e.id}))}]})),totalRows:d.length,rowsPerPage:d.length,query:t,onQueryChange:i.onQueryChange,...e});return(0,n.createElement)(n.Fragment,null,g,c)};var me=a(3921),ue=a(8468),pe=a(7539),_e=a(9467),Ee=a(7333),ye=a(6599),he=a(6474),Ae=a(1650),Ce=a(6523),be=a(5622),ve=a(5640),fe=a(7980),ke=a(4716),Se=a(5455),we=a(5807),Ne=a(8606);const Pe=()=>{(0,he.A)("full-content");const{targetAudience:e,getFinalCountries:t}=(0,X.A)(),{settings:a}=(0,Ee.A)(),{saveTargetAudience:o,saveSettings:r}=(0,$.j)(),{saveShippingRates:g}=(0,Se.A)(),{saveShippingTimes:d}=(0,we.A)(),[c,m]=(0,s.useState)(e),[p,_]=(0,s.useState)(a),{hasFinishedResolution:E,data:y}=(0,Ce.A)(),[h,A]=(0,s.useState)(y),C=E?h:null,{hasFinishedResolution:b,data:v}=(0,be.A)(),[f,k]=(0,s.useState)(v),S=b?f:null;(0,s.useEffect)((()=>_(a)),[a]),(0,s.useEffect)((()=>m(e)),[e]),(0,s.useEffect)((()=>A(y)),[y]),(0,s.useEffect)((()=>k(v)),[v]);const[w]=(0,ye.A)({path:"/wc/gla/mc/settings/sync",method:"POST"}),{createNotice:N}=(0,ve.A)(),P=!(0,ue.isEqual)(...[c,e].map((e=>({...e,countries:new Set(e?.countries)})))),R=!(0,ue.isEqual)(p,a),G=(I=y,(F=h).length!==I.length||(0,ke.A)(F,I).length>0);var F,I;const T=!(0,ue.isEqual)(new Set(f),new Set(v)),M=P||R||G||T;(0,Ae.A)((0,l.__)("You have unsaved campaign data. Are you sure you want to leave?","google-listings-and-ads"),M);const D=(0,i.getNewPath)({pageStep:void 0,subpath:void 0},"/google/dashboard");return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(pe.A,{title:(0,l.__)("Edit free listings","google-listings-and-ads"),helpButton:(0,n.createElement)(fe.A,{eventContext:"edit-free-listings"}),backHref:D}),(0,n.createElement)(_e.A,{headerTitle:(0,l.__)("Edit your listings","google-listings-and-ads"),targetAudience:c,resolveFinalCountries:t,onTargetAudienceChange:m,settings:p,onSettingsChange:_,shippingRates:C,onShippingRatesChange:A,shippingTimes:S,onShippingTimesChange:k,onContinue:async()=>{try{const e=[o(c),r(p),g(h),d(f)],t=await(0,Ne.A)(e,[(0,l.__)("Target audience","google-listings-and-ads"),(0,l.__)("Merchant Center Settings","google-listings-and-ads"),(0,l.__)("Shipping rates","google-listings-and-ads"),(0,l.__)("Shipping times","google-listings-and-ads")]);await w(),t?N("error",t):N("success",(0,l.__)("Your changes to your Free Listings have been saved and will be synced to your Google Merchant Center account.","google-listings-and-ads")),(0,u.ce)("gla_free_campaign_edited")}catch(e){N("error",(0,l.__)("Something went wrong while saving your changes. Please try again later.","google-listings-and-ads"))}},submitLabel:(0,l.__)("Save changes","google-listings-and-ads")}))};var Re=a(9415),Ge=a(4307),Fe=a(4348),Ie=a(6400),Te=a(1028);const Me="gla_paid_campaign_step",De="edit-ads",Qe=(0,Y.uZ)(),qe=(0,n.createElement)(fe.A,{eventContext:De});function xe(){const{step:e}=(0,i.getQuery)();return Object.values(_.km).includes(e)?e:_.km.CAMPAIGN}const Le=()=>{(0,he.A)("full-content");const{updateAdsCampaign:e,createCampaignAssetGroup:t,updateCampaignAssetGroup:a}=(0,$.j)(),r=Number((0,i.getQuery)().programId),{loaded:g,data:d}=(0,W.A)(),{hasFinishedResolution:c,invalidateResolution:m,data:p}=(0,Re.A)("getCampaignAssetGroups",r),E=d?.find((e=>e.id===r)),y=p?.at(0);(0,s.useEffect)((()=>{E&&E.type!==_.$g&&(0,i.getHistory)().replace(Qe)}),[E]);const h=xe(),A=e=>{const t=(0,i.getNewPath)({...(0,i.getQuery)(),step:e});(0,i.getHistory)().push(t)};return g&&c?E?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(pe.A,{title:(0,l.sprintf)(
// translators: %s: campaign's name.
// translators: %s: campaign's name.
(0,l.__)("Edit %s","google-listings-and-ads"),E.name),helpButton:qe,backHref:Qe}),(0,n.createElement)(Fe.A,{initialCampaign:{amount:E.amount,countryCodes:E.displayCountries},assetEntityGroup:y,onSubmit:async(n,s)=>{const{action:l}=s.submitter.dataset,{amount:o}=n;try{if(await e(E.id,{amount:o}),l===Te.zK){let e=y;e||(e=(await t(r)).assetGroup);const s=e.id,l=(0,Ge.A)(e,n);await a(s,l),m()}}catch(e){return void s.signalFailedSubmission()}(0,i.getHistory)().push((0,Y.uZ)())}},(0,n.createElement)(o.Stepper,{currentStep:xe(),steps:[{key:_.km.CAMPAIGN,label:(0,l.__)("Edit paid campaign","google-listings-and-ads"),content:(0,n.createElement)(Ie.A,{campaign:E,trackingContext:De,onContinue:()=>{return e=_.km.ASSET_GROUP,(0,u.dQ)(Me,_.Z3[h],_.Z3[e],De),void A(e);var e}}),onClick:e=>{(0,u.T)(Me,_.Z3[e],De),A(e)}},{key:_.km.ASSET_GROUP,label:(0,l.__)("Optimize your campaign","google-listings-and-ads"),content:(0,n.createElement)(Te.Ay,{campaign:E})}]}))):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(pe.A,{title:(0,l.__)("Edit Campaign","google-listings-and-ads"),helpButton:qe,backHref:Qe}),(0,n.createElement)("div",null,(0,l.__)("Error in loading your paid ads campaign. Please try again later.","google-listings-and-ads"))):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(pe.A,{title:(0,l.__)("Loading…","google-listings-and-ads"),helpButton:qe,backHref:Qe}),(0,n.createElement)(ee.A,null))};var Oe=a(1455),He=a.n(Oe);const Be="gla_paid_campaign_step",Ke="create-ads",$e=(0,Y.uZ)(),Ze=()=>{(0,he.A)("full-content");const[e,t]=(0,s.useState)(_.km.CAMPAIGN),a=(0,s.useRef)(null),{createAdsCampaign:r,updateCampaignAssetGroup:g}=(0,$.j)(),{createNotice:d}=(0,ve.A)(),{data:c}=(0,X.A)();return c?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(pe.A,{title:(0,l.__)("Create your paid campaign","google-listings-and-ads"),helpButton:(0,n.createElement)(fe.A,{eventContext:Ke}),backHref:$e}),(0,n.createElement)(Fe.A,{initialCampaign:{amount:0,countryCodes:c},onSubmit:async(e,t)=>{const{action:n}=t.submitter.dataset;try{const{amount:t,countryCodes:s}=e;if(null===a.current){const e=await r(t,s);a.current=e.createdCampaign.id}if(n===Te.zK){const t=a.current,n=`${A.RV}/ads/campaigns/asset-groups?campaign_id=${t}`,[s]=await He()({path:n}),l=(0,Ge.A)(s,e);await g(s.id,l)}d("success",(0,l.__)("You’ve successfully created a paid campaign!","google-listings-and-ads"))}catch(e){return void t.signalFailedSubmission()}(0,i.getHistory)().push((0,Y.uZ)({campaign:"saved"}))}},(0,n.createElement)(o.Stepper,{currentStep:e,steps:[{key:_.km.CAMPAIGN,label:(0,l.__)("Create paid campaign","google-listings-and-ads"),content:(0,n.createElement)(Ie.A,{trackingContext:Ke,onContinue:()=>{return a=_.km.ASSET_GROUP,(0,u.dQ)(Be,_.Z3[e],_.Z3[a],Ke),void t(a);var a}}),onClick:e=>{(0,u.T)(Be,_.Z3[e],Ke),t(e)}},{key:_.km.ASSET_GROUP,label:(0,l.__)("Optimize your campaign","google-listings-and-ads"),content:(0,n.createElement)(Te.Ay,null)}]}))):null};var Ue=a(5246);const Ye=()=>{const[e,t]=(0,s.useState)(!1),a=(0,s.useCallback)(((e,a)=>{const n=a||e.currentTarget.dataset.action,s={...(0,i.getQuery)(),guide:void 0};(0,i.getHistory)().replace((0,i.getNewPath)(s)),n===x?(0,i.getHistory)().push((0,Y.uB)()):n===L&&t(!0),(0,u.ce)("gla_modal_closed",{context:_.K4.CAMPAIGN_CREATION_SUCCESS,action:n})}),[t]),m=(0,i.getQuery)();switch(m.subpath){case Y.$K.editFreeListings:return(0,n.createElement)(Pe,null);case Y.$K.editCampaign:return(0,n.createElement)(Le,null);case Y.$K.createCampaign:return(0,n.createElement)(Ze,null)}const E="dashboard",{enableReports:y}=_.Th,h=m?.guide===_.K4.CAMPAIGN_CREATION_SUCCESS,A=(0,me.A)();return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"gla-dashboard"},(0,n.createElement)(g.A,{context:"dashboard"}),(0,n.createElement)(d.A,null),(0,n.createElement)(Ue.A,null),(0,n.createElement)("div",{className:"gla-dashboard__filter"},(0,n.createElement)(p,{trackEventReportId:E}),y&&(0,n.createElement)((()=>(0,n.createElement)(o.Link,{href:(0,i.getNewPath)(null,"/google/reports")},(0,n.createElement)(r.A,{isPrimary:!0},(0,l.__)("View Reports","google-listings-and-ads")))),null)),(0,n.createElement)("div",{className:"gla-dashboard__performance"},(0,n.createElement)(M,null)),(0,n.createElement)("div",{className:"gla-dashboard__programs"},(0,n.createElement)(ce,{trackEventReportId:E}))),h&&(0,n.createElement)(O,{onGuideRequestClose:a}),e&&A&&(0,n.createElement)(c.A,{label:(0,l.__)("How easy was it to create a Google Ad campaign?","google-listings-and-ads"),secondLabel:(0,l.__)("How easy was it to understand the requirements for the Google Ad campaign creation?","google-listings-and-ads"),eventContext:_.K4.CAMPAIGN_CREATION_SUCCESS}))}}}]);