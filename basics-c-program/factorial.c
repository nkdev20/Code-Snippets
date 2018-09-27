main()
{
    unsigned  long long factorial = 1 ;
    int no, i;
    printf("Enter a positive no");
    scanf("%d", &no);

    if(no < 0){
        printf("Factorial of no cannot be negative");
    } else {
        for(i=1; i<=no; i++)
        {
            factorial = factorial*i;
        }
        printf("The factorial of the no %d is %lllu", no, factorial);
    }

}
