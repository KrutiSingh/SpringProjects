const tableBody = document.querySelector("tbody");

const populate= async(value, currency)=>{
    let outputcontent ="";
    document.querySelector(".output").style.display = "block"; 
    // const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_xXpRey5ARqz01IECjrAhfuBLiCsmBzxUXULVs5st";
    // let rawresponse = await fetch(url);
    // let response = await rawresponse.json();
    
    let response = JSON.parse(`{
        "meta": {
            "last_updated_at": "2023-11-27T23:59:59Z"
        },
        "data": {
            "ADA": {
                "code": "ADA",
                "value": 2.6433251241
            },
            "AED": {
                "code": "AED",
                "value": 3.6724004009
            },
            "AFN": {
                "code": "AFN",
                "value": 69.7463812732
            },
            "ALL": {
                "code": "ALL",
                "value": 93.2626808483
            },
            "AMD": {
                "code": "AMD",
                "value": 401.3909260289
            },
            "ANG": {
                "code": "ANG",
                "value": 1.7862503533
            },
            "AOA": {
                "code": "AOA",
                "value": 826.6629247134
            },
            "ARB": {
                "code": "ARB",
                "value": 0.9829724331
            },
            "ARS": {
                "code": "ARS",
                "value": 358.9791888654
            },
            "AUD": {
                "code": "AUD",
                "value": 1.5121902934
            },
            "AVAX": {
                "code": "AVAX",
                "value": 0.0491380977
            },
            "AWG": {
                "code": "AWG",
                "value": 1.79
            },
            "AZN": {
                "code": "AZN",
                "value": 1.7
            },
            "BAM": {
                "code": "BAM",
                "value": 1.7883703324
            },
            "BBD": {
                "code": "BBD",
                "value": 2
            },
            "BDT": {
                "code": "BDT",
                "value": 110.1056187179
            },
            "BGN": {
                "code": "BGN",
                "value": 1.7788002569
            },
            "BHD": {
                "code": "BHD",
                "value": 0.376
            },
            "BIF": {
                "code": "BIF",
                "value": 2844.1655573231
            },
            "BMD": {
                "code": "BMD",
                "value": 1
            },
            "BNB": {
                "code": "BNB",
                "value": 0.0042980667
            },
            "BND": {
                "code": "BND",
                "value": 1.3355002539
            },
            "BOB": {
                "code": "BOB",
                "value": 6.9250208083
            },
            "BRL": {
                "code": "BRL",
                "value": 4.9019707003
            },
            "BSD": {
                "code": "BSD",
                "value": 1
            },
            "BTC": {
                "code": "BTC",
                "value": 0.0000268162
            },
            "BTN": {
                "code": "BTN",
                "value": 83.2789949108
            },
            "BUSD": {
                "code": "BUSD",
                "value": 0.9995353677
            },
            "BWP": {
                "code": "BWP",
                "value": 13.537671984
            },
            "BYN": {
                "code": "BYN",
                "value": 3.2948475105
            },
            "BYR": {
                "code": "BYR",
                "value": 32948.482723659
            },
            "BZD": {
                "code": "BZD",
                "value": 2
            },
            "CAD": {
                "code": "CAD",
                "value": 1.360690194
            },
            "CDF": {
                "code": "CDF",
                "value": 2481.9836039141
            },
            "CHF": {
                "code": "CHF",
                "value": 0.880070105
            },
            "CLF": {
                "code": "CLF",
                "value": 0.0234300034
            },
            "CLP": {
                "code": "CLP",
                "value": 870.6680773945
            },
            "CNY": {
                "code": "CNY",
                "value": 7.152290915
            },
            "COP": {
                "code": "COP",
                "value": 3971.3128174291
            },
            "CRC": {
                "code": "CRC",
                "value": 530.839024136
            },
            "CUC": {
                "code": "CUC",
                "value": 1
            },
            "CUP": {
                "code": "CUP",
                "value": 24
            },
            "CVE": {
                "code": "CVE",
                "value": 100.6372516293
            },
            "CZK": {
                "code": "CZK",
                "value": 22.1279138606
            },
            "DAI": {
                "code": "DAI",
                "value": 1.0012996966
            },
            "DJF": {
                "code": "DJF",
                "value": 177.721
            },
            "DKK": {
                "code": "DKK",
                "value": 6.803220736
            },
            "DOP": {
                "code": "DOP",
                "value": 56.7748558946
            },
            "DOT": {
                "code": "DOT",
                "value": 0.1939026037
            },
            "DZD": {
                "code": "DZD",
                "value": 134.6270993279
            },
            "EGP": {
                "code": "EGP",
                "value": 30.9034641204
            },
            "ERN": {
                "code": "ERN",
                "value": 15
            },
            "ETB": {
                "code": "ETB",
                "value": 56.2168557441
            },
            "ETH": {
                "code": "ETH",
                "value": 0.0004928209
            },
            "EUR": {
                "code": "EUR",
                "value": 0.9125401682
            },
            "FJD": {
                "code": "FJD",
                "value": 2.2316202317
            },
            "FKP": {
                "code": "FKP",
                "value": 0.7915252695
            },
            "GBP": {
                "code": "GBP",
                "value": 0.7916001454
            },
            "GEL": {
                "code": "GEL",
                "value": 2.707950327
            },
            "GGP": {
                "code": "GGP",
                "value": 0.7915250495
            },
            "GHS": {
                "code": "GHS",
                "value": 11.953442051
            },
            "GIP": {
                "code": "GIP",
                "value": 0.7915250646
            },
            "GMD": {
                "code": "GMD",
                "value": 58.6372678547
            },
            "GNF": {
                "code": "GNF",
                "value": 8544.1647369381
            },
            "GTQ": {
                "code": "GTQ",
                "value": 7.8171613504
            },
            "GYD": {
                "code": "GYD",
                "value": 208.8730938125
            },
            "HKD": {
                "code": "HKD",
                "value": 7.7874014526
            },
            "HNL": {
                "code": "HNL",
                "value": 24.6820938245
            },
            "HRK": {
                "code": "HRK",
                "value": 7.0429410932
            },
            "HTG": {
                "code": "HTG",
                "value": 132.4644337213
            },
            "HUF": {
                "code": "HUF",
                "value": 346.1196004924
            },
            "IDR": {
                "code": "IDR",
                "value": 15474.885179024
            },
            "ILS": {
                "code": "ILS",
                "value": 3.7039106865
            },
            "IMP": {
                "code": "IMP",
                "value": 0.7915251634
            },
            "INR": {
                "code": "INR",
                "value": 83.3011561308
            },
            "IQD": {
                "code": "IQD",
                "value": 1306.9758024157
            },
            "IRR": {
                "code": "IRR",
                "value": 42008.776514272
            },
            "ISK": {
                "code": "ISK",
                "value": 136.9837047465
            },
            "JEP": {
                "code": "JEP",
                "value": 0.7915255708
            },
            "JMD": {
                "code": "JMD",
                "value": 156.974049131
            },
            "JOD": {
                "code": "JOD",
                "value": 0.71
            },
            "JPY": {
                "code": "JPY",
                "value": 148.4627274499
            },
            "KES": {
                "code": "KES",
                "value": 152.996245838
            },
            "KGS": {
                "code": "KGS",
                "value": 88.6935529309
            },
            "KHR": {
                "code": "KHR",
                "value": 4109.4949195489
            },
            "KMF": {
                "code": "KMF",
                "value": 450.513827148
            },
            "KPW": {
                "code": "KPW",
                "value": 900.0057486577
            },
            "KRW": {
                "code": "KRW",
                "value": 1295.9408798243
            },
            "KWD": {
                "code": "KWD",
                "value": 0.3072700322
            },
            "KYD": {
                "code": "KYD",
                "value": 0.83333
            },
            "KZT": {
                "code": "KZT",
                "value": 456.479356105
            },
            "LAK": {
                "code": "LAK",
                "value": 20718.937424945
            },
            "LBP": {
                "code": "LBP",
                "value": 15010.846700611
            },
            "LKR": {
                "code": "LKR",
                "value": 327.1274847816
            },
            "LRD": {
                "code": "LRD",
                "value": 188.0872075982
            },
            "LSL": {
                "code": "LSL",
                "value": 18.7467326812
            },
            "LTC": {
                "code": "LTC",
                "value": 0.0144502102
            },
            "LTL": {
                "code": "LTL",
                "value": 3.1509020336
            },
            "LVL": {
                "code": "LVL",
                "value": 0.6413499161
            },
            "LYD": {
                "code": "LYD",
                "value": 4.8073306481
            },
            "MAD": {
                "code": "MAD",
                "value": 10.0670519031
            },
            "MATIC": {
                "code": "MATIC",
                "value": 1.3467494043
            },
            "MDL": {
                "code": "MDL",
                "value": 17.7431429221
            },
            "MGA": {
                "code": "MGA",
                "value": 4495.5362574029
            },
            "MKD": {
                "code": "MKD",
                "value": 56.3723305568
            },
            "MMK": {
                "code": "MMK",
                "value": 2094.6680693908
            },
            "MNT": {
                "code": "MNT",
                "value": 3464.1424533922
            },
            "MOP": {
                "code": "MOP",
                "value": 8.0012015023
            },
            "MRO": {
                "code": "MRO",
                "value": 356.999828
            },
            "MUR": {
                "code": "MUR",
                "value": 44.136206695
            },
            "MVR": {
                "code": "MVR",
                "value": 15.452082371
            },
            "MWK": {
                "code": "MWK",
                "value": 1683.6125429554
            },
            "MXN": {
                "code": "MXN",
                "value": 17.1651129538
            },
            "MYR": {
                "code": "MYR",
                "value": 4.6803604987
            },
            "MZN": {
                "code": "MZN",
                "value": 63.6888797251
            },
            "NAD": {
                "code": "NAD",
                "value": 18.6075731676
            },
            "NGN": {
                "code": "NGN",
                "value": 799.5425439194
            },
            "NIO": {
                "code": "NIO",
                "value": 36.703781418
            },
            "NOK": {
                "code": "NOK",
                "value": 10.6294020556
            },
            "NPR": {
                "code": "NPR",
                "value": 132.9837281358
            },
            "NZD": {
                "code": "NZD",
                "value": 1.6386902997
            },
            "OMR": {
                "code": "OMR",
                "value": 0.3841300734
            },
            "OP": {
                "code": "OP",
                "value": 0.5800647355
            },
            "PAB": {
                "code": "PAB",
                "value": 0.9990901528
            },
            "PEN": {
                "code": "PEN",
                "value": 3.7210806624
            },
            "PGK": {
                "code": "PGK",
                "value": 3.7419603776
            },
            "PHP": {
                "code": "PHP",
                "value": 55.5110708868
            },
            "PKR": {
                "code": "PKR",
                "value": 285.6071185794
            },
            "PLN": {
                "code": "PLN",
                "value": 3.96154077
            },
            "PYG": {
                "code": "PYG",
                "value": 7466.4134856543
            },
            "QAR": {
                "code": "QAR",
                "value": 3.6392706781
            },
            "RON": {
                "code": "RON",
                "value": 4.5359107574
            },
            "RSD": {
                "code": "RSD",
                "value": 106.5655666753
            },
            "RUB": {
                "code": "RUB",
                "value": 89.1613904433
            },
            "RWF": {
                "code": "RWF",
                "value": 1239.0008288954
            },
            "SAR": {
                "code": "SAR",
                "value": 3.7453307218
            },
            "SBD": {
                "code": "SBD",
                "value": 8.4465583615
            },
            "SCR": {
                "code": "SCR",
                "value": 14.524482137
            },
            "SDG": {
                "code": "SDG",
                "value": 601.5
            },
            "SEK": {
                "code": "SEK",
                "value": 10.4186015068
            },
            "SGD": {
                "code": "SGD",
                "value": 1.3363201602
            },
            "SHP": {
                "code": "SHP",
                "value": 0.7916000998
            },
            "SLL": {
                "code": "SLL",
                "value": 22490.622262596
            },
            "SOL": {
                "code": "SOL",
                "value": 0.0181601877
            },
            "SOS": {
                "code": "SOS",
                "value": 571.0417018955
            },
            "SRD": {
                "code": "SRD",
                "value": 38.0061147415
            },
            "STD": {
                "code": "STD",
                "value": 22607.713020731
            },
            "SVC": {
                "code": "SVC",
                "value": 8.75
            },
            "SYP": {
                "code": "SYP",
                "value": 13001.807159277
            },
            "SZL": {
                "code": "SZL",
                "value": 18.6241220062
            },
            "THB": {
                "code": "THB",
                "value": 35.0164735362
            },
            "TJS": {
                "code": "TJS",
                "value": 10.915331116
            },
            "TMT": {
                "code": "TMT",
                "value": 3.5
            },
            "TND": {
                "code": "TND",
                "value": 3.1049406047
            },
            "TOP": {
                "code": "TOP",
                "value": 2.3430104621
            },
            "TRY": {
                "code": "TRY",
                "value": 28.8828153
            },
            "TTD": {
                "code": "TTD",
                "value": 6.7675111517
            },
            "TWD": {
                "code": "TWD",
                "value": 31.5632662114
            },
            "TZS": {
                "code": "TZS",
                "value": 2502.6602112166
            },
            "UAH": {
                "code": "UAH",
                "value": 36.695776639
            },
            "UGX": {
                "code": "UGX",
                "value": 3786.3945928264
            },
            "USD": {
                "code": "USD",
                "value": 1
            },
            "USDC": {
                "code": "USDC",
                "value": 1.0006763986
            },
            "USDT": {
                "code": "USDT",
                "value": 1.0002429631
            },
            "UYU": {
                "code": "UYU",
                "value": 39.290807511
            },
            "UZS": {
                "code": "UZS",
                "value": 12301.982502569
            },
            "VEF": {
                "code": "VEF",
                "value": 3542481.508359
            },
            "VND": {
                "code": "VND",
                "value": 24221.93708646
            },
            "VUV": {
                "code": "VUV",
                "value": 119.7793139077
            },
            "WST": {
                "code": "WST",
                "value": 2.7401789744
            },
            "XAF": {
                "code": "XAF",
                "value": 598.5768038434
            },
            "XAG": {
                "code": "XAG",
                "value": 0.0405518781
            },
            "XAU": {
                "code": "XAU",
                "value": 0.000496241
            },
            "XCD": {
                "code": "XCD",
                "value": 2.7
            },
            "XDR": {
                "code": "XDR",
                "value": 0.7500300932
            },
            "XOF": {
                "code": "XOF",
                "value": 598.5768192059
            },
            "XPD": {
                "code": "XPD",
                "value": 0.000930301
            },
            "XPF": {
                "code": "XPF",
                "value": 108.8097708257
            },
            "XPT": {
                "code": "XPT",
                "value": 0.0010783911
            },
            "XRP": {
                "code": "XRP",
                "value": 1.6509755824
            },
            "YER": {
                "code": "YER",
                "value": 249.8092614126
            },
            "ZAR": {
                "code": "ZAR",
                "value": 18.6500822332
            },
            "ZMK": {
                "code": "ZMK",
                "value": 9001.2
            },
            "ZMW": {
                "code": "ZMW",
                "value": 23.6985342912
            },
            "ZWL": {
                "code": "ZWL",
                "value": 5762.8414699337
            }
        }
    }`);
    console.log(response);
    
    for (let key of Object.keys(response["data"])) {
        outputcontent+= `
        <tr>
            <td>${key}</td>
            <td>${response["data"][key]["code"]}</td>
            <td>${(response["data"][key]["value"] * value).toFixed(3)}</td>
        </tr>`
        
    }
    tableBody.innerHTML = outputcontent;//
}


const btn = document.querySelector(".btn");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const base = document.querySelector("select[name='currency']").value;
    populate(value,base);
})

