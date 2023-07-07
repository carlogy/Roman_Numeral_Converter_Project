function convertToRoman(num) {

  const romanNumerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  if (num <= 10) {
      return romanNumerals[num];
    }


  const hundreds = num / 100;
  const remainder = num % 100;

  if (remainder === 0) {
    return romanNumerals[num];
  } else if (hundreds < .2) {
    const ones = remainder - 10;
    return romanNumerals[10] + romanNumerals[ones];
  } else if (hundreds >.2 && hundreds < .4) {
    const tensModulo = remainder % 10;
    return romanNumerals[10].repeat(2) + romanNumerals[tensModulo]
  } else if (hundreds >= .4 && hundreds < .5) {
    const fourtyModulo = remainder % 40;
    return romanNumerals[40] + romanNumerals[fourtyModulo];
  } else if (hundreds >=.5 && hundreds <.9) {
    const fiftyModulo = remainder % 50;

    if(fiftyModulo < 20) {
    return romanNumerals[50] + romanNumerals[10] + romanNumerals[fiftyModulo % 10];
    }
    else if(fiftyModulo > 20){
      return romanNumerals[50] + romanNumerals[10].repeat(fiftyModulo / 10) +   romanNumerals[fiftyModulo % 10];
    }

  } else if (hundreds >= .9 && hundreds <= 1 ) {
    const ninetyModulo = remainder % 90;
    return romanNumerals[90] + romanNumerals[ninetyModulo];
  } else if (hundreds > 5 && hundreds < 6 ) {
    const fiveHunModulo = num % 500;
    return romanNumerals[500]  + romanNumerals[fiveHunModulo];
  } else if (hundreds >6 && hundreds < 9 ) {
    const fiveRemainder = (num % 500)/100;
    const hundredsRemainder = Math.floor(fiveRemainder);
    let tens;

      if (remainder < 50) {
        tens = remainder % 40;
        return romanNumerals[500] + romanNumerals[100].repeat(hundredsRemainder) + romanNumerals[40] + romanNumerals[tens];
      } else if (remainder > 90) {
        tens = remainder % 90;
        return romanNumerals[500] + romanNumerals[100].repeat(hundredsRemainder) + romanNumerals[90] + romanNumerals[tens];
      }
  } else if (num > 1000 && remainder < 10) {
    return romanNumerals[1000] + romanNumerals[remainder]
  } else if (num > 1000 && remainder > 10) {
    const thousands = Math.floor(hundreds/10);
    let tens
    let ones;

    if(remainder < 40 && remainder > 10) {
      ones = remainder % 10;
      tens = Math.floor(remainder/10);
      return romanNumerals[1000].repeat(thousands) +
        romanNumerals[10].repeat(tens) +
        romanNumerals[ones];
    } else if (remainder > 40 &&  remainder < 90) {
      tens = Math.floor(remainder % 50);
      ones = Math.floor(tens % 10)
      const tensRemainder = Math.floor(tens / 10);
      return romanNumerals[1000].repeat(thousands) + romanNumerals[50] + romanNumerals[10].repeat(tensRemainder) + romanNumerals[ones];
    } else if (remainder >= 90){
      const hunPlace = Math.floor(((num / 1000) - Math.floor(num/1000)) * 1000) - remainder;
      ones = Math.floor(remainder % 90);
      tens = remainder - ones;
      return romanNumerals[1000].repeat(thousands) + romanNumerals[hunPlace] + romanNumerals[tens]+ romanNumerals[ones];
    }
  }
  }



  convertToRoman(3077);