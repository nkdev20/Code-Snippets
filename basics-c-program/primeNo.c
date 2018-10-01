main()
{
    int n, flag=0,i;
    printf("Enter positive no");
    scanf("%d", &n);
    for(i =2 ;i<n/2; i++)
    {
        if(n%i == 0){
            flag = 1;
            break;
        }
    }

    if(flag == 0){
        printf("No is prime");
    } else {
        printf("No is not prime");
    }

}
