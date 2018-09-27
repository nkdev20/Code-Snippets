main()
{
    int totalNoOfRows=4, rowNo, spaceCount=0, starCount=0;

    for(rowNo = 1; rowNo <= totalNoOfRows; rowNo++)
    {
        spaceCount = totalNoOfRows - rowNo;
        starCount = 2*rowNo - 1;
        for(int j=0; j < spaceCount; j++)
        {
            printf(" ");
        }
        for( int k=0 ;k < starCount; k++)
        {
            printf("*");
        }
        printf("\n");

    }
}
