main()
{
    int count=0,n;
    printf("Enter a no");
    scanf("%d", &n);

    while(n != 0 )
    {
        n/=10;
        count++;
    }
    printf("The no of digits are %d", count);
}
