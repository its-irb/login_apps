var t="product_cli_modal",l=`${t}_spinner`,a=`${t}_header`,u=`${t}_button`,c=`<button id="${u}" class="close float-right" data-dismiss="modal">&times;</button>`;jQuery(function(){$('[data-toggle="cli"]').on("click",n=>h(n)),$(`#${a}`).replaceWith(`
    <h2>
      <span>no action</pan>
      ${c}
    </h2>
  `)});function h(n){let o=$(`#${n.target.id}`);if(o===void 0||o.data()==={})return;let d=o.data("title"),i=o.data("cmd"),r=o.data("target"),s=`$ <code><strong>${i}</strong></code>
`;$(`#${a}`).replaceWith(`
    <h2>
      <span>${d}</pan>
      ${c}
    </h2>
  `);let e=new XMLHttpRequest;e.onreadystatechange=function(){this.status==200&&($(`#${t} .product-cli-body`).html(`${s}${this.responseText}`),$(`#${t} .product-cli-body`).scrollTop($(`#${t} .product-cli-body`)[0].scrollHeight))},e.onloadend=function(){$(`#${l}`).replaceWith(`
      <button class="close float-right" data-dismiss="modal">&times;</button>
    `),this.status!=200&&$(`#${t} .product-cli-body`).html(`${s}A fatal error has occurred`)},e.open("PATCH",r),e.setRequestHeader("X-CSRF-Token",$('meta[name="csrf-token"]').attr("content")),e.setRequestHeader("X-Requested-With","XMLHttpRequest"),e.send(),window.jQuery(`#${t}`).modal("show")}
//# sourceMappingURL=/pun/sys/dashboard/assets/products_show.js-26b1473a711cc10e14a86f101b374527f62a1434e6cc7b59ea4f1783ffaa873b.map
//!
;
