let data = {}
// is a number? (check if is an int or string number )
function isANumber(str) {
    let i = 0;
    let result = false;
    if (typeof str === 'string') {
        str.split("").forEach(e => {
            if (/[0-9]/.test(e)) {
                i++
            } else {
                console.log("CARNN Error: Unexpected token '" + e + "' at pos " + i + " on '" + str + "'")
            }
        });
        if (i === str.length) {
            result = true
        }
    } else {
        console.log("CARNN Error: Please provide a string or number.")
    }
    return result
 } 
function rd1(str) {
    let result = "not a d1";
    if (str.length === 1) { // d1
        result = data.d1[parseInt(str)]
    }
    return result;
 } 
function rd2(str) {
    let result = "not a d2";
    const splited = str.split('');
    if (splited[0] === "0") {
        result = rd1(str.substring(1))
    } else {
        if (splited.length === 2) { // d2
            if (splited[0] === "1") {
                result = data.d2[0][parseInt(splited[1])];
            } else {
                if (splited[1] === "0") {
                    result = data.d2[parseInt(splited[0]) - 1];
                } else {
                    result = data.d2[parseInt(splited[0]) - 1] + " " + rd1(splited[1]);
                }
            }
        }
    }
    return result
 } 
function rd3(str) {
    let result = "not a d3";
    const splited = str.split('');
    if (splited[0] === "0") {
        result = rd2(str.substring(1))
    } else {
        if (splited.length === 3) { // d3
            if (splited[0] === "1") {
                if ((splited[1] === "0") && (splited[2] === "0")) {
                    result = data.d3[0][0]
                } else {
                    result = data.d3[0][1] + " " + rd2(str.substring(1))
                }
            } else {
                result = data.d3[parseInt(splited[0]) - 1] + " " + rd2(str.substring(1));
            }
        }
    }
    return result
 } 
function rd4(str) {
    let result = "not a d4";
    const splited = str.split('');
    if (splited[0] === "0") {
        result = rd3(str.substring(1))
    } else {
        if (splited.length === 4) { // d4
            if (splited[0] === "1") {
                result = data.d4 + " " + rd3(str.substring(1))
            } else {
                if (splited[1] === 0) {
                    result = rd1(splited[0]) + " " + data.d4 + " " + rd3(str.substring(1))
                } else {
                    result = rd1(splited[0]) + " " + data.d4 + " " + rd3(str.substring(1))
                }
            }
        }
    }
    return result
 } 
function rd5(str) {
    let result = "not a d5";
    const splited = str.split('');
    if (splited[0] === "0") {
        result = rd4(str.substring(1))
    } else {
        if (splited.length === 5) { // d5
            result = rd2(str.substring(0, 2)) + " " + data.d4 + "  " + rd3(str.substring(2))
        }
    }
    return result
 } 
