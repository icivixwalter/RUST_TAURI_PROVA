# Source code for the [Rust Tauri Introduction Video](https://www.youtube.com/watch?v=kRoGYgAuZQE&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q)

## Setup

```sh
npm install
```

## Run (Development)

per attivare il procedimento in debug occorre  attivare il server
locale con il terminale 1 e poi attivare il terminal 2 per il rust
/ap reload che in tempo reale visualizza le modifiche in HTML le due
drive si trova nel package.json vedi lo scripts

```sh
# terminal 1 (UI localhost for hot-reload) crea 1 terminale per  @attivare.il.server
npm run ui-dev

# terminal 2 (for the Rust/App hot-reload)crea un 2 terminale per @attivare.debug.developer 
npm
 run tauri dev
```bash

# ATTIVAZIONE TAURI


  
Per la produzione occorre eseguire due compilazioni, secondo
le direttive impostate nel file json
C:\Users\icivi\Downloads\rust-tauri-intro-main\rust-tauri-intro-main\package.json
In questo file ci sono degli script che possono essere
eseguiti in modo indipendente:
  a) "tauri": "tauri",
    b) "localhost": "node_modules\\.bin\\servor dist index.html 8080 --reload",
    c) "ui-build": "node_modules\\.bin\\rollup -c",
    d) "ui-dev": "node_modules\\.bin\\rollup -c & npm run localhost"
quello utilizzato per costruire l'eseguibile con il comando npm è la c) e la a)  

1) npm run ui-build
  che si trova nel package jason
  denominato ui-build permette la trazione di typescript
  che viene utilizzatto in sostituzione di javascript al fine
  di utilizzare i tipi di variabili che in javascript non esistono.
  In questo modo si evitano errori
2) npm tauri dev
     che costruisce il pacchetto exe il quale contiene tutto
  sia rust per il back-end e sia javascript, css e html per il front-end.
@ATTIVA.TAURI, @RUN.TAURI, @

## PRODUZIONE
# Run Production

```sh
# on the same terminal, for the frontend (translate typescript to javascript)
ca

PER COSTRUIRE L'ESEGUIBILE FINALE  @COSTRUIRE.EXE, @EXE.DA.COSTRUIRE
l'eseguibile fina ha bisogno di due operazione di costruzione la prima
serve per tradure type script in java script unendo nache css e html.
Il secondo comando costruisce il il rust + html completo nell'eseguibile.
path da posizionare:
C:\CASA\PROGRAMMI\RUST_TAURI\rust-tauri-intro-main

npn run tauri ui-build  primo comando per la costruzione realese - traduzione 
npn run tauri build     secondo comando per la costruzione realese
```

## Database Pool as state

Rather to have a simple Mutex for the state, database can be used.

```bash
sqlx = { version = "0.6", features = [ "runtime-tokio-rustls", "postgres" ] }
```

```rs
let con_string = format!("postgres://postgres:postgres@localhost/postgres");
let db = PgPoolOptions::new()
 .max_connections(5)
 .connect(&con_string)
 .await
 .expect("Cannot create PgPool");

let arc_db = Arc::new(db);
```

Then

```rs
tauri::Builder::default()
 .manage(arc_db)
```
