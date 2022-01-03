# web2-lab3

- interpolation/one-way binding - Da, `src/components/ShoppingList.vue, :2`
- two-way binding - Da, `src/components/CurrConverter.vue, :14, :15`
- methods - Da, `src/components/CurrConverter.vue, :43`
- computed properties - Da, `src/views/List.vue, :65`
- barem jedan scoped style - Da, `src/components/CurrConverter.vue, :54`
- koristiti barem jedan lifecycle hook - Da, `src/components/List.vue, :90`
- routing (više stranica) - Da, `src/router/index.js`
  - use history mode, aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i heroku-nesto.com/stranica1, heroku-nesto.com/stranica2)
  - dinamičko usmjeravanje s 404 stranicom ("catch all") - Da, `src/router/index.js, :19`
- (barem) dvije komponente - Da, `src/components/**`
  - komponenta bez stanja, koristiti properties - Da, `src/components/ShoppingItem.vue`
  - komponenta sa stanjem - Da, `src/view/List.vue`
- barem jedna komponenta mora emitirati barem jedan event - Da, `src/components/ShoppingItem.vue`
- store - Da, `src/store/index.js` i `src/components/Login.vue`
- asinkroni dohvat podataka s backenda, možete: - Da, `src/views/Todo.vue, :65`
  - koristiti Firebase ili Back4App, Mocky, itd.
  - vlastiti storage, ili
  - možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis
  - ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
