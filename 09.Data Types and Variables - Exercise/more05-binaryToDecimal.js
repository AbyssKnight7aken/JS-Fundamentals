function binaryToDecimal(binaryNumber) {

    let decimal = parseInt(binaryNumber, 2);
    console.log(decimal);

}

binaryToDecimal(00001001)
binaryToDecimal(11110000)

//    How to convert binary to decimal
// For binary number with n digits:

// dn-1 ... d3 d2 d1 d0

// The decimal number is equal to the sum of binary digits (dn) times their power of 2 (2n):

// decimal = d0×20 + d1×21 + d2×22 + ...

// Example
// Find the decimal value of 1110012:

// binary number:	1	1	1	0	0	1
// power of 2:  	2^5	2^4	2^3	2^2	2^1	2^0
// 1110012 = 1*2^5+1*2^4+1*2^3+0*2^2+0*2^1+1*2^0 = 5710