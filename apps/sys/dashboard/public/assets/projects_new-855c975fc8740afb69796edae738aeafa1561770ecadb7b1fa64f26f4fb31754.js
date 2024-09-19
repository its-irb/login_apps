jQuery(function(){$("#project_template").on("change",t=>a(t))});function a(t){let e=$(`#project_template option[value="${t.target.value}"]`)[0];if(e===void 0)return;let c=e.label,n=e.dataset.description,o=e.dataset.icon;$("#project_name").val(c),$("#project_description").val(n),$("#product_icon_select").val(o),$("#product_icon_select").trigger("change")}
//# sourceMappingURL=/pun/sys/dashboard/assets/projects_new.js-65a56acee5977872754cbf9a0d1f8fe47bab14dd50f4415a7bab0db44dace577.map
//!
;
