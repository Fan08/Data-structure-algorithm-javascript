/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-04-29 23:34:36
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-30 18:56:46
 */

function bigNumberAdd(number1, number2) {
    let numberStr1 = number1.toString();
    let numberStr2 = number2.toString();
    let numberArray1 = numberStr1.split('');
    let numberArray2 = numberStr2.split('');
    let minLength = numberArray1.length;
    let longerArray = numberArray2;
    let shorterArray = numberArray1;

    let result = [];
    if (numberArray2.length < minLength) {
        minLength = numberArray2.length;
        longerArray = numberArray1;
        shorterArray = numberArray2;
    }

    let distance = longerArray.length - minLength;

    let addOne = false;
    for (let i = minLength - 1; i >= 0; i--) {
        let itemInLonger = longerArray[distance + i];
        let itemInShorter = shorterArray[i];

        let itemResult = parseInt(itemInLonger) + parseInt(itemInShorter);

        if (addOne) {
            itemResult += 1;
        }

        if (itemResult >= 10) {
            addOne = true;
            itemResult = itemResult.toString().split('');
            result.unshift(itemResult[1]);
        } else {
            addOne = false;
            result.unshift(itemResult.toString());
        }
    }

    let otherInts = longerArray.slice(0, distance)

    if (addOne) {
        let lastOne = otherInts[distance - 1];
        lastOne = parseInt(lastOne) + 1;
        otherInts[distance - 1] = lastOne.toString();
    }

    var lastResult = otherInts.concat(result);
    lastResult = lastResult.join('');
    return lastResult;
}