function rd6(str) {
    let result = "not a d6";
    const splited = str.split('');
    if (splited[0] === "0") {
        result = rd5(str.substring(1))
    } else {
        if (splited.length === 6) { // d6
            result = rd3(str.substring(0, 3)) + " " + data.d4 + " " + rd3(str.substring(3))
        }
    }
    return result
} 
function rd7(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd6(str.substring(1))
    } else {
        if (splited.length === 7) { // data.d7
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d7[0] + " e " + rd6(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d7[1] + " " + rd6(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd8(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd7(str.substring(1))
    } else {
        if (splited.length === 8) { // data.d8
            result = rd2(str.substring(0, 2)) + " " + data.d7[1] + " " + rd6(str.substring(2))
        }
    }
    return normalize(result)
}
function rd9(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd8(str.substring(1))
    } else {
        if (splited.length === 9) { // data.d9
            result = rd3(str.substring(0, 3)) + " " + data.d7[1] + " " + rd6(str.substring(3))
        }
    }
    return normalize(result)
}
function rd10(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd9(str.substring(1))
    } else {
        if (splited.length === 10) { // data.d10
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d10[0] + " e " + rd9(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d10[1] + " " + rd9(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd11(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd10(str.substring(1))
    } else {
        if (splited.length === 11) { // data.d11
            result = rd2(str.substring(0, 2)) + " " + data.d10[1] + " " + rd9(str.substring(2))
        }
    }
    return normalize(result)
}
function rd12(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd11(str.substring(1))
    } else {
        if (splited.length === 12) { // data.d12
            result = rd3(str.substring(0, 3)) + " " + data.d10[1] + " " + rd9(str.substring(3))
        }
    }
    return normalize(result)
}
function rd13(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd12(str.substring(1))
    } else {
        if (splited.length === 13) { // data.d13
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d13[0] + " e " + rd12(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d13[1] + " " + rd12(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd14(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd13(str.substring(1))
    } else {
        if (splited.length === 14) { // data.d14
            result = rd2(str.substring(0, 2)) + " " + data.d13[1] + " " + rd12(str.substring(2))
        }
    }
    return normalize(result)
}
function rd15(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd14(str.substring(1))
    } else {
        if (splited.length === 15) { // data.d15
            result = rd3(str.substring(0, 3)) + " " + data.d13[1] + " " + rd12(str.substring(3))
        }
    }
    return normalize(result)
}
function rd16(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd15(str.substring(1))
    } else {
        if (splited.length === 16) { // data.d16
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d16[0] + " e " + rd15(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d16[1] + " " + rd15(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd17(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd16(str.substring(1))
    } else {
        if (splited.length === 17) { // data.d17
            result = rd2(str.substring(0, 2)) + " " + data.d16[1] + " " + rd15(str.substring(2))
        }
    }
    return normalize(result)
}
function rd18(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd17(str.substring(1))
    } else {
        if (splited.length === 18) { // data.d18
            result = rd3(str.substring(0, 3)) + " " + data.d16[1] + " " + rd15(str.substring(3))
        }
    }
    return normalize(result)
}
function rd19(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd18(str.substring(1))
    } else {
        if (splited.length === 19) { // data.d19
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d19[0] + " e " + rd18(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d19[1] + " " + rd18(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd20(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd19(str.substring(1))
    } else {
        if (splited.length === 20) { // data.d20
            result = rd2(str.substring(0, 2)) + " " + data.d19[1] + " " + rd18(str.substring(2))
        }
    }
    return normalize(result)
}
function rd21(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd20(str.substring(1))
    } else {
        if (splited.length === 21) { // data.d21
            result = rd3(str.substring(0, 3)) + " " + data.d19[1] + " " + rd18(str.substring(3))
        }
    }
    return normalize(result)
}
function rd22(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd21(str.substring(1))
    } else {
        if (splited.length === 22) { // data.d22
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d22[0] + " e " + rd21(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d22[1] + " " + rd21(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd23(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd22(str.substring(1))
    } else {
        if (splited.length === 23) { // data.d23
            result = rd2(str.substring(0, 2)) + " " + data.d22[1] + " " + rd21(str.substring(2))
        }
    }
    return normalize(result)
}
function rd24(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd23(str.substring(1))
    } else {
        if (splited.length === 24) { // data.d24
            result = rd3(str.substring(0, 3)) + " " + data.d22[1] + " " + rd21(str.substring(3))
        }
    }
    return normalize(result)
}
function rd25(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd24(str.substring(1))
    } else {
        if (splited.length === 25) { // data.d25
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d25[0] + " e " + rd24(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d25[1] + " " + rd24(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd26(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd25(str.substring(1))
    } else {
        if (splited.length === 26) { // data.d26
            result = rd2(str.substring(0, 2)) + " " + data.d25[1] + " " + rd24(str.substring(2))
        }
    }
    return normalize(result)
}
function rd27(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd26(str.substring(1))
    } else {
        if (splited.length === 27) { // data.d27
            result = rd3(str.substring(0, 3)) + " " + data.d25[1] + " " + rd24(str.substring(3))
        }
    }
    return normalize(result)
}
function rd28(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd27(str.substring(1))
    } else {
        if (splited.length === 28) { // data.d28
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d28[0] + " e " + rd27(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d28[1] + " " + rd27(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd29(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd28(str.substring(1))
    } else {
        if (splited.length === 29) { // data.d29
            result = rd2(str.substring(0, 2)) + " " + data.d28[1] + " " + rd27(str.substring(2))
        }
    }
    return normalize(result)
}
function rd30(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd29(str.substring(1))
    } else {
        if (splited.length === 30) { // data.d30
            result = rd3(str.substring(0, 3)) + " " + data.d28[1] + " " + rd27(str.substring(3))
        }
    }
    return normalize(result)
}
function rd31(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd30(str.substring(1))
    } else {
        if (splited.length === 31) { // data.d31
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d31[0] + " e " + rd30(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d31[1] + " " + rd30(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd32(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd31(str.substring(1))
    } else {
        if (splited.length === 32) { // data.d32
            result = rd2(str.substring(0, 2)) + " " + data.d31[1] + " " + rd30(str.substring(2))
        }
    }
    return normalize(result)
}
function rd33(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd32(str.substring(1))
    } else {
        if (splited.length === 33) { // data.d33
            result = rd3(str.substring(0, 3)) + " " + data.d31[1] + " " + rd30(str.substring(3))
        }
    }
    return normalize(result)
}
function rd34(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd33(str.substring(1))
    } else {
        if (splited.length === 34) { // data.d34
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d34[0] + " e " + rd33(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d34[1] + " " + rd33(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd35(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd34(str.substring(1))
    } else {
        if (splited.length === 35) { // data.d35
            result = rd2(str.substring(0, 2)) + " " + data.d34[1] + " " + rd33(str.substring(2))
        }
    }
    return normalize(result)
}
function rd36(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd35(str.substring(1))
    } else {
        if (splited.length === 36) { // data.d36
            result = rd3(str.substring(0, 3)) + " " + data.d34[1] + " " + rd33(str.substring(3))
        }
    }
    return normalize(result)
}
function rd37(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd36(str.substring(1))
    } else {
        if (splited.length === 37) { // data.d37
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d37[0] + " e " + rd36(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d37[1] + " " + rd36(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd38(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd37(str.substring(1))
    } else {
        if (splited.length === 38) { // data.d38
            result = rd2(str.substring(0, 2)) + " " + data.d37[1] + " " + rd36(str.substring(2))
        }
    }
    return normalize(result)
}
function rd39(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd38(str.substring(1))
    } else {
        if (splited.length === 39) { // data.d39
            result = rd3(str.substring(0, 3)) + " " + data.d37[1] + " " + rd36(str.substring(3))
        }
    }
    return normalize(result)
}
function rd40(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd39(str.substring(1))
    } else {
        if (splited.length === 40) { // data.d40
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d40[0] + " e " + rd39(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d40[1] + " " + rd39(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd41(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd40(str.substring(1))
    } else {
        if (splited.length === 41) { // data.d41
            result = rd2(str.substring(0, 2)) + " " + data.d40[1] + " " + rd39(str.substring(2))
        }
    }
    return normalize(result)
}
function rd42(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd41(str.substring(1))
    } else {
        if (splited.length === 42) { // data.d42
            result = rd3(str.substring(0, 3)) + " " + data.d40[1] + " " + rd39(str.substring(3))
        }
    }
    return normalize(result)
}
function rd43(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd42(str.substring(1))
    } else {
        if (splited.length === 43) { // data.d43
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d43[0] + " e " + rd42(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d43[1] + " " + rd42(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd44(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd43(str.substring(1))
    } else {
        if (splited.length === 44) { // data.d44
            result = rd2(str.substring(0, 2)) + " " + data.d43[1] + " " + rd42(str.substring(2))
        }
    }
    return normalize(result)
}
function rd45(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd44(str.substring(1))
    } else {
        if (splited.length === 45) { // data.d45
            result = rd3(str.substring(0, 3)) + " " + data.d43[1] + " " + rd42(str.substring(3))
        }
    }
    return normalize(result)
}
function rd46(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd45(str.substring(1))
    } else {
        if (splited.length === 46) { // data.d46
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d46[0] + " e " + rd45(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d46[1] + " " + rd45(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd47(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd46(str.substring(1))
    } else {
        if (splited.length === 47) { // data.d47
            result = rd2(str.substring(0, 2)) + " " + data.d46[1] + " " + rd45(str.substring(2))
        }
    }
    return normalize(result)
}
function rd48(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd47(str.substring(1))
    } else {
        if (splited.length === 48) { // data.d48
            result = rd3(str.substring(0, 3)) + " " + data.d46[1] + " " + rd45(str.substring(3))
        }
    }
    return normalize(result)
}
function rd49(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd48(str.substring(1))
    } else {
        if (splited.length === 49) { // data.d49
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d49[0] + " e " + rd48(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d49[1] + " " + rd48(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd50(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd49(str.substring(1))
    } else {
        if (splited.length === 50) { // data.d50
            result = rd2(str.substring(0, 2)) + " " + data.d49[1] + " " + rd48(str.substring(2))
        }
    }
    return normalize(result)
}
function rd51(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd50(str.substring(1))
    } else {
        if (splited.length === 51) { // data.d51
            result = rd3(str.substring(0, 3)) + " " + data.d49[1] + " " + rd48(str.substring(3))
        }
    }
    return normalize(result)
}
function rd52(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd51(str.substring(1))
    } else {
        if (splited.length === 52) { // data.d52
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d52[0] + " e " + rd51(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d52[1] + " " + rd51(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd53(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd52(str.substring(1))
    } else {
        if (splited.length === 53) { // data.d53
            result = rd2(str.substring(0, 2)) + " " + data.d52[1] + " " + rd51(str.substring(2))
        }
    }
    return normalize(result)
}
function rd54(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd53(str.substring(1))
    } else {
        if (splited.length === 54) { // data.d54
            result = rd3(str.substring(0, 3)) + " " + data.d52[1] + " " + rd51(str.substring(3))
        }
    }
    return normalize(result)
}
function rd55(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd54(str.substring(1))
    } else {
        if (splited.length === 55) { // data.d55
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d55[0] + " e " + rd54(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d55[1] + " " + rd54(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd56(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd55(str.substring(1))
    } else {
        if (splited.length === 56) { // data.d56
            result = rd2(str.substring(0, 2)) + " " + data.d55[1] + " " + rd54(str.substring(2))
        }
    }
    return normalize(result)
}
function rd57(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd56(str.substring(1))
    } else {
        if (splited.length === 57) { // data.d57
            result = rd3(str.substring(0, 3)) + " " + data.d55[1] + " " + rd54(str.substring(3))
        }
    }
    return normalize(result)
}
function rd58(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd57(str.substring(1))
    } else {
        if (splited.length === 58) { // data.d58
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d58[0] + " e " + rd57(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d58[1] + " " + rd57(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd59(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd58(str.substring(1))
    } else {
        if (splited.length === 59) { // data.d59
            result = rd2(str.substring(0, 2)) + " " + data.d58[1] + " " + rd57(str.substring(2))
        }
    }
    return normalize(result)
}
function rd60(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd59(str.substring(1))
    } else {
        if (splited.length === 60) { // data.d60
            result = rd3(str.substring(0, 3)) + " " + data.d58[1] + " " + rd57(str.substring(3))
        }
    }
    return normalize(result)
}
function rd61(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd60(str.substring(1))
    } else {
        if (splited.length === 61) { // data.d61
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d61[0] + " e " + rd60(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d61[1] + " " + rd60(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd62(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd61(str.substring(1))
    } else {
        if (splited.length === 62) { // data.d62
            result = rd2(str.substring(0, 2)) + " " + data.d61[1] + " " + rd60(str.substring(2))
        }
    }
    return normalize(result)
}
function rd63(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd62(str.substring(1))
    } else {
        if (splited.length === 63) { // data.d63
            result = rd3(str.substring(0, 3)) + " " + data.d61[1] + " " + rd60(str.substring(3))
        }
    }
    return normalize(result)
}
function rd64(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd63(str.substring(1))
    } else {
        if (splited.length === 64) { // data.d64
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d64[0] + " e " + rd63(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d64[1] + " " + rd63(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd65(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd64(str.substring(1))
    } else {
        if (splited.length === 65) { // data.d65
            result = rd2(str.substring(0, 2)) + " " + data.d64[1] + " " + rd63(str.substring(2))
        }
    }
    return normalize(result)
}
function rd66(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd65(str.substring(1))
    } else {
        if (splited.length === 66) { // data.d66
            result = rd3(str.substring(0, 3)) + " " + data.d64[1] + " " + rd63(str.substring(3))
        }
    }
    return normalize(result)
}
function rd67(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd66(str.substring(1))
    } else {
        if (splited.length === 67) { // data.d67
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d67[0] + " e " + rd66(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d67[1] + " " + rd66(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd68(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd67(str.substring(1))
    } else {
        if (splited.length === 68) { // data.d68
            result = rd2(str.substring(0, 2)) + " " + data.d67[1] + " " + rd66(str.substring(2))
        }
    }
    return normalize(result)
}
function rd69(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd68(str.substring(1))
    } else {
        if (splited.length === 69) { // data.d69
            result = rd3(str.substring(0, 3)) + " " + data.d67[1] + " " + rd66(str.substring(3))
        }
    }
    return normalize(result)
}
function rd70(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd69(str.substring(1))
    } else {
        if (splited.length === 70) { // data.d70
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d70[0] + " e " + rd69(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d70[1] + " " + rd69(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd71(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd70(str.substring(1))
    } else {
        if (splited.length === 71) { // data.d71
            result = rd2(str.substring(0, 2)) + " " + data.d70[1] + " " + rd69(str.substring(2))
        }
    }
    return normalize(result)
}
function rd72(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd71(str.substring(1))
    } else {
        if (splited.length === 72) { // data.d72
            result = rd3(str.substring(0, 3)) + " " + data.d70[1] + " " + rd69(str.substring(3))
        }
    }
    return normalize(result)
}
function rd73(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd72(str.substring(1))
    } else {
        if (splited.length === 73) { // data.d73
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d73[0] + " e " + rd72(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d73[1] + " " + rd72(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd74(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd73(str.substring(1))
    } else {
        if (splited.length === 74) { // data.d74
            result = rd2(str.substring(0, 2)) + " " + data.d73[1] + " " + rd72(str.substring(2))
        }
    }
    return normalize(result)
}
function rd75(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd74(str.substring(1))
    } else {
        if (splited.length === 75) { // data.d75
            result = rd3(str.substring(0, 3)) + " " + data.d73[1] + " " + rd72(str.substring(3))
        }
    }
    return normalize(result)
}
function rd76(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd75(str.substring(1))
    } else {
        if (splited.length === 76) { // data.d76
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d76[0] + " e " + rd75(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d76[1] + " " + rd75(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd77(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd76(str.substring(1))
    } else {
        if (splited.length === 77) { // data.d77
            result = rd2(str.substring(0, 2)) + " " + data.d76[1] + " " + rd75(str.substring(2))
        }
    }
    return normalize(result)
}
function rd78(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd77(str.substring(1))
    } else {
        if (splited.length === 78) { // data.d78
            result = rd3(str.substring(0, 3)) + " " + data.d76[1] + " " + rd75(str.substring(3))
        }
    }
    return normalize(result)
}
function rd79(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd78(str.substring(1))
    } else {
        if (splited.length === 79) { // data.d79
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d79[0] + " e " + rd78(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d79[1] + " " + rd78(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd80(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd79(str.substring(1))
    } else {
        if (splited.length === 80) { // data.d80
            result = rd2(str.substring(0, 2)) + " " + data.d79[1] + " " + rd78(str.substring(2))
        }
    }
    return normalize(result)
}
function rd81(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd80(str.substring(1))
    } else {
        if (splited.length === 81) { // data.d81
            result = rd3(str.substring(0, 3)) + " " + data.d79[1] + " " + rd78(str.substring(3))
        }
    }
    return normalize(result)
}
function rd82(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd81(str.substring(1))
    } else {
        if (splited.length === 82) { // data.d82
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d82[0] + " e " + rd81(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d82[1] + " " + rd81(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd83(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd82(str.substring(1))
    } else {
        if (splited.length === 83) { // data.d83
            result = rd2(str.substring(0, 2)) + " " + data.d82[1] + " " + rd81(str.substring(2))
        }
    }
    return normalize(result)
}
function rd84(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd83(str.substring(1))
    } else {
        if (splited.length === 84) { // data.d84
            result = rd3(str.substring(0, 3)) + " " + data.d82[1] + " " + rd81(str.substring(3))
        }
    }
    return normalize(result)
}
function rd85(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd84(str.substring(1))
    } else {
        if (splited.length === 85) { // data.d85
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d85[0] + " e " + rd84(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d85[1] + " " + rd84(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd86(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd85(str.substring(1))
    } else {
        if (splited.length === 86) { // data.d86
            result = rd2(str.substring(0, 2)) + " " + data.d85[1] + " " + rd84(str.substring(2))
        }
    }
    return normalize(result)
}
function rd87(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd86(str.substring(1))
    } else {
        if (splited.length === 87) { // data.d87
            result = rd3(str.substring(0, 3)) + " " + data.d85[1] + " " + rd84(str.substring(3))
        }
    }
    return normalize(result)
}
function rd88(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd87(str.substring(1))
    } else {
        if (splited.length === 88) { // data.d88
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d88[0] + " e " + rd87(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d88[1] + " " + rd87(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd89(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd88(str.substring(1))
    } else {
        if (splited.length === 89) { // data.d89
            result = rd2(str.substring(0, 2)) + " " + data.d88[1] + " " + rd87(str.substring(2))
        }
    }
    return normalize(result)
}
function rd90(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd89(str.substring(1))
    } else {
        if (splited.length === 90) { // data.d90
            result = rd3(str.substring(0, 3)) + " " + data.d88[1] + " " + rd87(str.substring(3))
        }
    }
    return normalize(result)
}
function rd91(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd90(str.substring(1))
    } else {
        if (splited.length === 91) { // data.d91
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d91[0] + " e " + rd90(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d91[1] + " " + rd90(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd92(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd91(str.substring(1))
    } else {
        if (splited.length === 92) { // data.d92
            result = rd2(str.substring(0, 2)) + " " + data.d91[1] + " " + rd90(str.substring(2))
        }
    }
    return normalize(result)
}
function rd93(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd92(str.substring(1))
    } else {
        if (splited.length === 93) { // data.d93
            result = rd3(str.substring(0, 3)) + " " + data.d91[1] + " " + rd90(str.substring(3))
        }
    }
    return normalize(result)
}
function rd94(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd93(str.substring(1))
    } else {
        if (splited.length === 94) { // data.d94
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d94[0] + " e " + rd93(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d94[1] + " " + rd93(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd95(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd94(str.substring(1))
    } else {
        if (splited.length === 95) { // data.d95
            result = rd2(str.substring(0, 2)) + " " + data.d94[1] + " " + rd93(str.substring(2))
        }
    }
    return normalize(result)
}
function rd96(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd95(str.substring(1))
    } else {
        if (splited.length === 96) { // data.d96
            result = rd3(str.substring(0, 3)) + " " + data.d94[1] + " " + rd93(str.substring(3))
        }
    }
    return normalize(result)
}
function rd97(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd96(str.substring(1))
    } else {
        if (splited.length === 97) { // data.d97
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d97[0] + " e " + rd96(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d97[1] + " " + rd96(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd98(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd97(str.substring(1))
    } else {
        if (splited.length === 98) { // data.d98
            result = rd2(str.substring(0, 2)) + " " + data.d97[1] + " " + rd96(str.substring(2))
        }
    }
    return normalize(result)
}
function rd99(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd98(str.substring(1))
    } else {
        if (splited.length === 99) { // data.d99
            result = rd3(str.substring(0, 3)) + " " + data.d97[1] + " " + rd96(str.substring(3))
        }
    }
    return normalize(result)
}
function rd100(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd99(str.substring(1))
    } else {
        if (splited.length === 100) { // data.d100
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d100[0] + " e " + rd99(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d100[1] + " " + rd99(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd101(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd100(str.substring(1))
    } else {
        if (splited.length === 101) { // data.d101
            result = rd2(str.substring(0, 2)) + " " + data.d100[1] + " " + rd99(str.substring(2))
        }
    }
    return normalize(result)
}
function rd102(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd101(str.substring(1))
    } else {
        if (splited.length === 102) { // data.d102
            result = rd3(str.substring(0, 3)) + " " + data.d100[1] + " " + rd99(str.substring(3))
        }
    }
    return normalize(result)
}
function rd103(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd102(str.substring(1))
    } else {
        if (splited.length === 103) { // data.d103
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d103[0] + " e " + rd102(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d103[1] + " " + rd102(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd104(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd103(str.substring(1))
    } else {
        if (splited.length === 104) { // data.d104
            result = rd2(str.substring(0, 2)) + " " + data.d103[1] + " " + rd102(str.substring(2))
        }
    }
    return normalize(result)
}
function rd105(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd104(str.substring(1))
    } else {
        if (splited.length === 105) { // data.d105
            result = rd3(str.substring(0, 3)) + " " + data.d103[1] + " " + rd102(str.substring(3))
        }
    }
    return normalize(result)
}
function rd106(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd105(str.substring(1))
    } else {
        if (splited.length === 106) { // data.d106
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d106[0] + " e " + rd105(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d106[1] + " " + rd105(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd107(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd106(str.substring(1))
    } else {
        if (splited.length === 107) { // data.d107
            result = rd2(str.substring(0, 2)) + " " + data.d106[1] + " " + rd105(str.substring(2))
        }
    }
    return normalize(result)
}
function rd108(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd107(str.substring(1))
    } else {
        if (splited.length === 108) { // data.d108
            result = rd3(str.substring(0, 3)) + " " + data.d106[1] + " " + rd105(str.substring(3))
        }
    }
    return normalize(result)
}
function rd109(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd108(str.substring(1))
    } else {
        if (splited.length === 109) { // data.d109
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d109[0] + " e " + rd108(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d109[1] + " " + rd108(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd110(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd109(str.substring(1))
    } else {
        if (splited.length === 110) { // data.d110
            result = rd2(str.substring(0, 2)) + " " + data.d109[1] + " " + rd108(str.substring(2))
        }
    }
    return normalize(result)
}
function rd111(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd110(str.substring(1))
    } else {
        if (splited.length === 111) { // data.d111
            result = rd3(str.substring(0, 3)) + " " + data.d109[1] + " " + rd108(str.substring(3))
        }
    }
    return normalize(result)
}
function rd112(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd111(str.substring(1))
    } else {
        if (splited.length === 112) { // data.d112
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d112[0] + " e " + rd111(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d112[1] + " " + rd111(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd113(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd112(str.substring(1))
    } else {
        if (splited.length === 113) { // data.d113
            result = rd2(str.substring(0, 2)) + " " + data.d112[1] + " " + rd111(str.substring(2))
        }
    }
    return normalize(result)
}
function rd114(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd113(str.substring(1))
    } else {
        if (splited.length === 114) { // data.d114
            result = rd3(str.substring(0, 3)) + " " + data.d112[1] + " " + rd111(str.substring(3))
        }
    }
    return normalize(result)
}
function rd115(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd114(str.substring(1))
    } else {
        if (splited.length === 115) { // data.d115
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d115[0] + " e " + rd114(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d115[1] + " " + rd114(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd116(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd115(str.substring(1))
    } else {
        if (splited.length === 116) { // data.d116
            result = rd2(str.substring(0, 2)) + " " + data.d115[1] + " " + rd114(str.substring(2))
        }
    }
    return normalize(result)
}
function rd117(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd116(str.substring(1))
    } else {
        if (splited.length === 117) { // data.d117
            result = rd3(str.substring(0, 3)) + " " + data.d115[1] + " " + rd114(str.substring(3))
        }
    }
    return normalize(result)
}
function rd118(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd117(str.substring(1))
    } else {
        if (splited.length === 118) { // data.d118
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d118[0] + " e " + rd117(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d118[1] + " " + rd117(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd119(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd118(str.substring(1))
    } else {
        if (splited.length === 119) { // data.d119
            result = rd2(str.substring(0, 2)) + " " + data.d118[1] + " " + rd117(str.substring(2))
        }
    }
    return normalize(result)
}
function rd120(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd119(str.substring(1))
    } else {
        if (splited.length === 120) { // data.d120
            result = rd3(str.substring(0, 3)) + " " + data.d118[1] + " " + rd117(str.substring(3))
        }
    }
    return normalize(result)
}
function rd121(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd120(str.substring(1))
    } else {
        if (splited.length === 121) { // data.d121
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d121[0] + " e " + rd120(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d121[1] + " " + rd120(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd122(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd121(str.substring(1))
    } else {
        if (splited.length === 122) { // data.d122
            result = rd2(str.substring(0, 2)) + " " + data.d121[1] + " " + rd120(str.substring(2))
        }
    }
    return normalize(result)
}
function rd123(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd122(str.substring(1))
    } else {
        if (splited.length === 123) { // data.d123
            result = rd3(str.substring(0, 3)) + " " + data.d121[1] + " " + rd120(str.substring(3))
        }
    }
    return normalize(result)
}
function rd124(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd123(str.substring(1))
    } else {
        if (splited.length === 124) { // data.d124
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d124[0] + " e " + rd123(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d124[1] + " " + rd123(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd125(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd124(str.substring(1))
    } else {
        if (splited.length === 125) { // data.d125
            result = rd2(str.substring(0, 2)) + " " + data.d124[1] + " " + rd123(str.substring(2))
        }
    }
    return normalize(result)
}
function rd126(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd125(str.substring(1))
    } else {
        if (splited.length === 126) { // data.d126
            result = rd3(str.substring(0, 3)) + " " + data.d124[1] + " " + rd123(str.substring(3))
        }
    }
    return normalize(result)
}
function rd127(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd126(str.substring(1))
    } else {
        if (splited.length === 127) { // data.d127
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d127[0] + " e " + rd126(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d127[1] + " " + rd126(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd128(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd127(str.substring(1))
    } else {
        if (splited.length === 128) { // data.d128
            result = rd2(str.substring(0, 2)) + " " + data.d127[1] + " " + rd126(str.substring(2))
        }
    }
    return normalize(result)
}
function rd129(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd128(str.substring(1))
    } else {
        if (splited.length === 129) { // data.d129
            result = rd3(str.substring(0, 3)) + " " + data.d127[1] + " " + rd126(str.substring(3))
        }
    }
    return normalize(result)
}
function rd130(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd129(str.substring(1))
    } else {
        if (splited.length === 130) { // data.d130
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d130[0] + " e " + rd129(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d130[1] + " " + rd129(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd131(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd130(str.substring(1))
    } else {
        if (splited.length === 131) { // data.d131
            result = rd2(str.substring(0, 2)) + " " + data.d130[1] + " " + rd129(str.substring(2))
        }
    }
    return normalize(result)
}
function rd132(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd131(str.substring(1))
    } else {
        if (splited.length === 132) { // data.d132
            result = rd3(str.substring(0, 3)) + " " + data.d130[1] + " " + rd129(str.substring(3))
        }
    }
    return normalize(result)
}
function rd133(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd132(str.substring(1))
    } else {
        if (splited.length === 133) { // data.d133
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d133[0] + " e " + rd132(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d133[1] + " " + rd132(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd134(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd133(str.substring(1))
    } else {
        if (splited.length === 134) { // data.d134
            result = rd2(str.substring(0, 2)) + " " + data.d133[1] + " " + rd132(str.substring(2))
        }
    }
    return normalize(result)
}
function rd135(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd134(str.substring(1))
    } else {
        if (splited.length === 135) { // data.d135
            result = rd3(str.substring(0, 3)) + " " + data.d133[1] + " " + rd132(str.substring(3))
        }
    }
    return normalize(result)
}
function rd136(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd135(str.substring(1))
    } else {
        if (splited.length === 136) { // data.d136
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d136[0] + " e " + rd135(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d136[1] + " " + rd135(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd137(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd136(str.substring(1))
    } else {
        if (splited.length === 137) { // data.d137
            result = rd2(str.substring(0, 2)) + " " + data.d136[1] + " " + rd135(str.substring(2))
        }
    }
    return normalize(result)
}
function rd138(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd137(str.substring(1))
    } else {
        if (splited.length === 138) { // data.d138
            result = rd3(str.substring(0, 3)) + " " + data.d136[1] + " " + rd135(str.substring(3))
        }
    }
    return normalize(result)
}
function rd139(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd138(str.substring(1))
    } else {
        if (splited.length === 139) { // data.d139
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d139[0] + " e " + rd138(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d139[1] + " " + rd138(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd140(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd139(str.substring(1))
    } else {
        if (splited.length === 140) { // data.d140
            result = rd2(str.substring(0, 2)) + " " + data.d139[1] + " " + rd138(str.substring(2))
        }
    }
    return normalize(result)
}
function rd141(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd140(str.substring(1))
    } else {
        if (splited.length === 141) { // data.d141
            result = rd3(str.substring(0, 3)) + " " + data.d139[1] + " " + rd138(str.substring(3))
        }
    }
    return normalize(result)
}
function rd142(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd141(str.substring(1))
    } else {
        if (splited.length === 142) { // data.d142
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d142[0] + " e " + rd141(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d142[1] + " " + rd141(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd143(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd142(str.substring(1))
    } else {
        if (splited.length === 143) { // data.d143
            result = rd2(str.substring(0, 2)) + " " + data.d142[1] + " " + rd141(str.substring(2))
        }
    }
    return normalize(result)
}
function rd144(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd143(str.substring(1))
    } else {
        if (splited.length === 144) { // data.d144
            result = rd3(str.substring(0, 3)) + " " + data.d142[1] + " " + rd141(str.substring(3))
        }
    }
    return normalize(result)
}
function rd145(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd144(str.substring(1))
    } else {
        if (splited.length === 145) { // data.d145
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d145[0] + " e " + rd144(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d145[1] + " " + rd144(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd146(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd145(str.substring(1))
    } else {
        if (splited.length === 146) { // data.d146
            result = rd2(str.substring(0, 2)) + " " + data.d145[1] + " " + rd144(str.substring(2))
        }
    }
    return normalize(result)
}
function rd147(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd146(str.substring(1))
    } else {
        if (splited.length === 147) { // data.d147
            result = rd3(str.substring(0, 3)) + " " + data.d145[1] + " " + rd144(str.substring(3))
        }
    }
    return normalize(result)
}
function rd148(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd147(str.substring(1))
    } else {
        if (splited.length === 148) { // data.d148
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d148[0] + " e " + rd147(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d148[1] + " " + rd147(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd149(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd148(str.substring(1))
    } else {
        if (splited.length === 149) { // data.d149
            result = rd2(str.substring(0, 2)) + " " + data.d148[1] + " " + rd147(str.substring(2))
        }
    }
    return normalize(result)
}
function rd150(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd149(str.substring(1))
    } else {
        if (splited.length === 150) { // data.d150
            result = rd3(str.substring(0, 3)) + " " + data.d148[1] + " " + rd147(str.substring(3))
        }
    }
    return normalize(result)
}
function rd151(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd150(str.substring(1))
    } else {
        if (splited.length === 151) { // data.d151
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d151[0] + " e " + rd150(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d151[1] + " " + rd150(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd152(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd151(str.substring(1))
    } else {
        if (splited.length === 152) { // data.d152
            result = rd2(str.substring(0, 2)) + " " + data.d151[1] + " " + rd150(str.substring(2))
        }
    }
    return normalize(result)
}
function rd153(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd152(str.substring(1))
    } else {
        if (splited.length === 153) { // data.d153
            result = rd3(str.substring(0, 3)) + " " + data.d151[1] + " " + rd150(str.substring(3))
        }
    }
    return normalize(result)
}
function rd154(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd153(str.substring(1))
    } else {
        if (splited.length === 154) { // data.d154
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d154[0] + " e " + rd153(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d154[1] + " " + rd153(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd155(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd154(str.substring(1))
    } else {
        if (splited.length === 155) { // data.d155
            result = rd2(str.substring(0, 2)) + " " + data.d154[1] + " " + rd153(str.substring(2))
        }
    }
    return normalize(result)
}
function rd156(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd155(str.substring(1))
    } else {
        if (splited.length === 156) { // data.d156
            result = rd3(str.substring(0, 3)) + " " + data.d154[1] + " " + rd153(str.substring(3))
        }
    }
    return normalize(result)
}
function rd157(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd156(str.substring(1))
    } else {
        if (splited.length === 157) { // data.d157
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d157[0] + " e " + rd156(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d157[1] + " " + rd156(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd158(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd157(str.substring(1))
    } else {
        if (splited.length === 158) { // data.d158
            result = rd2(str.substring(0, 2)) + " " + data.d157[1] + " " + rd156(str.substring(2))
        }
    }
    return normalize(result)
}
function rd159(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd158(str.substring(1))
    } else {
        if (splited.length === 159) { // data.d159
            result = rd3(str.substring(0, 3)) + " " + data.d157[1] + " " + rd156(str.substring(3))
        }
    }
    return normalize(result)
}
function rd160(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd159(str.substring(1))
    } else {
        if (splited.length === 160) { // data.d160
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d160[0] + " e " + rd159(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d160[1] + " " + rd159(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd161(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd160(str.substring(1))
    } else {
        if (splited.length === 161) { // data.d161
            result = rd2(str.substring(0, 2)) + " " + data.d160[1] + " " + rd159(str.substring(2))
        }
    }
    return normalize(result)
}
function rd162(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd161(str.substring(1))
    } else {
        if (splited.length === 162) { // data.d162
            result = rd3(str.substring(0, 3)) + " " + data.d160[1] + " " + rd159(str.substring(3))
        }
    }
    return normalize(result)
}
function rd163(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd162(str.substring(1))
    } else {
        if (splited.length === 163) { // data.d163
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d163[0] + " e " + rd162(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d163[1] + " " + rd162(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd164(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd163(str.substring(1))
    } else {
        if (splited.length === 164) { // data.d164
            result = rd2(str.substring(0, 2)) + " " + data.d163[1] + " " + rd162(str.substring(2))
        }
    }
    return normalize(result)
}
function rd165(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd164(str.substring(1))
    } else {
        if (splited.length === 165) { // data.d165
            result = rd3(str.substring(0, 3)) + " " + data.d163[1] + " " + rd162(str.substring(3))
        }
    }
    return normalize(result)
}
function rd166(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd165(str.substring(1))
    } else {
        if (splited.length === 166) { // data.d166
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d166[0] + " e " + rd165(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d166[1] + " " + rd165(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd167(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd166(str.substring(1))
    } else {
        if (splited.length === 167) { // data.d167
            result = rd2(str.substring(0, 2)) + " " + data.d166[1] + " " + rd165(str.substring(2))
        }
    }
    return normalize(result)
}
function rd168(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd167(str.substring(1))
    } else {
        if (splited.length === 168) { // data.d168
            result = rd3(str.substring(0, 3)) + " " + data.d166[1] + " " + rd165(str.substring(3))
        }
    }
    return normalize(result)
}
function rd169(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd168(str.substring(1))
    } else {
        if (splited.length === 169) { // data.d169
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d169[0] + " e " + rd168(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d169[1] + " " + rd168(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd170(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd169(str.substring(1))
    } else {
        if (splited.length === 170) { // data.d170
            result = rd2(str.substring(0, 2)) + " " + data.d169[1] + " " + rd168(str.substring(2))
        }
    }
    return normalize(result)
}
function rd171(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd170(str.substring(1))
    } else {
        if (splited.length === 171) { // data.d171
            result = rd3(str.substring(0, 3)) + " " + data.d169[1] + " " + rd168(str.substring(3))
        }
    }
    return normalize(result)
}
function rd172(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd171(str.substring(1))
    } else {
        if (splited.length === 172) { // data.d172
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d172[0] + " e " + rd171(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d172[1] + " " + rd171(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd173(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd172(str.substring(1))
    } else {
        if (splited.length === 173) { // data.d173
            result = rd2(str.substring(0, 2)) + " " + data.d172[1] + " " + rd171(str.substring(2))
        }
    }
    return normalize(result)
}
function rd174(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd173(str.substring(1))
    } else {
        if (splited.length === 174) { // data.d174
            result = rd3(str.substring(0, 3)) + " " + data.d172[1] + " " + rd171(str.substring(3))
        }
    }
    return normalize(result)
}
function rd175(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd174(str.substring(1))
    } else {
        if (splited.length === 175) { // data.d175
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d175[0] + " e " + rd174(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d175[1] + " " + rd174(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd176(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd175(str.substring(1))
    } else {
        if (splited.length === 176) { // data.d176
            result = rd2(str.substring(0, 2)) + " " + data.d175[1] + " " + rd174(str.substring(2))
        }
    }
    return normalize(result)
}
function rd177(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd176(str.substring(1))
    } else {
        if (splited.length === 177) { // data.d177
            result = rd3(str.substring(0, 3)) + " " + data.d175[1] + " " + rd174(str.substring(3))
        }
    }
    return normalize(result)
}
function rd178(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd177(str.substring(1))
    } else {
        if (splited.length === 178) { // data.d178
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d178[0] + " e " + rd177(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d178[1] + " " + rd177(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd179(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd178(str.substring(1))
    } else {
        if (splited.length === 179) { // data.d179
            result = rd2(str.substring(0, 2)) + " " + data.d178[1] + " " + rd177(str.substring(2))
        }
    }
    return normalize(result)
}
function rd180(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd179(str.substring(1))
    } else {
        if (splited.length === 180) { // data.d180
            result = rd3(str.substring(0, 3)) + " " + data.d178[1] + " " + rd177(str.substring(3))
        }
    }
    return normalize(result)
}
function rd181(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd180(str.substring(1))
    } else {
        if (splited.length === 181) { // data.d181
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d181[0] + " e " + rd180(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d181[1] + " " + rd180(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd182(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd181(str.substring(1))
    } else {
        if (splited.length === 182) { // data.d182
            result = rd2(str.substring(0, 2)) + " " + data.d181[1] + " " + rd180(str.substring(2))
        }
    }
    return normalize(result)
}
function rd183(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd182(str.substring(1))
    } else {
        if (splited.length === 183) { // data.d183
            result = rd3(str.substring(0, 3)) + " " + data.d181[1] + " " + rd180(str.substring(3))
        }
    }
    return normalize(result)
}
function rd184(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd183(str.substring(1))
    } else {
        if (splited.length === 184) { // data.d184
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d184[0] + " e " + rd183(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d184[1] + " " + rd183(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd185(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd184(str.substring(1))
    } else {
        if (splited.length === 185) { // data.d185
            result = rd2(str.substring(0, 2)) + " " + data.d184[1] + " " + rd183(str.substring(2))
        }
    }
    return normalize(result)
}
function rd186(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd185(str.substring(1))
    } else {
        if (splited.length === 186) { // data.d186
            result = rd3(str.substring(0, 3)) + " " + data.d184[1] + " " + rd183(str.substring(3))
        }
    }
    return normalize(result)
}
function rd187(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd186(str.substring(1))
    } else {
        if (splited.length === 187) { // data.d187
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d187[0] + " e " + rd186(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d187[1] + " " + rd186(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd188(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd187(str.substring(1))
    } else {
        if (splited.length === 188) { // data.d188
            result = rd2(str.substring(0, 2)) + " " + data.d187[1] + " " + rd186(str.substring(2))
        }
    }
    return normalize(result)
}
function rd189(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd188(str.substring(1))
    } else {
        if (splited.length === 189) { // data.d189
            result = rd3(str.substring(0, 3)) + " " + data.d187[1] + " " + rd186(str.substring(3))
        }
    }
    return normalize(result)
}
function rd190(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd189(str.substring(1))
    } else {
        if (splited.length === 190) { // data.d190
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d190[0] + " e " + rd189(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d190[1] + " " + rd189(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd191(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd190(str.substring(1))
    } else {
        if (splited.length === 191) { // data.d191
            result = rd2(str.substring(0, 2)) + " " + data.d190[1] + " " + rd189(str.substring(2))
        }
    }
    return normalize(result)
}
function rd192(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd191(str.substring(1))
    } else {
        if (splited.length === 192) { // data.d192
            result = rd3(str.substring(0, 3)) + " " + data.d190[1] + " " + rd189(str.substring(3))
        }
    }
    return normalize(result)
}
function rd193(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd192(str.substring(1))
    } else {
        if (splited.length === 193) { // data.d193
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d193[0] + " e " + rd192(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d193[1] + " " + rd192(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd194(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd193(str.substring(1))
    } else {
        if (splited.length === 194) { // data.d194
            result = rd2(str.substring(0, 2)) + " " + data.d193[1] + " " + rd192(str.substring(2))
        }
    }
    return normalize(result)
}
function rd195(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd194(str.substring(1))
    } else {
        if (splited.length === 195) { // data.d195
            result = rd3(str.substring(0, 3)) + " " + data.d193[1] + " " + rd192(str.substring(3))
        }
    }
    return normalize(result)
}
function rd196(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd195(str.substring(1))
    } else {
        if (splited.length === 196) { // data.d196
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d196[0] + " e " + rd195(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d196[1] + " " + rd195(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd197(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd196(str.substring(1))
    } else {
        if (splited.length === 197) { // data.d197
            result = rd2(str.substring(0, 2)) + " " + data.d196[1] + " " + rd195(str.substring(2))
        }
    }
    return normalize(result)
}
function rd198(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd197(str.substring(1))
    } else {
        if (splited.length === 198) { // data.d198
            result = rd3(str.substring(0, 3)) + " " + data.d196[1] + " " + rd195(str.substring(3))
        }
    }
    return normalize(result)
}
function rd199(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd198(str.substring(1))
    } else {
        if (splited.length === 199) { // data.d199
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d199[0] + " e " + rd198(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d199[1] + " " + rd198(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd200(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd199(str.substring(1))
    } else {
        if (splited.length === 200) { // data.d200
            result = rd2(str.substring(0, 2)) + " " + data.d199[1] + " " + rd198(str.substring(2))
        }
    }
    return normalize(result)
}
function rd201(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd200(str.substring(1))
    } else {
        if (splited.length === 201) { // data.d201
            result = rd3(str.substring(0, 3)) + " " + data.d199[1] + " " + rd198(str.substring(3))
        }
    }
    return normalize(result)
}
function rd202(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd201(str.substring(1))
    } else {
        if (splited.length === 202) { // data.d202
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d202[0] + " e " + rd201(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d202[1] + " " + rd201(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd203(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd202(str.substring(1))
    } else {
        if (splited.length === 203) { // data.d203
            result = rd2(str.substring(0, 2)) + " " + data.d202[1] + " " + rd201(str.substring(2))
        }
    }
    return normalize(result)
}
function rd204(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd203(str.substring(1))
    } else {
        if (splited.length === 204) { // data.d204
            result = rd3(str.substring(0, 3)) + " " + data.d202[1] + " " + rd201(str.substring(3))
        }
    }
    return normalize(result)
}
function rd205(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd204(str.substring(1))
    } else {
        if (splited.length === 205) { // data.d205
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d205[0] + " e " + rd204(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d205[1] + " " + rd204(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd206(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd205(str.substring(1))
    } else {
        if (splited.length === 206) { // data.d206
            result = rd2(str.substring(0, 2)) + " " + data.d205[1] + " " + rd204(str.substring(2))
        }
    }
    return normalize(result)
}
function rd207(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd206(str.substring(1))
    } else {
        if (splited.length === 207) { // data.d207
            result = rd3(str.substring(0, 3)) + " " + data.d205[1] + " " + rd204(str.substring(3))
        }
    }
    return normalize(result)
}
function rd208(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd207(str.substring(1))
    } else {
        if (splited.length === 208) { // data.d208
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d208[0] + " e " + rd207(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d208[1] + " " + rd207(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd209(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd208(str.substring(1))
    } else {
        if (splited.length === 209) { // data.d209
            result = rd2(str.substring(0, 2)) + " " + data.d208[1] + " " + rd207(str.substring(2))
        }
    }
    return normalize(result)
}
function rd210(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd209(str.substring(1))
    } else {
        if (splited.length === 210) { // data.d210
            result = rd3(str.substring(0, 3)) + " " + data.d208[1] + " " + rd207(str.substring(3))
        }
    }
    return normalize(result)
}
function rd211(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd210(str.substring(1))
    } else {
        if (splited.length === 211) { // data.d211
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d211[0] + " e " + rd210(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d211[1] + " " + rd210(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd212(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd211(str.substring(1))
    } else {
        if (splited.length === 212) { // data.d212
            result = rd2(str.substring(0, 2)) + " " + data.d211[1] + " " + rd210(str.substring(2))
        }
    }
    return normalize(result)
}
function rd213(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd212(str.substring(1))
    } else {
        if (splited.length === 213) { // data.d213
            result = rd3(str.substring(0, 3)) + " " + data.d211[1] + " " + rd210(str.substring(3))
        }
    }
    return normalize(result)
}
function rd214(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd213(str.substring(1))
    } else {
        if (splited.length === 214) { // data.d214
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d214[0] + " e " + rd213(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d214[1] + " " + rd213(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd215(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd214(str.substring(1))
    } else {
        if (splited.length === 215) { // data.d215
            result = rd2(str.substring(0, 2)) + " " + data.d214[1] + " " + rd213(str.substring(2))
        }
    }
    return normalize(result)
}
function rd216(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd215(str.substring(1))
    } else {
        if (splited.length === 216) { // data.d216
            result = rd3(str.substring(0, 3)) + " " + data.d214[1] + " " + rd213(str.substring(3))
        }
    }
    return normalize(result)
}
function rd217(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd216(str.substring(1))
    } else {
        if (splited.length === 217) { // data.d217
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d217[0] + " e " + rd216(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d217[1] + " " + rd216(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd218(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd217(str.substring(1))
    } else {
        if (splited.length === 218) { // data.d218
            result = rd2(str.substring(0, 2)) + " " + data.d217[1] + " " + rd216(str.substring(2))
        }
    }
    return normalize(result)
}
function rd219(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd218(str.substring(1))
    } else {
        if (splited.length === 219) { // data.d219
            result = rd3(str.substring(0, 3)) + " " + data.d217[1] + " " + rd216(str.substring(3))
        }
    }
    return normalize(result)
}
function rd220(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd219(str.substring(1))
    } else {
        if (splited.length === 220) { // data.d220
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d220[0] + " e " + rd219(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d220[1] + " " + rd219(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd221(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd220(str.substring(1))
    } else {
        if (splited.length === 221) { // data.d221
            result = rd2(str.substring(0, 2)) + " " + data.d220[1] + " " + rd219(str.substring(2))
        }
    }
    return normalize(result)
}
function rd222(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd221(str.substring(1))
    } else {
        if (splited.length === 222) { // data.d222
            result = rd3(str.substring(0, 3)) + " " + data.d220[1] + " " + rd219(str.substring(3))
        }
    }
    return normalize(result)
}
function rd223(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd222(str.substring(1))
    } else {
        if (splited.length === 223) { // data.d223
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d223[0] + " e " + rd222(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d223[1] + " " + rd222(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd224(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd223(str.substring(1))
    } else {
        if (splited.length === 224) { // data.d224
            result = rd2(str.substring(0, 2)) + " " + data.d223[1] + " " + rd222(str.substring(2))
        }
    }
    return normalize(result)
}
function rd225(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd224(str.substring(1))
    } else {
        if (splited.length === 225) { // data.d225
            result = rd3(str.substring(0, 3)) + " " + data.d223[1] + " " + rd222(str.substring(3))
        }
    }
    return normalize(result)
}
function rd226(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd225(str.substring(1))
    } else {
        if (splited.length === 226) { // data.d226
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d226[0] + " e " + rd225(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d226[1] + " " + rd225(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd227(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd226(str.substring(1))
    } else {
        if (splited.length === 227) { // data.d227
            result = rd2(str.substring(0, 2)) + " " + data.d226[1] + " " + rd225(str.substring(2))
        }
    }
    return normalize(result)
}
function rd228(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd227(str.substring(1))
    } else {
        if (splited.length === 228) { // data.d228
            result = rd3(str.substring(0, 3)) + " " + data.d226[1] + " " + rd225(str.substring(3))
        }
    }
    return normalize(result)
}
function rd229(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd228(str.substring(1))
    } else {
        if (splited.length === 229) { // data.d229
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d229[0] + " e " + rd228(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d229[1] + " " + rd228(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd230(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd229(str.substring(1))
    } else {
        if (splited.length === 230) { // data.d230
            result = rd2(str.substring(0, 2)) + " " + data.d229[1] + " " + rd228(str.substring(2))
        }
    }
    return normalize(result)
}
function rd231(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd230(str.substring(1))
    } else {
        if (splited.length === 231) { // data.d231
            result = rd3(str.substring(0, 3)) + " " + data.d229[1] + " " + rd228(str.substring(3))
        }
    }
    return normalize(result)
}
function rd232(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd231(str.substring(1))
    } else {
        if (splited.length === 232) { // data.d232
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d232[0] + " e " + rd231(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d232[1] + " " + rd231(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd233(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd232(str.substring(1))
    } else {
        if (splited.length === 233) { // data.d233
            result = rd2(str.substring(0, 2)) + " " + data.d232[1] + " " + rd231(str.substring(2))
        }
    }
    return normalize(result)
}
function rd234(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd233(str.substring(1))
    } else {
        if (splited.length === 234) { // data.d234
            result = rd3(str.substring(0, 3)) + " " + data.d232[1] + " " + rd231(str.substring(3))
        }
    }
    return normalize(result)
}
function rd235(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd234(str.substring(1))
    } else {
        if (splited.length === 235) { // data.d235
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d235[0] + " e " + rd234(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d235[1] + " " + rd234(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd236(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd235(str.substring(1))
    } else {
        if (splited.length === 236) { // data.d236
            result = rd2(str.substring(0, 2)) + " " + data.d235[1] + " " + rd234(str.substring(2))
        }
    }
    return normalize(result)
}
function rd237(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd236(str.substring(1))
    } else {
        if (splited.length === 237) { // data.d237
            result = rd3(str.substring(0, 3)) + " " + data.d235[1] + " " + rd234(str.substring(3))
        }
    }
    return normalize(result)
}
function rd238(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd237(str.substring(1))
    } else {
        if (splited.length === 238) { // data.d238
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d238[0] + " e " + rd237(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d238[1] + " " + rd237(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd239(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd238(str.substring(1))
    } else {
        if (splited.length === 239) { // data.d239
            result = rd2(str.substring(0, 2)) + " " + data.d238[1] + " " + rd237(str.substring(2))
        }
    }
    return normalize(result)
}
function rd240(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd239(str.substring(1))
    } else {
        if (splited.length === 240) { // data.d240
            result = rd3(str.substring(0, 3)) + " " + data.d238[1] + " " + rd237(str.substring(3))
        }
    }
    return normalize(result)
}
function rd241(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd240(str.substring(1))
    } else {
        if (splited.length === 241) { // data.d241
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d241[0] + " e " + rd240(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d241[1] + " " + rd240(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd242(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd241(str.substring(1))
    } else {
        if (splited.length === 242) { // data.d242
            result = rd2(str.substring(0, 2)) + " " + data.d241[1] + " " + rd240(str.substring(2))
        }
    }
    return normalize(result)
}
function rd243(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd242(str.substring(1))
    } else {
        if (splited.length === 243) { // data.d243
            result = rd3(str.substring(0, 3)) + " " + data.d241[1] + " " + rd240(str.substring(3))
        }
    }
    return normalize(result)
}
function rd244(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd243(str.substring(1))
    } else {
        if (splited.length === 244) { // data.d244
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d244[0] + " e " + rd243(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d244[1] + " " + rd243(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd245(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd244(str.substring(1))
    } else {
        if (splited.length === 245) { // data.d245
            result = rd2(str.substring(0, 2)) + " " + data.d244[1] + " " + rd243(str.substring(2))
        }
    }
    return normalize(result)
}
function rd246(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd245(str.substring(1))
    } else {
        if (splited.length === 246) { // data.d246
            result = rd3(str.substring(0, 3)) + " " + data.d244[1] + " " + rd243(str.substring(3))
        }
    }
    return normalize(result)
}
function rd247(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd246(str.substring(1))
    } else {
        if (splited.length === 247) { // data.d247
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d247[0] + " e " + rd246(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d247[1] + " " + rd246(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd248(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd247(str.substring(1))
    } else {
        if (splited.length === 248) { // data.d248
            result = rd2(str.substring(0, 2)) + " " + data.d247[1] + " " + rd246(str.substring(2))
        }
    }
    return normalize(result)
}
function rd249(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd248(str.substring(1))
    } else {
        if (splited.length === 249) { // data.d249
            result = rd3(str.substring(0, 3)) + " " + data.d247[1] + " " + rd246(str.substring(3))
        }
    }
    return normalize(result)
}
function rd250(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd249(str.substring(1))
    } else {
        if (splited.length === 250) { // data.d250
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d250[0] + " e " + rd249(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d250[1] + " " + rd249(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd251(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd250(str.substring(1))
    } else {
        if (splited.length === 251) { // data.d251
            result = rd2(str.substring(0, 2)) + " " + data.d250[1] + " " + rd249(str.substring(2))
        }
    }
    return normalize(result)
}
function rd252(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd251(str.substring(1))
    } else {
        if (splited.length === 252) { // data.d252
            result = rd3(str.substring(0, 3)) + " " + data.d250[1] + " " + rd249(str.substring(3))
        }
    }
    return normalize(result)
}
function rd253(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd252(str.substring(1))
    } else {
        if (splited.length === 253) { // data.d253
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d253[0] + " e " + rd252(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d253[1] + " " + rd252(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd254(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd253(str.substring(1))
    } else {
        if (splited.length === 254) { // data.d254
            result = rd2(str.substring(0, 2)) + " " + data.d253[1] + " " + rd252(str.substring(2))
        }
    }
    return normalize(result)
}
function rd255(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd254(str.substring(1))
    } else {
        if (splited.length === 255) { // data.d255
            result = rd3(str.substring(0, 3)) + " " + data.d253[1] + " " + rd252(str.substring(3))
        }
    }
    return normalize(result)
}
function rd256(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd255(str.substring(1))
    } else {
        if (splited.length === 256) { // data.d256
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d256[0] + " e " + rd255(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d256[1] + " " + rd255(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd257(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd256(str.substring(1))
    } else {
        if (splited.length === 257) { // data.d257
            result = rd2(str.substring(0, 2)) + " " + data.d256[1] + " " + rd255(str.substring(2))
        }
    }
    return normalize(result)
}
function rd258(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd257(str.substring(1))
    } else {
        if (splited.length === 258) { // data.d258
            result = rd3(str.substring(0, 3)) + " " + data.d256[1] + " " + rd255(str.substring(3))
        }
    }
    return normalize(result)
}
function rd259(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd258(str.substring(1))
    } else {
        if (splited.length === 259) { // data.d259
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d259[0] + " e " + rd258(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d259[1] + " " + rd258(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd260(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd259(str.substring(1))
    } else {
        if (splited.length === 260) { // data.d260
            result = rd2(str.substring(0, 2)) + " " + data.d259[1] + " " + rd258(str.substring(2))
        }
    }
    return normalize(result)
}
function rd261(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd260(str.substring(1))
    } else {
        if (splited.length === 261) { // data.d261
            result = rd3(str.substring(0, 3)) + " " + data.d259[1] + " " + rd258(str.substring(3))
        }
    }
    return normalize(result)
}
function rd262(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd261(str.substring(1))
    } else {
        if (splited.length === 262) { // data.d262
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d262[0] + " e " + rd261(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d262[1] + " " + rd261(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd263(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd262(str.substring(1))
    } else {
        if (splited.length === 263) { // data.d263
            result = rd2(str.substring(0, 2)) + " " + data.d262[1] + " " + rd261(str.substring(2))
        }
    }
    return normalize(result)
}
function rd264(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd263(str.substring(1))
    } else {
        if (splited.length === 264) { // data.d264
            result = rd3(str.substring(0, 3)) + " " + data.d262[1] + " " + rd261(str.substring(3))
        }
    }
    return normalize(result)
}
function rd265(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd264(str.substring(1))
    } else {
        if (splited.length === 265) { // data.d265
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d265[0] + " e " + rd264(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d265[1] + " " + rd264(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd266(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd265(str.substring(1))
    } else {
        if (splited.length === 266) { // data.d266
            result = rd2(str.substring(0, 2)) + " " + data.d265[1] + " " + rd264(str.substring(2))
        }
    }
    return normalize(result)
}
function rd267(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd266(str.substring(1))
    } else {
        if (splited.length === 267) { // data.d267
            result = rd3(str.substring(0, 3)) + " " + data.d265[1] + " " + rd264(str.substring(3))
        }
    }
    return normalize(result)
}
function rd268(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd267(str.substring(1))
    } else {
        if (splited.length === 268) { // data.d268
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d268[0] + " e " + rd267(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d268[1] + " " + rd267(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd269(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd268(str.substring(1))
    } else {
        if (splited.length === 269) { // data.d269
            result = rd2(str.substring(0, 2)) + " " + data.d268[1] + " " + rd267(str.substring(2))
        }
    }
    return normalize(result)
}
function rd270(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd269(str.substring(1))
    } else {
        if (splited.length === 270) { // data.d270
            result = rd3(str.substring(0, 3)) + " " + data.d268[1] + " " + rd267(str.substring(3))
        }
    }
    return normalize(result)
}
function rd271(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd270(str.substring(1))
    } else {
        if (splited.length === 271) { // data.d271
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d271[0] + " e " + rd270(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d271[1] + " " + rd270(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd272(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd271(str.substring(1))
    } else {
        if (splited.length === 272) { // data.d272
            result = rd2(str.substring(0, 2)) + " " + data.d271[1] + " " + rd270(str.substring(2))
        }
    }
    return normalize(result)
}
function rd273(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd272(str.substring(1))
    } else {
        if (splited.length === 273) { // data.d273
            result = rd3(str.substring(0, 3)) + " " + data.d271[1] + " " + rd270(str.substring(3))
        }
    }
    return normalize(result)
}
function rd274(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd273(str.substring(1))
    } else {
        if (splited.length === 274) { // data.d274
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d274[0] + " e " + rd273(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d274[1] + " " + rd273(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd275(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd274(str.substring(1))
    } else {
        if (splited.length === 275) { // data.d275
            result = rd2(str.substring(0, 2)) + " " + data.d274[1] + " " + rd273(str.substring(2))
        }
    }
    return normalize(result)
}
function rd276(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd275(str.substring(1))
    } else {
        if (splited.length === 276) { // data.d276
            result = rd3(str.substring(0, 3)) + " " + data.d274[1] + " " + rd273(str.substring(3))
        }
    }
    return normalize(result)
}
function rd277(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd276(str.substring(1))
    } else {
        if (splited.length === 277) { // data.d277
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d277[0] + " e " + rd276(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d277[1] + " " + rd276(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd278(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd277(str.substring(1))
    } else {
        if (splited.length === 278) { // data.d278
            result = rd2(str.substring(0, 2)) + " " + data.d277[1] + " " + rd276(str.substring(2))
        }
    }
    return normalize(result)
}
function rd279(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd278(str.substring(1))
    } else {
        if (splited.length === 279) { // data.d279
            result = rd3(str.substring(0, 3)) + " " + data.d277[1] + " " + rd276(str.substring(3))
        }
    }
    return normalize(result)
}
function rd280(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd279(str.substring(1))
    } else {
        if (splited.length === 280) { // data.d280
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d280[0] + " e " + rd279(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d280[1] + " " + rd279(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd281(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd280(str.substring(1))
    } else {
        if (splited.length === 281) { // data.d281
            result = rd2(str.substring(0, 2)) + " " + data.d280[1] + " " + rd279(str.substring(2))
        }
    }
    return normalize(result)
}
function rd282(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd281(str.substring(1))
    } else {
        if (splited.length === 282) { // data.d282
            result = rd3(str.substring(0, 3)) + " " + data.d280[1] + " " + rd279(str.substring(3))
        }
    }
    return normalize(result)
}
function rd283(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd282(str.substring(1))
    } else {
        if (splited.length === 283) { // data.d283
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d283[0] + " e " + rd282(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d283[1] + " " + rd282(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd284(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd283(str.substring(1))
    } else {
        if (splited.length === 284) { // data.d284
            result = rd2(str.substring(0, 2)) + " " + data.d283[1] + " " + rd282(str.substring(2))
        }
    }
    return normalize(result)
}
function rd285(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd284(str.substring(1))
    } else {
        if (splited.length === 285) { // data.d285
            result = rd3(str.substring(0, 3)) + " " + data.d283[1] + " " + rd282(str.substring(3))
        }
    }
    return normalize(result)
}
function rd286(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd285(str.substring(1))
    } else {
        if (splited.length === 286) { // data.d286
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d286[0] + " e " + rd285(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d286[1] + " " + rd285(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd287(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd286(str.substring(1))
    } else {
        if (splited.length === 287) { // data.d287
            result = rd2(str.substring(0, 2)) + " " + data.d286[1] + " " + rd285(str.substring(2))
        }
    }
    return normalize(result)
}
function rd288(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd287(str.substring(1))
    } else {
        if (splited.length === 288) { // data.d288
            result = rd3(str.substring(0, 3)) + " " + data.d286[1] + " " + rd285(str.substring(3))
        }
    }
    return normalize(result)
}
function rd289(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd288(str.substring(1))
    } else {
        if (splited.length === 289) { // data.d289
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d289[0] + " e " + rd288(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d289[1] + " " + rd288(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd290(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd289(str.substring(1))
    } else {
        if (splited.length === 290) { // data.d290
            result = rd2(str.substring(0, 2)) + " " + data.d289[1] + " " + rd288(str.substring(2))
        }
    }
    return normalize(result)
}
function rd291(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd290(str.substring(1))
    } else {
        if (splited.length === 291) { // data.d291
            result = rd3(str.substring(0, 3)) + " " + data.d289[1] + " " + rd288(str.substring(3))
        }
    }
    return normalize(result)
}
function rd292(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd291(str.substring(1))
    } else {
        if (splited.length === 292) { // data.d292
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d292[0] + " e " + rd291(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d292[1] + " " + rd291(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd293(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd292(str.substring(1))
    } else {
        if (splited.length === 293) { // data.d293
            result = rd2(str.substring(0, 2)) + " " + data.d292[1] + " " + rd291(str.substring(2))
        }
    }
    return normalize(result)
}
function rd294(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd293(str.substring(1))
    } else {
        if (splited.length === 294) { // data.d294
            result = rd3(str.substring(0, 3)) + " " + data.d292[1] + " " + rd291(str.substring(3))
        }
    }
    return normalize(result)
}
function rd295(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd294(str.substring(1))
    } else {
        if (splited.length === 295) { // data.d295
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d295[0] + " e " + rd294(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d295[1] + " " + rd294(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd296(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd295(str.substring(1))
    } else {
        if (splited.length === 296) { // data.d296
            result = rd2(str.substring(0, 2)) + " " + data.d295[1] + " " + rd294(str.substring(2))
        }
    }
    return normalize(result)
}
function rd297(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd296(str.substring(1))
    } else {
        if (splited.length === 297) { // data.d297
            result = rd3(str.substring(0, 3)) + " " + data.d295[1] + " " + rd294(str.substring(3))
        }
    }
    return normalize(result)
}
function rd298(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd297(str.substring(1))
    } else {
        if (splited.length === 298) { // data.d298
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d298[0] + " e " + rd297(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d298[1] + " " + rd297(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd299(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd298(str.substring(1))
    } else {
        if (splited.length === 299) { // data.d299
            result = rd2(str.substring(0, 2)) + " " + data.d298[1] + " " + rd297(str.substring(2))
        }
    }
    return normalize(result)
}
function rd300(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd299(str.substring(1))
    } else {
        if (splited.length === 300) { // data.d300
            result = rd3(str.substring(0, 3)) + " " + data.d298[1] + " " + rd297(str.substring(3))
        }
    }
    return normalize(result)
}
function rd301(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd300(str.substring(1))
    } else {
        if (splited.length === 301) { // data.d301
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d301[0] + " e " + rd300(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d301[1] + " " + rd300(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd302(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd301(str.substring(1))
    } else {
        if (splited.length === 302) { // data.d302
            result = rd2(str.substring(0, 2)) + " " + data.d301[1] + " " + rd300(str.substring(2))
        }
    }
    return normalize(result)
}
function rd303(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd302(str.substring(1))
    } else {
        if (splited.length === 303) { // data.d303
            result = rd3(str.substring(0, 3)) + " " + data.d301[1] + " " + rd300(str.substring(3))
        }
    }
    return normalize(result)
}
function rd304(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd303(str.substring(1))
    } else {
        if (splited.length === 304) { // data.d304
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d304[0] + " e " + rd303(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d304[1] + " " + rd303(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd305(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd304(str.substring(1))
    } else {
        if (splited.length === 305) { // data.d305
            result = rd2(str.substring(0, 2)) + " " + data.d304[1] + " " + rd303(str.substring(2))
        }
    }
    return normalize(result)
}
function rd306(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd305(str.substring(1))
    } else {
        if (splited.length === 306) { // data.d306
            result = rd3(str.substring(0, 3)) + " " + data.d304[1] + " " + rd303(str.substring(3))
        }
    }
    return normalize(result)
}
function rd307(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd306(str.substring(1))
    } else {
        if (splited.length === 307) { // data.d307
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d307[0] + " e " + rd306(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d307[1] + " " + rd306(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd308(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd307(str.substring(1))
    } else {
        if (splited.length === 308) { // data.d308
            result = rd2(str.substring(0, 2)) + " " + data.d307[1] + " " + rd306(str.substring(2))
        }
    }
    return normalize(result)
}
function rd309(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd308(str.substring(1))
    } else {
        if (splited.length === 309) { // data.d309
            result = rd3(str.substring(0, 3)) + " " + data.d307[1] + " " + rd306(str.substring(3))
        }
    }
    return normalize(result)
}
function rd310(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd309(str.substring(1))
    } else {
        if (splited.length === 310) { // data.d310
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d310[0] + " e " + rd309(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d310[1] + " " + rd309(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd311(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd310(str.substring(1))
    } else {
        if (splited.length === 311) { // data.d311
            result = rd2(str.substring(0, 2)) + " " + data.d310[1] + " " + rd309(str.substring(2))
        }
    }
    return normalize(result)
}
function rd312(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd311(str.substring(1))
    } else {
        if (splited.length === 312) { // data.d312
            result = rd3(str.substring(0, 3)) + " " + data.d310[1] + " " + rd309(str.substring(3))
        }
    }
    return normalize(result)
}
function rd313(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd312(str.substring(1))
    } else {
        if (splited.length === 313) { // data.d313
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d313[0] + " e " + rd312(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d313[1] + " " + rd312(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd314(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd313(str.substring(1))
    } else {
        if (splited.length === 314) { // data.d314
            result = rd2(str.substring(0, 2)) + " " + data.d313[1] + " " + rd312(str.substring(2))
        }
    }
    return normalize(result)
}
function rd315(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd314(str.substring(1))
    } else {
        if (splited.length === 315) { // data.d315
            result = rd3(str.substring(0, 3)) + " " + data.d313[1] + " " + rd312(str.substring(3))
        }
    }
    return normalize(result)
}
function rd316(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd315(str.substring(1))
    } else {
        if (splited.length === 316) { // data.d316
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d316[0] + " e " + rd315(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d316[1] + " " + rd315(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd317(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd316(str.substring(1))
    } else {
        if (splited.length === 317) { // data.d317
            result = rd2(str.substring(0, 2)) + " " + data.d316[1] + " " + rd315(str.substring(2))
        }
    }
    return normalize(result)
}
function rd318(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd317(str.substring(1))
    } else {
        if (splited.length === 318) { // data.d318
            result = rd3(str.substring(0, 3)) + " " + data.d316[1] + " " + rd315(str.substring(3))
        }
    }
    return normalize(result)
}
function rd319(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd318(str.substring(1))
    } else {
        if (splited.length === 319) { // data.d319
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d319[0] + " e " + rd318(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d319[1] + " " + rd318(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd320(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd319(str.substring(1))
    } else {
        if (splited.length === 320) { // data.d320
            result = rd2(str.substring(0, 2)) + " " + data.d319[1] + " " + rd318(str.substring(2))
        }
    }
    return normalize(result)
}
function rd321(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd320(str.substring(1))
    } else {
        if (splited.length === 321) { // data.d321
            result = rd3(str.substring(0, 3)) + " " + data.d319[1] + " " + rd318(str.substring(3))
        }
    }
    return normalize(result)
}
function rd322(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd321(str.substring(1))
    } else {
        if (splited.length === 322) { // data.d322
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d322[0] + " e " + rd321(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d322[1] + " " + rd321(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd323(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd322(str.substring(1))
    } else {
        if (splited.length === 323) { // data.d323
            result = rd2(str.substring(0, 2)) + " " + data.d322[1] + " " + rd321(str.substring(2))
        }
    }
    return normalize(result)
}
function rd324(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd323(str.substring(1))
    } else {
        if (splited.length === 324) { // data.d324
            result = rd3(str.substring(0, 3)) + " " + data.d322[1] + " " + rd321(str.substring(3))
        }
    }
    return normalize(result)
}
function rd325(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd324(str.substring(1))
    } else {
        if (splited.length === 325) { // data.d325
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d325[0] + " e " + rd324(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d325[1] + " " + rd324(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd326(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd325(str.substring(1))
    } else {
        if (splited.length === 326) { // data.d326
            result = rd2(str.substring(0, 2)) + " " + data.d325[1] + " " + rd324(str.substring(2))
        }
    }
    return normalize(result)
}
function rd327(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd326(str.substring(1))
    } else {
        if (splited.length === 327) { // data.d327
            result = rd3(str.substring(0, 3)) + " " + data.d325[1] + " " + rd324(str.substring(3))
        }
    }
    return normalize(result)
}
function rd328(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd327(str.substring(1))
    } else {
        if (splited.length === 328) { // data.d328
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d328[0] + " e " + rd327(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d328[1] + " " + rd327(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd329(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd328(str.substring(1))
    } else {
        if (splited.length === 329) { // data.d329
            result = rd2(str.substring(0, 2)) + " " + data.d328[1] + " " + rd327(str.substring(2))
        }
    }
    return normalize(result)
}
function rd330(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd329(str.substring(1))
    } else {
        if (splited.length === 330) { // data.d330
            result = rd3(str.substring(0, 3)) + " " + data.d328[1] + " " + rd327(str.substring(3))
        }
    }
    return normalize(result)
}
function rd331(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd330(str.substring(1))
    } else {
        if (splited.length === 331) { // data.d331
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d331[0] + " e " + rd330(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d331[1] + " " + rd330(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd332(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd331(str.substring(1))
    } else {
        if (splited.length === 332) { // data.d332
            result = rd2(str.substring(0, 2)) + " " + data.d331[1] + " " + rd330(str.substring(2))
        }
    }
    return normalize(result)
}
function rd333(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd332(str.substring(1))
    } else {
        if (splited.length === 333) { // data.d333
            result = rd3(str.substring(0, 3)) + " " + data.d331[1] + " " + rd330(str.substring(3))
        }
    }
    return normalize(result)
}
function rd334(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd333(str.substring(1))
    } else {
        if (splited.length === 334) { // data.d334
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d334[0] + " e " + rd333(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d334[1] + " " + rd333(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd335(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd334(str.substring(1))
    } else {
        if (splited.length === 335) { // data.d335
            result = rd2(str.substring(0, 2)) + " " + data.d334[1] + " " + rd333(str.substring(2))
        }
    }
    return normalize(result)
}
function rd336(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd335(str.substring(1))
    } else {
        if (splited.length === 336) { // data.d336
            result = rd3(str.substring(0, 3)) + " " + data.d334[1] + " " + rd333(str.substring(3))
        }
    }
    return normalize(result)
}
function rd337(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd336(str.substring(1))
    } else {
        if (splited.length === 337) { // data.d337
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d337[0] + " e " + rd336(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d337[1] + " " + rd336(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd338(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd337(str.substring(1))
    } else {
        if (splited.length === 338) { // data.d338
            result = rd2(str.substring(0, 2)) + " " + data.d337[1] + " " + rd336(str.substring(2))
        }
    }
    return normalize(result)
}
function rd339(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd338(str.substring(1))
    } else {
        if (splited.length === 339) { // data.d339
            result = rd3(str.substring(0, 3)) + " " + data.d337[1] + " " + rd336(str.substring(3))
        }
    }
    return normalize(result)
}
function rd340(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd339(str.substring(1))
    } else {
        if (splited.length === 340) { // data.d340
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d340[0] + " e " + rd339(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d340[1] + " " + rd339(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd341(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd340(str.substring(1))
    } else {
        if (splited.length === 341) { // data.d341
            result = rd2(str.substring(0, 2)) + " " + data.d340[1] + " " + rd339(str.substring(2))
        }
    }
    return normalize(result)
}
function rd342(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd341(str.substring(1))
    } else {
        if (splited.length === 342) { // data.d342
            result = rd3(str.substring(0, 3)) + " " + data.d340[1] + " " + rd339(str.substring(3))
        }
    }
    return normalize(result)
}
function rd343(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd342(str.substring(1))
    } else {
        if (splited.length === 343) { // data.d343
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d343[0] + " e " + rd342(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d343[1] + " " + rd342(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd344(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd343(str.substring(1))
    } else {
        if (splited.length === 344) { // data.d344
            result = rd2(str.substring(0, 2)) + " " + data.d343[1] + " " + rd342(str.substring(2))
        }
    }
    return normalize(result)
}
function rd345(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd344(str.substring(1))
    } else {
        if (splited.length === 345) { // data.d345
            result = rd3(str.substring(0, 3)) + " " + data.d343[1] + " " + rd342(str.substring(3))
        }
    }
    return normalize(result)
}
function rd346(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd345(str.substring(1))
    } else {
        if (splited.length === 346) { // data.d346
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d346[0] + " e " + rd345(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d346[1] + " " + rd345(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd347(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd346(str.substring(1))
    } else {
        if (splited.length === 347) { // data.d347
            result = rd2(str.substring(0, 2)) + " " + data.d346[1] + " " + rd345(str.substring(2))
        }
    }
    return normalize(result)
}
function rd348(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd347(str.substring(1))
    } else {
        if (splited.length === 348) { // data.d348
            result = rd3(str.substring(0, 3)) + " " + data.d346[1] + " " + rd345(str.substring(3))
        }
    }
    return normalize(result)
}
function rd349(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd348(str.substring(1))
    } else {
        if (splited.length === 349) { // data.d349
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d349[0] + " e " + rd348(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d349[1] + " " + rd348(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd350(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd349(str.substring(1))
    } else {
        if (splited.length === 350) { // data.d350
            result = rd2(str.substring(0, 2)) + " " + data.d349[1] + " " + rd348(str.substring(2))
        }
    }
    return normalize(result)
}
function rd351(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd350(str.substring(1))
    } else {
        if (splited.length === 351) { // data.d351
            result = rd3(str.substring(0, 3)) + " " + data.d349[1] + " " + rd348(str.substring(3))
        }
    }
    return normalize(result)
}
function rd352(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd351(str.substring(1))
    } else {
        if (splited.length === 352) { // data.d352
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d352[0] + " e " + rd351(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d352[1] + " " + rd351(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd353(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd352(str.substring(1))
    } else {
        if (splited.length === 353) { // data.d353
            result = rd2(str.substring(0, 2)) + " " + data.d352[1] + " " + rd351(str.substring(2))
        }
    }
    return normalize(result)
}
function rd354(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd353(str.substring(1))
    } else {
        if (splited.length === 354) { // data.d354
            result = rd3(str.substring(0, 3)) + " " + data.d352[1] + " " + rd351(str.substring(3))
        }
    }
    return normalize(result)
}
function rd355(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd354(str.substring(1))
    } else {
        if (splited.length === 355) { // data.d355
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d355[0] + " e " + rd354(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d355[1] + " " + rd354(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd356(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd355(str.substring(1))
    } else {
        if (splited.length === 356) { // data.d356
            result = rd2(str.substring(0, 2)) + " " + data.d355[1] + " " + rd354(str.substring(2))
        }
    }
    return normalize(result)
}
function rd357(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd356(str.substring(1))
    } else {
        if (splited.length === 357) { // data.d357
            result = rd3(str.substring(0, 3)) + " " + data.d355[1] + " " + rd354(str.substring(3))
        }
    }
    return normalize(result)
}
function rd358(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd357(str.substring(1))
    } else {
        if (splited.length === 358) { // data.d358
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d358[0] + " e " + rd357(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d358[1] + " " + rd357(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd359(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd358(str.substring(1))
    } else {
        if (splited.length === 359) { // data.d359
            result = rd2(str.substring(0, 2)) + " " + data.d358[1] + " " + rd357(str.substring(2))
        }
    }
    return normalize(result)
}
function rd360(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd359(str.substring(1))
    } else {
        if (splited.length === 360) { // data.d360
            result = rd3(str.substring(0, 3)) + " " + data.d358[1] + " " + rd357(str.substring(3))
        }
    }
    return normalize(result)
}
function rd361(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd360(str.substring(1))
    } else {
        if (splited.length === 361) { // data.d361
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d361[0] + " e " + rd360(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d361[1] + " " + rd360(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd362(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd361(str.substring(1))
    } else {
        if (splited.length === 362) { // data.d362
            result = rd2(str.substring(0, 2)) + " " + data.d361[1] + " " + rd360(str.substring(2))
        }
    }
    return normalize(result)
}
function rd363(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd362(str.substring(1))
    } else {
        if (splited.length === 363) { // data.d363
            result = rd3(str.substring(0, 3)) + " " + data.d361[1] + " " + rd360(str.substring(3))
        }
    }
    return normalize(result)
}
function rd364(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd363(str.substring(1))
    } else {
        if (splited.length === 364) { // data.d364
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d364[0] + " e " + rd363(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d364[1] + " " + rd363(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd365(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd364(str.substring(1))
    } else {
        if (splited.length === 365) { // data.d365
            result = rd2(str.substring(0, 2)) + " " + data.d364[1] + " " + rd363(str.substring(2))
        }
    }
    return normalize(result)
}
function rd366(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd365(str.substring(1))
    } else {
        if (splited.length === 366) { // data.d366
            result = rd3(str.substring(0, 3)) + " " + data.d364[1] + " " + rd363(str.substring(3))
        }
    }
    return normalize(result)
}
function rd367(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd366(str.substring(1))
    } else {
        if (splited.length === 367) { // data.d367
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d367[0] + " e " + rd366(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d367[1] + " " + rd366(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd368(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd367(str.substring(1))
    } else {
        if (splited.length === 368) { // data.d368
            result = rd2(str.substring(0, 2)) + " " + data.d367[1] + " " + rd366(str.substring(2))
        }
    }
    return normalize(result)
}
function rd369(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd368(str.substring(1))
    } else {
        if (splited.length === 369) { // data.d369
            result = rd3(str.substring(0, 3)) + " " + data.d367[1] + " " + rd366(str.substring(3))
        }
    }
    return normalize(result)
}
function rd370(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd369(str.substring(1))
    } else {
        if (splited.length === 370) { // data.d370
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d370[0] + " e " + rd369(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d370[1] + " " + rd369(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd371(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd370(str.substring(1))
    } else {
        if (splited.length === 371) { // data.d371
            result = rd2(str.substring(0, 2)) + " " + data.d370[1] + " " + rd369(str.substring(2))
        }
    }
    return normalize(result)
}
function rd372(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd371(str.substring(1))
    } else {
        if (splited.length === 372) { // data.d372
            result = rd3(str.substring(0, 3)) + " " + data.d370[1] + " " + rd369(str.substring(3))
        }
    }
    return normalize(result)
}
function rd373(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd372(str.substring(1))
    } else {
        if (splited.length === 373) { // data.d373
            if (splited[0] === "1") {
                result = rd1(splited[0]) + " " + data.d373[0] + " e " + rd372(str.substring(1))
            } else {
                result = rd1(splited[0]) + " " + data.d373[1] + " " + rd372(str.substring(1))
            }
        }
    }
    return normalize(result)
}
function rd374(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd373(str.substring(1))
    } else {
        if (splited.length === 374) { // data.d374
            result = rd2(str.substring(0, 2)) + " " + data.d373[1] + " " + rd372(str.substring(2))
        }
    }
    return normalize(result)
}
function rd375(str) {
    let result = "";
    const splited = str.split("");
    if (splited[0] === "0") {
        result = rd374(str.substring(1))
    } else {
        if (splited.length === 375) { // data.d375
            result = rd3(str.substring(0, 3)) + " " + data.d373[1] + " " + rd372(str.substring(3))
        }
    }
    return normalize(result)
} 

function normalize(str) {
    let result = str.replace("undefined ", "")
        .replace(",", "")
        .replace(".", "")
        .trim()
    return result;
}
function call(str) {
    if (isANumber(str)) {
        //replace
        if (str.length === 1) { // d1
            result = rd1(str)
        } else if (str.length === 2) { // d2
            result = rd2(str)
        } else if (str.length === 3) { // d3
            result = rd3(str)
        } else if (str.length === 4) { // d4
            result = rd4(str)
        } else if (str.length === 5) { // d5
            result = rd5(str)
        } else if (str.length === 6) { // d6
            result = rd6(str)
        } else if (str.length === 7) { // d7
            result = rd7(str)
        } else if (str.length === 8) { // d8
            result = rd8(str)
        } else if (str.length === 9) { // d9
            result = rd9(str)
        } else if (str.length === 10) { // d10
            result = rd10(str)
        } else if (str.length === 11) { // d11
            result = rd11(str)
        } else if (str.length === 12) { // d12
            result = rd12(str)
        } else if (str.length === 13) { // d13
            result = rd13(str)
        } else if (str.length === 14) { // d14
            result = rd14(str)
        } else if (str.length === 15) { // d15
            result = rd15(str)
        } else if (str.length === 16) { // d16
            result = rd16(str)
        } else if (str.length === 17) { // d17
            result = rd17(str)
        } else if (str.length === 18) { // d18
            result = rd18(str)
        } else if (str.length === 19) { // d19
            result = rd19(str)
        } else if (str.length === 20) { // d20
            result = rd20(str)
        } else if (str.length === 21) { // d21
            result = rd21(str)
        } else if (str.length === 22) { // d22
            result = rd22(str)
        } else if (str.length === 23) { // d23
            result = rd23(str)
        } else if (str.length === 24) { // d24
            result = rd24(str)
        } else if (str.length === 25) { // d25
            result = rd25(str)
        } else if (str.length === 26) { // d26
            result = rd26(str)
        } else if (str.length === 27) { // d27
            result = rd27(str)
        } else if (str.length === 28) { // d28
            result = rd28(str)
        } else if (str.length === 29) { // d29
            result = rd29(str)
        } else if (str.length === 30) { // d30
            result = rd30(str)
        } else if (str.length === 31) { // d31
            result = rd31(str)
        } else if (str.length === 32) { // d32
            result = rd32(str)
        } else if (str.length === 33) { // d33
            result = rd33(str)
        } else if (str.length === 34) { // d34
            result = rd34(str)
        } else if (str.length === 35) { // d35
            result = rd35(str)
        } else if (str.length === 36) { // d36
            result = rd36(str)
        } else if (str.length === 37) { // d37;
            result = rd37(str);
        } else if (str.length === 38) { // d38;
            result = rd38(str);
        } else if (str.length === 39) { // d39;
            result = rd39(str);
        } else if (str.length === 40) { // d40;
            result = rd40(str);
        } else if (str.length === 41) { // d41;
            result = rd41(str);
        } else if (str.length === 42) { // d42;
            result = rd42(str);
        } else if (str.length === 43) { // d43;
            result = rd43(str);
        } else if (str.length === 44) { // d44;
            result = rd44(str);
        } else if (str.length === 45) { // d45;
            result = rd45(str);
        } else if (str.length === 46) { // d46;
            result = rd46(str);
        } else if (str.length === 47) { // d47;
            result = rd47(str);
        } else if (str.length === 48) { // d48;
            result = rd48(str);
        } else if (str.length === 49) { // d49;
            result = rd49(str);
        } else if (str.length === 50) { // d50;
            result = rd50(str);
        } else if (str.length === 51) { // d51;
            result = rd51(str);
        } else if (str.length === 52) { // d52;
            result = rd52(str);
        } else if (str.length === 53) { // d53;
            result = rd53(str);
        } else if (str.length === 54) { // d54;
            result = rd54(str);
        } else if (str.length === 55) { // d55;
            result = rd55(str);
        } else if (str.length === 56) { // d56;
            result = rd56(str);
        } else if (str.length === 57) { // d57;
            result = rd57(str);
        } else if (str.length === 58) { // d58;
            result = rd58(str);
        } else if (str.length === 59) { // d59;
            result = rd59(str);
        } else if (str.length === 60) { // d60;
            result = rd60(str);
        } else if (str.length === 61) { // d61;
            result = rd61(str);
        } else if (str.length === 62) { // d62;
            result = rd62(str);
        } else if (str.length === 63) { // d63;
            result = rd63(str);
        } else if (str.length === 64) { // d64;
            result = rd64(str);
        } else if (str.length === 65) { // d65;
            result = rd65(str);
        } else if (str.length === 66) { // d66;
            result = rd66(str);
        } else if (str.length === 67) { // d67;
            result = rd67(str);
        } else if (str.length === 68) { // d68;
            result = rd68(str);
        } else if (str.length === 69) { // d69;
            result = rd69(str);
        } else if (str.length === 70) { // d70;
            result = rd70(str);
        } else if (str.length === 71) { // d71;
            result = rd71(str);
        } else if (str.length === 72) { // d72;
            result = rd72(str);
        } else if (str.length === 73) { // d73;
            result = rd73(str);
        } else if (str.length === 74) { // d74;
            result = rd74(str);
        } else if (str.length === 75) { // d75;
            result = rd75(str);
        } else if (str.length === 76) { // d76;
            result = rd76(str);
        } else if (str.length === 77) { // d77;
            result = rd77(str);
        } else if (str.length === 78) { // d78;
            result = rd78(str);
        } else if (str.length === 79) { // d79;
            result = rd79(str);
        } else if (str.length === 80) { // d80;
            result = rd80(str);
        } else if (str.length === 81) { // d81;
            result = rd81(str);
        } else if (str.length === 82) { // d82;
            result = rd82(str);
        } else if (str.length === 83) { // d83;
            result = rd83(str);
        } else if (str.length === 84) { // d84;
            result = rd84(str);
        } else if (str.length === 85) { // d85;
            result = rd85(str);
        } else if (str.length === 86) { // d86;
            result = rd86(str);
        } else if (str.length === 87) { // d87;
            result = rd87(str);
        } else if (str.length === 88) { // d88;
            result = rd88(str);
        } else if (str.length === 89) { // d89;
            result = rd89(str);
        } else if (str.length === 90) { // d90;
            result = rd90(str);
        } else if (str.length === 91) { // d91;
            result = rd91(str);
        } else if (str.length === 92) { // d92;
            result = rd92(str);
        } else if (str.length === 93) { // d93;
            result = rd93(str);
        } else if (str.length === 94) { // d94;
            result = rd94(str);
        } else if (str.length === 95) { // d95;
            result = rd95(str);
        } else if (str.length === 96) { // d96;
            result = rd96(str);
        } else if (str.length === 97) { // d97;
            result = rd97(str);
        } else if (str.length === 98) { // d98;
            result = rd98(str);
        } else if (str.length === 99) { // d99;
            result = rd99(str);
        } else if (str.length === 100) { // d100;
            result = rd100(str);
        } else if (str.length === 101) { // d101;
            result = rd101(str);
        } else if (str.length === 102) { // d102;
            result = rd102(str);
        } else if (str.length === 103) { // d103;
            result = rd103(str);
        } else if (str.length === 104) { // d104;
            result = rd104(str);
        } else if (str.length === 105) { // d105;
            result = rd105(str);
        } else if (str.length === 106) { // d106;
            result = rd106(str);
        } else if (str.length === 107) { // d107;
            result = rd107(str);
        } else if (str.length === 108) { // d108;
            result = rd108(str);
        } else if (str.length === 109) { // d109;
            result = rd109(str);
        } else if (str.length === 110) { // d110;
            result = rd110(str);
        } else if (str.length === 111) { // d111;
            result = rd111(str);
        } else if (str.length === 112) { // d112;
            result = rd112(str);
        } else if (str.length === 113) { // d113;
            result = rd113(str);
        } else if (str.length === 114) { // d114;
            result = rd114(str);
        } else if (str.length === 115) { // d115;
            result = rd115(str);
        } else if (str.length === 116) { // d116;
            result = rd116(str);
        } else if (str.length === 117) { // d117;
            result = rd117(str);
        } else if (str.length === 118) { // d118;
            result = rd118(str);
        } else if (str.length === 119) { // d119;
            result = rd119(str);
        } else if (str.length === 120) { // d120;
            result = rd120(str);
        } else if (str.length === 121) { // d121;
            result = rd121(str);
        } else if (str.length === 122) { // d122;
            result = rd122(str);
        } else if (str.length === 123) { // d123;
            result = rd123(str);
        } else if (str.length === 124) { // d124;
            result = rd124(str);
        } else if (str.length === 125) { // d125;
            result = rd125(str);
        } else if (str.length === 126) { // d126;
            result = rd126(str);
        } else if (str.length === 127) { // d127;
            result = rd127(str);
        } else if (str.length === 128) { // d128;
            result = rd128(str);
        } else if (str.length === 129) { // d129;
            result = rd129(str);
        } else if (str.length === 130) { // d130;
            result = rd130(str);
        } else if (str.length === 131) { // d131;
            result = rd131(str);
        } else if (str.length === 132) { // d132;
            result = rd132(str);
        } else if (str.length === 133) { // d133;
            result = rd133(str);
        } else if (str.length === 134) { // d134;
            result = rd134(str);
        } else if (str.length === 135) { // d135;
            result = rd135(str);
        } else if (str.length === 136) { // d136;
            result = rd136(str);
        } else if (str.length === 137) { // d137;
            result = rd137(str);
        } else if (str.length === 138) { // d138;
            result = rd138(str);
        } else if (str.length === 139) { // d139;
            result = rd139(str);
        } else if (str.length === 140) { // d140;
            result = rd140(str);
        } else if (str.length === 141) { // d141;
            result = rd141(str);
        } else if (str.length === 142) { // d142;
            result = rd142(str);
        } else if (str.length === 143) { // d143;
            result = rd143(str);
        } else if (str.length === 144) { // d144;
            result = rd144(str);
        } else if (str.length === 145) { // d145;
            result = rd145(str);
        } else if (str.length === 146) { // d146;
            result = rd146(str);
        } else if (str.length === 147) { // d147;
            result = rd147(str);
        } else if (str.length === 148) { // d148;
            result = rd148(str);
        } else if (str.length === 149) { // d149;
            result = rd149(str);
        } else if (str.length === 150) { // d150;
            result = rd150(str);
        } else if (str.length === 151) { // d151;
            result = rd151(str);
        } else if (str.length === 152) { // d152;
            result = rd152(str);
        } else if (str.length === 153) { // d153;
            result = rd153(str);
        } else if (str.length === 154) { // d154;
            result = rd154(str);
        } else if (str.length === 155) { // d155;
            result = rd155(str);
        } else if (str.length === 156) { // d156;
            result = rd156(str);
        } else if (str.length === 157) { // d157;
            result = rd157(str);
        } else if (str.length === 158) { // d158;
            result = rd158(str);
        } else if (str.length === 159) { // d159;
            result = rd159(str);
        } else if (str.length === 160) { // d160;
            result = rd160(str);
        } else if (str.length === 161) { // d161;
            result = rd161(str);
        } else if (str.length === 162) { // d162;
            result = rd162(str);
        } else if (str.length === 163) { // d163;
            result = rd163(str);
        } else if (str.length === 164) { // d164;
            result = rd164(str);
        } else if (str.length === 165) { // d165;
            result = rd165(str);
        } else if (str.length === 166) { // d166;
            result = rd166(str);
        } else if (str.length === 167) { // d167;
            result = rd167(str);
        } else if (str.length === 168) { // d168;
            result = rd168(str);
        } else if (str.length === 169) { // d169;
            result = rd169(str);
        } else if (str.length === 170) { // d170;
            result = rd170(str);
        } else if (str.length === 171) { // d171;
            result = rd171(str);
        } else if (str.length === 172) { // d172;
            result = rd172(str);
        } else if (str.length === 173) { // d173;
            result = rd173(str);
        } else if (str.length === 174) { // d174;
            result = rd174(str);
        } else if (str.length === 175) { // d175;
            result = rd175(str);
        } else if (str.length === 176) { // d176;
            result = rd176(str);
        } else if (str.length === 177) { // d177;
            result = rd177(str);
        } else if (str.length === 178) { // d178;
            result = rd178(str);
        } else if (str.length === 179) { // d179;
            result = rd179(str);
        } else if (str.length === 180) { // d180;
            result = rd180(str);
        } else if (str.length === 181) { // d181;
            result = rd181(str);
        } else if (str.length === 182) { // d182;
            result = rd182(str);
        } else if (str.length === 183) { // d183;
            result = rd183(str);
        } else if (str.length === 184) { // d184;
            result = rd184(str);
        } else if (str.length === 185) { // d185;
            result = rd185(str);
        } else if (str.length === 186) { // d186;
            result = rd186(str);
        } else if (str.length === 187) { // d187;
            result = rd187(str);
        } else if (str.length === 188) { // d188;
            result = rd188(str);
        } else if (str.length === 189) { // d189;
            result = rd189(str);
        } else if (str.length === 190) { // d190;
            result = rd190(str);
        } else if (str.length === 191) { // d191;
            result = rd191(str);
        } else if (str.length === 192) { // d192;
            result = rd192(str);
        } else if (str.length === 193) { // d193;
            result = rd193(str);
        } else if (str.length === 194) { // d194;
            result = rd194(str);
        } else if (str.length === 195) { // d195;
            result = rd195(str);
        } else if (str.length === 196) { // d196;
            result = rd196(str);
        } else if (str.length === 197) { // d197;
            result = rd197(str);
        } else if (str.length === 198) { // d198;
            result = rd198(str);
        } else if (str.length === 199) { // d199;
            result = rd199(str);
        } else if (str.length === 200) { // d200;
            result = rd200(str);
        } else if (str.length === 201) { // d201;
            result = rd201(str);
        } else if (str.length === 202) { // d202;
            result = rd202(str);
        } else if (str.length === 203) { // d203;
            result = rd203(str);
        } else if (str.length === 204) { // d204;
            result = rd204(str);
        } else if (str.length === 205) { // d205;
            result = rd205(str);
        } else if (str.length === 206) { // d206;
            result = rd206(str);
        } else if (str.length === 207) { // d207;
            result = rd207(str);
        } else if (str.length === 208) { // d208;
            result = rd208(str);
        } else if (str.length === 209) { // d209;
            result = rd209(str);
        } else if (str.length === 210) { // d210;
            result = rd210(str);
        } else if (str.length === 211) { // d211;
            result = rd211(str);
        } else if (str.length === 212) { // d212;
            result = rd212(str);
        } else if (str.length === 213) { // d213;
            result = rd213(str);
        } else if (str.length === 214) { // d214;
            result = rd214(str);
        } else if (str.length === 215) { // d215;
            result = rd215(str);
        } else if (str.length === 216) { // d216;
            result = rd216(str);
        } else if (str.length === 217) { // d217;
            result = rd217(str);
        } else if (str.length === 218) { // d218;
            result = rd218(str);
        } else if (str.length === 219) { // d219;
            result = rd219(str);
        } else if (str.length === 220) { // d220;
            result = rd220(str);
        } else if (str.length === 221) { // d221;
            result = rd221(str);
        } else if (str.length === 222) { // d222;
            result = rd222(str);
        } else if (str.length === 223) { // d223;
            result = rd223(str);
        } else if (str.length === 224) { // d224;
            result = rd224(str);
        } else if (str.length === 225) { // d225;
            result = rd225(str);
        } else if (str.length === 226) { // d226;
            result = rd226(str);
        } else if (str.length === 227) { // d227;
            result = rd227(str);
        } else if (str.length === 228) { // d228;
            result = rd228(str);
        } else if (str.length === 229) { // d229;
            result = rd229(str);
        } else if (str.length === 230) { // d230;
            result = rd230(str);
        } else if (str.length === 231) { // d231;
            result = rd231(str);
        } else if (str.length === 232) { // d232;
            result = rd232(str);
        } else if (str.length === 233) { // d233;
            result = rd233(str);
        } else if (str.length === 234) { // d234;
            result = rd234(str);
        } else if (str.length === 235) { // d235;
            result = rd235(str);
        } else if (str.length === 236) { // d236;
            result = rd236(str);
        } else if (str.length === 237) { // d237;
            result = rd237(str);
        } else if (str.length === 238) { // d238;
            result = rd238(str);
        } else if (str.length === 239) { // d239;
            result = rd239(str);
        } else if (str.length === 240) { // d240;
            result = rd240(str);
        } else if (str.length === 241) { // d241;
            result = rd241(str);
        } else if (str.length === 242) { // d242;
            result = rd242(str);
        } else if (str.length === 243) { // d243;
            result = rd243(str);
        } else if (str.length === 244) { // d244;
            result = rd244(str);
        } else if (str.length === 245) { // d245;
            result = rd245(str);
        } else if (str.length === 246) { // d246;
            result = rd246(str);
        } else if (str.length === 247) { // d247;
            result = rd247(str);
        } else if (str.length === 248) { // d248;
            result = rd248(str);
        } else if (str.length === 249) { // d249;
            result = rd249(str);
        } else if (str.length === 250) { // d250;
            result = rd250(str);
        } else if (str.length === 251) { // d251;
            result = rd251(str);
        } else if (str.length === 252) { // d252;
            result = rd252(str);
        } else if (str.length === 253) { // d253;
            result = rd253(str);
        } else if (str.length === 254) { // d254;
            result = rd254(str);
        } else if (str.length === 255) { // d255;
            result = rd255(str);
        } else if (str.length === 256) { // d256;
            result = rd256(str);
        } else if (str.length === 257) { // d257;
            result = rd257(str);
        } else if (str.length === 258) { // d258;
            result = rd258(str);
        } else if (str.length === 259) { // d259;
            result = rd259(str);
        } else if (str.length === 260) { // d260;
            result = rd260(str);
        } else if (str.length === 261) { // d261;
            result = rd261(str);
        } else if (str.length === 262) { // d262;
            result = rd262(str);
        } else if (str.length === 263) { // d263;
            result = rd263(str);
        } else if (str.length === 264) { // d264;
            result = rd264(str);
        } else if (str.length === 265) { // d265;
            result = rd265(str);
        } else if (str.length === 266) { // d266;
            result = rd266(str);
        } else if (str.length === 267) { // d267;
            result = rd267(str);
        } else if (str.length === 268) { // d268;
            result = rd268(str);
        } else if (str.length === 269) { // d269;
            result = rd269(str);
        } else if (str.length === 270) { // d270;
            result = rd270(str);
        } else if (str.length === 271) { // d271;
            result = rd271(str);
        } else if (str.length === 272) { // d272;
            result = rd272(str);
        } else if (str.length === 273) { // d273;
            result = rd273(str);
        } else if (str.length === 274) { // d274;
            result = rd274(str);
        } else if (str.length === 275) { // d275;
            result = rd275(str);
        } else if (str.length === 276) { // d276;
            result = rd276(str);
        } else if (str.length === 277) { // d277;
            result = rd277(str);
        } else if (str.length === 278) { // d278;
            result = rd278(str);
        } else if (str.length === 279) { // d279;
            result = rd279(str);
        } else if (str.length === 280) { // d280;
            result = rd280(str);
        } else if (str.length === 281) { // d281;
            result = rd281(str);
        } else if (str.length === 282) { // d282;
            result = rd282(str);
        } else if (str.length === 283) { // d283;
            result = rd283(str);
        } else if (str.length === 284) { // d284;
            result = rd284(str);
        } else if (str.length === 285) { // d285;
            result = rd285(str);
        } else if (str.length === 286) { // d286;
            result = rd286(str);
        } else if (str.length === 287) { // d287;
            result = rd287(str);
        } else if (str.length === 288) { // d288;
            result = rd288(str);
        } else if (str.length === 289) { // d289;
            result = rd289(str);
        } else if (str.length === 290) { // d290;
            result = rd290(str);
        } else if (str.length === 291) { // d291;
            result = rd291(str);
        } else if (str.length === 292) { // d292;
            result = rd292(str);
        } else if (str.length === 293) { // d293;
            result = rd293(str);
        } else if (str.length === 294) { // d294;
            result = rd294(str);
        } else if (str.length === 295) { // d295;
            result = rd295(str);
        } else if (str.length === 296) { // d296;
            result = rd296(str);
        } else if (str.length === 297) { // d297;
            result = rd297(str);
        } else if (str.length === 298) { // d298;
            result = rd298(str);
        } else if (str.length === 299) { // d299;
            result = rd299(str);
        } else if (str.length === 300) { // d300;
            result = rd300(str);
        } else if (str.length === 301) { // d301;
            result = rd301(str);
        } else if (str.length === 302) { // d302;
            result = rd302(str);
        } else if (str.length === 303) { // d303;
            result = rd303(str);
        } else if (str.length === 304) { // d304;
            result = rd304(str);
        } else if (str.length === 305) { // d305;
            result = rd305(str);
        } else if (str.length === 306) { // d306;
            result = rd306(str);
        } else if (str.length === 307) { // d307;
            result = rd307(str);
        } else if (str.length === 308) { // d308;
            result = rd308(str);
        } else if (str.length === 309) { // d309;
            result = rd309(str);
        } else if (str.length === 310) { // d310;
            result = rd310(str);
        } else if (str.length === 311) { // d311;
            result = rd311(str);
        } else if (str.length === 312) { // d312;
            result = rd312(str);
        } else if (str.length === 313) { // d313;
            result = rd313(str);
        } else if (str.length === 314) { // d314;
            result = rd314(str);
        } else if (str.length === 315) { // d315;
            result = rd315(str);
        } else if (str.length === 316) { // d316;
            result = rd316(str);
        } else if (str.length === 317) { // d317;
            result = rd317(str);
        } else if (str.length === 318) { // d318;
            result = rd318(str);
        } else if (str.length === 319) { // d319;
            result = rd319(str);
        } else if (str.length === 320) { // d320;
            result = rd320(str);
        } else if (str.length === 321) { // d321;
            result = rd321(str);
        } else if (str.length === 322) { // d322;
            result = rd322(str);
        } else if (str.length === 323) { // d323;
            result = rd323(str);
        } else if (str.length === 324) { // d324;
            result = rd324(str);
        } else if (str.length === 325) { // d325;
            result = rd325(str);
        } else if (str.length === 326) { // d326;
            result = rd326(str);
        } else if (str.length === 327) { // d327;
            result = rd327(str);
        } else if (str.length === 328) { // d328;
            result = rd328(str);
        } else if (str.length === 329) { // d329;
            result = rd329(str);
        } else if (str.length === 330) { // d330;
            result = rd330(str);
        } else if (str.length === 331) { // d331;
            result = rd331(str);
        } else if (str.length === 332) { // d332;
            result = rd332(str);
        } else if (str.length === 333) { // d333;
            result = rd333(str);
        } else if (str.length === 334) { // d334;
            result = rd334(str);
        } else if (str.length === 335) { // d335;
            result = rd335(str);
        } else if (str.length === 336) { // d336;
            result = rd336(str);
        } else if (str.length === 337) { // d337;
            result = rd337(str);
        } else if (str.length === 338) { // d338;
            result = rd338(str);
        } else if (str.length === 339) { // d339;
            result = rd339(str);
        } else if (str.length === 340) { // d340;
            result = rd340(str);
        } else if (str.length === 341) { // d341;
            result = rd341(str);
        } else if (str.length === 342) { // d342;
            result = rd342(str);
        } else if (str.length === 343) { // d343;
            result = rd343(str);
        } else if (str.length === 344) { // d344;
            result = rd344(str);
        } else if (str.length === 345) { // d345;
            result = rd345(str);
        } else if (str.length === 346) { // d346;
            result = rd346(str);
        } else if (str.length === 347) { // d347;
            result = rd347(str);
        } else if (str.length === 348) { // d348;
            result = rd348(str);
        } else if (str.length === 349) { // d349;
            result = rd349(str);
        } else if (str.length === 350) { // d350;
            result = rd350(str);
        } else if (str.length === 351) { // d351;
            result = rd351(str);
        } else if (str.length === 352) { // d352;
            result = rd352(str);
        } else if (str.length === 353) { // d353;
            result = rd353(str);
        } else if (str.length === 354) { // d354;
            result = rd354(str);
        } else if (str.length === 355) { // d355;
            result = rd355(str);
        } else if (str.length === 356) { // d356;
            result = rd356(str);
        } else if (str.length === 357) { // d357;
            result = rd357(str);
        } else if (str.length === 358) { // d358;
            result = rd358(str);
        } else if (str.length === 359) { // d359;
            result = rd359(str);
        } else if (str.length === 360) { // d360;
            result = rd360(str);
        } else if (str.length === 361) { // d361;
            result = rd361(str);
        } else if (str.length === 362) { // d362;
            result = rd362(str);
        } else if (str.length === 363) { // d363;
            result = rd363(str);
        } else if (str.length === 364) { // d364;
            result = rd364(str);
        } else if (str.length === 365) { // d365;
            result = rd365(str);
        } else if (str.length === 366) { // d366;
            result = rd366(str);
        } else if (str.length === 367) { // d367;
            result = rd367(str);
        } else if (str.length === 368) { // d368;
            result = rd368(str);
        } else if (str.length === 369) { // d369;
            result = rd369(str);
        } else if (str.length === 370) { // d370;
            result = rd370(str);
        } else if (str.length === 371) { // d371;
            result = rd371(str);
        } else if (str.length === 372) { // d372;
            result = rd372(str);
        } else if (str.length > 372) { // > 372
            result = ""
            console.log("CARNN Error: Input value exceeds the CARNN limit of 999 Unviginticentillions")
        }
        result = normalize(result);
    }
    return result;
}
function format(str) {
    data.replace.forEach(param => {
        str = str.replaceAll(param[0], param[1])
    });
    str = str.trim()


    data.slice.forEach(e => {
        if(str.substr((str.length - e.length),e.length)===e) {
            str = str.slice(0, -1);
            console.log(str)
        }
    });


    
    return str
}
//main
module.exports = (str, lang) => {
    if ((lang === undefined)||(lang === "")) {
        lang = "en-us"
    } else {

    }
    data = require("./data/names/" + normalize(lang) + ".json");
    let result
    if (Array.isArray(str)) {
        result = []
        str.forEach(e => {
            e = "" + e
            result.push(call(e, data))
        });
    } else {
        str = "" + str
        result = call(str)
    }
    //zeros
    result = result.replaceAll(data.d1[0], "")
    if (result.length === 0) { result = data.d1[0] };
    return format(result, data.replace);
}


