// Organiza a array em ordem alfabética crescente 

frutas = ['Maçã', 'Banana', 'Abacaxi', 'Morango', 'Caju']
frutas.sort()

// Inverte a ordem da array 

frutas = ['Maçã', 'Banana', 'Abacaxi', 'Morango', 'Caju']
frutas.reverse()

// Divide a string em uma array de strings

texto = 'Banana verde com sardinha'
textosplit = texto.split(' ')

// Junta duas string ou arrays em uma única variável

str1 = ('Rejeite sua humanidade ')
str2 = ('retorne a macaco')
str3 = str1.concat(str2)

// Recorta os objetos em um intervalo de uma array e adiciona a outra

peixes = ['Tilapia', 'Lambari', 'Truta', 'Bagre', 'Cuiuiu']
peixesslice = peixes.slice(1, 4)

// Adiciona elementos na posição selecionada da array

peixes = ['Tilapia', 'Lambari', 'Truta', 'Bagre', 'Cuiuiu']
peixes.splice(2, 0, 'Poraquê', 'Pirarucu')