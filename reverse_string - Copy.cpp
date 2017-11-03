#include<iostream>

#include<string.h>

#include<stdio.h>

using namespace std;
void *reverse(char *st)
{
	int len=0,sublen=0,index=0,initialcounter=0;
	len= strlen(st);
	while(len>index)
	{
		initialcounter=index;
		for(;st[index]!=' ';index++)
		{
			if(index+1==len)
			{
				index++;
				break;
			}
		}
		sublen=index-1;
		for(int j=sublen;j>=initialcounter;j--)
		{
			cout<<st[j];
		}
		cout<<" ";
		index++;
	}
}
int main()
{
	char st[50];
	cout<<"enter string";
	gets(st);
	reverse(st);
	return 0;
}
