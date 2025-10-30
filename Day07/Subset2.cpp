#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void backtrack(vector<int> &arr, int start, vector<int> &temp, vector<vector<int>> &answer)
{
    answer.push_back(temp); // add current subset

    for (int i = start; i < arr.size(); i++)
    {
        // skip duplicates
        if (i > start && arr[i] == arr[i - 1]) continue;

        temp.push_back(arr[i]);
        backtrack(arr, i + 1, temp, answer);
        temp.pop_back();
    }
}

int main()
{
    vector<int> arr = {1, 2, 2};
    sort(arr.begin(), arr.end());

    vector<vector<int>> answer;
    vector<int> temp;

    backtrack(arr, 0, temp, answer);

    for (auto &subset : answer)
    {
        for (int num : subset)
        {
            cout << num << " ";
        }
        cout << endl;
    }
}
