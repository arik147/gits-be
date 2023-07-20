# gits-be

Analisis langkah-langkah operasi program:

1. Inisialisasi stack kosong: O(1)
2. Inisialisasi map berisi pasangan karakter bracket: O(1)
3. Looping sebanyak panjang string (n):
    - Jika current karakter adalah bracket terbuka ``` '(', '{', atau '[' ```, maka push ke stack: O(1)
    - Jika current karakter adalah bracket tertutup ``` ')', '}', atau ']' ```, maka pop dari stack dan cek apakah pasangan bracket terbuka terakhir: O(1)
    - Jumlah operasi dalam loop adalah O(n) dengan n adalah panjang string.
      
Karena langkah-langkah dalam loop berjalan pada O(1), dan jumlah operasi dalam loop adalah O(n), maka kompleksitas waktu dari fungsi **isBalancedBracket()** adalah **O(n)**.

Worst Case : Harus menyimpan semua karakter pada string ke dalam stack, yang berarti penggunaan ruang akan proporsional dengan panjang string.

Jadi, kompleksitas waktu dan ruang dari koding tersebut adalah **O(n)**, di mana n adalah panjang string input.
