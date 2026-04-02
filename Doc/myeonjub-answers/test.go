package main

import (
	"fmt"
	"sync"
	"time"
)

func job(id int, d time.Duration) {
	fmt.Printf("[%d] 시작\n", id)
	time.Sleep(d)
	fmt.Printf("[%d] 끝\n", id)
}

func main() {
	var wg sync.WaitGroup

	fmt.Println("--- 고루틴 3개 동시에 ---")
	for i := 1; i <= 3; i++ {
		wg.Add(1)
		go func(n int) {
			defer wg.Done()
			job(n, time.Second)
		}(i)
	}
	wg.Wait()
	fmt.Println("전부 끝")

	fmt.Println("\n--- 같은 일을 한 고루틴에서 순서대로 ---")
	job(1, time.Second)
	job(2, time.Second)
	job(3, time.Second)
	fmt.Println("전부 끝")
}