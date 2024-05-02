# Cookie policy

## Cookie recive policy: Brower fllow same site mathing policy for sending cookie along with request.

TLDR: This is meaning not meaning one site cookie will be send to another site but lets say for a site b.local.com
cookie will be send along with the request from where and which site the request are contexted.

### same site:

###### same site is true while domain match. example (a.local.com and b.local.com are treated as same site)

- when user on a.local.com and request for a page on a.local.com then any cookies is set with a.local.com on browser will send along with the request
- when user on a.local.com and request for a resource on b.local.com then all cookie will send along with b.local.com reqeust except fetch, you have to explicitly add options credential: true but a.local.com to a.local.com any resource fetching fetch automatically add cookie along with request.
- If b.local.com is inside a.local.com iframe even then b.local.com cookie will send along with reqeust.
- If from differnt site to reqeust b.local.com then only samesite=none cookie will be send along with the request. and for samesite=none working cookie must be secure cookie.
- Same applied as iframe as well.. when b.local.com is on iframe on any other site browser will send only samesite=none cookie that are seted for b.local.com
