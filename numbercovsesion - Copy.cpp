#include<iostream>
#include<string.h>

using namespace std;

int main()
{
      int num,n1=0,n2=0;

	string ones[]= {"zero","one","two","three","four","five","six","seven","eight","nine","ten","elevan","twelve","thirteen","foruteen","fifteen","sixteen","seventeen","eighteen","nineteen"};

	string tens[]= {"twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninty"};

	cout<<"Enter the number:";
	cin>>num;

	if(num<0||num>=100)
      {
            cout<<"Out of range";
      }
	else if(num>=0&&num<20)
      {
            cout<<"Number is "<<ones[num];
      }
	else if(num>=20&&num<100)
      {
            n1=num/10;
            n2=num%10;
            cout<<"Number is "<<tens[n1-2]<<" "<<ones[n2];
      }
      else  cout<<"error";
      return 0;
}
