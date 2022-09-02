
Source code for the [Rust Tauri Introduction Video](https://www.youtube.com/watch?v=kRoGYgAuZQE&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q)

## Setup

```sh
npm install
```

## Run (Development)

```sh
# terminal 1 (UI localhost for hot-reload)
npm run ui-dev

# terminal 2 (for the Rust/App hot-reload)
npm run tauri dev
```
# ATTIVAZIONE TAURI

##PRODUZIONE
		
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



# Run Production
```sh
# on the same terminal, for the frontend (translate typescript to javascript)
npm run ui-build
npm run tauri dev
```

## Database Pool as state

Rather to have a simple Mutex for the state, database can be used. 

```
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