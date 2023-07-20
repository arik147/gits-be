# GITS Internship - Problem Solving Test (BE)

## Arik Rizki Akbar

Analisis langkah-langkah operasi program **3. Balanced Bracket**:

1. Inisialisasi stack kosong: O(1)
2. Inisialisasi map berisi pasangan karakter bracket: O(1)
3. Looping sebanyak panjang string (n):
    - Jika current karakter adalah bracket terbuka ``` '(', '{', atau '[' ```, maka push ke stack: O(1)
    - Jika current karakter adalah bracket tertutup ``` ')', '}', atau ']' ```, maka pop dari stack dan cek apakah pasangan bracket terbuka terakhir: O(1)
    - Jumlah operasi dalam loop adalah O(n) dengan n adalah panjang string.
      
Karena langkah-langkah dalam loop berjalan pada O(1), dan jumlah operasi dalam loop adalah O(n), maka kompleksitas waktu dari fungsi **isBalancedBracket()** adalah **O(n)**.

Worst Case : Harus menyimpan semua karakter pada string ke dalam stack, yang berarti penggunaan ruang akan proporsional dengan panjang string.

Jadi, kompleksitas waktu dan ruang dari koding tersebut adalah **O(n)**, di mana n adalah panjang string input.

### Screenshot Hasil Output

## 1. A000124 of Sloane’s OEIS
   ![soal1](https://github.com/arik147/gits-be/assets/99251032/2a101ae3-9efe-403a-b921-de0db905959c)

## 2. Dense Ranking
   ![soal2](https://github.com/arik147/gits-be/assets/99251032/b57fb1a3-ef79-4e11-b5b5-98ed8be2797e)

## 3. Balanced Bracket
   ![soal3](https://github.com/arik147/gits-be/assets/99251032/d1bfd13f-c967-4f52-b688-ebe36ebd04e7)
