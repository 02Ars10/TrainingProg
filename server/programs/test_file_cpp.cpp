#include <iostream>
#include <cmath>
#include <omp.h>

using namespace std;

double f(double x) {
    return sin(x);
}

int main() {
    int n = 10000000;
    double a = 0.0, b = M_PI;
    double h = (b - a) / n;
    double sum = 0.0;

    double startTime = omp_get_wtime();

#pragma omp parallel for reduction(+:sum)
    for (int i = 0; i < n; i++) {
        double x = a + (i + 0.5) * h;
        sum += f(x) * h;
    }

    double endTime = omp_get_wtime();

    cout << "The integral of sin(x) from 0 to pi is " << sum << endl;
    cout << "Elapsed time: " << endTime - startTime << " seconds" << endl;

    return 0;
}
