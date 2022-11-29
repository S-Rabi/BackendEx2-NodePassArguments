# Star Wrapper

⭐ Lass Sterne in deinem Terminal erscheinen! ⭐

## Was du tun wirst

Du wirst eine CLI-Anwendung schreiben, die eine Reihe von Sternen vor und nach einer Zeicheneingabe erscheinen lässt.

Dieses Programm sollte 2 Argumente in der folgenden Reihenfolge akzeptieren;

- **number**: die Anzahl der Sterne, die in jeder Reihe gedruckt werden sollen
- **string**: die Zeichenkette, die in die Sternreihen eingeschlossen werden soll

### Beispiel

###### Befehl
```bash
$ node solution.js 12 Sonnenschein
```

###### Antwort
```bash
************
Sonnenschein
************
```

## Aufgaben

### Aufgabe 1

1. Erstelle die Datei `stars.js`.
2. Schreibe in diese Datei eine Funktion, die 2 Argumente benötigt;
   - **number** die Zeichenkette
   - **string** die Zeichenkette

### Aufgabe 2

1. Gib innerhalb deiner Funktion mit `console.log()` 3 Textzeilen aus;

   - **Zeile 1** - Es sollte eine Reihe von Sternen sein - die Anzahl der Sterne muss der Anzahl entsprechen, die du in die Funktion eingegeben hast
   - **Zeile 2** - Der Text
   - **Zeile 3** - Dasselbe wie in Zeile 1

2. Wenn keine **number** an die Funktion übergeben wird, sollte die Funktion **10** als Standardzahl verwenden
3. Wenn keine **string** an die Funktion übergeben wird, sollte die Funktion **"hi"** als Standardstring verwenden
4. Exportiere deine Funktion

## Aufgabe 3

1. Erstelle die Datei `solution.js`.
2. Importiere die Funktion, die du in `stars.js` erstellt hast
3. Lies die Argumente aus dem Terminal mit `process.argv` und führe die Funktion aus, die du gerade importiert hast, indem du die Argumente übergibst

## Aufgabe 4

Teste dein Programm im Terminal, indem du den Befehl

```bash
node solution.js 12 Sonnenschein
```
