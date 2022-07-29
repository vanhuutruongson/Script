/*
PicsArt 解锁高级功能

***************************
QuantumultX:

[rewrite_local]
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://raw.githubusercontent.com/vanhuutruongson/NobyDa/Script/master/Surge/JS/PicsArt.js

[mitm]
hostname = api.picsart.c*, api.meiease.c*

***************************
Surge4 or Loon:

[Script]
http-response https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/vanhuutruongson/NobyDa/Script/master/Surge/JS/PicsArt.js

[MITM]
hostname = api.picsart.c*, api.meiease.c*

**************************/

var obj = JSON.parse($response.body);

obj={
  "status": "success",
  "response": [
    {
      "status": "SUBSCRIPTION_PURCHASED",
      "is_trial": true,
      "order_id": "450001131447088",
      "plan_meta": {
        "id": "com.picsart.studio.subscription_plus_monthly",
        "frequency": "monthly",
        "type": "renewable",
        "scope_id": "full",
        "product_id": "subscription_plus_monthly",
        "description": "plus"
      },
      "limitation": {
        "max_count": 10,
        "limits_exceeded": false
      },
      "expire_date": 1753929830000,
      "purchase_date": 1653670630000,
      "subscription_id": "com.picsart.studio.subscription_plus_monthly",
      "original_order_id": "450001131447088",
      "is_eligible_for_grant": false,
      "is_eligible_for_introductory": false,
      "reason": "ok"
    }
  ]
}
$done({body: JSON.stringify(obj)});
