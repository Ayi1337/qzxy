let response = JSON.parse($response.body);

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

$done({body: JSON.stringify(response)});
