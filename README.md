# Chatbot Explorador de Podcasts

Seguramente te haz enterado que son los Podcasts, pero por si no, los podcasts son una serie de episodios grabados en audio y transmitidos en alguna plataforma digital, abordando muchos temas de interes. 

Si acaso eres un apasionado de la programación y el desarrollo web en general, te invito a que rapidamente en cuestión de minutos puedas entablar una conversación con Enzo y el te recomandara algunas podcasts para que puedas disfrutar de este rico contenido.


//TODO: Instalar Playwright
// 

### Paso 1. Iniciar proyecto Node JS

```node
npm init -y
```
### Paso 2. Instalar playwright

Como dependencia de desarrollo:

```node
npm i -D @playwright/test
```

```node
npx playwright install
```


### Paso 4. Ejecutar ejemplo de prueba

```
npx playwright test
```

Playwright acaba de ejecutar una prueba con el navegador Chromium, sin cabeza. Digámosle que use un navegador con encabezado:

```
npx playwright test --headed
```

Ejecutar con un navegador especifico:

```
npx playwright test --project=chromium
```

Ejecutar simple archivo de prueba

```
npx playwright test tests/example.spec.ts --headed
```


