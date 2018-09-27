main()
{
    int number1, number2, sum=0, noOfTerms, count=0;
    printf("Enter first 1st nos");
    scanf("%d", &number1);
    printf("Enter second no");
    scanf("%d", &number2);
    printf("Enter no of terms");
    scanf("%d", &noOfTerms);
    printf("%d %d ", number1, number2);
    while(count < noOfTerms-2)
    {
        sum = number1 + number2;
        printf("%d ", sum);
        number1 = number2;
        number2 = sum;
        count++;
    }
}
