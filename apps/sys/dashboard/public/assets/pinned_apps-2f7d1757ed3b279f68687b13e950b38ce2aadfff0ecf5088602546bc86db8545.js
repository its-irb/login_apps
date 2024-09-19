jQuery(function(){let a='<div class="app-launcher-spinner"><div class="spinner-border" role="status"></div></div>';function r(e){$(e.currentTarget).before(a),$(".app-launcher-container").addClass("app-launcher-disabled"),$("[data-toggle='launcher-button']").removeClass("app-launcher-hover")}function c(){$(".app-launcher-container").removeClass("app-launcher-disabled"),$("[data-toggle='launcher-button']").addClass("app-launcher-hover"),$("div.app-launcher-spinner").remove()}$("[data-toggle='launcher-button'] .launcher-click").each((e,n)=>{$(n).on("click",r)}),$(window).on("pageshow",c)});
//# sourceMappingURL=/pun/sys/dashboard/assets/pinned_apps.js-05b86e2cd35f6f1e7e7b5eb4500fe0046dc179607a911e91d9d17b7a1f7d3e2a.map
//!
;
