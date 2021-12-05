function FindProxyForURL(url, host){
var P="PROXY ";
var PROXY_DIRECT="DIRECT";
var u=url.toLowerCase();
var h=host.toLowerCase();
var BLACK="PROXY localhost:8080";
var WHITE=PROXY_DIRECT;
var r;

function id(ar){for(var i=0;i<ar.length;i++){if(dnsDomainIs(h,ar[i]))return i}return null}
function ids(ar){for(var i=0;i<ar.length;i++){if(shExpMatch(u,"*://"+ar[i]+"/*"))return i}return null}
function is(ar){for(var i=0;i<ar.length;i++){if(shExpMatch(u,ar[i]))return i}return null}
function ii(ar,ar2){for(var i=0;i<ar.length;i++){if(isInNet(h,ar[i][0],ar2[ar[i][1]]))return i}return null}
function n(arg){return arg!=null}

var WHITE_DOMAINS=[];
var WHITE_SUBDOMAINS=[];
var WHITE_URLS=[];
var WHITE_NETWORKS=[];
var WHITE_MASKS=[];

if(n(r=id(WHITE_DOMAINS))){return WHITE}
if(n(r=ids(WHITE_SUBDOMAINS))){return WHITE}
if(n(r=is(WHITE_URLS))){return WHITE}
if(n(r=ii(WHITE_NETWORKS,WHITE_MASKS))){return WHITE}

var BLACK_DOMAINS=["gdmf.apple.com","mesu.apple.com"];
var BLACK_SUBDOMAINS=[];
var BLACK_URLS=["http://*.admicro.vn/*","http://*.cheap-ads.net/*"];
var BLACK_NETWORKS=[];
var BLACK_MASKS=[];

if(n(r=id(BLACK_DOMAINS))){return BLACK}
if(n(r=ids(BLACK_SUBDOMAINS))){return BLACK}
if(n(r=is(BLACK_URLS))){return BLACK}
if(n(r=ii(BLACK_NETWORKS,BLACK_MASKS))){return BLACK}

var IN_DOMAINS=[];
var OUT_DOMAINS=[];
var IN_SUBDOMAINS=[];
var OUT_SUBDOMAINS=[];
var IN_URLS=[];
var OUT_URLS=[];
var IN_NET=[];
var IN_MASK=[];
var OUT_NET=[];

if(n(r=id(IN_DOMAINS))){return P+OUT_DOMAINS[r]}
if(n(r=ids(IN_SUBDOMAINS))){return P+OUT_SUBDOMAINS[r]}
if(n(r=is(IN_URLS))){return P+OUT_URLS[r]}
if(n(r=ii(IN_NET,IN_MASK))){return P+OUT_NET[r]}

return PROXY_DIRECT;
}
