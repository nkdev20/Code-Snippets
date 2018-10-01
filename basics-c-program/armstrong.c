#include<math.h>

main()
{
    int no, noOfDigits=0, originalNumber, sumOfSquares=0,rem;
    printf("Enter a no");
    scanf("%d", &no);
    originalNumber = no;

    while(originalNumber != 0){
        originalNumber /= 10;
        noOfDigits++;
    }
    originalNumber = no;
    while(no != 0){
        rem = no%10;
        sumOfSquares = sumOfSquares + pow(rem, noOfDigits);
        no/=10;
    }

    (sumOfSquares == originalNumber)?printf("no is armstrong"):printf("No is not armstrong");
}
