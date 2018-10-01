int power(int base , int n)
{
    int product;
    for(product = 1; n >0 ; n--)
    {
        product = product *base;
    }
     return product;
}

void main(void)
{

    int value = power(2, 3);
    printf("%d", value);
}
