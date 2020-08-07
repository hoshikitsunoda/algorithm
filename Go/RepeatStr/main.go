package main

import (
	"fmt"
	"strings"
)

func repeatStr(repetitions int, value string) string {
	return strings.Repeat(value, repetitions)
}

func main() {
	fmt.Println(repeatStr(4, "a"))
	fmt.Println(repeatStr(3, "hello "))
}
