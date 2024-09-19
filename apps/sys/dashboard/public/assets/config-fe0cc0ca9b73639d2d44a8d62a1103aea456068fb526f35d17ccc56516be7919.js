var a="ood_config";function n(){return document.getElementById(a).dataset}function c(){let t=n();if(t.maxFileSize.length==0)return parseInt(1073742e4,10);{let e=t.maxFileSize;return parseInt(e,10)}}function o(){return n().transfersPath}function r(){return n().jobsInfoPath}function s(){return document.querySelector('meta[name="csrf-token"]').content}function f(){let t=n();return JSON.parse(t.uppyLocale)}export{s as csrfToken,r as jobsInfoPath,c as maxFileSize,o as transfersPath,f as uppyLocale};
//# sourceMappingURL=/pun/sys/dashboard/assets/config.js-20b900f0b13c3f4519ee0750c0be5a2ed172fde1096b48e1724fc0d872e80df3.map
//!
;
