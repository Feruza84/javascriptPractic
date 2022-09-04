// 1-topshiriq.
// 1 dan n gacha bo’lgan sonlar orasida faqat juft sonlarni consolega chiqaradigan funksiya yarating. n funksiyaga parameter sifatida beriladi.

// function juftSonlar(n) {
//   for (let i = 0; i < n; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
//     juftSonlar(1500)
// 2-topshiriq
//  1225 ga qoldiqsiz bo’linadigan dastlabki *n* ta sonni topuvchi funksiya yarating. *n funksiyaga parameter sifatida beriladi.*
// function findnumber(n) {
//     for (let i=0; i<n*1225; i++) {
//         console.log(i);
//     }
//     }
// findnumber(10)

// 3-topshiriq
// Raqamlarni yuqoridagi kabi uchburchak shaklida chiqaradigan dastur tuzing. 
// let str ="";
// function triangle(n) {
//     for (let i = 1; i <= n; i++) {
//     str = str + " " + i;
//     console.log(str);
//   }
// }
// triangle(15)

// 4-topshiriq
// funksiya yarating. funksiya const nums = [23,17,19,41,25] arrayning quyidagi qiymalari yig'indisini chiqarib bersin/
// const nums = [23,17,19,41,25];

// function sumOfArray(numbers) {
//     let sum = 0;
//     for (let i =0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }
// console.log(sum);
// }

// sumOfArray(nums)

// masala bajarilishiga izoh
// i = 0; sum = 0 + numbers[0] = 23;
// i = 1; sum = 23 + numbers[1] = 23+17=40;
// i = 2; sum = 40 + numbers[2] = 40+19=59;
// i = 3; sum = 59 + numbers[3] = 59+41=100;
// i = 4; sum = 100 + numbers[4] = 100+25=125;

// 5-topshiriq quyidagi raqamlar yig'indisini toping 2345 ya'ni 2+3+4+5;

// const n = 234586934589712365; 

// function sumOfDigits(n) {
// let sum = 0;
// n = n.toString();
// for (let i = 0; i < n.length; i++) {
//     sum = sum + parseInt(n[i]);
// }
// console.log(sum);
// }
// sumOfDigits(n)
// izoh sum = sum +parseInt(n[i]);
// i = 0; sum = 0+ parseInt(n[0])=0+1=1;
// i = 1; sum = 1+ parseInt(n[0])=1+2=3;
// i = 2; sum = 3+ parseInt(n[0])=3+3=6;
// raqam oxirigacha shu tartibda hisoblandi

// 6-topshiriq 2ta arraydagi umumiy elementlarini SVGAnimatedLengthList

const nums1 = [23,17,19,81,45,41];
const nums2 = [17,3,19,81,45,25,26,41];

function commonElements (nums1, nums2) {
    let count = 0;

    for (let i =0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                count++;
                console.log(nums1[i]);
            }
        }
    }
    return count;
}

console.log("Umumiy elementlar soni: ", commonElements(nums1,nums2));