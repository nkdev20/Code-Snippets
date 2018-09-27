void swap(int *, int *);
main()
{
    int a, b;
    printf("Enter a");
    scanf("%d", &a);
    printf("\nEnter b");
    scanf("%d", &b);
    swap(&a, &b);
    printf("Swpapped vlaues of a=%d and b=%d", a, b);

}

void swap(int *x , int *y)
{
    int temp;
    temp = *x;
    *x = *y;
    *y = temp;
}
