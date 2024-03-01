## INICIAR O PROJETO
#### Clone o repositorio
```bash
    git clone https://github.com/MarceloAugusto33/component-pokemon-react.git
```

Acesse a pasta
```bash
    cd component-pokemon-react
```

Instale as dependencias
```bash
    npm install
```

Roda a aplicação
```bash
    npm run
```

Opção 2: React Pokedéx
Objetivo: Codificar um componente funcional simples que consuma a API Pokedex para buscar um Pokemon pelo nome e exibir quantas habilidades ele tem, no formato do JSON abaixo

Requisitos
- O componente precisa renderizar um input e um botão [ x ]
```html
    <div className="input-wrapper">
        <input
            type="text"
            id='input-pokemon'
            required
            onChange={e => setNamePokemon(e.target.value)}
        />
        <label 
            htmlFor="input-pokemon" 
            id='label-pokemon'>
            Nome do Pokemon
        </label>
    </div>

    <button
        className='bnt-get-pokemon'
        onClick={handleGetPokemon}
    >
        <FaSearch />
        <span>BUSCAR</span>
    </button>
```
- O componente não deve realizar a requisição caso o valor do input seja vazio [ x ]
```javascript
    if (!namePokemon) {
        setPokemonData(null)
        return setAlertError("Campo vazio")
    }
```

- O componente precisa exibir o nome do Pokemón e a quantidade de habilidades em um texto centralizado, ex: Pokemón: snorlax - Habilidades: 2 [ x ]
```html
    <h2>Pokemon: {pokemonData.name} - Habilidades: {pokemonData.abilities.length}</h2>

```
- O componente deve exibir as habilidades em uma lista HTML [ x ]
```html
    <ul>
        {pokemonData.abilities.map((abilities) => (
            <li key={abilities.slot}>{abilities.ability.name}</li>
        ))}
    </ul>

```


- O componente deve tratar os HTTP STATUS CODE: 200 se o pokemón foi localizado e 404 se o pokemón não for localido na pokedéx. [ x ]

```javascript
    try {
        const result = await getApiPokemon(namePokemon.toLowerCase());

        if (result.statusCode === 200) {
            setAlertError("")
            return setPokemonData(result.data)
        } else if (result.statusCode === 404) {
            setPokemonData(null)
            return setAlertError(result.message)
        }
    }
    ...
    ...
```


