#include <iostream>
#include <vector>
using namespace std;

void print(int arr[], int index, int n, int sum, vector<int> &ans)
{
    // base case
    if(index == n)
    {
        ans.push_back(sum);
        return;
    }

    
    // Not included
    print(arr, index + 1, n, sum, ans);
    // Included
    print(arr, index + 1, n, sum + arr[index], ans);
}

int main() {

    // Subset sum problem 
    int arr[] = {3, 4, 5};
    // I will basically store all the subset sums inside this vector ans.
    vector<int> ans;
    print(arr, 0, 3, 0, ans);
    for(int i = 0; i < ans.size(); i++) 
    {
        cout << ans[i] << endl;
    }
    return 0;
}