#include <iostream>
#include <vector>
using namespace std;

// making a function for calculating the subsequence
void calculateSubsequence(int arr[], int start, int end, vector<int> &temp, vector<vector<int>> &answer)
{
    // base case
    if (start == end)
    {
        answer.push_back(temp);
        return;
    }
    // Not included
    calculateSubsequence(arr, start + 1, end, temp, answer);

    // included
    temp.push_back(arr[start]);
    calculateSubsequence(arr, start + 1, end, temp, answer);
    temp.pop_back();
}

int main()
{

    int arr[] = {3, 4, 5};
    vector<vector<int>> answer;
    vector<int> temp;
    calculateSubsequence(arr, 0, 3, temp, answer);

    for (int i = 0; i < answer.size(); i++)
    {
        for (int j = 0; j < answer[i].size(); j++)
        {
            cout << answer[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}