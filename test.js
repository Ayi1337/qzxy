let url = $request.url;
let response = JSON.parse($response.body);

// 检查URL并相应地修改响应体
if (url.indexOf('/order/downRate/bluetooth/rateOrder') !== -1 || url.indexOf('/device/smallType/id') !== -1) {
    // 修改字段值
    if (response.hasOwnProperty("withholdMoney")) {
        response["withholdMoney"] = 0;
    }
    if (response.hasOwnProperty("preDeductMoneySend")) {
        response["preDeductMoneySend"] = "0";
    }
    if (response.hasOwnProperty("preDeductMoney")) {
        response["preDeductMoney"] = "0";
    }
}

$done({body: JSON.stringify(response)});
