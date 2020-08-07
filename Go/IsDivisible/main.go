package main

import "fmt"

func isDivisible(n, x, y int) bool {
	if n%x == 0 && n%y == 0 {
		return true
	}
	return false
}

// Best Practice
// func isDivisible(n, x, y int) bool {
//     return n % x == 0 && n % y == 0
// }

func main() {
	fmt.Println(isDivisible(12, 3, 4))
}
