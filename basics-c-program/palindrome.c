main()
{
    int no, reversedNo=0, originalNo, rem;
    printf("Enter a no\n");
    scanf("%d", &no);
    originalNo = no;
    while(no!=0)
    {
        rem = no % 10;
        reversedNo = reversedNo * 10 + rem;
        no /= 10;
    }

    (reversedNo == originalNo) ? printf("No is palindrome") : printf("No is  not palindrome");

}
